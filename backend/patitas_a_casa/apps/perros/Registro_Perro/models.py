from django.db import models
from django.utils import timezone
from patitas_a_casa.apps.usuarios.models import Usuario

class PerroPerdido(models.Model):
    SEXO_CHOICES = [
        ('male', 'Macho'),
        ('female', 'Hembra'),
    ]
    
    TAMAÑO_CHOICES = [
        ('small', 'Pequeño (menos de 10 kg)'),
        ('medium', 'Mediano (10-25 kg)'),
        ('large', 'Grande (25-45 kg)'),
        ('xlarge', 'Muy grande (más de 45 kg)'),
    ]
    
    PELAJE_CHOICES = [
        ('short', 'Corto'),
        ('medium', 'Mediano'),
        ('long', 'Largo'),
        ('curly', 'Rizado'),
        ('wire', 'Alambre'),
        ('hairless', 'Sin pelo'),
    ]
    
    ESTADO_REGISTRO_CHOICES = [  # Cambiado el nombre para evitar conflicto
        ('activo', 'Activo'),
        ('encontrado', 'Encontrado'),
        ('cerrado', 'Cerrado'),
    ]
    # Paso 1
    nombre = models.CharField(max_length=100)
    fecha_hora_perdida = models.DateTimeField(default=timezone.now)
    
    # Paso 2
    raza = models.CharField(max_length=100)
    sexo = models.CharField(max_length=6, choices=SEXO_CHOICES)
    tamaño = models.CharField(max_length=20) 
    edad = models.CharField(max_length=50)  # Cambiado a CharField para formato libre
    color_principal = models.CharField(max_length=50)
    tipo_pelaje = models.CharField(max_length=10, choices=PELAJE_CHOICES, blank=True)
    descripcion = models.TextField(max_length=200)
    
    # Paso 3
    identificadores = models.CharField(max_length=200, blank=True)  # Guardar como JSON o texto separado por comas
    detalles_identificador = models.TextField(blank=True)
    vacunado = models.CharField(max_length=10, blank=True)  # 'yes', 'no', 'unknown'
    vacunas = models.TextField(blank=True)  # Guardar como JSON o texto separado por comas
    problemas_salud = models.TextField(blank=True, max_length=200)
    
    # Paso 4
    latitud = models.FloatField()
    longitud = models.FloatField()
    codigo_postal = models.CharField(max_length=5)
    estado = models.CharField(max_length=100)
    ciudad = models.CharField(max_length=100)
    colonia = models.CharField(max_length=100)
    calle = models.CharField(max_length=200)
    numero_exterior = models.CharField(max_length=20, blank=True)
    detalles_ubicacion = models.TextField(blank=True)
    
    # Paso 5
    nombre_contacto = models.CharField(max_length=100)
    telefono_contacto = models.CharField(max_length=10)
    email_contacto = models.EmailField(blank=True)
    metodo_contacto_adicional = models.CharField(max_length=100, blank=True)
    recompensa = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    
    # Metadata
    propietario = models.ForeignKey(Usuario, on_delete=models.CASCADE)
    fecha_registro = models.DateTimeField(auto_now_add=True)
    estado_registro = models.CharField(
        max_length=10, 
        choices=ESTADO_REGISTRO_CHOICES, 
        default='activo'
    ) 
    
    class Meta:
        ordering = ['-fecha_registro']
    
    def __str__(self):
        return f"{self.nombre} - {self.raza}"

class FotoPerroPerdido(models.Model):
    perro = models.ForeignKey(PerroPerdido, on_delete=models.CASCADE, related_name='fotos')
    imagen_base64 = models.TextField()  # Almacenamos directamente en base64
    es_principal = models.BooleanField(default=False)
    tipo_imagen = models.CharField(max_length=10)  # 'jpeg', 'png'
    fecha_subida = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        ordering = ['-es_principal', '-fecha_subida']