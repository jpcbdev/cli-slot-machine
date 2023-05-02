import { IFruitSymbol } from '../../interfaces';

export const FRUIT_SYMBOLS = (): IFruitSymbol[] => {
    return [
        { id: 1, name: '1', probability: 20, image: '🍏', payoff: 2 },
        { id: 2, name: '2', probability: 15, image: '🍎', payoff: 5 },
        { id: 3, name: '3', probability: 10, image: '🍐', payoff: 10 },
        { id: 4, name: '4', probability: 8, image: '🍊', payoff: 15 },
        { id: 5, name: '5', probability: 7, image: '🍋', payoff: 20 },
        { id: 6, name: '6', probability: 6, image: '🍌', payoff: 25 },
        { id: 7, name: '7', probability: 5, image: '🍉', payoff: 30 },
        { id: 8, name: '8', probability: 4, image: '🍇', payoff: 35 },
        { id: 9, name: '9', probability: 3, image: '🍓', payoff: 40 },
        { id: 10, name: '10', probability: 2, image: '🫐', payoff: 45 },
        { id: 11, name: '11', probability: 1.5, image: '🍈', payoff: 50 },
        { id: 12, name: '12', probability: 1, image: '🍒', payoff: 55 },
        { id: 13, name: '13', probability: 0.8, image: '🍑', payoff: 60 },
        { id: 14, name: '14', probability: 0.6, image: '🥭', payoff: 80 },
        { id: 15, name: '15', probability: 0.4, image: '🍍', payoff: 100 },
    ]
};