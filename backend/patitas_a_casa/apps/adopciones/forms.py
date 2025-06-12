from django import forms
from .models import SolicitudAdopcion, PerroEnAdopcion

class PerroEnAdopcionForm(forms.ModelForm):
    class Meta:
        model = PerroEnAdopcion
        fields = ['nombre', 'edad', 'tamaño', 'sexo', 'raza', 'descripcion', 'foto', 'esterilizado', 'vacunas']
        widgets = {
            'descripcion': forms.Textarea(attrs={'rows': 4}),
        }
        labels = {
            'tamaño': 'Tamaño',
            'sexo': 'Sexo',
            'esterilizado': '¿Está esterilizado?',
            'vacunas': '¿Tiene todas sus vacunas?',
        }

class SolicitudAdopcionForm(forms.ModelForm):
    class Meta:
        model = SolicitudAdopcion
        fields = ['motivo', 'experiencia']
        widgets = {
            'motivo': forms.Textarea(attrs={'rows': 3, 'placeholder': '¿Por qué quieres adoptar este perro?'}),
            'experiencia': forms.Textarea(attrs={'rows': 3, 'placeholder': 'Describe tu experiencia con mascotas'}),
        }