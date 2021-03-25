import { Directive, OnInit, TemplateRef } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

@Directive({ selector: '[hgrModalLoader]' })
export class ModalLoaderDirective implements OnInit {
  private dialogRef?: MatDialogRef<any>;

  constructor(
    private readonly templateRef: TemplateRef<any>,
    private readonly router: Router,
    private readonly matDialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.dialogRef = this.matDialog.open(this.templateRef, { width: '800px', height: '600px', hasBackdrop: true });
    this.dialogRef
      .afterClosed()
      .pipe(
        tap(() => {
          this.router.navigate(['/', { outlets: { modal: null } }]);
        })
      )
      .subscribe();
  }
}
