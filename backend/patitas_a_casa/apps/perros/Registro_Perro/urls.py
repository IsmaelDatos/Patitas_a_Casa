from django.urls import path
from .views import RegistroPerroPerdidoView

app_name = 'registro_perro'

urlpatterns = [
    path('registrar/', RegistroPerroPerdidoView.as_view(), name='registro_perro_perdido'),
]