import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
    state: () => ({
        cartItems: [],
    }),

    getters: {
        totalCart() {
            return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
        },
    },

    actions: {
        addToCart(product) {
            const existingItem = this.cartItems.find(item => item.id === product.id);

            if (existingItem) {
                existingItem.quantity++;
            } else {
                this.cartItems.push({ ...product, quantity: 1 });
            }
        },

        removeFromCart(productId) {
            this.cartItems = this.cartItems.filter(item => item.id !== productId);
        },

        updateNumber(productId, newQuantity) {
            const itemToUpdate = this.cartItems.find(item => item.id === productId);

            if (itemToUpdate) {
                itemToUpdate.quantity = newQuantity;
            }
        },

        clearCart() {
            this.cartItems = [];
        },
    },
});