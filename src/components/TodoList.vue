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

    <div class="add-new-todo-item" v-on:click="showTodoDialogBox = true">
      <div class="add-symbol">
        +
      </div>
    </div>

    <div v-show="showTodoDialogBox">
      <add-new-todo />
    </div>

  </div>
</template>

<script>
import AppHeader from './AppHeader';
import TodoItem from './TodoItem';
import AddNewTodo from './AddNewTodo';
import { SUBSCRIBE_EVENT, PUBLISH_EVENT } from '../common/eventManager'
import { EVENTS } from '../common/constant';

export default {
  data() {
    return {
      todoList: [],
      showTodoDialogBox: false
    };
  },
  components: {
    AppHeader,
    TodoItem,
    AddNewTodo
  },
  methods: {
    addTodo() {

    },
    closeModal() {
      this.showTodoDialogBox = false;
    },
    subscribeEvents() {
     SUBSCRIBE_EVENT(EVENTS.CLOSE_MODAL, this.closeModal);
     SUBSCRIBE_EVENT('test', function(data){ console.log('in subscribe:',data);})
    }
  },
  computed: {},
  created() {
    this.subscribeEvents();
  }
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

.active-tab {
  background: $active-tab-color;
  border-bottom: 3px solid $base-font-color;
}
</style>
