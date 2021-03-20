import { Directive, OnInit, TemplateRef } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs/operators';

@Directive({ selector: '[hgrModalLoader]' })
export class ModalLoaderDirective implements OnInit {
  private dialogRef?: MatDialogRef<any>;

  constructor(
    private readonly templateRef: TemplateRef<any>,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
    private readonly matDialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.dialogRef = this.matDialog.open(this.templateRef, { width: '800px', height: '600px', hasBackdrop: true });
    this.dialogRef
      .afterClosed()
      .pipe(
        tap(() => {
          this.router.navigate([{ outlets: { modal: null } }], { relativeTo: this.routeWithoutModal });
        })
      )
      .subscribe();
  }

  private get routeWithoutModal(): ActivatedRoute {
    const baseRoute = this.findModalPart(this.activatedRoute);
    if (baseRoute.parent) {
      return baseRoute.parent;
    }

    throw new Error('Modal route has no parent.');
  }

  private findModalPart(activatedRoute: ActivatedRoute): ActivatedRoute {
    const snapshot = activatedRoute.snapshot;
    if (snapshot.outlet === 'modal') {
      return activatedRoute;
    }

    if (snapshot.url.length === 0 && activatedRoute.parent) {
      return this.findModalPart(activatedRoute.parent);
    }

    throw new Error('Cannot find modal outlet part of route without throwing away route data.');
  }
}
