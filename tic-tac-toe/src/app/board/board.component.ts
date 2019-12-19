import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { Board } from './models/board';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  constructor(private gameService: GameService) {
    this.gameService.init();
    this.board = this.gameService.board;
  }
  
  board: Board;
  
  ngOnInit() {
  }

}
