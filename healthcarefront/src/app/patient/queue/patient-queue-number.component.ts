import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-patient-queue-number',
  template: '<h3 fxLayoutAlign="center">Your queue number is:</h3><br>' +
            '<mat-dialog-content>' +
              '<h1 fxLayoutAlign="center">{{ passedData.queueNumber }}</h1>' +
            '</mat-dialog-content>' +
            '<mat-dialog-actions>' +
              '<button mat-button style="width:300px" [mat-dialog-close]="true">Ok</button>' +
            '</mat-dialog-actions>'
})

export class PatientQueueNumberComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public passedData: any) {}

}
