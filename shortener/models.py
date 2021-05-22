from hashlib import md5
import uuid

from django.db import models
from django.utils import timezone


class Link(models.Model):
    URL_LENGTH = 7
    uuid = models.UUIDField(default=uuid.uuid4)
    url = models.URLField()
    short_url_code = models.CharField(max_length=10, editable=False)
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.old_url
