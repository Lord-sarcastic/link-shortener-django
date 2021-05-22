from django.urls import path

from . import views

app_name = 'shortener'

urlpatterns = [
    path('create/', views.LinkCreateAPIView.as_view(), name='create-link'),
    path('<slug:path>/', views.LinkRedirectView.as_view(), name='redirect-link'),
]
