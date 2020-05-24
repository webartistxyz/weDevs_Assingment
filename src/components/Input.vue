<template>
  <div :class="{ 'panel-block': panel }">
    <p class="control" :class="{ 'has-icons-left': leftIcon }">
      <input
        class="input"
        type="text"
        :id="inputId"
        v-bind="$attrs"
        v-on="{
          ...$listeners,
          input: (event) => $emit('input', event.target.value),
        }"
        :placeholder="placeHolderText"
      />
      <span class="icon is-left" v-if="isIcon">
        <i class="fa fa-angle-down"></i>
      </span>
    </p>
  </div>
</template>
<script>
export default {
  name: "InputBox",
  model: {
    prop: "value",
    event: "input",
  },
  props: {
    isIcon: {
      default: true,
    },
    leftIcon: {
      default: false,
    },
    panel: {
      default: false,
    },
    placeHolderText: {
      default: "What needs to be done?",
    },
    inputId: {
      default: "inputId_",
    },
  },
};
</script>
<style scoped>
::-webkit-input-placeholder {
  font-style: italic;
}
:-moz-placeholder {
  font-style: italic;
}
::-moz-placeholder {
  font-style: italic;
}
:-ms-input-placeholder {
  font-style: italic;
}
</style>
