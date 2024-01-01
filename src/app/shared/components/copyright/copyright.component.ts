import { Component } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-copyright',
  templateUrl: './copyright.component.html',
  styleUrls: ['./copyright.component.scss']
})
export class CopyrightComponent {
  year: number = moment().year();
  owner: string = 'BO-RUEI CHEN';
}
