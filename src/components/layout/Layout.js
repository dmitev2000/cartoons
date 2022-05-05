import Navigation from "./Navigation";
import Footer from "./FooterComponent";

function Layout(props) {
    return (
        <div>
            <Navigation />
            <div>
                {props.children}
            </div>
            <Footer />
        </div>
    );
}

export default Layout;