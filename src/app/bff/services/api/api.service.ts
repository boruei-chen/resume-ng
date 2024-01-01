import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { TransferService } from 'src/app/bff/services/transfer/transfer.service';
import { BaseResponse } from 'src/app/bff/models/base/base-response';
import { MainPageDataResp } from 'src/app/bff/models/sources/main-page-data';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor (
    private http: HttpClient
  ) { }

  fetchMainPageData () {
    return this.http.get<BaseResponse<MainPageDataResp>>('/assets/sources/main-page-data.json')
      .pipe(map((response) => TransferService.checkHttpResponse(response) ? response.transferResponse : null));
  }
}
