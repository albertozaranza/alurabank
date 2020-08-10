System.register([], function (exports_1, context_1) {
    "use strict";
    var Negotiation;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Negotiation = class Negotiation {
                constructor(date, amount, value) {
                    this._date = date;
                    this._amount = amount;
                    this._value = value;
                }
                get date() {
                    return this._date;
                }
                get amount() {
                    return this._amount;
                }
                get value() {
                    return this._value;
                }
                get volume() {
                    return this._value * this._amount;
                }
            };
            exports_1("default", Negotiation);
        }
    };
});
