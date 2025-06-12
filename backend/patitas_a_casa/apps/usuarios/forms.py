from django import forms
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm, UserChangeForm
from .models import Usuario, Albergue
import re  
from django.core.exceptions import ValidationError

class RegistroForm(UserCreationForm):
    es_albergue = forms.BooleanField(
        required=False,
        widget=forms.HiddenInput(),
    )

    def clean_username(self):
        username = self.cleaned_data.get('username')
        if username:
            if not re.match(r'^[\w.@+-]+$', username):
                raise ValidationError(
                    "Ingrese un nombre de usuario válido. Puede contener letras, números y los caracteres @/./+/-/_"
                )
        return username

    def clean_email(self):
        email = self.cleaned_data.get('email')
        if email and Usuario.objects.filter(email=email).exists():
            raise ValidationError("Este email ya está registrado")
        return email

    class Meta:
        model = Usuario
        fields = ('email', 'username', 'first_name', 'last_name', 'phone', 'password1', 'password2')
        help_texts = {
            'username': 'Puede contener letras, números y @/./+/-/_',
        }

class AlbergueForm(forms.ModelForm):
    servicios = forms.MultipleChoiceField(
        choices=Albergue.SERVICIOS_CHOICES,
        widget=forms.CheckboxSelectMultiple,
        required=False
    )
    
    class Meta:
        model = Albergue
        fields = [
            'nombre', 'telefono', 'calle', 'num_ext', 'num_int', 
            'entidad', 'alcaldia', 'codigo_postal', 'referencias',
            'animales_actuales', 'capacidad_maxima', 'servicios', 'foto'
        ]
        
    def clean_servicios(self):
        return self.cleaned_data.get('servicios', [])

class LoginForm(AuthenticationForm):
    username = forms.CharField(label='Email o Username', widget=forms.TextInput(attrs={
        'placeholder': 'Ingrese su email o nombre de usuario'
    }))
    password = forms.CharField(label='Contraseña', widget=forms.PasswordInput(attrs={
        'placeholder': 'Ingrese su contraseña'
    }))

    error_messages = {
        'invalid_login': "Por favor ingrese credenciales válidas. Note que ambos campos pueden ser sensibles a mayúsculas.",
        'inactive': "Esta cuenta está inactiva.",
    }
    
class PerfilForm(UserChangeForm):
    phone = forms.CharField(
        label="Teléfono",
        max_length=15,
        required=False,
        widget=forms.TextInput(attrs={'class': 'form-control'})
    )
    
    class Meta:
        model = Usuario
        fields = ['first_name', 'last_name', 'email', 'phone']
        widgets = {
            'first_name': forms.TextInput(attrs={'class': 'form-control'}),
            'last_name': forms.TextInput(attrs={'class': 'form-control'}),
            'email': forms.EmailInput(attrs={'class': 'form-control'}),
        }
    
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        # Eliminamos el campo de contraseña que viene por defecto en UserChangeForm
        self.fields.pop('password')