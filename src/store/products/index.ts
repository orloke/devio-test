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
        item => item.product.id !== action.payload.id,
      );
      state.market = a;
    },
    toFinished(state, action) {
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
    removeFinished(state, action) {
      const a = state.finished.filter(item => item.id !== action.payload.id);
      state.finished = a;
    },
    toDelivery(state, action) {
      if (action.payload.title !== '') {
        Object.assign(state, {
          delivery: [...state.delivery, action.payload],
        });
      }
    },
    removeDelivery(state, action) {
      const a = state.delivery.filter(item => item.id !== action.payload.id);
      state.delivery = a;
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
  toFinished,
  removeFinished,
  toDelivery,
  removeDelivery,
} = productsSlice.actions;
export default productsSlice.reducer;
