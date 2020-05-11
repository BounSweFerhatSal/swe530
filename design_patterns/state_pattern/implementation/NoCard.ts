import { AtmMachine } from './AtmMachine';
import { IAtmState } from './IAtmState';

export class NoCard implements IAtmState {
  atmMachine: AtmMachine;

  constructor(newAtmMachine: AtmMachine) {
    this.atmMachine = newAtmMachine;
  }

  insertCard(): void {
    this.atmMachine.setAtmState(this.atmMachine.getHasCardState());
    console.log('Please enter a pin.');
  }
  ejectCard(): void {
    console.log('Enter a card first.');
  }
  insertPin(pinEntered: number): void {
    console.log('Enter a card first.');
  }
  requestCash(cashToWithdraw: number): void {
    console.log('Enter a card first.');
  }
}

export default NoCard;
