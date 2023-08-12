import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { AbstractControl, FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-admin-search-form",
  templateUrl: "./admin-search-form.component.html",
  styleUrls: ["./admin-search-form.component.scss"],
})
export class AdminSearchFormComponent implements OnInit {
  searchFieldControl: AbstractControl;
  form: FormGroup;

  @Input()
  placeHolder: string;

  @Input()
  currentValue: string;

  @Output()
  formSearchEvent: EventEmitter<string> = new EventEmitter();

  constructor(private formBuilder: FormBuilder) {
    this.searchFieldControl = this.formBuilder.control("");

    this.form = formBuilder.group({
      search: this.searchFieldControl,
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.formSearchEvent.emit(this.searchFieldControl.value);
  }
}
