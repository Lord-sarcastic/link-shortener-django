from pathlib import Path

from utils import read_env

env_vars = read_env()

BASE_DIR = Path(__file__).resolve().parent.parent

SECRET_KEY = env_vars['SECRET_KEY']

DEBUG = env_vars['DEBUG']

ALLOWED_HOSTS = [
    env_vars['HOST']
]

SITE_ID = 1

INSTALLED_APPS = [
    # custom apps
    'authentify.apps.AuthentifyConfig',
    'shortener.apps.ShortenerConfig',

    # other apps
    'corsheaders',

    # rest framework
    'rest_framework',
    'rest_framework.authtoken',

    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'django.contrib.sites',
]

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'backend.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
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

WSGI_APPLICATION = 'backend.wsgi.application'

# SESSION_COOKIE_DOMAIN = '.forlink'

# EMAIL_PORT = 587

# EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}

AUTH_USER_MODEL = 'authentify.User'

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
]

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'Africa/Algiers'

USE_I18N = True

USE_L10N = True

USE_TZ = True

STATIC_URL = '/static/'

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

# ACCOUNT_AUTHENTICATION_METHOD = 'username_email'

# ACCOUNT_EMAIL_REQUIRED = True

# ACCOUNT_LOGIN_ON_EMAIL_CONFIRMATION = True

# ACCOUNT_PRESERVE_USERNAME_CASING = False

# ACCOUNT_USERNAME_REQUIRED = True

# ACCOUNT_EMAIL_SUBJECT_PREFIX = 'Forl.ink '

# REST_FRAMEWORK = {
#     'DEFAULT_AUTHENTICATION_CLASSES': (
#         'dj_rest_auth.jwt_auth.JWTCookieAuthentication',
#     )
# }

# REST_USE_JWT = True

# JWT_AUTH_COOKIE = 'forl-ink-auth'

# JWT_AUTH_REFRESH_COOKIE = 'forl-ink-refresh-token'

URL_LENGTH = 6