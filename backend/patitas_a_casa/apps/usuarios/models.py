from django.contrib.auth.models import AbstractUser
from django.db import models
from django.utils.translation import gettext_lazy as _

class Usuario(AbstractUser):
    email = models.EmailField(_('email address'), unique=True)
    phone = models.CharField(_('phone number'), max_length=15, blank=True)
    address = models.CharField(_('address'), max_length=255, blank=True)
    is_verified = models.BooleanField(_('verified'), default=False)
    
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']
    
    def __str__(self):
        return self.email

    class Meta:
        verbose_name = _('user')
        verbose_name_plural = _('users')

class Albergue(models.Model):
    usuario = models.OneToOneField(Usuario, on_delete=models.CASCADE, related_name='albergue')
    nombre = models.CharField(max_length=255)
    telefono = models.CharField(max_length=15)
    direccion = models.TextField()
    capacidad = models.PositiveIntegerField()
    servicios = models.TextField(blank=True)
    foto = models.ImageField(upload_to='albergues/', blank=True, null=True)
    
    def __str__(self):
        return self.nombre