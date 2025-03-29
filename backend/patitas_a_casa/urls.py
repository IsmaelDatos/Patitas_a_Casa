# from django.urls import path
# from patitas_a_casa.apps.perros.Avistamiento_Perros import views
# from .apps.perros.Avistamiento_Perros.views import home

# urlpatterns = [
#     path('', home, name='home'),
#     path('avistamiento/anonimo/', views.AvistamientoAnonimoCreateView.as_view(), name='crear_avistamiento_anonimo'),
#     path('avistamiento/persona/', views.AvistamientoPersonaCreateView.as_view(), name='crear_avistamiento_persona'),
#     path('avistamiento/albergue/', views.AvistamientoAlbergueCreateView.as_view(), name='crear_avistamiento_albergue'),
#     path('avistamiento/avistamiento-exito/', views.avistamiento_exito, name='avistamiento_exito'),
#     path('avistamiento/lista/', views.ListaAvistamientosView.as_view(), name='lista_avistamientos'),
#     path('avistamiento/detalle/<int:pk>/', views.DetalleAvistamientoView.as_view(), name='detalle_avistamiento'),
#     path('avistamiento/', views.avistamiento_router, name='avistamiento_router'),
# ]
# from django.urls import path, include
# from django.contrib import admin
# from patitas_a_casa.apps.perros.Avistamiento_Perros import views

# urlpatterns = [
#     path('admin/', admin.site.urls),
#     # Página principal
#     path('', views.home, name='home'),
    
#     # Rutas para avistamientos
#     path('avistamiento/', views.avistamiento_router, name='avistamiento_router'),
#     path('avistamiento/anonimo/', views.AvistamientoAnonimoCreateView.as_view(), name='crear_avistamiento_anonimo'),
#     path('avistamiento/persona/', views.AvistamientoPersonaCreateView.as_view(), name='crear_avistamiento_persona'),
#     path('avistamiento/albergue/', views.AvistamientoAlbergueCreateView.as_view(), name='crear_avistamiento_albergue'),
#     path('avistamiento/exito/', views.avistamiento_exito, name='avistamiento_exito'),
#     path('avistamiento/lista/', views.ListaAvistamientosView.as_view(), name='lista_avistamientos'),
#     path('avistamiento/detalle/<int:pk>/', views.DetalleAvistamientoView.as_view(), name='detalle_avistamiento'),
    
#     # Incluir otras apps
#     path('usuarios/', include('patitas_a_casa.apps.usuarios.urls')),
#     path('adopciones/', include('patitas_a_casa.apps.adopciones.urls')),
# ]


from patitas_a_casa.apps.perros.Avistamiento_Perros import views
from .apps.perros.Avistamiento_Perros.views import home
from django.urls import path, include
from django.contrib import admin
urlpatterns = [
    path('', home, name='home'),
    path('avistamiento/anonimo/', views.AvistamientoAnonimoCreateView.as_view(), name='crear_avistamiento_anonimo'),
    path('avistamiento/persona/', views.AvistamientoPersonaCreateView.as_view(), name='crear_avistamiento_persona'),
    path('avistamiento/albergue/', views.AvistamientoAlbergueCreateView.as_view(), name='crear_avistamiento_albergue'),
    path('avistamiento/avistamiento-exito/', views.avistamiento_exito, name='avistamiento_exito'),
    path('avistamiento/lista/', views.ListaAvistamientosView.as_view(), name='lista_avistamientos'),
    path('avistamiento/detalle/<int:pk>/', views.DetalleAvistamientoView.as_view(), name='detalle_avistamiento'),
    path('avistamiento/', views.avistamiento_router, name='avistamiento_router'),
    path('admin/', admin.site.urls),
    path('avistamiento/exito/', views.avistamiento_exito, name='avistamiento_exito'),
    path('usuarios/', include('patitas_a_casa.apps.usuarios.urls')),
] 