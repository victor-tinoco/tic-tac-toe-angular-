import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { Scoreboard } from './models/scoreboard';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.scss']
})
export class ScoreboardComponent implements OnInit {

  constructor(gameService: GameService) { 
    this.scoreBoard = gameService.scoreboard;
  }

  scoreBoard: Scoreboard;

  ngOnInit() {
  }

}
