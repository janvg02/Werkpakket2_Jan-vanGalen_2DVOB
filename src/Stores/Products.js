import {defineStore} from "pinia";
import productsInfo from '@/assets/products.json';

export const useProductsStore = defineStore('products', {
    state: () => ({
        products: productsInfo,
    }),
    actions: {

        getBestProducts() {
            const sortedProducts = this.products.slice().sort((a, b) => b.Stock - a.Stock);
            return sortedProducts.slice(0, 4);
        },
        getAllProducts() {
            return this.products;
        },
        getProductId(productId) {
            return this.products.find(product => product.id === productId);
        },
    },
    methods: {

    }
})