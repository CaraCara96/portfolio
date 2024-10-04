from django.shortcuts import render

# Create your views here.
def home(request):
    return render( request, 'portfolio/hero.html' )

def education(request):
    return render( request, 'portfolio/education.html' )

def experience(request):
    return render( request, 'portfolio/experience.html' )

def contact(request):
    return render(request, 'portfolio/contact.html')