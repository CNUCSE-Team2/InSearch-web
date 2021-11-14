from logging import error
from typing import OrderedDict
from django.http import response
from django.http.response import JsonResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.views import APIView
from http import HTTPStatus
from InSearchLibrary.InSearch import *
from drf_yasg import openapi
from drf_yasg.utils import no_body, swagger_auto_schema

from rest_framework.decorators import api_view

from .response_schema import *

class Content(APIView):
    @swagger_auto_schema(responses=content_get_response)
    def get(self, request, *args, **kwargs):
        """
            메인화면 -> contents list 보여줌
        
            ---
            ## Method : GET
            ## URL : contents
            ## Request
            ## Response
            ### Document List
            [                
                - id : int
                - title : string
            ]
            
        """
        documentsList = Document.objects.all()
        
        response = OrderedDict()
        document_response = []
        for document in documentsList:
            document_json = OrderedDict()
            document_data = DocumentSerializer(document).data
            document_json["id"] = document_data["id"]
            document_json["title"] = document_data["title"]
            document_response.append(document_json)
        
        response["document"] = document_response
        

        return JsonResponse(response, safe=False)


    @swagger_auto_schema(request_body=DocumentNoIdSerializer)
    def post(self, request, *args, **kwargs):
        """
            Content 추가

            ---
            ## Method : PUT
            ## URL : contents
            ## Request
            - title : string
            - description : string
            ## Response

        """
        error_data = {}

class ContentDetail(APIView):
    @swagger_auto_schema(responses=contentDetail_get_response)
    def get(self, request, *args, **kwargs):
        """
            content 상세보기 페이지

            ---
            ## Method : GET
            ## URL : contents/<int:id>
            ## Request
            ## Response
            - id : int
            - title : string
            - description : string
                
        """
        error_data = {}
    @swagger_auto_schema(request_body=DocumentNoIdSerializer, responses=contentDetail_post_response)
    def put(self, request, *args, **kwargs):
        """
            content 업데이트

            ---
            ## Method : POST
            ## URL : contents
            ## Request
            ### Document
            - title : string
            - description :string
            ## Response
            ### Document
            - id : int
            - title : string
            - description : string
        """

        error_data = {}
    @swagger_auto_schema(request_body=no_body)    
    def delete(self, request, *args, **kwargs):
        """
            Content 삭제

            ---
            ## Method : DELETE
            ## URL : contents/<int:id>
            ## Request
            ## Response
        """
        error_data = {}

@swagger_auto_schema(method="POST",request_body=QuerySerializer,responses=search_response)
@api_view(['POST'])
def search(request):
    #search
    """
        검색

        ---
        ### Method : GET
        ## URL : search
        ## Request
        - query : "String"
        ## Response
        [
            - id : int
            - title : string
            - description : string
        ]
          
    """

@swagger_auto_schema(method="get",responses=admin_response)
@api_view(['GET'])
def adminPage(request):
    #admin
    """
        관리자페이지 -> 테이블을 보여줌

        ---
        ## Method : GET
        ## URL : admin
        ## Request
        ## Response
        [
            -token : string
            -document_id_list : string
        ]
    """
    error_data = {}