import React from "react";
import Proptypes, { string } from "prop-types";
import Artists from "./Artists";

function Music({id, title, artist, album, genre, img}){
    const album_length = album.length;
    return (
        <div className="music">
            <img className="music__img" src={img}></img>
            <div className="music__data">
                <div className="music__firstbox">
                    <p className="music__title">{title.length > 10 ? title.slice(0,10)+ '...' : title}</p>
                    <ul className="music__artists">
                        {artist.map(arti => (
                            <Artists 
                                key={arti.id} 
                                id={arti.id} 
                                name={arti.name}
                            />
                        ))}
                    </ul>
                </div>
                <p className="music__album">{album_length>10 ? album.slice(0,10)+ '...' : album}</p>
                <p className="music__genre">{genre}</p>
            </div>
        </div>
    )
}

Music.prototype = {
    id : Proptypes.number.isRequired,
    title : Proptypes.string.isRequired,
    artist : Proptypes.arrayOf(string).isRequired,
    album : Proptypes.string.isRequired,
    genre : Proptypes.string.isRequired,
    img : Proptypes.string.isRequired
}

export default Music;