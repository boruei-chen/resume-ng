import { ResponseHeader } from './response-header';

export interface BaseResponse<T> {
  responseHeader: ResponseHeader;
  transferResponse: T;
}
