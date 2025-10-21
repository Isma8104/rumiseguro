import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-preview-image',
  template: `
    <mat-dialog-content class="mat-typography" align="center">
      <div class="col-xs-12 col-sm-6 col-md-{{sizeImg}}" *ngFor="let item of imageUrl">
        <div style="width: 200px; height: 200px;">
          <a href="{{item.img}}" target="_blank">
            <img [src]="item.img" style="width: 100%; height: 100%; object-fit: cover;">
          </a>
        </div>
      </div>
    </mat-dialog-content>
    <div mat-dialog-actions align="end" class="dialog-footer">
      <button class="btn btn-fill btn-info btn-md" (click)="closeModal()" type="button">
          Cerrar 
      </button>
    </div>
  `
})
export class ImagePreviewComponent {
  @Input() imageUrl: string = "";
  sizeImg=4;

  constructor(
    public dialogRef: MatDialogRef<ImagePreviewComponent>,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ){
    this.imageUrl = data.img;
    
    if (this.imageUrl) {
      switch (this.imageUrl.length){
        case 1:
          this.imageUrl;
          this.sizeImg = 12;
          break;
        case 2:
          this.sizeImg = 6;
          break;
        case 3:
          this.sizeImg  = 4;
          break;
        case 4:
          this.sizeImg = 3;
          break;
      }
    }
  }

  closeModal() {
    // Lógica para cerrar el modal (por ejemplo, emitir un evento)
    this.dialogRef.close();
  }
}