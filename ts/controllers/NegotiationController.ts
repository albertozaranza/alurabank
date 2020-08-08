class NegotiationController {
  private _inputDate: HTMLInputElement;
  private _inputAmount: HTMLInputElement;
  private _inputValue: HTMLInputElement;
  private _negotiations = new Negotiations();
  private _negotiationsView = new NegotiationsView("#negociacoesView");

  constructor() {
    this._inputDate = <HTMLInputElement>document.querySelector("#data");
    this._inputAmount = <HTMLInputElement>document.querySelector("#quantidade");
    this._inputValue = <HTMLInputElement>document.querySelector("#valor");
    this._negotiationsView.update(this._negotiations);
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

    this._negotiations.add(negotiation);
    this._negotiations
      .toArray()
      .forEach(({ amount, date, value, volume }) => {});

    this._negotiationsView.update(this._negotiations);
    this._clear();
  }
}
