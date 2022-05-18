import {
    IoBulbOutline,
    IoShapesOutline,
    IoLogoYoutube,
    IoDocumentsOutline,
    IoInformationOutline,
    IoChatbubblesOutline,
    IoTerminalOutline,
    IoLogoCss3,
    IoCodeSlashOutline,
    IoImagesOutline,
    IoColorPaletteOutline,
    IoPaperPlaneOutline,
    IoDocumentTextOutline,
    IoCloudUploadOutline,
    IoBookOutline,
} from "react-icons/io5";

import {useContext, useEffect} from "react";
import {CategoryContext} from "../../App";

const Navbar = () => {
    const [category, setCategory] = useContext(CategoryContext);

    const clickHandler = (e) => {
        setCategory(e.target.attributes["data-category"].value);
    };

    useEffect(() => {
        const allBtns = document.querySelectorAll(`button.group-nav-link`);
        allBtns.forEach((btn) => {
            if (btn.getAttribute("data-category") === category)
                btn.classList.add("active-category");
            else btn.className = "group-nav-link";
        });
    }, [category]);

    return (
        <nav className="group-nav" id="category-nav">
            <ul>
                {/* <li>
                    <button
                        onClick={clickHandler}
                        data-category=""
                        className="group-nav-link"
                    >
                        <ion-icon name="bulb-outline"></ion-icon>All
                    </button>
                </li> */}
                <li>
                    <button
                        onClick={clickHandler}
                        data-category="onlineCourses"
                        className="group-nav-link"
                    >
                        <IoBulbOutline className="nav-icon" />
                        Online Courses
                    </button>
                </li>
                <li>
                    <button
                        onClick={clickHandler}
                        data-category="interactiveTutorials"
                        className="group-nav-link"
                    >
                        <IoShapesOutline className="nav-icon" />
                        Interactive Tutorials
                    </button>
                </li>
                <li>
                    <button
                        onClick={clickHandler}
                        data-category="youtubeChannels"
                        className="group-nav-link"
                    >
                        <IoLogoYoutube className="nav-icon" />
                        Youtube Channels
                    </button>
                </li>
                <li>
                    <button
                        onClick={clickHandler}
                        data-category="reading"
                        className="group-nav-link"
                    >
                        <IoBookOutline className="nav-icon" />
                        Reading
                    </button>
                </li>
                <li>
                    <button
                        onClick={clickHandler}
                        data-category="references"
                        className="group-nav-link"
                    >
                        <IoDocumentsOutline className="nav-icon" />
                        References - CheatSheets
                    </button>
                </li>
                <li>
                    <button
                        onClick={clickHandler}
                        data-category="challenges"
                        className="group-nav-link"
                    >
                        <IoInformationOutline className="nav-icon" />
                        Problem-Solving - Challenges
                    </button>
                </li>
                <li>
                    <button
                        onClick={clickHandler}
                        data-category="communities"
                        className="group-nav-link"
                    >
                        <IoChatbubblesOutline className="nav-icon" />
                        Communities - Blogs
                    </button>
                </li>
                <li>
                    <button
                        onClick={clickHandler}
                        data-category="tools"
                        className="group-nav-link"
                    >
                        <IoTerminalOutline className="nav-icon" />
                        Tools
                    </button>
                </li>
                <li>
                    <button
                        onClick={clickHandler}
                        data-category="css"
                        className="group-nav-link"
                    >
                        <IoLogoCss3 className="nav-icon" />
                        CSS
                    </button>
                </li>
                <li>
                    <button
                        onClick={clickHandler}
                        data-category="frameworks"
                        className="group-nav-link"
                    >
                        <IoCodeSlashOutline className="nav-icon" />
                        Frameworks - Libraries
                    </button>
                </li>
                <li>
                    <button
                        onClick={clickHandler}
                        data-category="inspiration"
                        className="group-nav-link"
                    >
                        <IoBulbOutline className="nav-icon" />
                        Inspiration
                    </button>
                </li>
                <li>
                    <button
                        onClick={clickHandler}
                        data-category="graphics"
                        className="group-nav-link"
                    >
                        <IoImagesOutline className="nav-icon" /> UI Graphics
                    </button>
                </li>
                <li>
                    <button
                        onClick={clickHandler}
                        data-category="colors"
                        className="group-nav-link"
                    >
                        <IoColorPaletteOutline className="nav-icon" />
                        Colors
                    </button>
                </li>
                <li>
                    <button
                        onClick={clickHandler}
                        data-category="typography"
                        className="group-nav-link"
                    >
                        <IoDocumentTextOutline className="nav-icon" />
                        Typography
                    </button>
                </li>
                <li>
                    <button
                        onClick={clickHandler}
                        data-category="icons"
                        className="group-nav-link"
                    >
                        <IoPaperPlaneOutline className="nav-icon" />
                        Icons
                    </button>
                </li>
                <li>
                    <button
                        onClick={clickHandler}
                        data-category="deployment"
                        className="group-nav-link"
                    >
                        <IoCloudUploadOutline className="nav-icon" />
                        Deployment - Testing
                    </button>
                </li>
            </ul>
        </nav>
    );
};
export default Navbar;
