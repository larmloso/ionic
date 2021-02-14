import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.page.html',
  styleUrls: ['./shopping.page.scss'],
})
export class ShoppingPage implements OnInit {

  product: any;

  constructor(public router: Router, public navCtrl: NavController) { }

  ngOnInit() {

    this.product = [
      {
        id: 1,
        product_name: "football",
        price: 400,
        checked: false,
        icon: 'https://i.pinimg.com/736x/58/ec/97/58ec971141b4f0d35ab372c195c1a7fe.jpg',
      },
      {
        id: 2,
        product_name: "bassketball",
        price: 450,
        checked: false,
        icon: 'https://cdn2.iconfinder.com/data/icons/activity-5/50/1F3C0-basketball-512.png',
      },
      {
        id: 3,
        product_name: "rugby",
        price: 500,
        checked: false,
        icon: 'https://image.flaticon.com/icons/png/512/2087/2087177.png',
      },
      {
        id: 4,
        product_name: "basbal",
        price: 200,
        checked: false,
        icon: 'https://m.media-amazon.com/images/I/71+hUFcL1fL._AC_SY355_.jpg',
      },
      {
        id: 5,
        product_name: "tennis",
        price: 150,
        checked: false,
        icon: 'https://ae01.alicdn.com/kf/HTB1R9MaRXXXXXXqXpXXq6xXFXXXw/9-5in-Big-Tennis-Ball-Pet-Chew-Toy-Jumbo-Ball.jpg',
      },
      {
        id: 6,
        product_name: "batminton",
        price: 50,
        checked: false,
        icon: 'https://previews.123rf.com/images/ylivdesign/ylivdesign1709/ylivdesign170910812/87002356-badminton-icon-simple-illustration-of-badminton-vector-icon-for-web.jpg',
      },
    ]
  }

  sendPage(e) {
    console.log(555);
    let dataObj = [];
    this.product.forEach(e => {
      if (e.checked == true) {
        dataObj.push(e)
      }
    });
    this.router.navigate(['shopping-details', JSON.stringify(dataObj)]);

  }


}
