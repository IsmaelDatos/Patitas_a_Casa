from django.urls import path
from . import views

app_name = 'usuarios'

urlpatterns = [
    path('registro/', views.registro_view, name='registro'),
    path('login/', views.login_view, name='login'),
    path('logout/', views.logout_view, name='logout'),
    path('perfil/ciudadano/', views.perfil_ciudadano, name='perfil_ciudadano'),
    path('perfil/albergue/', views.perfil_albergue, name='perfil_albergue'),
    path('perfil/editar/', views.editar_perfil, name='editar_perfil'), 
]
