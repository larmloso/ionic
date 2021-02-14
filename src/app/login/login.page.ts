import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  getuser: String;
  getpassword:number;
  datas: any = [
    {
      id: 1, 
      title: "Peperoni",
      value: "Pep",
      checked: false,
      icon: "camera-outline"
    },
    {
      id: 2,
      title: "Suausage",
      value: "sua",
      checked: true,
      icon: "bulb-outline"
    },
    {
      id: 3,
      title: "Mushrooms",
      value: "Mus",
      checked: false,
      icon: "bookmark-outline"
    }
  ]


  constructor(public toastCtrl: ToastController) { }


  ngOnInit() {
  }

  checkUser(){
    console.log("user :", this.getuser, " password :", this.getpassword);
  }

  async openTost() {
    let data = [];
    this.datas.forEach(e => {
      if(e.checked == true){
        data.push(e.title);
      }
    });
    // console.log(data);
    
    const toast = await this.toastCtrl.create({
      message: 'Wellcom ' + this.getuser + "! "+ data,
      duration: 5000, 
    });
    toast.present(); 
  }

}
