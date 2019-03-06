import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, ToastController } from '@ionic/angular';


@Component({
  selector: 'lembrete-form-page',
  templateUrl: './lembrete-form.page.html',
  styleUrls: ['./lembrete-form.page.scss'],
})
export class LembreteFormPage implements OnInit {

  constructor(
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController
    ) { }

  ngOnInit() {
  }

  async salvar() {
    const loader = await this.loadingCtrl.create({
      duration: 1000
    });

    loader.present();
    loader.onWillDismiss().then(async l => {
      const toast = await this.toastCtrl.create({
        showCloseButton: true,
        cssClass: 'bg-profile',
        message: 'Campo Salvo com Sucesso!',
        duration: 1000,
        position: 'bottom',
        closeButtonText: 'Fechar'
      });

      toast.present();
      this.navCtrl.navigateForward('campo');
    });
  }

}
