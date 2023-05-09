<template>
  <span>
    {{ number ? formattedNumber(number) : 0 }}
  </span>
</template>

<script>
import numeral from "numeral";

export default {
  props: {
    number: {
      type: Number,
      default: 0,
    },
    format:{
      type:String
    }
  },
  methods: {
    formattedNumber(number) {
      return numeral(number).format(this.format);
    },
  },
};
</script>