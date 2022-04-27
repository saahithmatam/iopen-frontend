import { TeamMembersWidget } from "../../components/Widgets";
import { MembersWidget} from "../../components/Widgets";
import React from "react";
// importing Link from react-router-dom to navigate to
// different end points.






const Team = () => {

	return (
        <div>
			<TeamMembersWidget />
            <MembersWidget />	
            </div>		
	);
    

};

export default Team;