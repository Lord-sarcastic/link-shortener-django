import uuid

from django.contrib.auth.models import AbstractUser
from django.db import models
from django.template.defaultfilters import slugify


class User(AbstractUser):
    uuid = models.UUIDField(default=uuid.uuid4, editable=False)
    slug = models.SlugField(blank=True)

    def save(self, *args, **kwargs):
        self.slug = slugify(self.username)
        return super().save(*args, **kwargs)

