import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {LigneCommandeClientDto} from '../../../../gs-api/src/models/ligne-commande-client-dto';

@Component({
  selector: 'app-cmd-item',
  templateUrl: './cmd-item.component.html',
  styleUrls: ['./cmd-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CmdItemComponent implements OnInit {

  @Input()
  ligneOrder: LigneCommandeClientDto = {};

  constructor() { }

  ngOnInit(): void {
  }

}
