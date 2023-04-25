import React from "react";
const ProfileCard = ({image, name , designation, jobDescription }) => {
    const handleClick = () => {
        alert(name);
    
};
return(
    <div className = "profile-cards">
        <div className="image-wrapper">
            <img src={image} alt={name} />

        </div>
        <div className="details">
            <h2>{name}</h2>
             <h3>{designation}</h3>
             <p>{jobDescription}
             </p>
             <button onClick={handleClick} >See More</button>
        </div>
    </div>
);
};
export default ProfileCard;