import { IAtmState } from './IAtmState';
import { HasCard } from './HasCard';
import { HasPin } from './HasPin';
import { NoCard } from './NoCard';
import { NoCash } from './NoCash';

export class AtmMachine {
  hasCard: IAtmState;
  noCard: IAtmState;
  hasPin: IAtmState;
  noCash: IAtmState;

  atmState: IAtmState;

  cashInMachine: number = 2000;
  correctPinEntered: boolean = false;

  constructor() {
    this.hasCard = new HasCard(this);
    this.noCard = new NoCard(this);
    this.hasPin = new HasPin(this);
    this.noCash = new NoCash(this);

    // Initialize state
    if (this.cashInMachine < 0) {
      this.atmState = this.noCash;
    }
    this.atmState = this.noCard;
  }

  setAtmState(newAtmState: IAtmState): void {
    this.atmState = newAtmState;
  }

  setCashInMachine(newCashInMachine: number): void {
    this.cashInMachine = newCashInMachine;
  }

  insertCard(): void {
    this.atmState.insertCard();
  }

  insertPin(pinEntered: number): void {
    this.atmState.insertPin(pinEntered);
  }

  ejectCard(): void {
    this.atmState.ejectCard();
  }

  requestCash(cashToWithdraw: number): void {
    this.atmState.requestCash(cashToWithdraw);
  }

  // Get state methods
  getHasCardState(): IAtmState {
    return this.hasCard;
  }

  getNoCardState(): IAtmState {
    return this.noCard;
  }

  getHasPinState(): IAtmState {
    return this.hasPin;
  }

  getNoCashState(): IAtmState {
    return this.noCash;
  }
}
