import { Injectable, Input } from '@angular/core';
import { Board } from './board/models/board';
import { Turn } from './board/models/turn';
import { Scoreboard } from './scoreboard/models/scoreboard';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  public board: Board = new Board();
  public turn: Turn = new Turn();
  public scoreboard: Scoreboard = new Scoreboard();

  constructor() { }

  public onInit() {
    this.scoreboard.firstPlayerScore = 0;
    this.scoreboard.secondPlayerScore = 0;
    this.onStart();
  }

  public onStart() {
    this.turn.turnIndex = 1;
    this.board.positions.fill('');

  }

  public makePlay(position) {
    if (this.board.positions[position] === '') {
      const turn = this.turn.turnIndex;
      this.board.positions[position] = turn === 1 ? 'X' : 'O';
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
        this.board.positions[sequence[0]] === turnSymbol &&
        this.board.positions[sequence[1]] === turnSymbol &&
        this.board.positions[sequence[2]] === turnSymbol
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
