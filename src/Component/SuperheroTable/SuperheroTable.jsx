import React from 'react';

const SuperheroTable = ({superheroes}) => {
    return ( 
        <div>
            <h1>{superheroes[1].name}</h1>
        </div>
     );
}
 
export default SuperheroTable;
