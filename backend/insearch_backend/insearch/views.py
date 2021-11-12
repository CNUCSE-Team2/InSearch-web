from logging import error
from django.http.response import JsonResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.views import APIView
from .Insearch import *
from http import HTTPStatus

from drf_yasg import openapi
from drf_yasg.utils import swagger_auto_schema

from rest_framework.decorators import api_view

@swagger_auto_schema(method="get")
@api_view(['GET'])
def contentList(request):
    #contents
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
                - content : string
            ]
            
    """
    error_data = {}

def addContent(request):
    #contents
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


def contentDetailPage(request):
    #contents/<int: id>
    """
        content 상세보기 페이지

        ---
        ## Method : GET
        ## URL : contents/<int:id>
        ## Request
        ## Response
        - id : int
        - title : string
        - content : string
            
    """
    error_data = {}

def updateContent(request):
    #contents/<int:id>
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

def deleteContent(request):
    #contents/<int:id>
    """
        Content 삭제

        ---
        ## Method : DELETE
        ## URL : contents/<int:id>
        ## Request
        ## Response
    """
    error_data = {}

def search(request):
    #search
    """
        검색

        ---
        ### Method : GET
        ## URL : search
        ## Request
        - search : "String"
        ## Response
        [
            - id : int
            - title : string
            - description : string
        ]
          
    """
    
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