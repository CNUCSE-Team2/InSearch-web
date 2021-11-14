from django.urls import path
from .views import *

app_name = "Insearch_Web"

urlpatterns = [
    path('contents', Content.as_view()),
    path('contents/<int:id>', ContentDetail.as_view()),
    path('search', search),
    path('admin', Admin.as_view()),
    
]