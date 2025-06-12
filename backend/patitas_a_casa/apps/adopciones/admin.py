from django.contrib import admin
from .models import PerroEnAdopcion, SolicitudAdopcion

@admin.register(PerroEnAdopcion)
class PerroEnAdopcionAdmin(admin.ModelAdmin):
    list_display = ('nombre', 'edad', 'get_tamaño_display', 'get_sexo_display', 'raza', 'disponible')
    list_filter = ('tamaño', 'sexo', 'disponible', 'esterilizado', 'vacunas')
    search_fields = ('nombre', 'raza', 'descripcion')

@admin.register(SolicitudAdopcion)
class SolicitudAdopcionAdmin(admin.ModelAdmin):
    list_display = ('perro', 'solicitante', 'get_estado_display', 'fecha_solicitud')
    list_filter = ('estado', 'fecha_solicitud')
    search_fields = ('perro__nombre', 'solicitante__nombre', 'motivo')