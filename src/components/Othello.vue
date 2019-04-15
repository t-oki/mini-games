
<template>
    <div class="container">
      <div class="gameboard">
        <div  class="board-square"
          v-for="(square, index) in this.board.squares"
          :key="index"
        ><span class="white-stone" v-if="square.state === SquareState.white">
          </span><span class="black-stone" v-if="square.state === SquareState.black"></span>
          </div>
      </div>
  </div>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Board from '../models/Board'
import { SquareState } from '../models/Square'

@Component({
  components: {},
})
export default class Othello extends Vue {
  board: Board = new Board()

  SquareState = SquareState
}
</script>

<style lang="scss">
.container {
  margin-top: 100px;

  .gameboard {
    display: grid;
    margin: auto;
    border-top: 2px solid black;
    border-right: 2px solid black;
    width: 640px;
    grid-template-columns: repeat(8, 80px);
    grid-template-rows: repeat(8, 80px);

    .board-square {
      border-left: 2px solid #000;
      border-bottom: 2px solid #000;
      background-color: #107155;
    }

    .white-stone {
      display: inline-block;
      margin: 10px;
      width: 60px;
      height: 60px;
      background-color: #fff;
      border-radius: 50%;
    }

    .black-stone {
      display: inline-block;
      margin: 10px;
      width: 60px;
      height: 60px;
      background-color: #000;
      border-radius: 50%;
    }
  }
}
</style>
