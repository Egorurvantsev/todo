from rest_framework.serializers import ModelSerializer
from .models import Project, Todo
from users.serializer import UsersModelSerializer


class ProjectModelSerializer(ModelSerializer):
    users = UsersModelSerializer(many=True)
    class Meta:
        model = Project
        fields = '__all__'


class TodoModelSerializer(ModelSerializer):
    user_create = UsersModelSerializer()
    project = ProjectModelSerializer()
    class Meta:
        model = Todo
        fields = '__all__'