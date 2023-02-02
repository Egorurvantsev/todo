from rest_framework.serializers import ModelSerializer
# from rest_framework.serializers import HyperlinkedModelSerializer
from .models import Users

class UsersModelSerializer(ModelSerializer):
# class UsersModelSerializer(HyperlinkedModelSerializer):
    class Meta:
        model = Users
        fields = '__all__'


    def create(self, validated_data):
        user = Users(
            email=validated_data['email'],
            username=validated_data['username']
        )
        user.set_password(validated_data['password'])
        user.save()
        return user