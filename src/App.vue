<template>
  <div id="app">
    <div id="nav">

      <info />
      <div class="board">

        <div v-for="(r_item, idx) in getBoard.cells" :key="idx">
          <cell v-for="(c_item, idx) in r_item" :key="idx"/>
        </div>

        <tile-view
          v-for="(tile, idx) in getTiles"
          :tile="tile"
          :key="tile.id +'-'+ idx"
        >
        </tile-view>

        <overlay />
      </div>

      <!-- <router-link to="/">Home</router-link> | -->
      <!-- <router-link to="/about">About</router-link> -->
    </div>
    <!-- <router-view/> -->
  </div>
</template>

<script>
  import Overlay from './components/Overlay.vue'
  import Cell from './components/Cell.vue'
  import TileView from './components/TileView.vue'
  import Info from './components/Info.vue'

  import { mapGetters, mapState } from 'vuex'

  export default {

    created () {
      window.addEventListener('keydown', this.handleKeyDown.bind(this))
    },

    beforeUpdate () {
      // debugger
    },

    methods: {
      handleKeyDown(event) {

        if (this.hasWon) {
          return;
        }

        if (event.keyCode >= 37 && event.keyCode <= 40) {
          event.preventDefault();
          const direction = event.keyCode - 37;
          this.getBoard.move(direction);
          // debugger
          if (this.getBoard.score > this.getScore) {
            this.$store.commit({
              type: 'addScore',
              score: this.getBoard.score,
            });
          }
          if (this.getBoard.score > this.getBestScore) {
            this.$store.commit({
              type: 'setBestScore',
              score: this.getBoard.score,
            });
            window.localStorage.setItem('bestScore', this.getBoard.score);
          }
        }
      },
    },

    data () {
      return {

      }
    },

    computed: {
      ...mapGetters([
        'getTiles',
        'getBoard',
        'hasWon',
        'getScore',
        'getBestScore'
      ])
    },

    components: {
      Overlay,
      Cell,
      TileView,
      Info
    }
  }
</script>

<style lang="scss">
  html, body {
    margin: 0;
    padding: 0;
    background: #faf8ef;
    color: #776e65;
    font-family: "Clear Sans", "Helvetica Neue", Arial, sans-serif;
    font-size: 18px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
  }

  #app {
    width: 500px;
    margin-top: 30px;
  }

  .board {
    position: relative;
    padding: 6px;
    cursor: default;
    background: #bbada0;
    border-radius: 6px;
    width: 500px;
    height: 500px;
    box-sizing: border-box;
  }

</style>
