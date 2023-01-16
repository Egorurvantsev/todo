from rest_framework.serializers import ModelSerializer
# from rest_framework.serializers import HyperlinkedModelSerializer
from .models import Users

class UsersModelSerializer(ModelSerializer):
# class UsersModelSerializer(HyperlinkedModelSerializer):
    class Meta:
        model = Users
        fields = '__all__'