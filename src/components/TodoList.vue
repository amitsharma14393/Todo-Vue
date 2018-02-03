<template>
  <div>

    <div class="header-section">
      <app-header/>
    </div>

    <div class="tabs-section">
      <ul class="todo-tabs clearfix">
        <li class="tab-item">ALL</li>
        <li class="tab-item">PENDING</li>
        <li class="tab-item">COMPLETED</li>
      </ul>
    </div>

    <div class="todo-list-section">
      <div class="todo-list">
        <todo-item/>
      </div>
      <!-- <div class="todo-empty-list">
        No todo Item Available!
      </div> -->
    </div>

    <div class="add-new-todo-item" v-on:click="addTodo">
      <div class="add-symbol">
        +
      </div>
    </div>

  </div>
</template>

<script>
import AppHeader from './AppHeader';
import TodoItem from './TodoItem';

export default {
  data() {
    return {
      todoList: []
    };
  },
  components: {
    AppHeader,
    TodoItem
  },
  methods: {
    addTodo() {}
  },
  computed: {}
};
</script>

<style lang="scss">
@import '../assets/scss/common/variables';
@import '../assets/scss/common/fonts';
@import '../assets/scss/common/mixins';

.tabs-section {
  margin-top: 50px;
  .todo-tabs {
    width: 100%;
    .tab-item {
      float: left;
      width: 33.33%;
      padding: 16px;
      background: $light-yellow-2;
      cursor: pointer;
      letter-spacing: 1px;
    }
    .tab-item:nth-last-child(1) {
      text-align: right;
    }
  }
}

.todo-list-section {
  .todo-empty-list {
    text-align: center;
    margin-top: 4px;
    padding: 16px;
    font-weight: $bold;
    font-size: $base-title-size;
    letter-spacing: 1px;
  }
}

.add-new-todo-item {
  position: fixed;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  background: $light-yellow-2;
  text-align: center;
  font-size: $add-symbol;
  box-shadow: 2px 2px 2px $base-font-color;
  bottom: 40px;
  right: 40px;
  cursor: pointer;
  .add-symbol {
    padding: 16px;
  }
}
</style>
