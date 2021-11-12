from django.db.models import fields
from django.db.models.enums import Choices
from rest_framework import serializers
from .models import *

class DocumentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Document
        fields = '__all__'

class TableSerializer(serializers.ModelSerializer):

    class Meta:
        model = Table
        fields = '__all__'

class DocumentNoIdSerializer(serializers.Serializer):
    title = serializers.CharField(help_text="title")
    description = serializers.CharField(help_text="description")

class QuerySerializer(serializers.Serializer):
    query = serializers.CharField(help_text="query")