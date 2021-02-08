// topNav js

import topNavHeading from "./topNavHeading";
import "./topNav.scss";
import React from "react";

function topNav(){
    return(
        <div className="topNav">
            <i class="fas fa-angle-left"></i>

            <topNavHeading> Poopoo</topNavHeading>

            <i class="fas fa-search"></i>
        </div>
    );

}

export default topNav