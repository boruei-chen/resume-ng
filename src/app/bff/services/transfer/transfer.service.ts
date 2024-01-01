import { Injectable } from '@angular/core';
import { ReturnCodesEnum } from 'src/app/bff/enums/codes/return-codes.enum';
import { BaseResponse } from 'src/app/bff/models/base/base-response';

@Injectable({
  providedIn: 'root'
})
export class TransferService {
  static checkHttpResponse <T> (response: BaseResponse<T>, triggerAlert = true): boolean {
    if (triggerAlert) {
      try {
        switch (response.responseHeader.returnCode) {
          case ReturnCodesEnum.Success: {
            break;
          }
          default: {
            alert(response.responseHeader.returnMessage);
            break;
          }
        }
      } catch (error) {
        console.log(error);
        return false;
      }
    }
    return response.responseHeader.returnCode === ReturnCodesEnum.Success;
  }
}
