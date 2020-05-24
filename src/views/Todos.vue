<template>
  <nav class="panel column is-offset-3 is-6">
    <div class="outside" @click="closeAllInput()"></div>
    <span @click="closeAllInput()" class="zindex">
      <Header />
      <InputBox
        :isIcon="todoLists.length"
        :leftIcon="true"
        :panel="true"
        v-model="userInput"
        @keyup.enter="onEnter()"
      />
    </span>

    <TodoLists
      ref="itemList"
      :todoLists="todoLists"
      :listCondition="listCondition"
      @deleteItem="deleteItem"
      @selected_items="(items) => (this.selected_items = items)"
      @close_input="(index) => closeInput(index)"
      v-if="todoLists.length"
    />

    <span @click="closeAllInput()" class="zindex">
      <Footer
        :listLength="actualListLength"
        :selected_items="selected_items"
        @clear="clearCompleted()"
        @listCondition="(condition) => (this.listCondition = condition)"
        v-if="todoLists.length"
      />
    </span>
  </nav>
</template>

<script>
import Header from "./Header";
import TodoLists from "./List";
import Footer from "./Footer";
export default {
  name: "Todos",
  components: {
    Header,
    TodoLists,
    Footer
  },
  directives: {
    // ClickOutside,
  },
  data() {
    return {
      userInput: "",
      todoLists: [],
      selected_items: [],
      listCondition: "all"
    };
  },
  computed: {
    actualListLength() {
      var x = 0;
      this.todoLists.forEach(item => {
        if (!this.selected_items.includes(item.id)) {
          x++;
        }
      });
      return x;
    }
  },
  methods: {
    onEnter() {
      let uniqueId = Math.floor(Math.random() * 9999) + 1000 + Date.now();
      this.todoLists.push({ id: uniqueId, item: this.userInput, input: false });
      this.userInput = "";
    },
    deleteItem(id) {
      this.todoLists = this.todoLists.filter(list => {
        return list.id != id;
      });
    },
    clearCompleted() {
      this.todoLists = this.todoLists.filter(list => {
        return !this.selected_items.includes(list.id);
      });
      this.$refs.itemList.selected = [];
    },
    closeInput(itemIndex) {
      this.todoLists.forEach((item, index) => {
        if (itemIndex != index) item.input = false;
      });
    },
    closeAllInput() {
      this.todoLists.forEach((item, index) => {
        item.input = false;
      });
    }
  }
};
</script>

<style>
span {
  color: #83807f;
}
.outside {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0px;
  left: 0px;
}
.zindex {
  z-index: 99999;
}
</style>
