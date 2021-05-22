from django.urls import include, path

from . import views

app_name = 'shortener'

urlpatterns = [
    path('api/', include([
        path('create/', views.LinkCreateAPIView.as_view(), name='create-link'),
    ])),
    path('<slug:path>/', views.LinkRedirectView.as_view(), name='redirect-link'),
]
