from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from api.models import Product, Category
from api.serializers import ProductSerializer, CategorySerializer


# ==================== PRODUCTS ====================

class ProductListAPIView(generics.ListCreateAPIView):
    """GET: list all products, POST: create new product"""
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class ProductDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    """GET: retrieve product, PUT: update, DELETE: delete"""
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    lookup_url_kwarg = 'product_id'


# ==================== CATEGORIES ====================

class CategoryListAPIView(generics.ListCreateAPIView):
    """GET: list all categories, POST: create new category"""
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class CategoryDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    """GET: retrieve category, PUT: update, DELETE: delete"""
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    lookup_url_kwarg = 'category_id'


class CategoryProductsAPIView(APIView):
    """GET: list all products in a specific category"""
    
    def get(self, request, category_id):
        try:
            category = Category.objects.get(id=category_id)
            products = category.products.all()
            serializer = ProductSerializer(products, many=True)
            return Response({
                'category': CategorySerializer(category).data,
                'products': serializer.data,
                'count': products.count()
            })
        except Category.DoesNotExist:
            return Response({'error': 'Category not found'}, status=404)