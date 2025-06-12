from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.views.generic import CreateView, ListView
from django.urls import reverse_lazy
from django.contrib import messages
from .models import SolicitudAdopcion, PerroEnAdopcion
from .forms import SolicitudAdopcionForm, PerroEnAdopcionForm
from patitas_a_casa.apps.usuarios.models import Usuario, Albergue

@login_required
def quiero_adoptar(request):
    perros = PerroEnAdopcion.objects.filter(disponible=True)
    return render(request, 'adopcion/quiero_adoptar.html', {'perros': perros})

@login_required
def dar_en_adopcion(request):
    if request.method == 'POST':
        form = PerroEnAdopcionForm(request.POST, request.FILES)
        if form.is_valid():
            perro = form.save(commit=False)
            if request.user.is_albergue:
                perro.albergue = Albergue.objects.get(usuario=request.user)
            else:
                perro.usuario = Usuario.objects.get(usuario=request.user)
            perro.save()
            messages.success(request, "¡Perro registrado para adopción exitosamente!")
            return redirect('adopciones:dar_en_adopcion')
    else:
        form = PerroEnAdopcionForm()
    return render(request, 'adopcion/dar_en_adopcion.html', {'form': form})

@login_required
def solicitar_adopcion(request, perro_id):
    perro = PerroEnAdopcion.objects.get(id=perro_id)
    if request.method == 'POST':
        form = SolicitudAdopcionForm(request.POST)
        if form.is_valid():
            solicitud = form.save(commit=False)
            solicitud.perro = perro
            solicitud.solicitante = Usuario.objects.get(usuario=request.user)
            solicitud.save()
            messages.success(request, "¡Solicitud de adopción enviada!")
            return redirect('adopciones:quiero_adoptar')
    else:
        form = SolicitudAdopcionForm()
    return render(request, 'adopcion/solicitar_adopcion.html', {'form': form, 'perro': perro})

class MisSolicitudesView(ListView):
    model = SolicitudAdopcion
    template_name = 'adopcion/mis_solicitudes.html'
    context_object_name = 'solicitudes'

    def get_queryset(self):
        return SolicitudAdopcion.objects.filter(solicitante__usuario=self.request.user)

class MisPerrosEnAdopcionView(ListView):
    model = PerroEnAdopcion
    template_name = 'adopcion/mis_perros_en_adopcion.html'
    context_object_name = 'perros'

    def get_queryset(self):
        if self.request.user.is_albergue:
            return PerroEnAdopcion.objects.filter(albergue__usuario=self.request.user)
        else:
            return PerroEnAdopcion.objects.filter(usuario__usuario=self.request.user)