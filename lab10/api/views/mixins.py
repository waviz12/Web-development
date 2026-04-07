from rest_framework import mixins, generics
from rest_framework.views import APIView
from rest_framework.response import Response
from api.models import Product, Category
from api.serializers import ProductSerializer, CategorySerializer


# ==================== PRODUCTS ====================

class ProductListAPIView(mixins.ListModelMixin, 
                         mixins.CreateModelMixin, 
                         generics.GenericAPIView):
    """GET: list all products, POST: create new product"""
    
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    
    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)
    
    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)


class ProductDetailAPIView(mixins.RetrieveModelMixin,
                           mixins.UpdateModelMixin,
                           mixins.DestroyModelMixin,
                           generics.GenericAPIView):
    """GET: retrieve product, PUT: update, DELETE: delete"""
    
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    lookup_url_kwarg = 'product_id'
    
    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)
    
    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)
    
    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)


# ==================== CATEGORIES ====================

class CategoryListAPIView(mixins.ListModelMixin,
                          mixins.CreateModelMixin,
                          generics.GenericAPIView):
    """GET: list all categories, POST: create new category"""
    
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    
    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)
    
    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)


class CategoryDetailAPIView(mixins.RetrieveModelMixin,
                            mixins.UpdateModelMixin,
                            mixins.DestroyModelMixin,
                            generics.GenericAPIView):
    """GET: retrieve category, PUT: update, DELETE: delete"""
    
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    lookup_url_kwarg = 'category_id'
    
    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)
    
    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)
    
    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)


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