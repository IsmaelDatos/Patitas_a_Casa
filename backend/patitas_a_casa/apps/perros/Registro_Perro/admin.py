# apps/perros/Registro_Perro/admin.py
from django.contrib import admin
from django.utils.html import format_html
from .models import PerroPerdido, FotoPerroPerdido


# ---------- INLINE DE FOTOS ----------
class FotoPerroPerdidoInline(admin.TabularInline):
    """
    Permite gestionar fotos dentro del admin de PerroPerdido.
    """
    model = FotoPerroPerdido
    extra = 1

    # Solo mostramos la preview y la fecha; ambos son de solo lectura.
    readonly_fields = ("imagen_preview", "fecha_subida")
    # Dejamos fuera `fecha_subida` del formulario para evitar FieldError.
    fields = ("imagen_preview", "es_principal", "tipo_imagen")

    def imagen_preview(self, obj):
        if obj.imagen_base64:
            return format_html(
                '<img src="data:image/{};base64,{}" style="max-height:100px;max-width:100px;" />',
                obj.tipo_imagen,
                obj.imagen_base64,
            )
        return "Sin imagen"

    imagen_preview.short_description = "Vista previa"


# ---------- ADMIN PRINCIPAL ----------
@admin.register(PerroPerdido)
class PerroPerdidoAdmin(admin.ModelAdmin):
    list_display = (
        "nombre",
        "raza",
        "sexo",
        "tamaño",              # se puede usar el identificador Unicode si tu modelo lo tiene así
        "estado_display",
        "ubicacion_resumen",
        "fecha_registro",
    )
    list_filter = (
        "estado_registro",      # ← corregido
        "sexo",
        "tamaño",
        "fecha_registro",
    )
    search_fields = ("nombre", "raza", "codigo_postal", "nombre_contacto")
    readonly_fields = ("fecha_registro", "mapa_preview", "estado_display")
    inlines = [FotoPerroPerdidoInline]

    # ---------- Fieldsets ----------
    fieldsets = (
        (
            "Información Básica",
            {
                "fields": (
                    "nombre",
                    "fecha_hora_perdida",
                    ("sexo", "tamaño", "edad"),
                    "raza",
                    ("color_principal", "tipo_pelaje"),
                    "descripcion",
                )
            },
        ),
        (
            "Identificación y Salud",
            {
                "fields": (
                    "identificadores",
                    "detalles_identificador",
                    ("vacunado", "vacunas"),
                    "problemas_salud",
                )
            },
        ),
        (
            "Ubicación",
            {
                "fields": (
                    "mapa_preview",
                    ("latitud", "longitud"),
                    "codigo_postal",
                    ("estado", "ciudad", "colonia"),
                    ("calle", "numero_exterior"),
                    "detalles_ubicacion",
                )
            },
        ),
        (
            "Contacto",
            {
                "fields": (
                    "nombre_contacto",
                    ("telefono_contacto", "email_contacto"),
                    "metodo_contacto_adicional",
                    "recompensa",
                )
            },
        ),
        (
            "Metadata",
            {
                "fields": (
                    "propietario",
                    "fecha_registro",
                    "estado_registro",   # ← corregido
                )
            },
        ),
    )

    # ---------- Métodos utilitarios ----------
    def estado_display(self, obj):
        """
        Muestra la etiqueta legible del estado.
        """
        return dict(PerroPerdido.ESTADO_REGISTRO_CHOICES).get(
            obj.estado_registro, obj.estado_registro
        )

    estado_display.short_description = "Estado"

    def ubicacion_resumen(self, obj):
        """
        Colonia y ciudad en una sola columna.
        """
        return f"{obj.colonia}, {obj.ciudad}"

    ubicacion_resumen.short_description = "Ubicación"

    def mapa_preview(self, obj):
        """
        Iframe con la ubicación del perro (solo lectura).
        """
        if obj.latitud and obj.longitud:
            return format_html(
                '<iframe width="100%" height="300" frameborder="0" scrolling="no" '
                'src="https://maps.google.com/maps?q={},{}&hl=es&z=14&output=embed"></iframe>',
                obj.latitud,
                obj.longitud,
            )
        return "Sin ubicación registrada"

    mapa_preview.short_description = "Mapa"


# ---------- ADMIN DE FOTOS (SI QUIERES VERLAS EN SECCIÓN SEPARADA) ----------
@admin.register(FotoPerroPerdido)
class FotoPerroPerdidoAdmin(admin.ModelAdmin):
    list_display = ("perro_nombre", "imagen_preview", "es_principal", "fecha_subida")
    list_filter = ("es_principal", "fecha_subida")
    search_fields = ("perro__nombre",)
    readonly_fields = ("imagen_preview", "fecha_subida")

    def perro_nombre(self, obj):
        return obj.perro.nombre

    perro_nombre.short_description = "Perro"
    perro_nombre.admin_order_field = "perro__nombre"

    def imagen_preview(self, obj):
        return format_html(
            '<img src="data:image/{};base64,{}" style="max-height:150px;max-width:150px;" />',
            obj.tipo_imagen,
            obj.imagen_base64,
        )

    imagen_preview.short_description = "Imagen"
