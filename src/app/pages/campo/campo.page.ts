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
  selector: 'campo-page',
  templateUrl: './campo.page.html',
  styleUrls: ['./campo.page.scss']
})
export class CampoPage {

  public listaCampo: Array<any>;
  public campos: Array<any> = [
    {
      id: 1,
      nome: 'Mboi Mirin 1',
      endereco: "Av Mboi Mirin 1",
      numero: 123,
      telefone: '(11) 9999-9999'
    },
    {
      id: 2,
      nome: 'Mboi Mirin 2',
      endereco: "Av Mboi Mirin 2",
      numero: 123,
      telefone: '(11) 9999-9999'
    },
    {
      id: 3,
      nome: 'Mboi Mirin 3',
      endereco: "Av Mboi Mirin 3",
      numero: 123,
      telefone: '(11) 9999-9999'
    },
    {
      id: 4,
      nome: 'Mboi Mirin 4',
      endereco: "Av Mboi Mirin 4",
      numero: 123,
      telefone: '(11) 9999-9999'
    },
  ];

  initializeItems(): void {
    this.listaCampo = this.campos;
  }

  getItems(searchbar) {
    this.initializeItems();
    let q = searchbar.srcElement.value;
    if (!q) {
      return;
    }

    this.listaCampo = this.listaCampo.filter((v) => {
      if (v.nome && q) {
        if (v.nome.toLowerCase().indexOf(q.toLowerCase()) > -1) {
          return true;
        }
        return false;
      }
    });
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

  campo() {
    this.navCtrl.navigateForward('campo/campo-form');
  }

  novo() {
    this.navCtrl.navigateForward('campo/campo-form');
  }

  async notifications(ev: any) {
    const popover = await this.popoverCtrl.create({
      component: NotificationsComponent,
      event: ev,
      animated: true,
      showBackdrop: true
    });
    return await popover.present();
  }

}
