import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
import { Firebase } from '@ionic-native/firebase/ngx';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { AlertController, LoadingController, MenuController, NavController, ToastController } from '@ionic/angular';
import { AppComponent, Usuario } from 'src/app/app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public onLoginForm: FormGroup;
  public userData;

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    private formBuilder: FormBuilder,
    private facebook: Facebook,
    private googlePlus: GooglePlus,
    private firebase: Firebase
  ) { }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  ngOnInit() {

    this.onLoginForm = this.formBuilder.group({
      'email': [null, Validators.compose([
        Validators.required
      ])],
      'password': [null, Validators.compose([
        Validators.required
      ])]
    });
  }

  async forgotPass() {
    const alert = await this.alertCtrl.create({
      header: 'Forgot Password?',
      message: 'Enter you email address to send a reset link password.',
      inputs: [
        {
          name: 'email',
          type: 'email',
          placeholder: 'Email'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Confirm',
          handler: async () => {
            const loader = await this.loadingCtrl.create({
              duration: 2000
            });

            loader.present();
            loader.onWillDismiss().then(async l => {
              const toast = await this.toastCtrl.create({
                showCloseButton: true,
                message: 'Email was sended successfully.',
                duration: 3000,
                position: 'bottom'
              });

              toast.present();
            });
          }
        }
      ]
    });

    await alert.present();
  }

  // // //
  goToRegister() {
    this.navCtrl.navigateRoot('/register');
  }

  goToHome() {
    this.navCtrl.navigateRoot('/home-results');
  }

  loginGoogle() {
    this.googlePlus.login({})
      .then(res => {
        console.log('Logged into Google!', res);
        this.goToHome();
      })
      .catch(err => {
        console.error(err);
      });
  }

  loginFacebook() {

    this.facebook.login(['public_profile', 'user_friends', 'email'])
      .then((res: FacebookLoginResponse) => {
        console.log('Logged into Facebook!', res);
        AppComponent.usuario = new Usuario(res.authResponse.userID, res.authResponse.accessToken);
        this.goToHome();
      })
      .catch(e => {
        console.log('Error logging into Facebook', e);
      });
    /*
        return this.facebook.login(['email'])
          .then(response => {
            const facebookCredential = this.firebase.auth.FacebookAuthProvider
              .credential(response.authResponse.accessToken);
    
            this.firebase.auth().signInWithCredential(facebookCredential)
              .then(success => {
                console.log("Firebase success: " + JSON.stringify(success));
              });
    
          }).catch((error) => { console.log(error) });
          */

  }

}
