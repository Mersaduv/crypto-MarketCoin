import Footer from "../components/Footers";
import Header from "../components/Header";


export default function Layout({ children }) {
  return (
    <div className="mx-auto max-w-6xl px-2">
      <Header />
  
      {children}
      <Footer />
    </div>
  );
}
