import { FruitSlotGame } from './games';

const bootstrap = () => {
    let autoSpin = null;
    const game = new FruitSlotGame(5000, 5);
    autoSpin = setInterval(() => {
        try {
            game.spin();
        } catch (error: any) {
            console.log(error?.message)
            clearInterval(autoSpin);
        }
    }, 500);
}

bootstrap();