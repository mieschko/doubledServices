import { Component, OnInit } from '@angular/core';
import {hugeText} from "../text";

@Component({
  selector: 'app-some-feature',
  templateUrl: './some-feature.component.html',
  styleUrls: ['./some-feature.component.scss']
})
export class SomeFeatureComponent implements OnInit {

  hugeText: string;

  constructor() {
    this.hugeText = hugeText();
  }

  ngOnInit(): void {
  }

}
