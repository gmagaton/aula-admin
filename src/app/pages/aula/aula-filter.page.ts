import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'aula-filter-page',
  templateUrl: './aula-filter.page.html',
  styleUrls: ['./aula-filter.page.scss'],
})
export class AulaFilterPage implements OnInit {
  
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

}
