export type CurrencyType = 'black-coin' | 'coin'

export interface ShopItem {
  name: string
  title: string
  message?: string
  value: number
  amount: number
  currency: CurrencyType
  action: () => void
}
