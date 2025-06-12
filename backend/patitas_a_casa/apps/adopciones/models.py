from django.db import models
from django.utils import timezone
from patitas_a_casa.apps.usuarios.models import Usuario, Albergue

class PerroEnAdopcion(models.Model):
    TAMAÑO_CHOICES = [
        ('P', 'Pequeño'),
        ('M', 'Mediano'),
        ('G', 'Grande'),
    ]
    
    SEXO_CHOICES = [
        ('M', 'Macho'),
        ('H', 'Hembra'),
    ]
    
    nombre = models.CharField(max_length=100)
    edad = models.PositiveIntegerField()
    tamaño = models.CharField(max_length=1, choices=TAMAÑO_CHOICES)
    sexo = models.CharField(max_length=1, choices=SEXO_CHOICES)
    raza = models.CharField(max_length=100)
    descripcion = models.TextField()
    foto = models.ImageField(upload_to='adopciones/')
    esterilizado = models.BooleanField(default=False)
    vacunas = models.BooleanField(default=False)
    disponible = models.BooleanField(default=True)
    fecha_publicacion = models.DateTimeField(default=timezone.now)
    
    # Relaciones
    usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE, null=True, blank=True)
    albergue = models.ForeignKey(Albergue, on_delete=models.CASCADE, null=True, blank=True)
    
    class Meta:
        verbose_name = "Perro en adopción"
        verbose_name_plural = "Perros en adopción"
        ordering = ['-fecha_publicacion']
    
    def __str__(self):
        return f"{self.nombre} - {self.get_sexo_display()} - {self.raza}"

class SolicitudAdopcion(models.Model):
    ESTADO_CHOICES = [
        ('P', 'Pendiente'),
        ('A', 'Aprobada'),
        ('R', 'Rechazada'),
    ]
    
    perro = models.ForeignKey(PerroEnAdopcion, on_delete=models.CASCADE)
    solicitante = models.ForeignKey(Usuario, on_delete=models.CASCADE)
    motivo = models.TextField()
    experiencia = models.TextField()
    fecha_solicitud = models.DateTimeField(default=timezone.now)
    estado = models.CharField(max_length=1, choices=ESTADO_CHOICES, default='P')
    
    class Meta:
        verbose_name = "Solicitud de adopción"
        verbose_name_plural = "Solicitudes de adopción"
        ordering = ['-fecha_solicitud']
    
    def __str__(self):
        return f"Solicitud para {self.perro.nombre} por {self.solicitante.nombre}"