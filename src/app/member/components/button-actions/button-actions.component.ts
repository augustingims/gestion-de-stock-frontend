import {Component, OnInit, EventEmitter, Output, Input, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'app-button-actions',
  templateUrl: './button-actions.component.html',
  styleUrls: ['./button-actions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonActionsComponent implements OnInit {

  @Input()
  isNewShow = true;

  @Input()
  isExportShow = true;

  @Input()
  isImportShow = true;

  @Output()
  clickEvent =  new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  btnNew(): void{
    this.clickEvent.emit();
  }

}
