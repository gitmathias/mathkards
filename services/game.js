/**
 * Private module properties and methods:
 */
const masterDeck = [
    1,1,1,
    2,2,2,
    3,3,3,
    4,4,4,
    5,5,5,
    6,6,6, 
    7,7,7,7,
    8,8,8,8,
    9,9,9,9,
    10,10,10,10,
    11,11,
    12,12,
    13,13,
    14,14,
    15,15,
    16,16,
    17,17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25
];

var
remainingCards = [],
hands = {},
target = null,

/**
 * Randomly select one card from the remaining deck.
 * @return int Selected card face value.
 */
getOneCard = function() {
    var min = 0,

        // determine max index from remaining deck:
        max = remainingCards.length - 1,
        
        // pick a random index:
        remainingIndex = Math.floor(Math.random() * (max - min + 1)) + min,

        // convert index into master deck index and remove from deck:
        cardIndex = remainingCards.splice(remainingIndex, 1),

        // grab the value from the master deck:
        cardValue = masterDeck[cardIndex];

        console.log('Dealt card [' + cardIndex + ': ' + cardValue + ']');

    return cardValue;
};

/**
 * Public module properties and methods:
 */
module.exports = {
    /**
     * Generates a hand based on the available cards,
     * stores it by player id, and returns it.
     * @param  mixed playerId
     * @return array The cards selected.
     */
    dealHand: function(playerId) {
        var theCards = [];
        if (hands[playerId] == undefined) {
            for (var i=0; i<5; i++) {
                theCards.push(getOneCard());
            }
            hands[playerId] = theCards;
        }

        return hands[playerId];
    },

    /**
     * Get the target card.
     * @return int
     */
    dealTargetCard: function() {
        if (target === null) {
            target = getOneCard();
        }

        return target;
    },

    /**
     * Shuffles (resets) the game data to mock a db.
     */
    shuffle: function()
    {
        hands = {};
        target = null;
        remainingCards = [
            0,1,2,3,4,5,6,7,8,9,
            10,11,12,13,14,15,16,17,18,19,
            20,21,22,23,24,25,26,27,28,29,
            30,31,32,33,34,35,36,37,38,39,
            40,41,42,43,44,45,46,47,48,49,
            50,51,52,53,54,55 
        ];
    }
};
