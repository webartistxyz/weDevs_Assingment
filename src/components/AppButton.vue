<template>
  <button class="button is-small" v-bind="$attrs" v-on="$listeners">
    <slot></slot>
  </button>
</template>
