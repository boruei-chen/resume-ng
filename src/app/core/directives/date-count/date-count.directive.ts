import { Directive, OnInit, Input, Renderer2, ElementRef } from '@angular/core';
import { CommonService } from 'src/app/core/services/common/common.service';

@Directive({
  selector: '[appDateCount]'
})
export class DateCountDirective implements OnInit {
  @Input() startDate: string;
  @Input() endDate: string;

  constructor (
    private commonService: CommonService,
    private renderer: Renderer2,
    private elementRef: ElementRef
  ) { }

  ngOnInit () {
    const text = this.commonService.calculateRangeDate(this.startDate, this.endDate);
    this.renderer.setProperty(this.elementRef.nativeElement, 'innerText', text);
  }
}
