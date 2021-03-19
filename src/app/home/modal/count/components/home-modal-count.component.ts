import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  templateUrl: './home-modal-count.component.html',
})
export class HomeModalCountComponent implements OnInit {
  @ViewChild('dialogContents', { static: true }) template!: TemplateRef<any>;

  constructor(private readonly matDialog: MatDialog) {}

  ngOnInit(): void {
    this.matDialog.open(this.template);
  }
}
