from django.urls import path
from .views import *

app_name = "Insearch_Web"

urlpatterns = [
    path('contents', contentList),
    path('search', search),
]