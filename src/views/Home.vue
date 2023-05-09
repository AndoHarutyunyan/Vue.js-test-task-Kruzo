<template>
  <div>
    <CustomerList :customerListData="GET_CUSTOMER_LIST" />
    <PaginationApp
      :total="GET_LIST_COUNT"
      :page="page"
      :limit="limit"
      @changePage="
        (value) => {
          changePage(value);
        }
      "
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import CustomerList from "./../components/CustomerList.vue";
import PaginationApp from "./../components/PaginationApp";
export default {
  name: "HomeView",
  components: {
    CustomerList,
    PaginationApp,
  },
  data() {
    return {
      page: 1,
      limit: 10,
    };
  },
  methods: {
    ...mapActions(["getCustomerList"]),
    changePage(page) {
      this.page = page;
      this.getCustomerList({ page: this.page, limit: this.limit });
    },
  },
  computed: {
    ...mapGetters(["GET_CUSTOMER_LIST", "GET_LIST_COUNT"]),
  },
  created() {
    this.getCustomerList({ page: this.page, limit: this.limit });
  },
};
</script>
