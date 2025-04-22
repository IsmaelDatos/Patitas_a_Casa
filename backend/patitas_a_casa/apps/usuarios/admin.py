from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import Usuario, Albergue

@admin.register(Usuario)
class UsuarioAdmin(UserAdmin):
    list_display = ('email', 'username', 'first_name', 'last_name', 'is_staff', 'is_albergue')
    list_filter = ('is_staff', 'is_active', 'is_albergue')
    search_fields = ('email', 'username', 'first_name', 'last_name')
    ordering = ('email',)
    
    fieldsets = (
        (None, {'fields': ('email', 'username', 'password')}),
        ('Información personal', {'fields': ('first_name', 'last_name', 'phone')}),
        ('Permisos', {'fields': ('is_active', 'is_staff', 'is_superuser', 'is_albergue', 'groups', 'user_permissions')}),
        ('Fechas importantes', {'fields': ('last_login', 'date_joined')}),
    )
    
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'username', 'password1', 'password2', 'is_albergue'),
        }),
    )

@admin.register(Albergue)
class AlbergueAdmin(admin.ModelAdmin):
    list_display = ('nombre', 'usuario', 'entidad', 'alcaldia', 'capacidad_maxima')
    list_filter = ('entidad',)
    search_fields = ('nombre', 'usuario__email', 'usuario__username')
    raw_id_fields = ('usuario',)