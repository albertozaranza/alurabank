System.register(["../models/Negotiation", "../models/Negotiations", "../views/NegotiationsView", "../views/MessageView"], function (exports_1, context_1) {
    "use strict";
    var Negotiation_1, Negotiations_1, NegotiationsView_1, MessageView_1, NegotiationController;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Negotiation_1_1) {
                Negotiation_1 = Negotiation_1_1;
            },
            function (Negotiations_1_1) {
                Negotiations_1 = Negotiations_1_1;
            },
            function (NegotiationsView_1_1) {
                NegotiationsView_1 = NegotiationsView_1_1;
            },
            function (MessageView_1_1) {
                MessageView_1 = MessageView_1_1;
            }
        ],
        execute: function () {
            NegotiationController = class NegotiationController {
                constructor() {
                    this._negotiations = new Negotiations_1.default();
                    this._negotiationsView = new NegotiationsView_1.default("#negociacoesView");
                    this._messageView = new MessageView_1.default("#mensagemView");
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
                    const negotiation = new Negotiation_1.default(new Date(this._inputDate.value.replace(/-/g, ",")), parseInt(this._inputAmount.value), parseFloat(this._inputValue.value));
                    this._negotiations.add(negotiation);
                    this._negotiationsView.update(this._negotiations);
                    this._messageView.update("Negociação adicionada com sucesso!");
                    this._clear();
                }
            };
            exports_1("default", NegotiationController);
        }
    };
});
