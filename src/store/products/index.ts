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
    setChangeModal(state, action) {
      state.show = action.payload;
    },
    takeProductModal(state, action) {
      state.product = action.payload;
    },
    addAdditioanl(state, action) {
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
      const newAdditional = state.additional.filter(
        item => item.title !== action.payload.title,
      );
      state.additional = newAdditional;
    },
    addProductMarket(state, action) {
      Object.assign(state, {
        market: [...state.market, action.payload],
      });
    },
    deleteProductMarket(state, action) {
      if (action.payload === 'removeAll') {
        state.market = [];
      }
      const newMarket = state.market.filter(
        item => item.product.id !== action.payload.id,
      );
      state.market = newMarket;
    },
    addForPayment(state, action) {
      const marketFinishedId = {
        ...action.payload,
        id: state.finished.length + 1,
      };
      Object.assign(state, {
        finished: [...state.finished, marketFinishedId],
      });
    },
    deleteForPayment(state, action) {
      const newFinished = state.finished.filter(
        item => item.id !== action.payload.id,
      );
      state.finished = newFinished;
    },
    addForDelivery(state, action) {
      const addDelivery = {
        ...action.payload,
        id: state.delivery.length + 1,
      };
      Object.assign(state, {
        delivery: [...state.delivery, addDelivery],
      });
    },
    deleteForDelivery(state, action) {
      const newDelivery = state.delivery.filter(
        item => item.id !== action.payload.id,
      );
      state.delivery = newDelivery;
    },
  },
});

export const {
  setChangeModal,
  takeProductModal,
  addAdditioanl,
  removeAdditioanl,
  addProductMarket,
  deleteProductMarket,
  addForPayment,
  deleteForPayment,
  addForDelivery,
  deleteForDelivery,
} = productsSlice.actions;
export default productsSlice.reducer;
