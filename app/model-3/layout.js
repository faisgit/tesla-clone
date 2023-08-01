import Model3Nav from "./components/Model3Nav";

export const metadata = {
  title: "Model 3 | Tesla",
  description: "Generated by create next app",
};
export default function Layout({ children }) {
  return <main>
    <Model3Nav />
    {children}
    </main>;
}
