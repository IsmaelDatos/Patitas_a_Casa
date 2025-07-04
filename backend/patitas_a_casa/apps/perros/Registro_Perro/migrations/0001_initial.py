# Generated by Django 5.1.7 on 2025-07-01 07:13

import django.utils.timezone
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='FotoPerroPerdido',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('imagen_base64', models.TextField()),
                ('es_principal', models.BooleanField(default=False)),
                ('tipo_imagen', models.CharField(max_length=10)),
                ('fecha_subida', models.DateTimeField(auto_now_add=True)),
            ],
            options={
                'ordering': ['-es_principal', '-fecha_subida'],
            },
        ),
        migrations.CreateModel(
            name='PerroPerdido',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=100)),
                ('fecha_hora_perdida', models.DateTimeField(default=django.utils.timezone.now)),
                ('raza', models.CharField(max_length=100)),
                ('sexo', models.CharField(choices=[('male', 'Macho'), ('female', 'Hembra')], max_length=6)),
                ('tamaño', models.CharField(choices=[('small', 'Pequeño (menos de 10 kg)'), ('medium', 'Mediano (10-25 kg)'), ('large', 'Grande (25-45 kg)'), ('xlarge', 'Muy grande (más de 45 kg)')], max_length=6)),
                ('edad', models.CharField(max_length=50)),
                ('color_principal', models.CharField(max_length=50)),
                ('tipo_pelaje', models.CharField(blank=True, choices=[('short', 'Corto'), ('medium', 'Mediano'), ('long', 'Largo'), ('curly', 'Rizado'), ('wire', 'Alambre'), ('hairless', 'Sin pelo')], max_length=10)),
                ('descripcion', models.TextField(max_length=200)),
                ('identificadores', models.CharField(blank=True, max_length=200)),
                ('detalles_identificador', models.TextField(blank=True)),
                ('vacunado', models.CharField(blank=True, max_length=10)),
                ('vacunas', models.TextField(blank=True)),
                ('problemas_salud', models.TextField(blank=True, max_length=200)),
                ('latitud', models.FloatField()),
                ('longitud', models.FloatField()),
                ('codigo_postal', models.CharField(max_length=5)),
                ('estado', models.CharField(max_length=100)),
                ('ciudad', models.CharField(max_length=100)),
                ('colonia', models.CharField(max_length=100)),
                ('calle', models.CharField(max_length=200)),
                ('numero_exterior', models.CharField(blank=True, max_length=20)),
                ('detalles_ubicacion', models.TextField(blank=True)),
                ('nombre_contacto', models.CharField(max_length=100)),
                ('telefono_contacto', models.CharField(max_length=10)),
                ('email_contacto', models.EmailField(blank=True, max_length=254)),
                ('metodo_contacto_adicional', models.CharField(blank=True, max_length=100)),
                ('recompensa', models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True)),
                ('fecha_registro', models.DateTimeField(auto_now_add=True)),
                ('estado_registro', models.CharField(choices=[('activo', 'Activo'), ('encontrado', 'Encontrado'), ('cerrado', 'Cerrado')], default='activo', max_length=10)),
            ],
            options={
                'ordering': ['-fecha_registro'],
            },
        ),
    ]
