export class Scoreboard {
    constructor(firstPlayerScore: number = 0, secondPlayerScore: number = 0) {
        this.firstPlayerScore = firstPlayerScore;
        this.secondPlayerScore = secondPlayerScore;
    }

    public firstPlayerScore: number;
    public secondPlayerScore: number;
    public registerWin(player: number): void {
        if (player === 1)
            this.firstPlayerScore++
        else if (player === 0) {
            this.secondPlayerScore++
        }
    }
}
