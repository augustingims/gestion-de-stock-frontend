import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import { UtilisateurDto } from '../../../../gs-api/src/models/utilisateur-dto';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopbarComponent implements OnInit {

  @Input()
  userconnect: UtilisateurDto;

  constructor() { }

  ngOnInit(): void {
  }

}
