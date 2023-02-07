from rest_framework.viewsets import GenericViewSet
from rest_framework import mixins
from .models import Users
from .serializer import UsersModelSerializer, UsersModelSerializerTwo
from rest_framework.renderers import JSONRenderer, BrowsableAPIRenderer
from rest_framework.permissions import IsAuthenticated, AllowAny, IsAdminUser

class UsersViewSet(mixins.RetrieveModelMixin,
                   mixins.UpdateModelMixin,
                   mixins.ListModelMixin,
                   mixins.CreateModelMixin,
                   GenericViewSet):
    queryset = Users.objects.all()
    serializer_class = UsersModelSerializer
    renderer_classes = [JSONRenderer, BrowsableAPIRenderer]
    def get_serializer_class(self):
        if self.request.version == '2.0':
            return UsersModelSerializerTwo
        return UsersModelSerializer