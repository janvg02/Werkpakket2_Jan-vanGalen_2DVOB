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
        getProductId(id){
            return this.products.find(product => product.id === id);
        },

    },
})