import graphene
from graphene_django import DjangoObjectType
from note.models import Project, Todo
from users.models import Users


class ProjectType(DjangoObjectType):
    class Meta:
        model = Project
        fields = '__all__'


class UsersType(DjangoObjectType):
    class Meta:
        model = Users
        fields = '__all__'


class TodoType(DjangoObjectType):
    class Meta:
        model = Todo
        fields = '__all__'


class Query(graphene.ObjectType):
    projects = graphene.List(ProjectType)
    users = graphene.List(UsersType)
    todo = graphene.List(TodoType)
    users_by_id = graphene.Field(UsersType, id=graphene.Int(required=True))

    def resolve_users(self, info):
        return Users.objects.all()


    def resolve_projects(root, info):
        return Project.objects.all()

    def resolve_todo(self, info):
        return Todo.objects.all()

    def resolve_users_by_id(self, info, id):
        try:
            return Users.objects.get(pk=id)
        except Users.DoesNotExist:
            return None


schema = graphene.Schema(query=Query)