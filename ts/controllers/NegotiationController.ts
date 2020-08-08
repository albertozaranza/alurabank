class NegotiationController {
  private _inputDate: HTMLInputElement;
  private _inputAmount: HTMLInputElement;
  private _inputValue: HTMLInputElement;

  constructor() {
    this._inputDate = <HTMLInputElement>document.querySelector("#data");
    this._inputAmount = <HTMLInputElement>document.querySelector("#quantidade");
    this._inputValue = <HTMLInputElement>document.querySelector("#valor");
  }

  _clear() {
    this._inputDate.value = null;
    this._inputAmount.value = null;
    this._inputValue.value = null;
  }

  add(event: Event) {
    event.preventDefault();

    const negotiation = new Negotiation(
      new Date(this._inputDate.value.replace(/-/g, ",")),
      parseInt(this._inputAmount.value),
      parseFloat(this._inputValue.value)
    );

    console.log(negotiation);

    this._clear();
  }
}
