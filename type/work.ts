type Link = {
  html: HTMLElement
  url: string
}

export interface Work {
  _id: string
  title: string
  publish: string
  link: Link
  hideTitle: string
  inCharge: string[]
  detail: HTMLElement
  hideDetail: HTMLElement
}