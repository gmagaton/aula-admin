import { Component } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { Pages } from './interfaces/pages';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public static usuario: Usuario;
  public appPages: Array<Pages>;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public navCtrl: NavController
  ) {
    this.appPages = [
      {
        title: 'Home',
        url: '/home-results',
        direct: 'root',
        icon: 'home'
      },
      {
        title: 'Professores',
        url: '/professor',
        direct: 'forward',
        icon: 'school'
      },

      {
        title: 'Aulas',
        url: '/aula',
        direct: 'forward',
        icon: 'book'
      },

      {
        title: 'Campos',
        url: '/edit-profile',
        direct: 'forward',
        icon: 'pin'
      },

      {
        title: 'Lembretes',
        url: '/lembrete',
        direct: 'forward',
        icon: 'notifications'
      }

    ];

    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.hideSplashScreen();
    }).catch(() => { });
  }

  hideSplashScreen() {
    if (this.splashScreen) {
      setTimeout(() => {
        this.splashScreen.hide();
      }, 100);
    }
  }

  goToEditProgile() {
    this.navCtrl.navigateForward('edit-profile');
  }

  logout() {
    this.navCtrl.navigateRoot('/');
  }
}


export class Usuario {
  nome: string;
  email: string;

  constructor(nome: string, email: string){
    this.nome = nome;
    this.email = email;
  }
}
