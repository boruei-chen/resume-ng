import { ReturnCodesEnum } from 'src/app/bff/enums/codes/return-codes.enum';

export interface ResponseHeader {
  returnCode: ReturnCodesEnum;
  returnMessage: string;
}
