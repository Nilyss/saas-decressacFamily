export class Creditor {
  id: string
  name: string
  monthlyPrice: number

  constructor(id: string, name: string, monthlyPrice: number) {
    this.id = id
    this.name = name
    this.monthlyPrice = monthlyPrice
  }
}
