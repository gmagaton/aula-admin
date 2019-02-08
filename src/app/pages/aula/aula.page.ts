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
import { ImagePage } from '../modal/image/image.page';
import { AulaFilterPage } from './aula-filter.page';

// Call notifications test by Popover and Custom Component.

@Component({
  selector: 'aula-page',
  templateUrl: './aula.page.html',
  styleUrls: ['./aula.page.scss']
})
export class AulaPage {

  public listaAula: Array<any>;
  public aulas: Array<any> = [
    {
      professor: { nome: 'Nome do Professor', perfil: { id: 1, descricao: 'Professor' } },
      data: '2019-02-08T10:00:00.000',
      tipo: { id: 1, descricao: 'Teórica' },
      campo: { id: 1, nome: 'Mboi Mirin' }
    },
    {
      professor: { nome: 'Nome do Professor', perfil: { id: 1, descricao: 'Professor' } },
      data: '2019-02-08T10:00:00.000',
      tipo: { id: 1, descricao: 'Teórica' },
      campo: { id: 1, nome: 'Mboi Mirin' }
    },
    {
      professor: { nome: 'Nome do Professor', perfil: { id: 1, descricao: 'Professor' } },
      data: '2019-02-08T10:00:00.000',
      tipo: { id: 1, descricao: 'Teórica' },
      campo: { id: 1, nome: 'Mboi Mirin' }
    },
    {
      professor: { nome: 'Nome do Professor', perfil: { id: 1, descricao: 'Professor' } },
      data: '2019-02-08T10:00:00.000',
      tipo: { id: 1, descricao: 'Teórica' },
      campo: { id: 1, nome: 'Mboi Mirin' }
    },
    {
      professor: { nome: 'Nome do Professor', perfil: { id: 1, descricao: 'Professor' } },
      data: '2019-02-08T10:00:00.000',
      tipo: { id: 1, descricao: 'Teórica' },
      campo: { id: 1, nome: 'Mboi Mirin' }
    }
  ];

  initializeItems(): void {
    this.listaAula = this.aulas;
  }

  getItems(searchbar) {
    this.initializeItems();
    var q = searchbar.srcElement.value;
    if (!q) {
      return;
    }

    this.listaAula = this.listaAula.filter((v) => {
      if (v.professor.nome && q) {
        if (v.professor.nome.toLowerCase().indexOf(q.toLowerCase()) > -1) {
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

  settings() {
    this.navCtrl.navigateForward('settings');
  }

  aula() {
    this.navCtrl.navigateForward('aula/aula-form');
  }

  async searchFilter() {
    const modal = await this.modalCtrl.create({
      component: AulaFilterPage
    });
    return await modal.present();
  }

  async presentImage(image: any) {
    const modal = await this.modalCtrl.create({
      component: ImagePage,
      componentProps: { value: image }
    });
    return await modal.present();
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
