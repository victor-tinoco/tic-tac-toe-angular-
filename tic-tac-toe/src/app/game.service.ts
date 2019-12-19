import { Injectable, Input } from '@angular/core';
import { Board } from './board/models/board';
import { Turn } from './board/models/turn';
import { Scoreboard } from './scoreboard/models/scoreboard';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  public board: Board;
  public turn: Turn;
  public scoreboard: Scoreboard;

  constructor() { }

  public onInit() {
    this.scoreboard = new Scoreboard();
    this.onStart();
  }

  public onStart() {
    this.turn = new Turn();
    this.board = new Board();
  }

  public makePlay(position) {
    if (this.board[position] === '') {
      const turn = this.turn.turnIndex;
      this.board[position] = turn === 1 ? 'X' : 'O';
        if (!this.checkDraw()) {
          if (!this.checkWin()) {
              this.turn.change();
          } else {
              this.scoreboard.registerWin(this.turn.turnIndex);
              this.gameover();
          }
      } else {
          this.gameover();
      }
    }
  }

  public checkWin() {
    let gameover = false;
    this.board.winSequences.forEach(sequence => {
      const turnSymbol = this.turn.turnIndex === 1 ? 'X' : 'O';
      if (
        this.board[sequence[0]] === turnSymbol &&
        this.board[sequence[1]] === turnSymbol &&
        this.board[sequence[2]] === turnSymbol
      )
        gameover = true;
    });
    return gameover;
  }

  checkDraw() {
      let draw = true;
      this.board.positions.forEach(pos => {
          if (pos === '')
              draw = false
      });
      return draw;
  }

  gameover() {
      setTimeout(() => {
          this.onStart();
      }, 1000);
  }
}
