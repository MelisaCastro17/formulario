import { CdkTextareaAutosize } from "@angular/cdk/text-field";
import { Component, NgZone, ViewChild } from "@angular/core";
import { take } from "rxjs/operators";
import { FormControl } from "@angular/forms";


@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})


export class AppComponent {

  constructor(private _ngZone: NgZone) {}
  
  myControl = new FormControl();
  
  selected = "option3";
  favoriteSeason: string;
  seasons: string[] = ["SI", "NO"];

  options: string[] = ["Pregrado", "Potsgrado", "Especializacion"];

  color = "accent";
  checked = false;
  disabled = false;

  formatLabel(value: number | null) {
    if (!value) {
      return 0;
    }
    if (value >= 1000) {
      return Math.round(value / 1000) + "k";
    }
    return value;
  }

  @ViewChild("autosize", { static: false }) autosize: CdkTextareaAutosize;

  triggerResize() {
    this._ngZone.onStable.pipe(take(1)).subscribe(() => this.autosize.resizeToFitContent(true));
  }
}
