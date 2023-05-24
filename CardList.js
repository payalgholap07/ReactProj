import React from "react";
import Card from "./Card";

// const CardList = ({robots}) => {
//     const cardComponent = robots.map((user, i) => {
//         return (
//         <Card 
//         key={i} 
//         id={robots[i].id} 
//         name={robots[i].name} 
//         email={robots[i].email}/>
//         )
//     })
//     return (
//         <div>
//             {cardComponent}
//         </div>
//      );
// }

const CardList = ({robots}) => {
    return (
        <div>
            {
                robots.map((user, i) => {
                    return (
                    <Card 
                    key={i} 
                    id={robots[i].id} 
                    name={robots[i].name} 
                    email={robots[i].email}/>
                    );
                    })
            }
        </div>
    );
}
export default CardList;

// key prop should have something that doesnt Change .
// For example index or i in our case could change if array items get moved.
// So a better key in this case would be something unique like id. 