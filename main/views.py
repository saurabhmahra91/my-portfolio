from django.shortcuts import render, redirect
from .forms import MessageForm
from .models import Message

# Create your views here.
def index(request):
    if request.method=='POST':
        submitted_form = MessageForm(request.POST)
        if submitted_form.is_valid():
            submitted_form.save()
            return redirect('index')
    else:
        form = MessageForm()
    return render(request, 'main/index.html',{'form':form})

     
