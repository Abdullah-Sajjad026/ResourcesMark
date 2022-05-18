const SingleCard = ({resource}) => {
    return (
        <div class="card">
            <div class="icon-box">
                <img
                    src={`/resources/icons/${resource.icon}`}
                    alt={`${resource.name} icon`}
                />
            </div>
            <h3> {resource.name} </h3>
            <p>{resource.description}</p>
            <a href={resource.link} class="visit-btn" target="blank">
                Visit<ion-icon name="open-outline"></ion-icon>
            </a>
        </div>
    );
};
export default SingleCard;
