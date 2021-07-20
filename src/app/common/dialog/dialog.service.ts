import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../components/shared/dialog/dialog.component';
import { DialogInterface } from '../../interfaces/dialog.interface';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  private _isDialogOpen: Boolean = false;

  constructor(
    // private alertController: AlertController
    private dialog: MatDialog
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

      const dialogInterface: DialogInterface = {
        dialogHeader: message,
        dialogContent: subMessage,
        cancelButtonLabel: 'Cancel',
        confirmButtonLabel: 'Ok',
        showCancelButton: false,
        isError: true,
        okCallbackMethod: () => {
          
        },
        cancelCallbackMethod: () => {

        }
      };
      this.dialog.open(DialogComponent, {
        width: '300px',
        data: dialogInterface,
      });
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
