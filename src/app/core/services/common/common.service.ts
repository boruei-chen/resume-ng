import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  calculateRangeDate (startDate: string, endDate: string) {
    const momentStartDate = startDate ? moment(startDate, 'YYYY/MM/DD') : moment();
    const momentEndDate = endDate ? moment(endDate, 'YYYY/MM/DD') : moment();
    const diff = momentEndDate.diff(momentStartDate, 'months');
    const years = Math.floor(diff / 12);
    const months = diff % 12;
    return `${years} 年 ${months} 個月`;
  }
}
