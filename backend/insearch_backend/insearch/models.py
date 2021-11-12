from typing import ContextManager
from django.db import models

# Create your models here.
class Document(models.Model):
    id = models.AutoField(help_text="primary key", primary_key=True, null=False)
    title = models.TextField(null=False)
    description = models.TextField(null=False)

    class Meta:
        db_table = "document"

class Table(models.Model):
    id = models.AutoField(help_text="primary key", primary_key=True, null=False)
    key = models.TextField(null=False)
    value = models.TextField(null=False)

    class Meta:
        db_table = "table"