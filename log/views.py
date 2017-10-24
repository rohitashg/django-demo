#!python
#log/views.py
from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from django.shortcuts import redirect
from log.forms import LoginForm,registerForm
from django.contrib.auth import login, authenticate

# Create your views here.
# this login required decorator is to not allow to any  
# view without authenticating
@login_required(login_url="login/")
def home(request):
	return render(request,"home.html")
def register(request):
    if request.user.is_authenticated():
        return redirect('/home')
    elif request.method == 'POST':
        form = registerForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('email')
            raw_password = form.cleaned_data.get('password1')
            user = authenticate(username=username, password=raw_password)
            login(request, user)
            return redirect('/home')
    else:
        form = registerForm()
    return render(request, 'register.html', {'form': form})
