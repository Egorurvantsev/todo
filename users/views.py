from rest_framework.viewsets import ModelViewSet
from .models import Users
from .serializer import UsersModelSerializer

class UsersModelViewSet(ModelViewSet):
    queryset = Users.objects.all()
    serializer_class = UsersModelSerializer