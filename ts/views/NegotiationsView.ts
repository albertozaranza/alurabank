import { View } from "../views/index";
import { Negotiations } from "../models/index";

export class NegotiationsView extends View<Negotiations> {
  template(model: Negotiations): string {
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
          .map(
            ({ date, amount, value, volume }) => `
          <tr>
            <td>${date.getDate()}/${
              date.getMonth() + 1
            }/${date.getFullYear()}</td>
            <td>${amount}</td>
            <td>${value}</td>
            <td>${volume}</td>
          </tr>
        `
          )
          .join("")}
      </tbody>

      <tfoot></tfoot>
    </table>`;
  }
}
