import Alert from "@/components/Alert (1)"
import Navbar from "@/components/Navbar"
export default function Layout({ children }) {
  return (
    <>
      <Alert />
      <Navbar />
      <main>{children}</main>
      
    </>
  )
}