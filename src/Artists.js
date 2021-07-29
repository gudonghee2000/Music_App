import React from "react";
import Proptypes from "prop-types";

function Artists({id, name}){
    return <li className="artists__artist">{name}</li>;
}

Artists.prototype = {
    id : Proptypes.number.isRequired,
    name : Proptypes.string.isRequired,
}

export default Artists;