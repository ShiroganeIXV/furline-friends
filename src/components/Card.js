import React from "react";

// This function capitalizes the first letter of a string
const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


// const Card = (props) => {
    // with destructuring i don't need to use props.firstName, props.lastName, props.email, props.id
const Card = ({firstName,lastName,email,id}) => {    
    return (
        <div className="tc bg-lightest-blue dib br3 pa3 ma2 grow bw2 shadow-5">
            <img alt="Avatar" src={`https://robohash.org/${id}?set=set4&size=200x200`}></img>
            <div>
                <h2>{capitalizeFirstLetter(firstName)} {capitalizeFirstLetter(lastName)}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
};
export default Card;