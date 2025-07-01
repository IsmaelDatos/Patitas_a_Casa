from django.views.generic import CreateView, FormView
from django.contrib.auth.mixins import LoginRequiredMixin
from django.http import JsonResponse
from .models import PerroPerdido, FotoPerroPerdido
from .forms import PerroPerdidoForm, FotoPerroPerdidoForm
import json

class RegistroPerroPerdidoView(LoginRequiredMixin, FormView):
    template_name = 'perdi_un_perro/registro_perro_perdido.html'
    form_class = PerroPerdidoForm
    
    def form_valid(self, form):
        perro = form.save(commit=False)
        perro.propietario = self.request.user
        
        # Procesar fotos en base64
        fotos_data = json.loads(self.request.POST.get('dogPhotosBase64', '[]'))
        perro.save()
        
        for i, foto_data in enumerate(fotos_data):
            FotoPerroPerdido.objects.create(
                perro=perro,
                imagen_base64=foto_data['base64'],
                tipo_imagen=foto_data['tipo'].split('/')[1],
                es_principal=(i == 0)
            )
        
        return JsonResponse({'success': True, 'id': perro.id})
    
    def form_invalid(self, form):
        errors = {f: e.get_json_data() for f, e in form.errors.items()}
        return JsonResponse({'success': False, 'errors': errors}, status=400)