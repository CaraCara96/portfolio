from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name="home"),
    path('education', views.education, name="education"),
    path('experience', views.experience, name="experience"),
    path('contact', views.contact, name="contact")
]