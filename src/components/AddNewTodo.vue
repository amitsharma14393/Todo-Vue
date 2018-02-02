<template>
  <div>

    <div class="overlay"></div>

    <div class="modal-container">

      <!-- MODAL HEADER STARTS -->
      <div class="modal-header">
        <div class="modal-title">
          Add New Todo
        </div>
        <div class="modal-close">
          X
        </div>
      </div> <!-- MODAL HEADER ENDS -->

      <!-- MODAL BODY STARTS -->
      <div class="modal-body">
        <div class="todo-input-section">
          <div class="todo-label">Enter Task Name</div>
          <div class="todo-input-control">
              <input type="text" class="input-control" placeholder="Task Name..." v-model="Task">
          </div>
        </div>
        <div class="todo-input-section">
          <div class="todo-label">Enter Description</div>
          <div class="todo-input-control">
            <input type="text" class="input-control" placeholder="Description..." v-model="Description">
          </div>
        </div>
        <div class="todo-input-section">
          <div class="todo-label">Choose status</div>
          <div class="todo-input-control">
            <input type="radio" name="todo-status" value="pending" v-model="status">
            <input type="radio" name="todo-status" value="completed" v-model="status">
          </div>
        </div>
      </div><!-- MODAL BODY ENDS -->

      <!-- MODAL FOOTER STARTS -->
      <div class="modal-footer">
        <div class="add-todo">
          <button class="btn-add" v-on:click="addNewTodo"> ADD </button>
        </div>
        <div class="exit-todo">
          <button class="btn-exit" v-on:click="exit"> EXIT </button>
        </div>
      </div> <!-- MODAL FOOTER ENDS -->

    </div>
  </div>
</template>

<script>
import { EVENTS } from '../common/constant';

export default {
  props:{
    type:Object
  },
  data(){
    return {
      task:'',
      description:'',
      status:'',
      createdAt:''
    }
  },
  methods:{
    addNewTodo() {
      const todoItem = {
        task:this.task,
        description: this.description,
        status: this.status,
        createdAt: this.createdAt
      }
      this.$emit( EVENTS.ADD_TODO, todoItem);
    },
    exit(){
      this.task = '';
      this.description = '';
      this.status = '';
      this.createdAt = '';
      // also exit
    }
  },
  computed:{

  }
};
</script>

<style lang="scss">
@import '../assets/scss/partials/_colors.scss';
@import '../assets/scss/partials/_mixins.scss';
@import '../assets/scss/partials/_fonts.scss';

.overlay {
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.8);
}

.modal-container {
  width: 100%;

  .modal-header {
    background-color: $bright-yellow-1;
    font-size: $title-size;

    .modal-title {
      float: left;
      width: 80%;
      padding: 16px;
      text-align: left;
    }

    .modal-close {
      float: right;
      width: 20%;
      padding: 16px;
      text-align: center;
    }

    &:after {
      @include clear-both;
    }
  }

  .modal-body {
    width: 100%;

    .todo-input-section {
      width: 100%;
      .todo-label {
        width: 25%;
        font-size: $base-size;
      }
      .todo-input-control {
        width: 75%;
      }
      &::after {
        @include clear-both;
      }
    }
  }

  .modal-footer {
    width: 100%;

    .add-todo {
      float: left;
      width: 50%;
    }

    .exit-todo {
      float: left;
      width: 50%;
    }

    &::after {
      @include clear-both;
    }
  }
}

.input-control {
  width: 100%;
  @include default-input-control;
}

.btn-add,
.btn-exit {
  @include default-button-control;
}
</style>
