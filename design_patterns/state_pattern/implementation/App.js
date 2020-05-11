import { AtmMachine } from './AtmMachine.ts';

let atmMachine = new AtmMachine();

atmMachine.insertCard();

atmMachine.ejectCard();

atmMachine.insertCard();

atmMachine.insertPin(1234);

atmMachine.requestCash(2000);
