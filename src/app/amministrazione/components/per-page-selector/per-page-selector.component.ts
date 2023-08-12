import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { AbstractControl, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-per-page-selector",
  templateUrl: "./per-page-selector.component.html",
  styleUrls: ["./per-page-selector.component.scss"],
})
export class PerPageSelectorComponent implements OnInit {
  @Input()
  currentValue: number;

  selectControl: AbstractControl;

  @Output()
  itemsPerPageChangeEvent: EventEmitter<number> = new EventEmitter<number>();

  constructor(private formBuilder: FormBuilder) {
    this.selectControl = this.formBuilder.control("");
  }

  ngOnInit(): void {
    this.selectControl.setValue(this.currentValue);
  }

  onSelectChange() {
    this.itemsPerPageChangeEvent.emit(this.selectControl.value);
  }
}
