import { IAtmState } from './IAtmState';
import { AtmMachine } from './AtmMachine';

export class HasCard implements IAtmState {
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
    if (pinEntered === 1234) {
      console.log('Correct PIN');
      this.atmMachine.setAtmState(this.atmMachine.getHasPinState());
    } else {
      console.log('Wrong PIN');
      this.atmMachine.correctPinEntered = false;
      console.log('Card ejected.');
      this.atmMachine.setAtmState(this.atmMachine.getNoCardState());
    }
  }
  requestCash(cashToWithdraw: number): void {
    console.log('Enter PIN first.');
  }
}
