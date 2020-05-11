import { IAtmState } from './IAtmState';
import { AtmMachine } from './AtmMachine';

export class HasPin implements IAtmState {
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
    if (cashToWithdraw > this.atmMachine.cashInMachine) {
      console.log('Dont have enough cash.');
    }
    // provide cash
    this.atmMachine.setCashInMachine(
      this.atmMachine.cashInMachine - cashToWithdraw,
    );
    console.log(cashToWithdraw + ' cash is provided by the machine.');

    //eject card
    this.atmMachine.setAtmState(this.atmMachine.getNoCardState());
    console.log('Card ejected.');

    if (this.atmMachine.cashInMachine <= 0) {
      this.atmMachine.setAtmState(this.atmMachine.getNoCardState());
    }
  }
}
