from drf_yasg import openapi
from .serializers import *

content_get_response = {
    "200" : openapi.Response(
        description="Success",
        schema=DocumentSerializer,
        examples={
            "application/json": {
                "document":[
                    {
                        "id" : 1,
                        "title" : "This is TITLE",
                        "descripton" : "This is description"

                    },
                    {
                        "id" : 2,
                        "title" : "이건 타이틀입니다!",
                        "descripton" : "이건 컨텐츠입니다!"
                    }
                ]
            }
        }
    )
}

contentDetail_get_response = {
    "200" : openapi.Response(
        description="Success",
        schema=DocumentSerializer,
        examples={
            "application/json": {
                "document":
                    {
                        "id" : 1,
                        "title" : "This is TITLE",
                        "descripton" : "This is description"

                    }       
            }
        }
    )
}

contentDetail_post_response = {
    "200" : openapi.Response(
        description="Success",
        schema=DocumentSerializer,
        examples={
            "application/json": {
                "document":
                    {
                        "id" : 1,
                        "title" : "This is TITLE",
                        "descripton" : "This is description"

                    }       
            }
        }
    )
}

search_response = {
    "200" : openapi.Response(
        description="Success",
        schema=DocumentSerializer,
        examples={
            "application/json" : {
                "document":[
                    {
                        "id" : 1,
                        "title" : "This is TITLE",
                        "descripton" : "This is description"

                    },
                    {
                        "id" : 2,
                        "title" : "이건 타이틀입니다!",
                        "descripton" : "이건 컨텐츠입니다!"
                    }
                ]
            }
        }
    )
}

admin_response = {
    "200" : openapi.Response(
        description="Success",
        schema=TableSerializer,
        examples={
            "application/json" : {
                "table":[
                    {
                        "token" : "검색어",
                        "title" : "1,3,4,5",

                    },
                    {
                        "token" : "장고",
                        "title" : "8,9,10",
                    }
                ]
            }
        }
    )
}