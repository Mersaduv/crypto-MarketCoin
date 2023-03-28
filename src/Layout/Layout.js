import Footer from "../components/Footers";
import Header from "../components/Header";


export default function Layout({ children }) {
  return (
    <div dir="rtl" className="max-w-screen-2xl m-auto px-2 min-w-[360px] ">
      <Header />


      {children}

      <Footer />
    </div>
  );
}
