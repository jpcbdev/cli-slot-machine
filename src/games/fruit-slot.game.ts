import { IFruitSymbol } from '../interfaces';
import { FRUIT_SYMBOLS } from '../shared/constants';

export class FruitSlotGame {

    wallet: number;
    bet: number;
    reels: string[][] = [[], [], []];

    constructor(wallet: number, bet: number) {
        this.wallet = wallet;
        this.bet = bet;
    }

    private getSymbol(): IFruitSymbol {
        const rtp = FRUIT_SYMBOLS().reduce((p, v) => v.probability + p, 0);
        const rng = Math.random() * rtp;
        let symbolId = 0;
        let probabilityAcc = 0;

        for (let i = 1; i <= (FRUIT_SYMBOLS().length + 1); i++) {
            probabilityAcc += FRUIT_SYMBOLS().find(p => p.id === i)?.probability ?? 0;
            if (rng < probabilityAcc) {
                symbolId = i;
                break;
            }
        }

        return FRUIT_SYMBOLS().find(s => s.id === symbolId) as IFruitSymbol;
    }

    private checkLines(): void {
        let payoff = 0;
        const lineOneImage = this.reels[0][0];
        const lineTwoImage = this.reels[1][0];
        const lineThreeImage = this.reels[2][0];

        if (lineOneImage === this.reels[0][1] && lineOneImage === this.reels[0][2]) {
            payoff = FRUIT_SYMBOLS().find(s => s.image === lineOneImage)?.payoff as number;
            console.log('[Line one]: You win: ', FRUIT_SYMBOLS().find(s => s.image === lineOneImage)?.payoff as number * this.bet);
        }

        if (lineTwoImage === this.reels[1][1] && lineTwoImage === this.reels[1][2]) {
            payoff = FRUIT_SYMBOLS().find(s => s.image === lineTwoImage)?.payoff as number;
            console.log('[Line two]: You wind ', FRUIT_SYMBOLS().find(s => s.image === lineTwoImage)?.payoff as number * this.bet);
        }

        if (lineThreeImage === this.reels[2][1] && lineThreeImage === this.reels[2][2]) {
            payoff = FRUIT_SYMBOLS().find(s => s.image === lineThreeImage)?.payoff as number;
            console.log('[Line tree]: You win: ', FRUIT_SYMBOLS().find(s => s.image === lineThreeImage)?.payoff as number * this.bet);
        }

        this.wallet -= this.bet;
        this.wallet += (this.bet * payoff);
    }

    private checkWallet() {
        if (this.wallet <= 0) throw new Error('Insufficient funds');
    }

    public spin() {
        this.checkWallet();
        this.reels[0] = [this.getSymbol().image, this.getSymbol().image, this.getSymbol().image];
        this.reels[1] = [this.getSymbol().image, this.getSymbol().image, this.getSymbol().image];
        this.reels[2] = [this.getSymbol().image, this.getSymbol().image, this.getSymbol().image];
        console.log(this.reels[0] + '\n' + this.reels[1] + '\n' + this.reels[2]);
        this.checkLines();
        console.log('Bet: ', this.bet);
        console.log('Wallet: ', this.wallet);
        console.log('\n');
    }

}