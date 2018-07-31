<template>

  <section>
    <div class='heading'>
      <h1 class='title'>
        2048
      </h1>
      <div class='scores-container'>
        <div class='score-container'>
          {{getScore}}
        </div>
        <div class='best-container'>
          {{getBestScore}}
        </div>
      </div>
    </div>
    <div class='sub-heading'>
      <p class='game-intro'>
        <strong style="display: none">
          Product build by Nam Đẹp Trai
        </strong>
      </p>
      <a @click.prevent="onRestart" class='restart-button'>New Game</a>
    </div>
  </section>

</template>

<script>
import delay from 'delay';
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'getScore',
      'getBestScore'
    ]),
  },

  methods: {
    onRestart() {
      this.$store.commit('restart');
    },
  },

  watch: {
    getScore(val, oldVal) {
      const scoreContainer = document.getElementsByClassName('score-container')[0]
      const addition = document.createElement("div")
      addition.classList.add('score-addition');
      addition.textContent = `+${(val - oldVal)}`
      scoreContainer.appendChild(addition);
      delay(600).then(() => {
        const additionDom = document.getElementsByClassName('score-addition')[0]
        scoreContainer.removeChild(additionDom)
      });
    },
  },

};
</script>

<style lang="scss" scope>
  @keyframes move-up {
    0% {
      top: 25px;
      opacity: 1;
    }

    100% {
      top: -50px;
      opacity: 0;
    }
  }

  .info {
    position: relative;
    top: -20px;
  }
  .heading {
    content: "";
    display: block;
    clear: both;
  }
  h1.title {
    font-size: 80px;
    font-weight: bold;
    margin: 0;
    display: block;
    float: left;
  }
  .scores-container {
    float: right;
  }
  .score-container, .best-container {
    position: relative;
    display: inline-block;
    background: #bbada0;
    margin-top: 20px;
    margin-right: 0px;
    padding: 15px 0px;
    font-size: 25px;
    height: 30px;
    width: 70px;
    line-height: 47px;
    font-weight: bold;
    border-radius: 3px;
    color: black;
    text-align: center;

    &:first-child {
      margin-right: 10px;
    }

    &:after {
      position: absolute;
      width: 100%;
      top: 10px;
      left: 0;
      text-transform: uppercase;
      font-size: 13px;
      line-height: 13px;
      text-align: center;
      color: #eee4da;
    }

    .score-addition {
      position: absolute;
      right: 30px;
      color: red;
      font-size: 25px;
      line-height: 25px;
      font-weight: bold;
      color: rgba(119, 110, 101, 0.9);
      z-index: 100;
      animation: move-up 600ms ease-in;
      animation-fill-mode: both;
    }
  }
  .score-container:after {
    content: "Score";
  }
  .best-container:after {
    content: "Best";
  }
  .sub-heading:after {
    content: "";
    display: block;
    clear: both;
  }
  p {
    margin-top: 0;
    margin-bottom: 10px;
    line-height: 1.65;

    &.game-intro {
      float: left;
      line-height: 42px;
      margin-bottom: 0;
    }
    strong.important {
      text-transform: uppercase;
    }
  }
  a {
    color: #776e65;
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;

    &.restart-button {
      float: right;
      display: inline-block;
      height: 40px;
      padding: 0 20px;
      line-height: 42px;
      background: #9d846b;
      border-radius: 3px;
      text-decoration: none;
      text-align: center;
      color: #f9f6f2;
      transition: background 0.3s ease-out;

      &:hover {
        background: #826952;
      }
    }
  }
</style>
