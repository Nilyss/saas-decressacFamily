import { Component, OnInit, OnDestroy } from '@angular/core'

// RxJs
import { Subscription, tap } from 'rxjs'

// Models
import { Bank } from '../../../data/Model/bank'
import { Creditor } from '../../../data/Model/creditor'

// Services
import { BankService } from '../../../data/service/bank.service'
import { CreditorService } from '../../../data/service/creditor.service'

@Component({
  selector: 'app-form',
  template: `
    <section class="form">
      <form #bankAccount="ngForm" class="form__formWrapper">
        <ul
          *ngIf="banks || creditors"
          class="form__formWrapper__elementsWrapper"
        >
          <li
            *ngFor="let bank of banks"
            class="form__formWrapper__elementsWrapper__element"
          >
            <h3 class="form__formWrapper__elementsWrapper__element__name">
              {{ bank?.name }}
            </h3>
            <p class="form__formWrapper__elementsWrapper__element__balance">
              <span>Currency : </span> {{ bank?.balance }} €
            </p>
          </li>
          <li
            *ngFor="let creditor of creditors"
            class="form__formWrapper__elementsWrapper__element--creditors"
          >
            <h3
              class="form__formWrapper__elementsWrapper__element__name--creditors"
            >
              {{ creditor?.name }}
            </h3>
            <p
              class="form__formWrapper__elementsWrapper__element__balance--creditors"
            >
              <span>Currency : </span> {{ creditor?.monthlyPrice }} €
            </p>
          </li>
        </ul>
      </form>
    </section>
  `,
  styleUrls: ['form.component.scss'],
})
export class FormComponent implements OnInit, OnDestroy {
  subscription: Subscription | undefined
  banks: Bank[]
  creditors: Creditor[]

  getBankData() {
    this.bankService
      .getBankList()
      .pipe(tap((res: Bank[]) => (this.banks = res)))
      .subscribe()
  }

  getCreditorData() {
    this.creditorService
      .getCreditorList()
      .pipe(tap((res: Creditor[]) => (this.creditors = res)))
      .subscribe()
  }

  constructor(
    private bankService: BankService,
    private creditorService: CreditorService
  ) {}

  ngOnInit() {
    this.getBankData()
    this.getCreditorData()
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe()
  }
}
