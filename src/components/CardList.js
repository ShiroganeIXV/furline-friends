import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
    // loop through the robots array and create a card component for each robot
    const cardComponent = robots.map((robot,i) => { //The first parameter is the current element being processed in the array. The second parameter is the index of that element.
        // split the name into first and last name
        const [firstName, lastName] = robot.name.split(' ');
        // each child in an iterator should have a unique key prop
        return <Card key={i} 
        id={robot.id} 
        firstName={firstName} 
        lastName={lastName} 
        username={robot.username} 
        email={robot.email} />
    });

    // Test ErrorBoundary
    // if (true){
    //     throw new Error('Nooooo!');
    // }

    // return the card components
    return (
        // React.Fragment
        <> 
            {cardComponent}
        </>
    );

};

export default CardList;