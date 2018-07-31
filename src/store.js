import Vue from 'vue'
import Vuex from 'vuex'
import delay from 'delay'


import Board from './utils/board';

Vue.use(Vuex)

let bestScore = window.localStorage.getItem('bestScore')
  ?
  window.localStorage.getItem('bestScore')
  :
  0

export default new Vuex.Store({

  state: {
    score: 0,
    bestScore,
    board: new Board(),
  },

  getters: {
    getBoard: state => state.board,
    hasWon: state => state.won,
    getTiles: state => state.board.tiles.filter(tile => tile.value !== 0),
    getScore: state => state.score,
    getBestScore: state => state.bestScore
  },

  mutations: {
    restart(state) {
      state.board.clean();
      delay(1).then(() => {
        state.board = new Board();
      });
    },
    addScore(state, payload) {
      state.score = payload.score;
    },
    setBestScore(state, payload) {
      state.bestScore = payload.score;
    },
  },
  actions: {

  }
})
