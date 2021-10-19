import {Component, OnInit} from '@angular/core';
import {DuplicatedNameService} from "./first-service/duplicated-name.service";
import {DuplicatedNameService as SecondDuplicatedNameService} from "./second-service/duplicated-name.service";
import {DuplicatedNameService as ThirdDuplicatedNameService} from "./services/third-service/duplicated-name.service";
import {DuplicatedNameService as FourthDuplicatedNameService} from "./services/fourth-service/duplicated-name.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'doubledServices';
  constructor(private firstService: DuplicatedNameService, private secondService: SecondDuplicatedNameService,
              private thirdService: ThirdDuplicatedNameService, private fourthService: FourthDuplicatedNameService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.firstService.call();
    this.secondService.call();
    this.thirdService.call();
    this.fourthService.call();
  }


  navigate(): void {
    this.router.navigateByUrl('/some-feature');
  }
}
