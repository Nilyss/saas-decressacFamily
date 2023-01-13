import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

// Utils
import * as Utils from '../../utils/utils'

// RxJs
import { Observable, tap, catchError } from 'rxjs'

// Models
import { Bank } from '../Model/bank'

@Injectable({ providedIn: 'root' })
export class BankService {
  getBankList(): Observable<Bank[]> {
    return this.http.get<Bank[]>(Utils.getBankEndpoint).pipe(
      tap((banks: Bank[]) => Utils.log('BankService, getBankList', banks)),
      catchError((error: Error) => Utils.handleError(error, `${error}`))
    )
  }
  constructor(private http: HttpClient) {}
}
