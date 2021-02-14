import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-details',
  templateUrl: './shopping-details.page.html',
  styleUrls: ['./shopping-details.page.scss'],
})
export class ShoppingDetailsPage implements OnInit {

  getData: any;
  total: any;

  constructor(public navCtrl: NavController, public actroute: ActivatedRoute) { }

  ngOnInit() {

    const DataObj = this.actroute.snapshot.paramMap.get('dataObj');
    this.getData = JSON.parse(DataObj);
    this.total = 0;
    this.getData.forEach(e => {
      this.total = this.total + (e.price);
    });


  }

  Back(){
    this.navCtrl.pop();
  }

}
