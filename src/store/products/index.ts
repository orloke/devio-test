import { createSlice } from '@reduxjs/toolkit';

interface Product {
  title: '';
  description: '';
  price: 0;
  image: '';
}

const initialState = {
  show: false,
  select: '',
  product: {
    title: '',
    description: '',
    price: 0,
    image: '',
  },
  additional: {
    price: 0,
    title: '',
  },
};

const productsSlice = createSlice({
  name: '@products',
  initialState,
  reducers: {
    setModal(state, action) {
      state.show = action.payload;
    },
    changeSelect(state, action) {
      state.select = action.payload;
    },
    takeProduct(state, action) {
      state.product = action.payload;
    },
    selectAdditioanl(state, action) {
      state.additional.price += action.payload.price;
      state.additional.title = action.payload.title;
    },
  },
});

export const { setModal, changeSelect, takeProduct, selectAdditioanl } =
  productsSlice.actions;
export default productsSlice.reducer;
