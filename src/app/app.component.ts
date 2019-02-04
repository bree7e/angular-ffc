import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ng-ffc';
  quantity = 10;
  tyapk: FormControl;

  ngOnInit(): void {
    this.tyapk = new FormControl();
    this.tyapk.patchValue(7);
  }

  enable(): void {
    this.tyapk.enable();
  }

  disable(): void {
    this.tyapk.disable();
  }

  subscribe(): void {
    this.tyapk.valueChanges.subscribe(console.log);
  }

}
