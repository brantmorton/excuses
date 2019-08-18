from rest_framework import serializers

from excuseapi.models import Excuse

class ExcuseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Excuse
        fields = ('title', 'content', 'reason')