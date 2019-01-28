<template>
  <div class="othello">
    <div class="container">
      <div class="gameboard">
        <div class="row">
          <div class="board-square top-square"></div>
          <div class="board-square"></div>
          <div class="board-square"></div>
          <div class="board-square"></div>
          <div class="board-square"></div>
          <div class="board-square"></div>
          <div class="board-square"></div>
          <div class="board-square"></div>
        </div>
        <div class="row">
          <div class="board-square top-square"></div>
          <div class="board-square"></div>
          <div class="board-square"></div>
          <div class="board-square"></div>
          <div class="board-square"></div>
          <div class="board-square"></div>
          <div class="board-square"></div>
          <div class="board-square"></div>
        </div>
        <div class="row">
          <div class="board-square top-square"></div>
          <div class="board-square"></div>
          <div class="board-square"></div>
          <div class="board-square"></div>
          <div class="board-square"></div>
          <div class="board-square"></div>
          <div class="board-square"></div>
          <div class="board-square"></div>
        </div>
        <div class="row">
          <div class="board-square top-square"></div>
          <div class="board-square"></div>
          <div class="board-square"></div>
          <div class="board-square"><span class="white-stone"></span></div>
          <div class="board-square"><span class="black-stone"></span></div>
          <div class="board-square"></div>
          <div class="board-square"></div>
          <div class="board-square"></div>
        </div>
        <div class="row">
          <div class="board-square top-square"></div>
          <div class="board-square"></div>
          <div class="board-square"></div>
          <div class="board-square"><span class="black-stone"></span></div>
          <div class="board-square"><span class="white-stone"></span></div>
          <div class="board-square"></div>
          <div class="board-square"></div>
          <div class="board-square"></div>
        </div>
        <div class="row">
          <div class="board-square top-square"></div>
          <div class="board-square"></div>
          <div class="board-square"></div>
          <div class="board-square"></div>
          <div class="board-square"></div>
          <div class="board-square"></div>
          <div class="board-square"></div>
          <div class="board-square"></div>
        </div>
        <div class="row">
          <div class="board-square top-square"></div>
          <div class="board-square"></div>
          <div class="board-square"></div>
          <div class="board-square"></div>
          <div class="board-square"></div>
          <div class="board-square"></div>
          <div class="board-square"></div>
          <div class="board-square"></div>
        </div>
        <div class="row">
          <div class="board-square top-square right-square"></div>
          <div class="board-square right-square"></div>
          <div class="board-square right-square"></div>
          <div class="board-square right-square"></div>
          <div class="board-square right-square"></div>
          <div class="board-square right-square"></div>
          <div class="board-square right-square"></div>
          <div class="board-square right-square"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {},
})
export default class Othello extends Vue {
  line: number[] = [0, 0, 0, 0, 0, 0, 0, 0]
}
</script>

<style lang="scss">
.gameboard {
  display: flex;
  flex-wrap: no-wrap;
  margin-top: 100px;
  justify-content: center;
  align-items: center;

  .board-square {
    width: 80px;
    height: 80px;
    border-left: 2px solid #000;
    border-bottom: 2px solid #000;
    background-color: #107155;
    justify-content: center;
    align-items: center;
    margin: 0;
  }

  .top-square {
    border-top: 2px solid #000;
  }

  .right-square {
    border-right: 2px solid #000;
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
</style>
