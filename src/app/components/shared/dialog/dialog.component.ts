import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogInterface } from '../../../interfaces/dialog.interface';
import { StateService } from '../../../_services/shared/state-service';
import { IconModule, IconSetModule, IconSetService } from '@coreui/icons-angular';
import { cilXCircle, cilCheckCircle } from '@coreui/icons';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  providers: [IconSetService],
})
export class DialogComponent implements OnInit {
  iconName: string;
  customClasses: string;

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public dialogData: DialogInterface,
    public stateService: StateService,
    public iconSet: IconSetService
  ) {
    iconSet.icons = { cilXCircle, cilCheckCircle };
  }

  ngOnInit(): void {
    if (this.dialogData.isError) {
      this.iconName = "cil-x-circle";
      this.customClasses = "text-danger";
    } else {
      this.iconName = "cil-check-circle";
      this.customClasses = "text-success"
    }
  }

  handleDialogSubmit() {
    this.stateService.isAsyncOperationRunning$.next(true);
    setTimeout(() => {
      this.dialogData.okCallbackMethod();
      this.stateService.isAsyncOperationRunning$.next(false);
      this.dialogRef.close();
    }, 500);
  }
  closeDialog(): void {
    this.dialogData.cancelCallbackMethod();
    this.dialogRef.close();
  }

}
