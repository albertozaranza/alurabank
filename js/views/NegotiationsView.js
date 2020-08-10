System.register(["./View"], function (exports_1, context_1) {
    "use strict";
    var View_1, NegotiationsView;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (View_1_1) {
                View_1 = View_1_1;
            }
        ],
        execute: function () {
            NegotiationsView = class NegotiationsView extends View_1.default {
                template(model) {
                    return `<table class="table table-hover table-bordered">
      <thead>
        <tr>
          <th>DATA</th>
          <th>QUANTIDADE</th>
          <th>VALOR</th>
          <th>VOLUME</th>
        </tr>
      </thead>

      <tbody>
        ${model
                        .toArray()
                        .map(({ date, amount, value, volume }) => `
          <tr>
            <td>${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}</td>
            <td>${amount}</td>
            <td>${value}</td>
            <td>${volume}</td>
          </tr>
        `)
                        .join("")}
      </tbody>

      <tfoot></tfoot>
    </table>`;
                }
            };
            exports_1("default", NegotiationsView);
        }
    };
});
