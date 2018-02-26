import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './messages.css';
import axios from 'axios';

class Messages extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <Router>
                <div className="message">
                    <ul>
                        <li><Link to="/messages/qt">齐天</Link></li>
                        <li><Link to="/messages/wnf">Why Nobody Fights</Link></li>
                        <li><Link to="/messages/tbf">To Be Free</Link></li>
                    </ul>
                    <Route path="/messages/:song?" component={Song}/>
                </div>
            </Router>
        )
    }
}

const Song = ({match})=>(
    <div id="lyric" className="lyric">{match.params.song ? getSong(match.params.song): '请选择歌曲名'}</div>
);
function getSong(song){
    axios.get('/song.json').then(res=>{
        let lyric=document.getElementById('lyric');
        lyric.innerHTML=res.data.songs[song];
    });
}
export default Messages;