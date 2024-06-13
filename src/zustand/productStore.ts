import {create} from 'zustand';

export const productStore = create((set) => ({
  product: [],
  addProduct: (product) => set((state) => ({ products: [...state.products, product] })),

}));