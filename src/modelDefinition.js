import { notDeepEqual } from "assert";

exports = {
    'cardsCount': 5,
    'deck': [
        "Club|2","Club|3","Club|4","Club|5","Club|6","Club|7",
        "Club|8","Club|9","Club|10","Club|J","Club|Q","Club|K","Club|A",
        "Diamond|2","Diamond|3","Diamond|4","Diamond|5","Diamond|6","Diamond|7",
        "Diamond|8","Diamond|9","Diamond|10","Diamond|J","Diamond|Q","Diamond|K","Diamond|A",
        "Heart|2","Heart|3","Heart|4","Heart|5","Heart|6","Heart|7",
        "Heart|8","Heart|9","Heart|10","Heart|J","Heart|Q","Heart|K","Heart|A",
        "Spade|2","Spade|3","Spade|4","Spade|5","Spade|6","Spade|7",
        "Spade|8","Spade|9","Spade|10","Spade|J","Spade|Q","Spade|K","Spade|A",
        "RedJoker", "BlackJoker"
    ],
    'winTable': {
        'ROYAL_FLUSH': {
            'pattern': 's0|10, s0|J, s0|Q, s0|K, s0|A',
            'multipliers': [250, 500, 750, 1000, 4000]
        },

        'STRAIGHT_FLUSH': {
            'pattern': 's0|r0, s0|r0+1, s0|r0+2, s0|r0+3, s0|r0+4',
            'multipliers': [50, 100, 150, 200, 250]
        },

        'FOUR_OF_A_KIND': {
            'pattern': '*|r0, *|r0, *|r0, *|r0, *|r1',
            'multipliers': [25, 50, 75, 100, 125]
        },

        'FULL_HOUSE': {
            'pattern': '*|r0, *|r0, *|r0, *|r1, *|r1',
            'multipliers': [6, 12, 18, 24, 30]
        },

        'FLUSH': {
            'pattern': 's0|*, s0|*, s0|*, s0|*, s0|*',
            'multipliers': [5, 10, 15, 20, 25]
        },

        'STRAIGHT': {
            'pattern': '*|r0, *|r0+1, *|r0+2, *|r0+3, *|r0+4',
            'multipliers': [4, 8, 12, 16, 20]
        },

        'THREE_OF_A_KIND': {
            'pattern': '*|r0, *|r0, *|r0, *|r1, *|r2',
            'multipliers': [3, 6, 9, 12, 15]
        },

        'TWO_PAIRS': {
            'pattern': '*|r0, *|r0, *|r1, *|r1, *|r2, *|r3',
            'multipliers': [2, 4, 6, 8, 10]
        },

        'JACKS_OR_BETTER': {
            'pattern': '*|r0={J,Q,K,A}, *|r0, *|r1, *|r2, *|r3',
            'multipliers': [1, 2, 3, 4, 5],
            'hitsCount': 
        }
    }
}