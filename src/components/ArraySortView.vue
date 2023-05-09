<template>
  <div>
    <draggable
      v-model="myArray"
      class="is-flex is-flex-wrap-wrap"
      group="people"
      @start="dragStart"
      @end="dragEnd"
    >
      <b-taglist class="m-0 mr-2" v-for="element in myArray" :key="element.id">
        <b-tag type="is-info">{{ element }}</b-tag>
      </b-taglist>
    </draggable>
    <b-field label="Edit Tags">
      <b-taginput v-model="myArray" type="is-info"> </b-taginput>
    </b-field>
  </div>
</template>

<script>
import draggable from "vuedraggable";
export default {
  components: { draggable },
  props: {
    tags: {
      type: Array,
    },
    castomerId: {
      type: Number,
    },
  },
  data() {
    return {
      drag: false,
    };
  },
  methods: {
    dragStart() {
      this.drag = true;
    },
    dragEnd() {
      this.drag = false;
    },
  },
  computed: {
    myArray: {
      get: function () {
        return this.tags;
      },
      set: function (value) {
        this.$emit("setTag", value);
      },
    },
  },
};
</script>
