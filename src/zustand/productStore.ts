import create from 'zustand';

export const productStore = create((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
  addProduct: (product) => set((state) => ({ products: [...state.products, product] })),
  updateProduct: (updatedProduct) => set((state) => ({
    products: state.products.map((product) =>
      product.id === updatedProduct.id ? updatedProduct : product
    ),
  })),
  removeProduct: (id) => set((state) => ({
    products: state.products.filter((product) => product.id !== id),
  })),
}));