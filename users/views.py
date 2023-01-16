from rest_framework.viewsets import GenericViewSet
from rest_framework import mixins
from .models import Users
from .serializer import UsersModelSerializer
from rest_framework.renderers import JSONRenderer, BrowsableAPIRenderer


class UsersViewSet(mixins.RetrieveModelMixin,
                   mixins.UpdateModelMixin,
                   mixins.ListModelMixin,
                   mixins.DestroyModelMixin,
                   GenericViewSet):
    queryset = Users.objects.all()
    serializer_class = UsersModelSerializer
    renderer_classes = [JSONRenderer, BrowsableAPIRenderer]