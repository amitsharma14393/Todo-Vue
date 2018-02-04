<template>
  <div>
    <div class="overlay" v-on:click="closeModal"></div>
    <div class="modal-container">
      <div class="modal">
        <!-- MODAL HEADER STARTS -->
        <div class="modal-header clearfix">
          <div class="modal-title">
            Add New Todo
          </div>

        </div> <!-- MODAL HEADER ENDS -->

        <!-- MODAL BODY STARTS -->
        <div class="modal-body">
          <div class="todo-input-section clearfix">
            <div class="todo-input-control-block">
                <div class="todo-input-box">
                  <input type="text" class="input-control reset-input-control" placeholder="Enter Task Name..." v-model="task">
                </div>
            </div>
          </div>
          <div class="todo-input-section clearfix">
            <div class="todo-input-control-block">
              <div class="todo-input-box">
                <input type="text" class="input-control reset-input-control" placeholder="Enter Description..." v-model="description">
              </div>
            </div>
          </div>
          <div class="todo-input-section clearfix">
            <div class="todo-label">Choose Status</div>
            <div class="todo-input-control-block">
              <label class="radio-button-container">
                Pending
                <input type="radio" name="todo-status" value="pending" checked="checked" class="native-radio-control" v-model="status">
                <span class="custom-radio-control"></span>
              </label>
              <label class="radio-button-container">
                Completed
                <input type="radio" name="todo-status" value="completed" class="native-radio-control" v-model="status">
                <span class="custom-radio-control"></span>
              </label>
            </div>
          </div>
        </div><!-- MODAL BODY ENDS -->
        <!-- MODAL FOOTER STARTS -->
        <div class="modal-footer clearfix">
          <div class="add-todo">
            <button class="btn-add reset-button-control" v-on:click="addNewTodo"> DONE </button>
          </div>
          <div class="exit-todo">
            <button class="btn-exit reset-button-control" v-on:click="exit"> CANCEL </button>
          </div>
        </div> <!-- MODAL FOOTER ENDS -->
      </div>
    </div>
  </div>
</template>

<script>
import { EVENTS } from '../common/constant';
import { PUBLISH_EVENT } from '../common/eventManager';

export default {
  // props:{
  //   type:Object
  // },
  data() {
    return {
      task: '',
      description: '',
      status: '',
      createdAt: ''
    };
  },
  methods: {
    addNewTodo() {
      const todoItem = {
        task: this.task,
        description: this.description,
        status: this.status,
        createdAt: this.createdAt
      };
      this.$emit(EVENTS.ADD_TODO, todoItem);
    },
    exit() {
      this.task = '';
      this.description = '';
      this.status = '';
      this.createdAt = '';
      // also exit
    },
    closeModal() {
      PUBLISH_EVENT(EVENTS.CLOSE_MODAL);

      PUBLISH_EVENT('test', 'hi');
    }
  },
  computed: {}
};
</script>

<style lang="scss">
@import '../assets/scss/common/fonts';
@import '../assets/scss/common/mixins';
@import '../assets/scss/common/utility';
@import '../assets/scss/common/variables';
@import '../assets/scss/common/radiobutton';

.overlay {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: $app-overlay-z-index;
}

.modal-container {
  width: 100%;
  position: fixed;
  padding: 16px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: $app-modal-z-index;
  .modal {
    background: #fff;
    border-radius: 2px;
    .modal-header {
      background-color: $light-yellow-2;
      font-size: $base-font-size;

      .modal-title {
        float: left;
        width: 80%;
        padding: 16px;
        text-align: left;
        letter-spacing: 0.5px;
        font-weight:$bold;
      }

      .modal-close {
        float: right;
        width: 20%;
        padding: 16px;
        text-align: center;
      }
    }

    .modal-body {
      width: 100%;
      .todo-input-section {
        width: 100%;
        .todo-label {
          float: left;
          width: 50%;
          padding: 0px 16px;
          font-size: $base-font-size;
          letter-spacing: 0.5px;
          font-weight: $bold;
        }
        .todo-input-control {
          float: left;
          padding: 16px;
          width: 50%;
          letter-spacing: 0.5px;
          font-size: $base-font-size;
        }
        .todo-input-control-block {
          float: left;
          padding: 16px;
          letter-spacing: 0.8px;
          font-size: $base-font-size;
          width: 100%;
          .todo-input-box {
            border-bottom: 1px solid $border-color;
            width: 100%;
            padding-bottom: 5px;
          }
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
    }
  }
}

.input-control {
  width: 100%;
}

</style>
