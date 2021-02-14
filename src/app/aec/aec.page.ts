import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aec',
  templateUrl: './aec.page.html',
  styleUrls: ['./aec.page.scss'],
})
export class AECPage implements OnInit {

  DataAEC: any;

  constructor(public router: Router, public navCtrl: NavController) { }

  ngOnInit() {

    this.DataAEC = [
      {
        id: 1,
        country_name: 'ประเทศไทย (Thailand)',
        religion: 'พุทธนิกายเถรวาท 95%, อิสลาม 4%',
        capital: 'กรุงเทพมหานคร',
        population: 'ประกอบด้วยชาวไทยเป็นส่วนใหญ่',
        flag: 'https://s.isanook.com/mn/0/ud/13/69225/thailand.jpg',
      },
      {
        id: 2,
        country_name: 'บรูไน ดารุสซาลาม (Brunei Darussalam)',
        religion: 'อิสลาม 67%, พุธ 13%, คริสต์ 10%',
        capital: 'บันดาร์ เสรี เบกาวัน',
        population: 'มาเลย์ 66%, จีน11%,อื่นๆ 23%',
        flag: 'https://s.isanook.com/mn/0/ud/13/69225/brunei.jpg',
      },
      {
        id: 3,
        country_name: 'กัมพูชา (Cambodia)',
        religion: 'พุทธ(เถรวาท) เป็นหลัก',
        capital: 'กรุงพนมเปญ',
        population: 'ประกอบด้วย ชาวเขมร 94%, จีน 4%,อื่นๆ 2%',
        flag: 'https://s.isanook.com/mn/0/ud/13/69225/cambodia.jpg',
      },
      {
        id: 4,
        country_name: 'อินโดนีเซีย (Indonesia)',
        religion: ' อิสลาม 87%, คริสต์ 10%',
        capital: 'จาการ์ตา',
        population: 'ประกอบด้วย ชนพื้นเมืองหลายกลุ่ม มีภาษามากกว่า 583 ภาษา ร้อยละ 61 อาศัยอยู่บนเกาะชวา',
        flag: 'https://s.isanook.com/mn/0/ud/13/69225/indonesia.jpg',
      },
      {
        id: 5,
        country_name: 'ลาว (Laos)',
        religion: '75% นับถือพุทธ, นับถือผี 16%',
        capital: 'นครหลวงเวียงจันทร์',
        population: 'ประกอบด้วย ชาวลาวลุ่ม 68%, ลาวเทิง 22%, ลาวสูง 9% รวมประมาณ 68 ชนเผ่า',
        flag: 'https://s.isanook.com/mn/0/ud/13/69225/laos.jpg',
      },
      {
        id: 6,
        country_name: 'มาเลเซีย (Malaysia)',
        religion: 'อิสลาม 60%, พุธ 19%, คริสต์ 11%',
        capital: 'กรุงกัวลาลัมเปอร์',
        population: 'ประกอบด้วย มาเลย์ 40%, จีน33%, อินเดีย 10%, ชนพื้นเมืองเกาะบอร์เนียว 10%',
        flag: 'https://s.isanook.com/mn/0/ud/13/69225/malaysia.jpg',
      },
      {
        id: 7,
        country_name: 'พม่า (Myanmar)',
        religion: 'นับถือพุทธ 90%, คริสต์ 5% อิสลาม 3.8%',
        capital: 'เนปีดอ (Naypyidaw)',
        population: 'ประกอบด้วยเผ่าพันธุ์ 135 มี 8 เชื้อชาติหลักๆ 8 กลุ่ม คือ พม่า 68%, ไทยใหญ่ 8%, กระเหรี่ยง 7%, ยะไข่ 4% จีน 3% มอญ 2% อินเดีย 2%',
        flag: 'https://s.isanook.com/mn/0/ud/13/69225/flag_of_myanmar-new.jpg',
      },
      {
        id: 8,
        country_name: 'ฟิลิปปินส์ (Philippines)',
        religion: ' คริสต์โรมันคาทอลิก 83% คริสต์นิกายโปรเตสแตนต์, อิสลาม 5%',
        capital: 'กรุงมะนิลา',
        population: 'ประกอบด้วย มาเลย์ 40%, จีน33%, อินเดีย 10%, ชนพื้นเมืองเกาะบอร์เนียว 10%',
        flag: 'https://s.isanook.com/mn/0/ud/13/69225/philipinnes.jpg',
      },
      {
        id: 9,
        country_name: 'สิงคโปร์ (Singapore)',
        religion: ' พุทธ 42.5%, อิสลาม 14.9%, คริสต์ 14.5%, ฮินดู 4%, ไม่นับถือศาสนา 25%',
        capital: 'สิงคโปร์',
        population: 'ประกอบด้วยชาวจีน 76.5%, มาเลย์ 13.8%, อินเดีย 8.1%',
        flag: 'https://s.isanook.com/mn/0/ud/13/69225/singapore.jpg',
      },
      {
        id: 10,
        country_name: 'เวียดนาม (Vietnam)',
        religion: 'พุทธนิกายมหายาน 70%, คริสต์ 15%',
        capital: 'กรุงฮานอย',
        population: 'ประกอบด้วยชาวเวียด 80%, เขมร 10%',
        flag: 'https://s.isanook.com/mn/0/ud/13/69225/vietnam.jpg',
      },

    ]
  }

  sendPage(item) {

    this.router.navigate(['aec-details', JSON.stringify(item)]);
  }



}
