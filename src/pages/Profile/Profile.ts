import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';



@Component({
    selector: 'page-Profile',
    templateUrl: 'Profile.html'
})
export class Profile {

    constructor(private nav: NavController) {



    }

    public loadProfile() {
        console.log("line 18");
        //this.nav.push(MyHome );
        console.log("line 20");

    }


}