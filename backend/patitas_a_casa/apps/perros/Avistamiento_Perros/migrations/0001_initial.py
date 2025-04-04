# Generated by Django 5.1.7 on 2025-04-02 00:03

import django.db.models.deletion
import django.utils.timezone
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('usuarios', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='AvistamientoPerro',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fecha_hora_avistamiento', models.DateTimeField(default=django.utils.timezone.now)),
                ('fecha_reporte', models.DateTimeField(auto_now_add=True)),
                ('entidad_federativa', models.CharField(max_length=100)),
                ('municipio_alcaldia', models.CharField(max_length=100)),
                ('codigo_postal', models.CharField(max_length=5)),
                ('colonia', models.CharField(max_length=100)),
                ('calle', models.CharField(max_length=200)),
                ('numero_exterior', models.CharField(max_length=20)),
                ('foto', models.ImageField(blank=True, null=True, upload_to='avistamientos/')),
                ('raza', models.CharField(blank=True, max_length=100, null=True)),
                ('sexo', models.CharField(choices=[('M', 'Macho'), ('H', 'Hembra'), ('D', 'Desconocido')], default='D', max_length=1)),
                ('tamaño', models.CharField(choices=[('P', 'Pequeño'), ('M', 'Mediano'), ('G', 'Grande')], max_length=1)),
                ('color_dominante', models.CharField(max_length=50)),
                ('señas_particulares', models.TextField(blank=True, null=True)),
                ('identificador', models.CharField(blank=True, help_text='Collar, placa, chip, etc.', max_length=200, null=True)),
                ('estado_perro', models.CharField(choices=[('S', 'Saludable'), ('H', 'Herido'), ('D', 'Desnutrido'), ('E', 'Enfermo'), ('O', 'Otro')], default='S', max_length=1)),
                ('descripcion', models.TextField()),
                ('es_anonimo', models.BooleanField(default=False)),
                ('puede_albergar', models.BooleanField(default=False)),
                ('reportado_por_albergue', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='usuarios.albergue')),
                ('reportado_por_usuario', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='usuarios.usuario')),
            ],
            options={
                'verbose_name': 'Avistamiento de Perro',
                'verbose_name_plural': 'Avistamientos de Perros',
                'ordering': ['-fecha_reporte'],
            },
        ),
    ]
