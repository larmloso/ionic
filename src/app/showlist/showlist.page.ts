import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-showlist',
  templateUrl: './showlist.page.html',
  styleUrls: ['./showlist.page.scss'],
})
export class ShowlistPage implements OnInit {


  getw: String;
  
  constructor(public navCtrl: NavController, public actroute: ActivatedRoute) { }

  ngOnInit() {
    // this.getw = this.actroute.snapshot.paramMap.get('sendMusic');
    // console.log("page2:", this.getw);

    const dataRev = this.actroute.snapshot.paramMap.get('sendMusic');
    // let getMusic = JSON.parse(dataRev)
    // console.log(getMusic);
  }



}
