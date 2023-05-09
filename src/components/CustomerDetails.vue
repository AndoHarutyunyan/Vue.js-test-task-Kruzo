<template>
  <section>
    <b-modal v-model="toggleModal" :width="640" scroll="keep">
      <div class="card">
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-4">
                {{
                  castomerDetails?.user.first_name +
                  " " +
                  castomerDetails?.user.last_name
                }}
              </p>
              <p class="subtitle is-6">{{ castomerDetails?.gender }}</p>
            </div>
          </div>

          <div class="content">
            <div>
              Balance: <BalanceView :number="castomerDetails?.balance" :format="'$0,0.00'"/>
            </div>
            <small>{{ castomerDetails?.date }}</small>
          </div>
          <ArraySortViewVue
            :tags="castomerDetails?.tags"
            @setTag="(tagArray) => $emit('updateTags', tagArray)"
          />
        </div>
      </div>
    </b-modal>
  </section>
</template>

<script>
import ArraySortViewVue from "./ArraySortView.vue";
import BalanceView from "./BalanceView.vue";

export default {
  components: {
    BalanceView,
    ArraySortViewVue,
  },
  props: {
    castomerDetails: {
      type: Object,
    },
    showModal: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    toggleModal: {
      get: function () {
        return this.showModal;
      },
      set: function () {
        return this.$emit("close");
      },
    },
  },
};
</script>
