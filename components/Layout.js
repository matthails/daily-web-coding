import Navbar from './Navbar';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <main className="main-height px-4 sm:px-6 lg:px-8">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
