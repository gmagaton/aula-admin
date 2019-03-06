import { Component } from '@angular/core';
import {
  AlertController,
  MenuController,
  ModalController,
  NavController,
  PopoverController,
  ToastController,
} from '@ionic/angular';

import { NotificationsComponent } from '../../components/notifications/notifications.component';

// Call notifications test by Popover and Custom Component.

@Component({
  selector: 'lembrete-page',
  templateUrl: './lembrete.page.html',
  styleUrls: ['./lembrete.page.scss']
})
export class LembretePage {

  public listaLembrete: Array<any>;
  public lembretes: Array<any> = [
    {
      id: 1,
      aula: {
        data: '2019-02-08T10:00:00.000',
        tipo: { id: 1, descricao: 'Teórica' },
        campo: { id: 1, nome: 'Mboi Mirin' }
      }
    },
    {
      id: 2,
      aula: {
        data: '2019-02-08T10:00:00.000',
        tipo: { id: 1, descricao: 'Teórica' },
        campo: { id: 1, nome: 'Mboi Mirin' }
      },
    }
  ];

  initializeItems(): void {
    this.listaLembrete = this.lembretes;
  }

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public popoverCtrl: PopoverController,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController
  ) {
    this.initializeItems();
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(true);
  }

  aula() {
    this.navCtrl.navigateForward('aula/aula-form');
  }

}
