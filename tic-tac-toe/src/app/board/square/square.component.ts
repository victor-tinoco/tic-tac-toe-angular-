import { Component, OnInit, Input } from '@angular/core';
import { GameService } from 'src/app/game.service';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent implements OnInit {

  constructor(private gameService: GameService) {
  }

  ngOnInit() {
    this.playerPlaySymbol = this.gameService.board.positions[this.indexOnBoard];
  }

  @Input() indexOnBoard: number;
  playerPlaySymbol: string;

  public makePlay() {
    this.gameService.makePlay(this.indexOnBoard);
  }

}
