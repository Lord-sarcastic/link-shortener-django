from rest_framework import serializers

from .models import Link
from .utils import generate_code, get_ip_address


class LinkSerializer(serializers.ModelSerializer):
    class Meta:
        model = Link
        fields = ('url', 'short_url_code', 'timestamp')

    def create(self, validated_data):
        ip_address = get_ip_address(self.context['request'])
        code = generate_code(ip_address)
        link = Link.objects.create(
            url=validated_data.get('url'),
            short_url_code=code
        )
        return link
