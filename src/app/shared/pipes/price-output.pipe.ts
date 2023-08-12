import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "priceOutput",
})
export class PriceOutputPipe implements PipeTransform {
  transform(value: string, ...args: string[]): string {
    return parseFloat(value).toFixed(2) + " €";
  }
}
