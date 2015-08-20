/// <reference path='../typings/jasmine/jasmine.d.ts' />
/// <reference path='../references.ts' />

describe('For a BowlingGame', function() {
    
    var game: BowlingGame;

    beforeEach(function() {
        game = new BowlingGame();
    });

    it('when all balls goes into gutter, the score should be zero', function() {
        SpecHelpers.rollMany(game, 20, 0);
        expect(game.score()).toEqual(0);
    });

});

