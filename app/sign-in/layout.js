import Alert from "@/components/Alert"
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