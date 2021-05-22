from django.shortcuts import get_object_or_404
from django.views import generic

from rest_framework.generics import CreateAPIView

from .models import Link
from .serializers import LinkSerializer


class LinkCreateAPIView(CreateAPIView):
    serializer_class = LinkSerializer
    model = Link

    def perform_create(self, serializer):
        serializer.save(context={'request': self.request})


class LinkRedirectView(generic.RedirectView):
    def get_redirect_url(self, *args, **kwargs):
        link = get_object_or_404(Link, short_url_code=kwargs['path'])
        return link.url
