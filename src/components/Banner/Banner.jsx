import {IoArrowUpCircleOutline} from "react-icons/io5";

const Banner = () => {
    return (
        <section className="banner">
            <a href="#category-nav">
                <div className="top-btn">
                    <IoArrowUpCircleOutline />
                </div>
            </a>
            <div className="content">
                <h1>Resources Mark</h1>
                <h3>
                    A curated list of resources for Learners and Developers.
                </h3>
            </div>
            <form
                action="https://usebasin.com/f/e924d14cf4be"
                method="POST"
                className="sumbit-form"
            >
                {" "}
                <input
                    type="text"
                    name="resource-name"
                    id=""
                    placeholder="Resource Name"
                />{" "}
                <input
                    type="text"
                    name="resource-url"
                    id=""
                    placeholder="Resource URL"
                />{" "}
                <button type="submit">Submit</button>{" "}
            </form>
            <p>Suggest a Resource.</p>
        </section>
    );
};
export default Banner;
