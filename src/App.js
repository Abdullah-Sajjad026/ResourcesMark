import "./App.css";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

const App = () => {
    return (
        <>
            <Header />
            <Banner />

            <Navbar />
            <Main />
            <Footer />
        </>
    );
};
export default App;
