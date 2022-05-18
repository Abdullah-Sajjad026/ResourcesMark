import {createContext, useState} from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

const CategoryContext = createContext();

const App = () => {
    const [category, setCategory] = useState("onlineCourses");

    return (
        <>
            <Header />
            <Banner />
            <CategoryContext.Provider value={[category, setCategory]}>
                <Navbar />
                <Main />
            </CategoryContext.Provider>
            <Footer />
        </>
    );
};
export {CategoryContext};
export default App;
