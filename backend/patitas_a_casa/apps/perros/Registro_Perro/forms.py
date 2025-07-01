from django import forms
from django.core.exceptions import ValidationError
from .models import PerroPerdido, FotoPerroPerdido
import json

class PerroPerdidoForm(forms.ModelForm):
    class Meta:
        model = PerroPerdido
        exclude = ['propietario', 'fecha_registro', 'estado_registro']
        widgets = {
            'fecha_hora_perdida': forms.DateTimeInput(attrs={'type': 'datetime-local'}),
            'descripcion': forms.Textarea(attrs={'rows': 3, 'maxlength': '200'}),
            'problemas_salud': forms.Textarea(attrs={'rows': 3, 'maxlength': '200'}),
        }
    
    def clean_identificadores(self):
        data = self.cleaned_data.get('identificadores')
        if data:
            return ','.join(data) if isinstance(data, list) else data
        return ''
    
    def clean_vacunas(self):
        data = self.cleaned_data.get('vacunas')
        if data:
            return ','.join(data) if isinstance(data, list) else data
        return ''

class FotoPerroPerdidoForm(forms.ModelForm):
    class Meta:
        model = FotoPerroPerdido
        fields = ['imagen_base64', 'tipo_imagen', 'es_principal']
    
    def clean_imagen_base64(self):
        data = self.cleaned_data.get('imagen_base64')
        try:
            # Validar que es base64 válido
            import base64
            base64.b64decode(data)
            return data
        except:
            raise ValidationError("Formato de imagen no válido")