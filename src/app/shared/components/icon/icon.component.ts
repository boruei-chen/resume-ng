import { Component, Input } from '@angular/core';
import { NamesEnum, ColorsEnum } from './icon.component.types';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent {
  @Input() name: NamesEnum;
  @Input() color: ColorsEnum;
  @Input() width: number;
  @Input() height: number;
}
