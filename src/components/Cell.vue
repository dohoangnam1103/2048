<template>
  <span class="cell">{{''}}</span>
</template>

<script>
  export default {
    data() {
      return {
        msg: 'hello vue',
      };
    },
  };
</script>

<style scope>
  .cell {
    width: 110px;
    height: 110px;
    margin: 6px;
    line-height: 90px;
    display: inline-block;
    font-size: 55px;
    font-weight: bold;
    text-align: center;
    vertical-align: middle;
    border-radius: 7px;
    font-family: "Clear Sans";
    color: #766;
    background-color: #dcb;
  }
</style>
