<template>
  <div>
    <div class="todo-app">
      <!-- <icon name="search"></icon> -->
      <div class="header-section">

        <div class="app-title-section">
          <div class="back-button">
          </div>
          <div class="header-title">
            Vue Todo
          </div>
        </div>

        <div class="header-actions">
           <div class="header-search">
            <icon name="search"></icon>
          </div>
          <div class="header-options">
            <div class="dot first"></div>
            <div class="dot second"></div>
            <div class="dot third"></div>
          </div>
        </div>

      </div>

      <div class="main-section">
        <ul class="main-tabs">
            <li class="list-item">ALL</li>
            <li class="list-item">Pending</li>
            <li class="list-item">Completed</li>
        </ul>
        <div class="todo-items">
          No todo item Available!
        </div>
        <div class="add-new-todo">
          +
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import AddTodo from './AddTodo';

export default {
  components: {
    AddTodo
  }
};
</script>

<style lang="scss">
@import '../assets/scss/partials/_colors.scss';
@import '../assets/scss/partials/_fonts.scss';
@import '../assets/scss/partials/_mixins.scss';

.todo-app {
  width: 100%;
  position: relative;

  .header-section {
    // background-color:$bright-yellow-1;
    height: 33px;
    padding: 4px 0px;
    position: fixed;
    top: 16px;
    left: 16px;
    right: 16px;
    font-weight: $regular;
    font-size: 24px;

    .app-title-section {
      float: left;
      .back-button {
        display: none;
      }

      .header-title {
        font-weight: 700;
        letter-spacing: 1px;
      }
    }

    .header-actions {
      float: right;

      .header-search {
        width: 30px;
        display: inline-block;
        cursor: pointer;
      }

      .header-options {
        width: 6px;
        display: inline-block;
        cursor: pointer;
      }
    }

    &::after {
      content: '';
      display: table;
      clear: both;
    }
  }

  .header-options {
    font-size: 24px;

    .dot {
      margin-top: 2px;
      width: 5px;
      height: 5px;
      background-color: $default-color;
      @include rounded-corner(50%);
    }
  }

  .main-section {
    margin-top: 50px;
    width: 100%;
    overflow: auto;
    position: relative;

    .main-tabs {
      list-style: none;
      margin: 0px;
      padding: 0px;
      width: 100%;
      overflow: auto;
      background-color: $light-yellow-2;
      color: $default-color;
      letter-spacing: 0.8px;
      text-transform: uppercase;
      font-weight: 700;

      .list-item {
        float: left;
        width: 33%;
        border: 0.5px solid #696262;
        padding: 12px 8px;
        cursor: pointer;
      }

      .list-item:nth-child(n + 2) {
        border-left: 0;
      }

      .list-item:nth-last-child(1) {
        width: 34%;
      }
    }

    .todo-items {
      text-align: center;
      margin-top: 4px;
      padding: 16px;
      font-weight: 700;
      font-size: 18px;
      letter-spacing: 1px;
    }

    .add-new-todo {
      width: 70px;
      height: 70px;

      position: fixed;

      bottom: 18px;
      right: 18px;

      z-index: 1;
      background-color: $bright-yellow-1;

      text-align: center;
      color: #ffffff;
      padding: 6px;
      font-size: 50px;
      cursor: pointer;
      @include rounded-corner(50%);
    }
  }
}

.fa-icon {
  height: 24px;
  width: 24px;
}
</style>
