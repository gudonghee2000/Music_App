import React from "react";
import axios from "axios";
import Music from "./Musics";
import "./App.css";

class App extends React.Component{
  state = {
    isSearching : true,
    musics : []
  };
  getDate = async () => {
    const url = "https://www.music-flo.com/api/meta/v1/track/KPOP/new?page=1&size=100";
    const { data : 
      { data : 
        {list}
      }
    } = await axios.get(url);
    this.setState({ isSearching : false, musics : list });
  }
  componentDidMount(){
    this.getDate();
  }
  render(){
    const {isSearching, musics} = this.state;
    return (
      <section className="container">
        {isSearching ? (
          <div className="searcher">
            <span className="searcher__text">Searching Music...</span>
          </div>
        ) : (
          <div className="musics">
            <ul className="music__head">
              <li className="head__img">-</li>
              <li className="head__title">곡 정보</li>
              <li className="head__album">앨범</li>
              <li className="head__genre">장르</li>
            </ul>
            {musics.map(music => (
              <Music 
                key={music.id} 
                id={music.id} 
                title={music.name} 
                artist={music.artistList} 
                album={music.album.title}
                genre={music.album.genreStyle} 
                img={music.album.imgList[0].url}
              />
            ))}
          </div> 
        )}
      </section>
    )
  }
}

export default App;
