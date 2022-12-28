import Navigation from "./Navigation";
import AdditionalComponents from "./AdditionalComponents";
import Footer from "./Footer";

function Layout(props) {
  return (
    <div className="wrapper">
      <Navigation />
      <main>{props.children}</main>
      <AdditionalComponents />
      <Footer />
    </div>
  );
}

export default Layout;
