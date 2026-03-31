from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from .models import Product, Category

# 1. Список всех продуктов
def product_list(request):
    products = Product.objects.all()
    # Создаем список словарей вручную, чтобы вернуть валидный JSON
    products_json = []
    for product in products:
        products_json.append({
            'id': product.id,
            'name': product.name,
            'price': product.price,
            'description': product.description,
            'count': product.count,
            'is_active': product.is_active,
            'category': product.category.name if product.category else None
        })
    return JsonResponse(products_json, safe=False)

# 2. Один продукт по ID
def product_detail(request, id):
    product = get_object_or_404(Product, id=id)
    return JsonResponse({
        'id': product.id,
        'name': product.name,
        'price': product.price,
        'description': product.description,
        'count': product.count,
        'is_active': product.is_active
    })

# 3. Список всех категорий
def category_list(request):
    categories = Category.objects.all()
    categories_json = [{'id': c.id, 'name': c.name} for c in categories]
    return JsonResponse(categories_json, safe=False)

# 4. Одна категория по ID
def category_detail(request, id):
    category = get_object_or_404(Category, id=id)
    return JsonResponse({'id': category.id, 'name': category.name})

# 5. Список продуктов по категории
def category_products(request, id):
    category = get_object_or_404(Category, id=id)
    products = Product.objects.filter(category=category)
    products_json = [{'id': p.id, 'name': p.name, 'price': p.price} for p in products]
    return JsonResponse(products_json, safe=False)