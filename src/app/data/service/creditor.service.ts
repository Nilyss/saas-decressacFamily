import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

// Utils
import * as Utils from '../../utils/utils'

// RxJs
import { Observable, tap, catchError } from 'rxjs'

// Models
import { Creditor } from '../Model/creditor'

@Injectable({ providedIn: 'root' })
export class CreditorService {
  getCreditorList(): Observable<Creditor[]> {
    return this.http.get<Creditor[]>(Utils.getCreditorEndpoint).pipe(
      tap((creditor: Creditor[]) =>
        Utils.log('CreditorService, getCreditorList', creditor)
      ),
      catchError((error: Error) => Utils.handleError(error, `${error}`))
    )
  }

  constructor(private http: HttpClient) {}
}
