import { Injectable } from '@angular/core';
// import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  private _isDialogOpen: Boolean = false;

  constructor(
    // private alertController: AlertController
  ) { }

  async showErrorDialog(message: string, subMessage: string = "") {
    if (this._isDialogOpen == false) {
      // const alert = await this.alertController.create({
      //   cssClass: 'alert-error',
      //   header: 'Failed',
      //   subHeader: message,
      //   message: subMessage,
      //   buttons: ['OK']
      // });

      // await alert.present();
    }
  }

  async showSuccessDialog(message: string, subHeader: string = "") {
    if (this._isDialogOpen == false) {
      // const alert = await this.alertController.create({
      //   cssClass: 'alert-success',
      //   header: 'Success',
      //   subHeader: subHeader,
      //   message: message,
      //   buttons: ['OK']
      // });

      // await alert.present();
    }
  }
}
