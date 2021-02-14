import { Component, OnInit  } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {

  getuser: String;
  getpassword:number;
  radio: string;
  fish: string;

  radio_data: any = [
    {
      id: '1',
      text: 'radio_1',
      value: 'Radio 1',
      checked: false,
    }, {
      id: '2',
      text: 'radio_2',
      value: 'Radio 2',
      checked: false,
    }, 
  ];

  radio_mackerel: any = [
    {
      id: 1,
      text: 'Sardine',
      value: 'SARDINE',
      checked: false,
    },
    {
      id: 2,
      text: 'Anchovy',
      value: 'ANCHOVY',
      checked: false,
    },
    {
      id: 3,
      text: 'Mackerel',
      value: 'MACKEREL',
      checked: false,
    }
  ]


  constructor(public toastCtrl: ToastController) { }

  ngOnInit() {
  }

  radioHandler(event){
    this.radio = event.target.value;
  }

  fishyHandler(event) {
    this.fish = event.target.value;
  }

  async openTost(){
    const toast = await this.toastCtrl.create({
      message: this.getuser + "! "+ this.radio + " " + this.fish,
      duration: 5000, 
    });
    toast.present(); 
  }






}
