import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    customerList: [],
    customerDetalisId: "",
    listCount: 0,
  },
  getters: {
    GET_CUSTOMER_LIST: (state) => state.customerList,
    GET_CUSTOMER_DETALIS: (state) =>
      state.customerList.find((item) => item.id === state.customerDetalisId),
    GET_LIST_COUNT: (state) => state.listCount,
  },
  mutations: {
    SET_LIST_COUNT(state, payload) {
      state.listCount = payload;
    },
    SET_CUSTOMER_LIST(state, payload) {
      state.customerList = payload;
    },
    UPDATE_CUSTOMER_LIST(state, payload) {
      state.customerList = state.customerList.map((item) => {
        if (item.id === payload.id) {
          item = payload;
        }
        return item;
      });
    },
    SET_CUSTOMER_DETALIS_ID(state, payload) {
      state.customerDetalisId = payload;
    },
  },
  actions: {
    async getCustomerList({ commit }, { page, limit }) {
      try {
        const { data, headers } = await axios.get(
          `https://customer-backend-lsqm.onrender.com/customerList?_page=${page}&_limit=${limit}`
          
        );
        commit("SET_LIST_COUNT", Number(headers["x-total-count"]));
        commit("SET_CUSTOMER_LIST", data);
      } catch (error) {
        console.log(error);
      }
    },
    async updateCustomerList({ commit }, { tags, id }) {
      try {
        const { data } = await axios.patch(
          `https://customer-backend-lsqm.onrender.com/customerList/${id}`,
          { tags }
        );
        commit("UPDATE_CUSTOMER_LIST", data);
      } catch (error) {
        console.log(error);
      }
    },
  },
  modules: {},
});
