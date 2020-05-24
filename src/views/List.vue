<template>
  <div>
    <a
      class="panel-block"
      style="cursor: auto"
      v-for="(list, index) in todoLists"
      :key="index"
      v-if="listCondition == 'all'"
    >
      <div class="column is-12 check_box_and_text" v-if="list.input">
        <div style="width: 27px"></div>
        <InputBox
          style="width: 100%"
          :isIcon="false"
          v-model="list.item"
          :inputId="'inputId_' + index"
          @keyup.enter="list.input = false"
        />
      </div>
      <div v-if="!list.input" class="column is-12 check_box_and_text zindex">
        <span style="padding-right: .02rem">
          <p-check v-model="selected" :value="list.id" class="p-default p-round p-bigger"></p-check>
        </span>
        <span
          class="todo_text"
          @click="(list.input = true), emitAndFocus(index)"
          :class="selected.includes(list.id) ? 'delete_text' : ''"
        >{{ list.item }}</span>
        <div class="trash_icon" @click="$emit('deleteItem', list.id)">
          <i class="fa fa-times" style="color: #C8AEB1"></i>
        </div>
      </div>
    </a>
    <a
      class="panel-block"
      style="cursor: auto"
      v-for="(list, index) in todoLists"
      :key="index"
      v-if="listCondition == 'active' && !selected.includes(list.id)"
    >
      <div class="column is-12 check_box_and_text" v-if="list.input">
        <div style="width: 27px"></div>
        <InputBox
          style="width: 100%"
          :isIcon="false"
          v-model="list.item"
          :inputId="'inputId_' + index"
          @keyup.enter="list.input = false"
        />
      </div>
      <div v-if="!list.input" class="column is-12 check_box_and_text zindex">
        <span style="padding-right: .02rem">
          <p-check v-model="selected" :value="list.id" class="p-default p-round p-bigger"></p-check>
        </span>
        <span class="todo_text" @click="(list.input = true), emitAndFocus(index)">{{ list.item }}</span>
        <div class="trash_icon" @click="$emit('deleteItem', list.id)">
          <i class="fa fa-times" style="color: #C8AEB1"></i>
        </div>
      </div>
    </a>
    <a
      class="panel-block"
      style="cursor: auto"
      v-for="(list, index) in todoLists"
      :key="index"
      v-if="listCondition == 'completed' && selected.includes(list.id)"
    >
      <div v-if="!list.input" class="column is-12 check_box_and_text zindex">
        <span style="padding-right: .02rem">
          <p-check v-model="selected" :value="list.id" class="p-default p-round p-bigger"></p-check>
        </span>
        <span
          class="todo_text"
          :class="selected.includes(list.id) ? 'delete_text' : ''"
        >{{ list.item }}</span>
        <div class="trash_icon" @click="$emit('deleteItem', list.id)">
          <i class="fa fa-times" style="color: #C8AEB1"></i>
        </div>
      </div>
    </a>
  </div>
</template>
<script>
export default {
  name: "List",
  props: {
    todoLists: {
      required: true,
      type: Array
    },
    listCondition: {
      default: "all",
      type: String
    }
  },
  data() {
    return {
      selected: []
    };
  },
  watch: {
    selected() {
      this.$emit("selected_items", this.selected);
    }
  },
  methods: {
    emitAndFocus(index) {
      this.$emit("close_input", index);
      setTimeout(() => {
        document.getElementById("inputId_" + index).focus();
      }, 0.05);
    }
  }
};
</script>
<style scoped>
.check_box_and_text {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.trash_icon {
  visibility: hidden;
}
a:hover .trash_icon {
  visibility: visible;
  cursor: pointer;
}
.todo_text {
  cursor: pointer;
  font-size: 25px;
  width: 93%;
}
.delete_text {
  text-decoration: line-through;
  color: #e6e5e8;
}
.zindex {
  width: 100% !important;
  z-index: 99999 !important;
}
</style>
