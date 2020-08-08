class NegotiationController {
    constructor() {
        this._inputDate = document.querySelector("#data");
        this._inputAmount = document.querySelector("#quantidade");
        this._inputValue = document.querySelector("#valor");
    }
    _clear() {
        this._inputDate.value = null;
        this._inputAmount.value = null;
        this._inputValue.value = null;
    }
    add(event) {
        event.preventDefault();
        const negotiation = new Negotiation(new Date(this._inputDate.value.replace(/-/g, ",")), parseInt(this._inputAmount.value), parseFloat(this._inputValue.value));
        console.log(negotiation);
        this._clear();
    }
}
