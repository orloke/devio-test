import { createSlice } from '@reduxjs/toolkit';
import { Additional, Finished, Market, Produto } from '../../types';

const initialState = {
  show: false,
  product: {} as Produto,
  additional: [] as Additional[],
  market: [] as Market[],
  finished: [] as Finished[],
  delivery: [] as Finished[],
};

const productsSlice = createSlice({
  name: '@products',
  initialState,
  reducers: {
    setModal(state, action) {
      state.show = action.payload;
    },
    takeProductModal(state, action) {
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
    addProductMarket(state, action) {
      if (action.payload.title !== '') {
        Object.assign(state, {
          market: [...state.market, action.payload],
        });
      }
    },
    deleteProductMarket(state, action) {
      if (action.payload === 'removeAll') {
        state.market = [];
      }
      const a = state.market.filter(
        item => item.product.id !== action.payload.id,
      );
      state.market = a;
    },
    addForPayment(state, action) {
      if (action.payload.title !== '') {
        const marketFinishedId = {
          ...action.payload,
          id: state.finished.length + 1,
        };
        Object.assign(state, {
          finished: [...state.finished, marketFinishedId],
        });
      }
    },
    deleteForPayment(state, action) {
      const a = state.finished.filter(item => item.id !== action.payload.id);
      state.finished = a;
    },
    addForDelivery(state, action) {
      if (action.payload.title !== '') {
        const addDelivery = {
          ...action.payload,
          id: state.delivery.length + 1,
        };
        Object.assign(state, {
          delivery: [...state.delivery, addDelivery],
        });
      }
    },
    deleteForDelivery(state, action) {
      const a = state.delivery.filter(item => item.id !== action.payload.id);
      state.delivery = a;
    },
  },
});

export const {
  setModal,
  takeProductModal,
  selectAdditioanl,
  removeAdditioanl,
  addProductMarket,
  deleteProductMarket,
  addForPayment,
  deleteForPayment,
  addForDelivery,
  deleteForDelivery,
} = productsSlice.actions;
export default productsSlice.reducer;
