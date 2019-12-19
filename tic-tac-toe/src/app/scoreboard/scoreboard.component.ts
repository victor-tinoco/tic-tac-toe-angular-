import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { Scoreboard } from './models/scoreboard';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.scss']
})
export class ScoreboardComponent implements OnInit {

  constructor(private gameService: GameService) { 
    this.Restart()
  }

  scoreBoard: Scoreboard;

  ngOnInit() {
  }

  Restart() {
    this.gameService.onInit()
    this.scoreBoard = this.gameService.scoreboard;
  }

}
