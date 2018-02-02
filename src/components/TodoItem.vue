<template>
  <div>
        <div class="todo-item">
          <div class="todo-details clearfix">

            <div class="left-section">
              <div class="checkbox-container">
                <input class="native-checkbox" type="checkbox">
                <div class="custom-checkbox"></div>
              </div>
            </div>

            <div class="middle-section">
              <div class="todo-title">Something will come</div>
              <div class="todo-desc">Description</div>
              <div class="todo-other-details">
                <div class="todo-status">Pending</div>
                <div class="todo-created-at">26th Jun 2016</div>
              </div>
            </div>

            <div class="right-section">
              <div class="options-container">
                <div class="option-symbol"></div>
                <div class="option-symbol"></div>
                <div class="option-symbol"></div>
              </div>
            </div>

          </div>
          <!-- below -->
          <div class="todo-details clearfix">

            <div class="left-section">
              <div class="checkbox-container">
                <input class="native-checkbox" type="checkbox">
                <div class="custom-checkbox"></div>
              </div>
            </div>

            <div class="middle-section">
              <div class="todo-title">Something will come</div>
              <div class="todo-desc">Description</div>
              <div class="todo-other-details">
                <div class="todo-status">Pending</div>
                <div class="todo-created-at">26th Jun 2016</div>
              </div>
            </div>

            <div class="right-section">
              <div class="options-container">
                <div class="option-symbol"></div>
                <div class="option-symbol"></div>
                <div class="option-symbol"></div>
              </div>
            </div>

          </div>
          <!-- before -->

        </div>
  </div>
</template>

<script>
export default {
  components: {
    //  AddNewTodo
  },
  data() {}
};
</script>

<style lang="scss">
.todo-item {

  .todo-details {
    width: 100%;
    box-shadow: 1px 1px 1px #ccc;
    .left-section {
      float: left;
      width: 15%;
      padding: 16px;
    }
    .middle-section {
      float: left;
      width: 70%;
      padding: 16px;
    }
    .right-section {
      float: right;
      width: 15%;
      padding: 16px;
      position: relative;
      .options-container {
        position: absolute;
        right: 16px;
      }
    }
  }
}
</style>
