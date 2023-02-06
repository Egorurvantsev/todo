from rest_framework.serializers import ModelSerializer
from .models import Users

class UsersModelSerializer(ModelSerializer):
    class Meta:
        model = Users
        exclude = ['groups', 'user_permissions', 'date_joined', 'last_login', ]


    def create(self, validated_data):
        user = Users(
            email=validated_data['email'],
            username=validated_data['username']
        )
        user.set_password(validated_data['password'])
        user.save()
        return user


class UsersModelSerializerTwo(ModelSerializer):
    class Meta:
        model = Users
        exclude = ["groups", "user_permissions", "date_joined", "last_login", "is_staff", "is_active"]
        #т.к по дефолту у меня стоит показ "is_staff" и "is_active", я просто убрал их


    def create(self, validated_data):
        user = Users(
            email=validated_data['email'],
            username=validated_data['username']
        )
        user.set_password(validated_data['password'])
        user.save()
        return user