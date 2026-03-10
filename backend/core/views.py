from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response as DRFResponse
from django.contrib.auth.models import User

from .serializers import RegisterSerializer

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView


@api_view(["GET"])
def test_api(request):
    return Response({"message": "Backend connected successfully!"})


class RegisterView(APIView):
    def post(self, request):
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            # create JWT tokens for the new user
            token_serializer = TokenObtainPairSerializer(data={
                'username': request.data.get('username'),
                'password': request.data.get('password'),
            })
            if token_serializer.is_valid():
                return DRFResponse(token_serializer.validated_data, status=status.HTTP_201_CREATED)
            else:
                # tokens couldn't be created but user exists — return created
                return DRFResponse({'detail': 'User created but token generation failed.'}, status=status.HTTP_201_CREATED)

        return DRFResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CustomTokenObtainPairView(TokenObtainPairView):
    pass
