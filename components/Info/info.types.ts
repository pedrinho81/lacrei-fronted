export type InfoProps = {
  title: string,
  message: string,
  buttons?: {
    text: string,
    color: string,
    bg: string,
    href: string,
    border?: boolean
  }[]
  img: {
    src: string,
    alt: string
  }
  borderOnLeft?: boolean;
}