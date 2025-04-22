from django.contrib.auth.models import AbstractUser
from django.db import models
from django.utils.translation import gettext_lazy as _

class Usuario(AbstractUser):
    email = models.EmailField(_('email address'), unique=True)
    phone = models.CharField(_('phone number'), max_length=15, blank=True)
    is_verified = models.BooleanField(_('verified'), default=False)
    is_albergue = models.BooleanField(_('albergue'), default=False)
    
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']
    
    def __str__(self):
        return self.email

    class Meta:
        verbose_name = _('user')
        verbose_name_plural = _('users')


class Albergue(models.Model):
    SERVICIOS_CHOICES = [
        ('vacunacion', 'Vacunación'),
        ('esterilizacion', 'Esterilización'),
        ('adopcion', 'Adopción'),
        ('rescate', 'Rescate'),
        ('estetica', 'Estética'),
        ('hospedaje', 'Hospedaje'),
    ]
    
    usuario = models.OneToOneField(Usuario, on_delete=models.CASCADE)
    nombre = models.CharField(max_length=255)
    telefono = models.CharField(max_length=15)
    calle = models.CharField(max_length=200)
    num_ext = models.CharField(max_length=20)
    num_int = models.CharField(max_length=20, blank=True, null=True)
    entidad = models.CharField(max_length=100)
    alcaldia = models.CharField(max_length=100)
    codigo_postal = models.CharField(max_length=5)
    referencias = models.TextField(blank=True)
    animales_actuales = models.PositiveIntegerField(default=0)
    capacidad_maxima = models.PositiveIntegerField()
    servicios = models.JSONField(default=list)  # Almacenará los servicios seleccionados
    foto = models.ImageField(upload_to='albergues/', blank=True, null=True)
    
    def __str__(self):
        return self.nombre