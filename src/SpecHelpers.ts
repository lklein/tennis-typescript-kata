/// <reference path="../references.ts" />

class SpecHelpers {

    public static rollMany(game: IBowlingGame, rolls: number, result: number)  {
        var i: number;
        for (i = 0; i < rolls; i = i + 1) {
            game.roll(result);
        }
    }

    public static rollStrike(game: IBowlingGame) {
        var i: number;
        game.roll(10);
    }

    public static rollSpare(game: IBowlingGame) {
        var i: number;
        game.roll(5);
        game.roll(5);
    }
}