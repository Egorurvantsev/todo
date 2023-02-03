from django.test import TestCase
import json
from django.test import TestCase
from mixer.backend.django import mixer
from rest_framework import status
from rest_framework.test import APIRequestFactory, force_authenticate, APIClient, APISimpleTestCase, APITestCase
from django.contrib.auth.models import User
from .views import UsersViewSet
from .models import Users

class TestUserViewSet(TestCase):
    def test_get_list(self): #APIRequestFactory
        factory = APIRequestFactory()
        request = factory.get('/api/users/')
        view = UsersViewSet.as_view({'get': 'list'})
        response = view(request)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_create_list(self): #APIRequestFactory
        factory = APIRequestFactory()
        request = factory.post('/api/users/',
                               {'firstname': 'alex', 'lastname': '123', 'email': '123456@mail.ru', 'username': 'lox2287'}, format='json')
        view = UsersViewSet.as_view({'post': 'create'})
        response = view(request)
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_create_admin(self): #APIRequestFactory
        factory = APIRequestFactory()
        request = factory.post('/api/users/',
                               {'firstname': 'alex', 'lastname': '123', 'email': '123@mail.ru', 'username': 'lox228'}, format='json')
        admin = Users.objects.create_superuser('admin', 'email@mail.ru', 'admin')
        force_authenticate(request, admin)
        view = UsersViewSet.as_view({'post': 'create'})
        response = view(request)
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_get_detail(self): #APIClient
        user = Users.objects.create(username='lol228', first_name='lox', last_name='olux', email='123@mail.ru')
        client = APIClient()
        response = client.get(f'/api/users/{user.id}/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_edit_guest(self): #APIClient
        user = Users.objects.create(username='lol228', first_name='lox', last_name='olux', email='123@mail.ru')
        client = APIClient()
        response = client.put(f'/api/users/{user.id}/', {'username': 'lox228', 'first_name': '123', 'first_name': '456', 'email': '123456@gmail.com'})
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)


class TestMath(APISimpleTestCase): #APISimpleTestCase
    def test_sqrt(self):
        import math
        self.assertEqual(math.sqrt(4), 2)


class TestUserViewSet(APITestCase): #APITestCase
    def test_get_list(self):
        response = self.client.get('/api/users/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
