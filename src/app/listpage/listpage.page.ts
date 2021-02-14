import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listpage',
  templateUrl: './listpage.page.html',
  styleUrls: ['./listpage.page.scss'],
})
export class ListpagePage implements OnInit {

  musiclist: any;
  musicObj: any;
  constructor(public router: Router, public navCtrl: NavController) { }

  ngOnInit() {
    this.musiclist = [
      {
        id: 1,
        single: "afterglow",
        artist: "E.Sheran",
        price: "3.5$",
        pic: "https://s.isanook.com/wo/0/rp/r/w728/ya0xa0m1w0/aHR0cHM6Ly9zLmlzYW5vb2suY29tL3dvLzAvdWQvMjcvMTM1NTY5L2wxLmpwZw==.jpg", 
      },
      {
        id: 1,
        single: "afterglow",
        artist: "E.Sheran",
        price: "3.5$",
        pic: "https://s.isanook.com/wo/0/rp/r/w728/ya0xa0m1w0/aHR0cHM6Ly9zLmlzYW5vb2suY29tL3dvLzAvdWQvMjcvMTM1NTY5L2wxLmpwZw==.jpg", 
      },
      {
        id: 1,
        single: "afterglow",
        artist: "E.Sheran",
        price: "3.5$",
        pic: "https://s.isanook.com/wo/0/rp/r/w728/ya0xa0m1w0/aHR0cHM6Ly9zLmlzYW5vb2suY29tL3dvLzAvdWQvMjcvMTM1NTY5L2wxLmpwZw==.jpg", 
      },
      {
        id: 1,
        single: "afterglow",
        artist: "E.Sheran",
        price: "3.5$",
        pic: "https://s.isanook.com/wo/0/rp/r/w728/ya0xa0m1w0/aHR0cHM6Ly9zLmlzYW5vb2suY29tL3dvLzAvdWQvMjcvMTM1NTY5L2wxLmpwZw==.jpg", 
      },
    ]
  }

  viewmusic(event: any){
    let music = JSON.stringify(event);
    this.musicObj = [
      { name: "larm",
        age: 21
      },
      { name: "larm",
      age: 21
    },
    ]
    this.router.navigate(['showlist/:sendMusic', this.musicObj]);
    console.log(this.musicObj)
    
    // this.navCtrl.navigateForward('/showlist/'+music);

  }

}
