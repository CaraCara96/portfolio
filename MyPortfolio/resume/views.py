from django.shortcuts import render, redirect
from django.core.mail import send_mail
from django.http import HttpResponse
from django.conf import settings

from .models import Project

# Create your views here.
def home(request):
    return render( request, 'portfolio/hero.html' )

def education(request):
    return render( request, 'portfolio/education.html' )

def experience(request):
    projects = Project.objects.all()
    context = {'projects': projects}
    return render( request, 'portfolio/experience.html' , context)

def contact(request):
    if request.method =='POST':
        name = request.POST['name']
        email = request.POST['email']
        message = request.POST['message']

        subject = f"Contact Form Submission from {name} (Portfolio Website)"
        message_body = f"Name: {name}\n\nEmail: {email}\n\nMessage:\n{message}"

        send_mail(
            subject,
            message_body,
            name,
            ['courage.b.cb@gmail.com'],
            fail_silently=False
        )


    return render(request, 'portfolio/contact.html')

def page_not_found(request, exception):
    return render(request, 'portfolio/404.html', status=404)