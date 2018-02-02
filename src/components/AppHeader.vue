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
      <div class="app-options col-3" v-on:click="showOtherOptions()">
        <div class="app-options-content">
          <div class="option-symbol"></div>
          <div class="option-symbol"></div>
          <div class="option-symbol"></div>
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
export default {
  data() {
    return {
      searchInTodoList: '',
      selectedSearchOption: false
    };
  },
  methods: {
    showOtherOptions() {

    },
    clearSearchText() {
      this.searchInTodoList = '';
    }
  },
  computed : {

  }
};
</script>

<style lang="scss">
@import '../assets/scss/common/utility';
@import '../assets/scss/common/fonts';
@import '../assets/scss/common/variables';

.app-header {
   background: $light-yellow-2;
   position:fixed;
   top:0;
   left:0;
   right:0;
   z-index: 1;
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
    }
  }
}

.app-header-for-search {
  width: 100%;
  padding: 16px;
  font-size: $base-app-title-size;

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
    float:right;
    width: 10%;
  }
}
</style>
