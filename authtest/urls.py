
#!python
# authtest/urls.py
from django.conf.urls import include, url
from django.contrib import admin
# Add this import
from django.contrib.auth import views
from log.forms import LoginForm,registerForm

urlpatterns = [
    url(r'^admin/', include(admin.site.urls)),
    url(r'', include('log.urls')),
    url(r'^login/$', views.login, {'template_name': 'login.html', 'authentication_form': LoginForm,'redirect_authenticated_user': True}, name='login'),
    url(r'^register/$', views.login, {'template_name': 'register.html', 'authentication_form': registerForm,'redirect_authenticated_user': True}, name='register'),
    url(r'^logout/$', views.logout, {'next_page': '/login'}),
]
