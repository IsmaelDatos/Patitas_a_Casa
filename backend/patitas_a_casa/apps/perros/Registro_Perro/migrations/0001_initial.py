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
            name='PerroPerdido',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=100)),
                ('sexo', models.CharField(choices=[('M', 'Macho'), ('H', 'Hembra')], max_length=1)),
                ('edad_años', models.PositiveIntegerField(default=0)),
                ('edad_meses', models.PositiveIntegerField(default=0)),
                ('tamaño', models.CharField(choices=[('P', 'Pequeño'), ('M', 'Mediano'), ('G', 'Grande')], max_length=1)),
                ('raza', models.CharField(max_length=100)),
                ('esterilizado', models.BooleanField(default=False)),
                ('colores', models.CharField(help_text='Colores separados por coma', max_length=500)),
                ('patron_pelaje', models.CharField(choices=[('alambre', 'Alambre'), ('corto', 'Corto'), ('doble_capa', 'Doble capa'), ('duro', 'Duro'), ('lanoso', 'Lanoso'), ('largo', 'Largo'), ('pelaje_nuevo', 'Pelaje nuevo'), ('sin_pelo', 'Sin pelo')], max_length=20)),
                ('señas_particulares', models.TextField(blank=True, null=True)),
                ('tiene_collar', models.BooleanField(default=False)),
                ('color_collar', models.CharField(blank=True, max_length=50, null=True)),
                ('identificador', models.CharField(blank=True, help_text='Chip, placa, etc.', max_length=200, null=True)),
                ('entidad_federativa', models.CharField(max_length=100)),
                ('municipio_alcaldia', models.CharField(max_length=100)),
                ('codigo_postal', models.CharField(max_length=5)),
                ('colonia', models.CharField(max_length=100)),
                ('calle', models.CharField(max_length=200)),
                ('numero_exterior', models.CharField(max_length=20)),
                ('fecha_hora_perdida', models.DateTimeField(default=django.utils.timezone.now)),
                ('fecha_registro', models.DateTimeField(auto_now_add=True)),
                ('estado', models.CharField(choices=[('activo', 'Activo'), ('encontrado', 'Encontrado'), ('cerrado', 'Cerrado')], default='activo', max_length=10)),
                ('fecha_actualizacion', models.DateTimeField(auto_now=True)),
                ('propietario', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='perros_perdidos', to='usuarios.usuario')),
            ],
            options={
                'verbose_name': 'Perro Perdido',
                'verbose_name_plural': 'Perros Perdidos',
                'ordering': ['-fecha_registro'],
            },
        ),
        migrations.CreateModel(
            name='FotoPerroPerdido',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('foto', models.ImageField(help_text='Máximo 10MB', upload_to='perros_perdidos/')),
                ('es_principal', models.BooleanField(default=False)),
                ('fecha_subida', models.DateTimeField(auto_now_add=True)),
                ('perro', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='fotos', to='Registro_Perro.perroperdido')),
            ],
            options={
                'verbose_name': 'Foto de Perro Perdido',
                'verbose_name_plural': 'Fotos de Perros Perdidos',
                'ordering': ['-es_principal', '-fecha_subida'],
            },
        ),
    ]
