import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './songs.css';
import axios from 'axios';

class Songs extends React.Component{
    render(){
        return (
            <Router>
                <div className="message">
                    <ul>
                        <li><Link to="/songs/qt">齐天</Link></li>
                        <li><Link to="/songs/wnf">Why Nobody Fights</Link></li>
                        <li><Link to="/songs/tbf">To Be Free</Link></li>
                    </ul>
                    <Route path="/songs/:song?" component={Song}/>
                </div>
            </Router>
        )
    }
}

const Song = ({match})=>(
    <div id="lyric" className="lyric">{match.params.song ? getSong(match.params.song): '请选择歌曲名'}</div>
);
function getSong(song){
    axios.get('/hcy/song.json').then(res=>{
        let lyric=document.getElementById('lyric');
        lyric.innerHTML=res.data.songs[song];
    });
}
export default Songs;