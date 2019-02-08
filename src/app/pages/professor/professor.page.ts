import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  AlertController,
  MenuController,
  ModalController,
  NavController,
  PopoverController,
  ToastController,
} from '@ionic/angular';
import { ProfessorFilterPage } from 'src/app/pages/professor/professor-filter.page';

// Modals
// Call notifications test by Popover and Custom Component.
@Component({
  selector: 'professor-page',
  templateUrl: './professor.page.html',
  styleUrls: ['./professor.page.scss']
})
export class ProfessorPage {

  public listaProfessor: Array<any>;
  public professores: Array<any> = [    
    { nome: 'nome 1', email: 'email1', perfil: { id: 1, descricao: 'Professor' }, qtdAula: 10 },
    { nome: 'nome 2', email: 'email2', perfil: { id: 1, descricao: 'Professor' }, qtdAula: 10 },
    { nome: 'nome 3', email: 'email3', perfil: { id: 1, descricao: 'Professor' }, qtdAula: 10 },
    { nome: 'nome 4', email: 'email4', perfil: { id: 1, descricao: 'Professor' }, qtdAula: 10 },
    { nome: 'nome 5', email: 'email5', perfil: { id: 1, descricao: 'Professor' }, qtdAula: 10 },
    { nome: 'nome 6', email: 'email6', perfil: { id: 1, descricao: 'Professor' }, qtdAula: 10 },
    { nome: 'nome 7', email: 'email7', perfil: { id: 1, descricao: 'Professor' }, qtdAula: 10 },
    { nome: 'nome 8', email: 'email8', perfil: { id: 1, descricao: 'Professor' }, qtdAula: 10 },
    { nome: 'nome 9', email: 'email9', perfil: { id: 1, descricao: 'Professor' }, qtdAula: 10 },
    { nome: 'nome 10', email: 'email10', perfil: { id: 1, descricao: 'Professor' }, qtdAula: 10 }
  ];

  initializeItems(): void {
    this.listaProfessor = this.professores  ;
  }

  getItems(searchbar) {
    this.initializeItems();
    var q = searchbar.srcElement.value;
    if (!q) {
      return;
    }
 
    this.listaProfessor = this.listaProfessor.filter((v) => {
      if(v.email && q) {
        if (v.email.toLowerCase().indexOf(q.toLowerCase()) > -1) {
          return true;
        }
        return false;
      }
    });
  }

  constructor(
    public navCtrl: NavController,
    public router: Router,
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

  professor() {
    this.navCtrl.navigateForward('professor/professor-form');    
  }

  async searchFilter() {
    const modal = await this.modalCtrl.create({
      component: ProfessorFilterPage
    });
    return await modal.present();
  }


}
