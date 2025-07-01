from patitas_a_casa.apps.perros.Avistamiento_Perros import views
from .apps.perros.Avistamiento_Perros.views import HomeView
from django.urls import path, include
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from django.views.generic.base import TemplateView
from django.contrib.auth import views as auth_views
from patitas_a_casa.apps.usuarios import views as usuarios_views

urlpatterns = [
    path('', HomeView.as_view(), name='home'),
    path('admin/', admin.site.urls),
    path('avistamiento/', views.avistamiento_router, name='avistamiento_router'),
    path('avistamiento/anonimo/', views.AvistamientoAnonimoCreateView.as_view(), name='crear_avistamiento_anonimo'),
    path('avistamiento/persona/', views.AvistamientoPersonaCreateView.as_view(), name='crear_avistamiento_persona'),
    path('avistamiento/albergue/', views.AvistamientoAlbergueCreateView.as_view(), name='crear_avistamiento_albergue'),
    path('avistamiento/avistamiento-exito/', views.avistamiento_exito, name='avistamiento_exito'),
    path('avistamiento/exito/', views.avistamiento_exito, name='avistamiento_exito'),
    path('avistamiento/lista/', views.ListaAvistamientosView.as_view(), name='lista_avistamientos'),
    path('avistamiento/detalle/<int:pk>/', views.DetalleAvistamientoView.as_view(), name='detalle_avistamiento'),
    path('accounts/login/', auth_views.LoginView.as_view(template_name='login.html'), name='login'),
    path('accounts/logout/', auth_views.LogoutView.as_view(), name='logout'), 
    path('accounts/registro/', usuarios_views.registro_view, name='registro'),
    path('usuarios/', include('patitas_a_casa.apps.usuarios.urls')),
    path('avistamiento/', include('patitas_a_casa.apps.perros.Avistamiento_Perros.urls', namespace='avistamiento_perros')),
    path('adopcion/', include('patitas_a_casa.apps.adopciones.urls')),
    path('perros/', include('patitas_a_casa.apps.perros.Registro_Perro.urls', namespace='registro_perro'))
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)