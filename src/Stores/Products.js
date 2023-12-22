import {defineStore} from "pinia";
import productsInfo from '@/assets/products.json';

export const useProductsStore = defineStore('products', {
    state: () => ({
        products: productsInfo,
        selectedProduct: 0

    }),
    actions: {
        getBestProducts() {
            const sortedProducts = this.products.slice().sort((a, b) => b.Stock - a.Stock);
            return sortedProducts.slice(0, 3);
        },
        getAllProducts() {
            return this.products;
        },
        getProductId(id) {
            return this.products.find(product => product.id === id);
        },
        async fetchProducts() {
            try {
                const response = await fetch('@/assets/products.json');
                const data = await response.json();
                this.setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        },
        setProducts(products) {
            this.products = products;
        },
        addToCart(product) {
            const quantityString = prompt(`How many ${product.name} would you like to add to your cart?`, '1');
            const quantity = parseInt(quantityString);

            if (isNaN(quantity) || quantity <= 0) {
                alert('Please enter a valid quantity.');
                return;
            }

            const isProductInCart = this.cart.some(product => product.id === product.id);

            if (isProductInCart) {
                const existingProduct = this.cart.find(product => product.id === product.id);

                if (existingProduct.quantity + quantity > product.Stock) {
                    alert(`Sorry, there are only ${product.Stock} units available in stock.`);
                    return;
                }

                existingProduct.quantity += quantity;
            } else {
                if (quantity > product.Stock) {
                    alert(`Sorry, there are only ${product.Stock} units available in stock.`);
                    return;
                }

                this.cart.push({ ...product, quantity });
            }

            // Display success message after adding the product to the cart
            alert('Product toegevoegd aan winkelmandje!');
        },
        removeItemFromCart(productId) {
            const index = this.cart.findIndex(item => item.id === productId);
            if (index !== -1) {
                this.cart.splice(index, 1);
            }
        },
        plusItemQuantity(productId) {
            const product = this.cart.find(item => item.id === productId);

            if (product) {
                if (product.quantity + 1 > product.Stock) {
                    alert(`Sorry, there are only ${product.Stock} units available in stock.`);
                    return;
                }

                product.quantity += 1;
            }
        },

        minItemQuantity(productId) {
            const product = this.cart.find(item => item.id === productId);

            if (product && product.quantity > 1) {
                product.quantity -= 1;
            }
        },
        },

})