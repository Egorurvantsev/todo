from django.db import models
from users.models import Users


class Project(models.Model):
    name = models.CharField(max_length=32)
    url_github = models.URLField(default=None)
    users = models.ManyToManyField(Users) # в одном проекте может участовать несколько пользователей, и один
    # пользователь может состоять в нескольких проектах


class Todo(models.Model):
    text = models.TextField(max_length=200)
    project = models.ForeignKey(Project, on_delete=models.CASCADE) #один проект может иметь несколько заметок
    user_create = models.ForeignKey(Users, on_delete=models.CASCADE) #один пользователь может создать несколько заметок
    is_active = models.BooleanField(default=True)
    data_create = models.DateField(auto_now_add=True)
    data_update = models.DateField(auto_now=True)