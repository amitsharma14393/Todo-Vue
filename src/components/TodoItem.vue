<template>
  <div>
        <div class="todo-item">
          <div class="todo-details clearfix">

            <div class="left-section">
              <div class="checkbox-container">
                <input class="native-checkbox" type="checkbox">
                <div class="checkmark"></div>
              </div>
            </div>

            <div class="middle-section">
              <div class="todo-title">Something will come</div>
              <div v-bind:class="['todo-desc',(showTextOverflowClass)?'active-text-overflow':'']">Description</div>
              <div class="todo-other-details">
                <div class="todo-status">Status:Pending</div>
                <div class="todo-created-at">Created At:26th Jun 2016</div>
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
                <div class="checkmark"></div>
              </div>
            </div>

            <div class="middle-section" v-on:click="showTextOverflowClass = !showTextOverflowClass">
              <div class="todo-title">Something will come</div>
              <div v-bind:class="['todo-desc',(showTextOverflowClass)?'active-text-overflow':'']">He we are planning to have one beautiful description of our beautiful app</div>
              <div class="todo-other-details clearfix">
                <div class="todo-status">PENDING</div>
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
           <!-- below -->
          <div class="todo-details clearfix">

            <div class="left-section">
              <div class="checkbox-container">
                <input class="native-checkbox" type="checkbox">
                <div class="checkmark"></div>
              </div>
            </div>

            <div class="middle-section" v-on:click="showTextOverflowClass = !showTextOverflowClass">
              <div class="todo-title">Something will come</div>
              <div v-bind:class="['todo-desc',(showTextOverflowClass)?'active-text-overflow':'']">He we are planning to have one beautiful description of our beautiful app</div>
              <div class="todo-other-details clearfix">
                <div class="todo-status">PENDING</div>
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
  },
  data() {
    return {
      showTextOverflowClass: true
    };
  }
};
</script>

<style lang="scss">
@import '../assets/scss/common/fonts';
@import '../assets/scss/common/variables';
@import '../assets/scss/common/utility';

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
      width: 75%;
      padding: 16px;
      cursor: pointer;
    }
    .right-section {
      float: right;
      width: 10%;
      padding: 16px;
      position: relative;
      .options-container {
        position: absolute;
        right: 16px;

      }
    }
  }
}

.left-section {
  .checkbox-container {
    margin-top: 2px;
    position: relative;
    width: 22px;
    height: 21px;
    background-color: $checkbox-background-color;
    border-radius: 2px;
    border-color: $checkbox-border-color;

    .native-checkbox {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      z-index: 1;
    }

    .native-checkbox:checked ~ .checkmark {
      position: absolute;
      top: 0;
      left: 8px;
      width: 7px;
      height: 17px;
      transform: rotate(45deg);
      border: 3px solid $checkbox-border-color;
      border-top: 0;
      border-left: 0;
    }
  }
}

.middle-section {
  .todo-title {
    letter-spacing: 0.7px;
    font-weight: $bold;
    padding-bottom: 8px;
  }
  .todo-desc {
    font-size: 14px;
    letter-spacing: 0.6px;
    padding-bottom: 8px;
    line-height: 18px;
  }
  .todo-other-details {
    font-size: 12px;
    padding-bottom: 8px;
    color: $base-font-color;
    .todo-status {
      float: left;
      width: 50%;
    }
    .todo-created-at {
      float: left;
      width: 50%;
      text-align: right;
    }
  }
}
</style>
