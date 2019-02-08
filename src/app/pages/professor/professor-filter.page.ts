import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'professor-filter-page',
  templateUrl: './professor-filter.page.html',
  styleUrls: ['./professor-filter.page.scss'],
})
export class ProfessorFilterPage implements OnInit {
  
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

}
