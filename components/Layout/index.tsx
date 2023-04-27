import { Header } from "./Header";
import { Footer } from "./Footer";
import { ReactNode } from "react";
import { useRouter } from "next/router";

type LayoutProps = {
  children: ReactNode
}
export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter();
  const href = router.pathname
  return (
    <>
      <Header currencyHref={href}/>
      {children}
      <Footer currencyHref={href}/>
    </>
  )
}