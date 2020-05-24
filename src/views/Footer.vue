<template>
  <div
    class="columns is-vcentered"
    style="margin-top: .02rem;border-top: 1px solid #EDEDED"
  >
    <div class="column is-3">
      <span>{{ listLength }} {{ listLength > 1 ? "items" : "item" }} left</span>
    </div>

    <div class="column is-5">
      <div class="button_style">
        <app-button
          @click="$emit('listCondition', 'all')"
          :class="$parent.listCondition == 'all' ? 'is-active' : ''"
          >All</app-button
        >
        <app-button
          @click="$emit('listCondition', 'active')"
          :class="$parent.listCondition == 'active' ? 'is-active' : ''"
          >Active</app-button
        >
        <app-button
          @click="$emit('listCondition', 'completed')"
          :class="$parent.listCondition == 'completed' ? 'is-active' : ''"
          >Completed</app-button
        >
      </div>
    </div>
    <div class="column is-4 has-text-right" v-if="selected_items.length">
      <app-button @click="$emit('clear')">Clear Completed</app-button>
    </div>
  </div>
</template>

<script>
import AppButton from "../components/AppButton";

export default {
  name: "Footer",
  components: {
    AppButton,
  },
  props: {
    listLength: {
      required: true,
      type: Number,
    },
    selected_items: {
      required: false,
      type: Array,
    },
  },
};
</script>
<style scoped>
button {
  color: #83807f;
}
.button_style {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
