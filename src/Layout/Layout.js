import Footer from "../components/Footers";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

export default function Layout({ children }) {
  return (
    <div className="">
      <Header />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
