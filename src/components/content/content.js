import React from 'react';
import axios from 'axios';

class Content extends React.Component{
    constructor(props){
        super(props);
        this.state={
            title: '华晨宇',
            content: ''
        }
    }
    componentDidMount() {
        this._load();
    }
    _load(){
        axios.get("public/hcy/hcy.json").then(res=>{
            this.setState({content: res.data.content});
            document.getElementById('content').innerHTML=this.state.content;
        })
    }
    render(){
        return (
            <div style={style.cont}>
                <header><h3>{this.state.title}（别名：{this.props.name}）</h3></header>
                <article id="content"></article>
            </div>
        )
    }
}

const style={};
style.cont={
    background: "#333",
    height: "300px",
    color: "#fff",
    width: "100%",
    textAlign: "center",
    padding: "10px 20px"
};
export default Content;