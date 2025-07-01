from rest_framework import serializers
from .models import PerroPerdido, FotoPerroPerdido

class FotoPerroPerdidoSerializer(serializers.ModelSerializer):
    class Meta:
        model = FotoPerroPerdido
        fields = ['id', 'imagen_base64', 'tipo_imagen', 'es_principal']

class PerroPerdidoSerializer(serializers.ModelSerializer):
    fotos = FotoPerroPerdidoSerializer(many=True, read_only=True)
    identificadores = serializers.SerializerMethodField()
    vacunas = serializers.SerializerMethodField()
    
    class Meta:
        model = PerroPerdido
        fields = '__all__'
        extra_kwargs = {
            'estado_registro': {'required': False},
        }

    
    def get_identificadores(self, obj):
        return obj.identificadores.split(',') if obj.identificadores else []
    
    def get_vacunas(self, obj):
        return obj.vacunas.split(',') if obj.vacunas else []
    
    def to_internal_value(self, data):
        if 'identificadores' in data and isinstance(data['identificadores'], list):
            data['identificadores'] = ','.join(data['identificadores'])
        if 'vacunas' in data and isinstance(data['vacunas'], list):
            data['vacunas'] = ','.join(data['vacunas'])
        return super().to_internal_value(data)