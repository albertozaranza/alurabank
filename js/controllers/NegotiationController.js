class NegotiationController {
    constructor() {
        this._negotiations = new Negotiations();
        this._negotiationsView = new NegotiationsView("#negociacoesView");
        this._messageView = new MessageView("#mensagemView");
        this._inputDate = document.querySelector("#data");
        this._inputAmount = document.querySelector("#quantidade");
        this._inputValue = document.querySelector("#valor");
        this._negotiationsView.update(this._negotiations);
    }
    _clear() {
        this._inputDate.value = null;
        this._inputAmount.value = null;
        this._inputValue.value = null;
    }
    add(event) {
        event.preventDefault();
        const negotiation = new Negotiation(new Date(this._inputDate.value.replace(/-/g, ",")), parseInt(this._inputAmount.value), parseFloat(this._inputValue.value));
        this._negotiations.add(negotiation);
        this._negotiationsView.update(this._negotiations);
        this._messageView.update("Negociação adicionada com sucesso!");
        this._clear();
    }
}
