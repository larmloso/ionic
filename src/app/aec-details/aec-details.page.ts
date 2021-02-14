import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aec-details',
  templateUrl: './aec-details.page.html',
  styleUrls: ['./aec-details.page.scss'],
})
export class AecDetailsPage implements OnInit {

  getData: any;
  constructor(public navCtrl: NavController, public actroute: ActivatedRoute) { }

  ngOnInit() {

    const DataObj = this.actroute.snapshot.paramMap.get('dataObj');
    this.getData = [JSON.parse(DataObj)];
    console.log(this.getData.id);
  }

  Back(){
    this.navCtrl.pop();
  }

}
