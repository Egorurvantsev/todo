from rest_framework.viewsets import ModelViewSet, ViewSet, GenericViewSet
from .models import Project, Todo
from .serializer import ProjectModelSerializer, TodoModelSerializer
from rest_framework.pagination import LimitOffsetPagination
from .filters import ProjectFilter
from rest_framework.permissions import IsAuthenticated


class ProjectLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 10


class TodoLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 20


class ProjectModelViewSet(ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectModelSerializer
    pagination_class = ProjectLimitOffsetPagination
    filterset_class = ProjectFilter


class TodoModelViewSet(ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class = TodoModelSerializer
    pagination_class = TodoLimitOffsetPagination
    filterset_fields = ['project']