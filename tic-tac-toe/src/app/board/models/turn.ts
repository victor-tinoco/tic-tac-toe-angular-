import { NgModule } from '@angular/core';

export class Turn {
    constructor(turnIndex: number = 1) {
    }

    public turnIndex: number;
    public change(): void {
        this.turnIndex = this.turnIndex === 0 ? 1 : 0;
    }
}
