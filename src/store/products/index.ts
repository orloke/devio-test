import { createSlice } from '@reduxjs/toolkit';
import { Additional, Market, Produto } from '../../types';

const initialState = {
  show: false,
  product: {} as Produto,
  additional: [] as Additional[],
  market: [] as Market[],
};

const productsSlice = createSlice({
  name: '@products',
  initialState,
  reducers: {
    setModal(state, action) {
      state.show = action.payload;
    },
    takeProduct(state, action) {
      state.product = action.payload;
    },
    selectAdditioanl(state, action) {
      if (action.payload.title !== '') {
        Object.assign(state, {
          additional: [...state.additional, action.payload],
        });
      }
    },
    removeAdditioanl(state, action) {
      if (action.payload === 'removeAll') {
        state.additional = [];
      }
      const a = state.additional.filter(
        item => item.title !== action.payload.title,
      );
      state.additional = a;
    },
    selectProduct(state, action) {
      if (action.payload.title !== '') {
        Object.assign(state, {
          market: [...state.market, action.payload],
        });
      }
    },
    removeProduct(state, action) {
      if (action.payload === 'removeAll') {
        state.market = [];
      }
      const a = state.market.filter(
        item => item.product.title !== action.payload.title,
      );
      state.market = a;
    },
  },
});

export const {
  setModal,
  takeProduct,
  selectAdditioanl,
  removeAdditioanl,
  selectProduct,
  removeProduct,
} = productsSlice.actions;
export default productsSlice.reducer;
