import Footer from "../components/Footers";
import Header from "../components/Header";


export default function Layout({ children }) {
  return (
    <div className="mx-auto max-w-8xl px-2 min-w-[360px]">
      <Header />


      {children}

      <Footer />
    </div>
  );
}
