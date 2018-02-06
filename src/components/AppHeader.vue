<template>
  <div>
    <!-- General App Header Begins -->
    <div class="app-header col-container-header clearfix" v-show="!selectedSearchOption">
      <div class="app-title col-1">
        <span> Todo-Vue </span>
      </div>
      <div class="app-search col-2" v-on:click="selectedSearchOption = !selectedSearchOption">
        <icon name="search"></icon>
      </div>
      <div class="app-options col-3">
        <div class="app-options-content" v-on:click.stop="showAppOptions = !showAppOptions">
          <div class="option-symbol"></div>
          <div class="option-symbol"></div>
          <div class="option-symbol"></div>
        </div>
        <div class="app-options-dialog" v-show="showAppOptions">
          <ul>
            <li v-on:click.stop="clearAll">Clear All</li>
          </ul>
        </div>
      </div>
    </div> <!-- General App Header ends -->

    <!-- Search Related App Header Begins -->
    <div class="app-header-for-search clearfix" v-show="selectedSearchOption">
      <div class="app-back-button col-1" v-on:click="selectedSearchOption = !selectedSearchOption">
        <icon name="arrow-left"></icon>
      </div>
      <div class="app-search-input col-2">
        <input type="text" class="reset-input-control" placeholder="Search Todo..." v-model="searchInTodoList"/>
      </div>
      <div class="app-clear-search-text col-3" v-on:click="clearSearchText()">
        <div class="close-todo">X</div>
      </div>
    </div><!-- Search Related App Header ends -->
  </div>
</template>

<script>
import { EVENTS } from '../common/constant';
import { SUBSCRIBE_EVENT } from '../common/eventManager';

export default {
  data() {
    return {
      searchInTodoList: '',
      selectedSearchOption: false,
      showAppOptions: false
    };
  },
  methods: {
    showOtherOptions() {},
    clearSearchText() {
      this.searchInTodoList = '';
    },
    closeHeaderDialog() {
      this.showAppOptions = false;
    },
    HandleEvents() {
      SUBSCRIBE_EVENT(EVENTS.CLOSE_HEADER_DIALOG, this.closeHeaderDialog);
    },
    clearAll(){
      alert('Hey it got clicked!');
    }
  },
  computed: {},
  created(){
    this.HandleEvents();
  }
};
</script>

<style lang="scss">
@import '../assets/scss/common/utility';
@import '../assets/scss/common/fonts';
@import '../assets/scss/common/variables';
@import '../assets/scss/common/mixins';

.app-header {
  background: $light-yellow-2;
  @include fix-header;
  .app-title {
    font-size: $base-app-title-size;
    letter-spacing: 1px;
  }
  .app-search {
    cursor: pointer;
    text-align: right;
    .fa-icon {
      width: 21px;
      height: 20px;
    }
  }
  .app-options {
    cursor: pointer;
    position: relative;
    .app-options-content {
      position: absolute;
      right: 0;
      .option-symbol {
        background: $base-font-color;
      }
    }
    .app-options-dialog {
      position: absolute;
      background: #fff;
      padding: 16px;
      right: 0;
      z-index: $app-header-z-index;
      top: -5px;
      width: 130px;
      box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
      border-radius: 3px;
    }
  }
}

.app-header-for-search {
  width: 100%;
  padding: 16px;
  font-size: $base-app-title-size;
  @include fix-header;

  .app-back-button {
    cursor: pointer;
    text-align: left;
  }

  .app-clear-search-text {
    cursor: pointer;
    text-align: right;
  }

  .col-1 {
    float: left;
    width: 10%;
  }
  .col-2 {
    float: left;
    width: 80%;
  }
  .col-3 {
    float: right;
    width: 10%;
  }
}
</style>
