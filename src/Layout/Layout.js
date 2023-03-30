import Footer from "../components/Footers";
import Header from "../components/Header";


export default function Layout({ children }) {
  return (
    <div dir="rtl" className="  m-auto  min-w-[360px] bg-[#f9fafb]">

      <Header />

      <div className="min-h-[633px] max-w-screen-2xl m-auto">
        {children}
      </div>

      <div className="bg-white">
        <Footer />
      </div>

    </div>
  );
}
