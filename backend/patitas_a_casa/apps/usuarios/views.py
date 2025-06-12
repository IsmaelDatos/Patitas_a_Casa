from django.shortcuts import render, redirect
from django.contrib.auth import login, authenticate, logout
from django.contrib import messages
from .forms import RegistroForm, LoginForm, AlbergueForm, PerfilForm
from django.contrib.auth.views import LoginView
from django.urls import reverse_lazy
from django.db import transaction
from django.contrib.auth.decorators import login_required

def registro_view(request):
    if request.method == 'POST':
        user_form = RegistroForm(request.POST)
        es_albergue = request.POST.get('es_albergue') == 'on'
        
        if user_form.is_valid():
            try:
                with transaction.atomic():
                    user = user_form.save(commit=False)
                    user.is_albergue = es_albergue
                    user.save()
                    
                    if es_albergue:
                        albergue_form = AlbergueForm(request.POST, request.FILES)
                        if albergue_form.is_valid():
                            albergue = albergue_form.save(commit=False)
                            albergue.usuario = user
                            albergue.save()
                            messages.success(request, '¡Albergue registrado exitosamente!')
                        else:
                            messages.error(request, 'Error en el formulario de albergue')
                            return render(request, 'registro.html', {
                                'form': user_form,
                                'es_albergue': True
                            })
                    else:
                        messages.success(request, '¡Usuario registrado exitosamente!')
                    
                    login(request, user)
                    return redirect('usuarios:perfil_albergue' if es_albergue else 'usuarios:perfil_ciudadano')

            except Exception as e:
                messages.error(request, f'Ocurrió un error durante el registro: {str(e)}')
                return redirect('usuarios:registro')
        else:
            messages.error(request, 'Por favor corrija los errores en el formulario.')
            return render(request, 'registro.html', {
                'form': user_form,
                'es_albergue': es_albergue
            })

    return render(request, 'registro.html', {
        'form': RegistroForm(),
        'es_albergue': False
    })

def login_view(request):
    if request.method == 'POST':
        form = LoginForm(request, data=request.POST)
        if form.is_valid():
            username = form.cleaned_data.get('username')
            password = form.cleaned_data.get('password')
            user = authenticate(username=username, password=password)
            
            if user is not None:
                login(request, user)
                
                # Redirigir según el tipo de usuario (ahora usando el campo is_albergue)
                if user.is_albergue:
                    messages.success(request, f'¡Bienvenido albergue {user.username}!')
                    return redirect('usuarios:perfil_albergue')
                else:
                    messages.success(request, f'¡Bienvenido {user.first_name}!')
                    return redirect('usuarios:perfil_ciudadano')
            else:
                messages.error(request, 'Credenciales inválidas. Intente nuevamente.')
        else:
            messages.error(request, 'Por favor corrija los errores en el formulario.')
    else:
        form = LoginForm()
    
    return render(request, 'login.html', {
        'form': form,
        'next': request.GET.get('next', '')  # Para soportar redirección ?next=
    })

def logout_view(request):
    logout(request)
    return redirect('home')

class CustomLoginView(LoginView):
    template_name = 'login.html'
    def get_success_url(self):
        return reverse_lazy('usuarios:perfil_albergue' if self.request.user.is_albergue else 'usuarios:perfil_ciudadano')
    
def perfil_ciudadano(request):
    return render(request, 'perfil/perfil_ciudadano.html', {'user': request.user})

def perfil_albergue(request):
    return render(request, 'perfil/perfil_albergue.html', {'user': request.user})

@login_required
def editar_perfil(request):
    if request.method == 'POST':
        form = PerfilForm(request.POST, instance=request.user)
        if form.is_valid():
            form.save()
            return redirect('usuarios:perfil_ciudadano')
    else:
        form = PerfilForm(instance=request.user)
    return render(request, 'perfil/editar_perfil.html', {'form': form})