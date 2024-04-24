import { createSlice } from '@reduxjs/toolkit';

export const shoppingSlice = createSlice({
  name: 'shopping',
  initialState: {
    list: [], // Agrega una lista vacía
    loaded: false,
  },
  reducers: {
    addToShop: (state, action) => {},
  },
});

// Exporta las acciones fuera del objeto shoppingSlice
export const { addToShop } = shoppingSlice.actions;
