from django.urls import path
from . import views

app_name = 'adopciones'

urlpatterns = [
    path('quiero-adoptar/', views.quiero_adoptar, name='quiero_adoptar'),
    path('dar-en-adopcion/', views.dar_en_adopcion, name='dar_en_adopcion'),
    path('solicitar-adopcion/<int:perro_id>/', views.solicitar_adopcion, name='solicitar_adopcion'),
    path('mis-solicitudes/', views.MisSolicitudesView.as_view(), name='mis_solicitudes'),
    path('mis-perros-en-adopcion/', views.MisPerrosEnAdopcionView.as_view(), name='mis_perros_en_adopcion'),
]