import {useContext, useEffect, useState} from "react";
import {CategoryContext} from "../../App";
import SingleCard from "./SingleCard/SingleCard";
import data from "../../data";

const Main = () => {
    const [resources, setResources] = useState([]);
    const [category] = useContext(CategoryContext);

    useEffect(() => {
        setResources(data.filter((resource) => resource.category === category));
    }, [category]);

    return (
        <main className="container">
            <section className="group">
                {/* <header class="group-header">
                    <ion-icon name="documents-outline"></ion-icon>
                    <h2>{category}</h2>
                </header> */}
                <article className="group-cards">
                    {resources.map((resource) => (
                        <SingleCard key={resource.link} resource={resource} />
                    ))}
                </article>
            </section>
        </main>
    );
};
export default Main;
