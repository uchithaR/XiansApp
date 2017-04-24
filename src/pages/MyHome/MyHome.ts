import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Profile } from '../Profile/Profile';


@Component({
  selector: 'page-MyHome',
  templateUrl: 'MyHome.html'
})
export class MyHome {

  constructor(private nav: NavController) {



  }

  public gotoProfile() {
    console.log("line 18");
    this.nav.push(Profile);
    console.log("line 20");

  }
  public gotoMyHome() {
    console.log("line 58");
    this.nav.push(MyHome);
    console.log("line 62");
  }


}