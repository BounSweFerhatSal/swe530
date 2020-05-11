import { IAtmState } from './IAtmState';
import { AtmMachine } from './AtmMachine';

export class NoCash implements IAtmState {
  atmMachine: AtmMachine;

  constructor(newAtmMachine: AtmMachine) {
    this.atmMachine = newAtmMachine;
  }

  insertCard(): void {
    console.log('You cant enter more than one card.');
  }

  ejectCard(): void {
    console.log('Card ejected.');
    this.atmMachine.setAtmState(this.atmMachine.getNoCardState());
  }

  insertPin(pinEntered: number): void {
    console.log('Already entered PIN.');
  }

  requestCash(cashToWithdraw: number): void {
    console.log('Not enough cash.');
  }
}
