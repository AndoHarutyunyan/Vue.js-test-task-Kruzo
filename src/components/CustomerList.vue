<template>
  <div>
    <section>
      <b-table
        @click="viewCustomerInfo($event.id)"
        :data="customerListData"
        :default-sort-direction="modalProperties.defaultSortDirection"
        :sort-icon="modalProperties.sortIcon"
        :sort-icon-size="modalProperties.sortIconSize"
        default-sort="user.first_name"
        class="is-clickable is-hoverable is-primary"
      >
        <b-table-column
          field="id"
          label="ID"
          width="40"
          sortable
          numeric
          v-slot="props"
        >
          {{ props.row.id }}
        </b-table-column>

        <b-table-column
          field="user.first_name"
          label="First Name"
          sortable
          v-slot="props"
        >
          {{ props.row.user.first_name }}
        </b-table-column>

        <b-table-column
          field="user.last_name"
          label="Last Name"
          sortable
          v-slot="props"
        >
          {{ props.row.user.last_name }}
        </b-table-column>

        <b-table-column
          field="date"
          label="Date"
          sortable
          centered
          v-slot="props"
        >
          <span class="tag is-success">
            {{ new Date(props.row.date).toLocaleDateString() }}
          </span>
        </b-table-column>
        <b-table-column field="balance" label="Balance" sortable v-slot="props">
          <balance-view :number="props.row.balance" :format="'$0,0.00'" />
        </b-table-column>
        <b-table-column field="tags" label="Tags" v-slot="props">
          {{ cusomertTags(props.row.tags) }}
        </b-table-column>
      </b-table>
    </section>

    <CustomerDetails
      :show-modal="hasModalCard"
      @close="hasModalCard = false"
      :castomer-details="GET_CUSTOMER_DETALIS"
      @updateTags="updateTags"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import BalanceView from "./BalanceView.vue";
import CustomerDetails from "./CustomerDetails.vue";

export default {
  name: "HomeView",
  components: {
    CustomerDetails,
    BalanceView,
  },
  props: {
    customerListData: {
      type: Array,
    },
  },
  data() {
    return {
      modalProperties: {
        defaultSortDirection: "asc",
        sortIcon: "arrow-up",
        sortIconSize: "is-small",
      },
      hasModalCard: false,
    };
  },
  methods: {
    ...mapMutations(["SET_CUSTOMER_DETALIS_ID"]),
    ...mapActions(["updateCustomerList"]),
    viewCustomerInfo(id) {
      this.SET_CUSTOMER_DETALIS_ID(id);
      this.hasModalCard = true;
    },
    updateTags(tags) {
      this.updateCustomerList({ tags, id: this.GET_CUSTOMER_DETALIS.id });
    },
    cusomertTags(tags) {     
      return tags.length>=2? tags[0]+ ' | '+tags[1]:tags.length===1?tags[0]: ' - '
    },
  },
  computed: {
    ...mapGetters(["GET_CUSTOMER_DETALIS"]),
  },
};
</script>
