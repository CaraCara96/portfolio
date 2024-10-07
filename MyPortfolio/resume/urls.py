from django.urls import path
from . import views
from django.conf.urls import handler404

handler404 = views.page_not_found

urlpatterns = [
    path('', views.home, name="home"),
    path('education', views.education, name="education"),
    path('experience', views.experience, name="experience"),
    path('contact', views.contact, name="contact")
]