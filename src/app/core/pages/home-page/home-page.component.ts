import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from "@angular/core";
import { AbstractControl, FormBuilder } from "@angular/forms";

import { HeaderComponent } from "src/app/shared/components/header/header.component";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.scss"],
})
export class HomePageComponent implements OnInit {
  @ViewChild(HeaderComponent)
  header: HeaderComponent;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
  }
}
