from pathlib import Path
import os
DEBUG = True
SECRET_KEY = 'supersecretkey12345'
ALLOWED_HOSTS = ['localhost', '127.0.0.1']
BASE_DIR = Path(__file__).resolve(strict=True).parent.parent.parent
AUTH_USER_MODEL = 'usuarios.Usuario'

# DATABASES = {
#     'default': {
#         'ENGINE': 'django.db.backends.postgresql',
#         'NAME': 'patitas_a_casa',
#         'USER': 'ismael',
#         #'PASSWORD': 'MAEL02005=()/',
#         'PASSWORD': 'isma123',
#         'HOST': 'localhost',
#         'PORT': '5432',
#     }
# }


DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': os.getenv('PGDATABASE', 'patitas_a_casa'), 
        'USER': os.getenv('PGUSER', 'ismael'),          
        'PASSWORD': os.getenv('PGPASSWORD', 'isma123'), 
        'HOST': os.getenv('PGHOST', 'localhost'),
        'PORT': os.getenv('PGPORT', '5432'),
    }
}

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'patitas_a_casa.apps.perros',
    'patitas_a_casa.apps.adopciones',
    'patitas_a_casa.apps.perros.Avistamiento_Perros.apps.AvistamientoPerrosConfig',
    'patitas_a_casa.apps.usuarios',
    'rest_framework',
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'patitas_a_casa.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.join(BASE_DIR, 'frontend/templates')],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]
WSGI_APPLICATION = 'patitas_a_casa.wsgi.application'

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
        'OPTIONS': {
            'min_length': 8,
        }
    },
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]

PASSWORD_HASHERS = [
    'django.contrib.auth.hashers.Argon2PasswordHasher',
    'django.contrib.auth.hashers.PBKDF2PasswordHasher',
    'django.contrib.auth.hashers.PBKDF2SHA1PasswordHasher',
    'django.contrib.auth.hashers.BCryptSHA256PasswordHasher',
    'django.contrib.auth.hashers.ScryptPasswordHasher',
]

LANGUAGE_CODE = 'es-mx'
TIME_ZONE = 'UTC'
USE_I18N = True
USE_L10N = True
USE_TZ = True
STATIC_URL = '/static/'
STATICFILES_DIRS = [
    '/home/ismael/Desktop/Patitas_a_Casa/frontend/static',
]

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'
MEDIA_URL = '/media/'
MEDIA_ROOT = os.path.join(BASE_DIR, 'media')
FILE_UPLOAD_MAX_MEMORY_SIZE = 10 * 1024 * 1024  
DATA_UPLOAD_MAX_MEMORY_SIZE = 10 * 1024 * 1024  
LOGIN_URL = 'login'
LOGIN_REDIRECT_URL = 'home'
LOGOUT_REDIRECT_URL = 'home'
ALLOWED_HOSTS = ['*']