from django.db.models import fields
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