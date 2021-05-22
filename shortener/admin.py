from django.contrib import admin

from .models import Link

class LinkAdmin(admin.ModelAdmin):
    list_display = ('url', 'short_url_code', 'timestamp',)

admin.site.register(Link, LinkAdmin)