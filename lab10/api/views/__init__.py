# ===========================================
# Level 5: Generics (самый простой) - АКТИВЕН
# ===========================================
from .generics import (
    ProductListAPIView,
    ProductDetailAPIView,
    CategoryListAPIView,
    CategoryDetailAPIView,
    CategoryProductsAPIView
)

# ===========================================
# Level 4: Mixins (чтобы активировать - закомментируйте generics и раскомментируйте mixins)
# ===========================================
# from .mixins import (
#     ProductListAPIView,
#     ProductDetailAPIView,
#     CategoryListAPIView,
#     CategoryDetailAPIView,
#     CategoryProductsAPIView
# )

# ===========================================
# Level 3: CBV (чтобы активировать - закомментируйте generics и раскомментируйте cbv)
# ===========================================
# from .cbv import (
#     ProductListAPIView,
#     ProductDetailAPIView,
#     CategoryListAPIView,
#     CategoryDetailAPIView,
#     CategoryProductsAPIView
# )

# ===========================================
# Level 2: FBV (чтобы активировать - закомментируйте generics и раскомментируйте fbv)
# ===========================================
# from .fbv import (
#     products_list as ProductListAPIView,
#     product_detail as ProductDetailAPIView,
#     categories_list as CategoryListAPIView,
#     category_detail as CategoryDetailAPIView,
#     category_products as CategoryProductsAPIView
# )

__all__ = [
    'ProductListAPIView',
    'ProductDetailAPIView',
    'CategoryListAPIView',
    'CategoryDetailAPIView',
    'CategoryProductsAPIView'
]