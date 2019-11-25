import React from 'react';
import TeamNFO from '../../Elements/teamNfo';

const Header = (props) => {
    const teamNFO = (team) =>{
        return team ? <TeamNFO team={team} /> : null ;

    }
    return ( 
        <div>
            {teamNFO(props.teamData)}
        </div>
     );
}
 
export default Header;