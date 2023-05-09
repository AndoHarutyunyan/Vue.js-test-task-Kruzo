<template>
  <div>
    <hr />
    <b-pagination
      :total="total"
      v-model="current"
      :range-before="rangeBefore"
      :range-after="rangeAfter"
      :order="order"
      :size="size"
      :simple="isSimple"
      :rounded="isRounded"
      :per-page="perPage"
      :icon-prev="prevIcon"
      :icon-next="nextIcon"
      aria-next-label="Next page"
      aria-previous-label="Previous page"
      aria-page-label="Page"
      aria-current-label="Current page"
      :page-input="hasInput"
      :page-input-position="inputPosition"
      :debounce-page-input="inputDebounce"
    >
    </b-pagination>
  </div>
</template>

<script>
export default {
  props: {
    total: {
      type: Number,
    },
    page: {
      type: Number,
      default: 1,
    },
    limit: {
      type: Number,
      default: 10,
    },
  },
  data() {
    return {
      perPage: this.limit,
      rangeBefore: 3,
      rangeAfter: 1,
      order: "is-centered",
      size: "",
      isSimple: false,
      isRounded: true,
      hasInput: false,
      prevIcon: "chevron-left",
      nextIcon: "chevron-right",
      inputPosition: "",
      inputDebounce: "",
    };
  },
  computed: {
    current: {
      get: function () {
        return this.page;
      },
      set: function (value) {
        return this.$emit("changePage", value);
      },
    },
  },
};
</script>
