export interface IAtmState {
  insertCard(): void;
  ejectCard(): void;
  insertPin(pinEntered: number): void;
  requestCash(cashToWithdraw: number): void;
}
