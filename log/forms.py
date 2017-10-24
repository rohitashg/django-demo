from django.contrib.auth.forms import AuthenticationForm 
from django import forms

class LoginForm(AuthenticationForm):
    username = forms.CharField(label="Username", max_length=30, 
                               widget=forms.TextInput(attrs={'class': 'form-control', 'name': 'username'}))
    password = forms.CharField(label="Password", max_length=30, 
                               widget=forms.PasswordInput(attrs={'class': 'form-control', 'name': 'password'}))
class registerForm(AuthenticationForm):
    username = forms.CharField(label="Username", max_length=30,
                               widget=forms.TextInput(attrs={'class': 'form-control', 'name': 'username'}))
    password = forms.CharField(label="Password", max_length=30,
                               widget=forms.PasswordInput(attrs={'class': 'form-control', 'name': 'password'}))
    firstname = forms.CharField(label="First Name", max_length=60,
                               widget=forms.TextInput(attrs={'class': 'form-control', 'name': 'firstname'}))
    lastname = forms.CharField(label="Last Name", max_length=60,
                                widget=forms.TextInput(attrs={'class': 'form-control', 'name': 'lastname'}))
    email = forms.CharField(label="Email", max_length=255,
                               widget=forms.TextInput(attrs={'class': 'form-control', 'name': 'email'}))


