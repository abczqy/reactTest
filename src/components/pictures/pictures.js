import React from 'react';
import './pictures.css'
import hcy1 from './images/hcy1.jpg';
import hcy2 from './images/hcy2.jpg';
import hcy3 from './images/hcy3.jpg';
import hcy4 from './images/hcy4.jpg';
import hcy5 from './images/hcy5.jpg';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

const hcy=[
    {id: 0, title: '腾讯年会', url: hcy1, detail: '腾讯年会上，寻和智商二五零'},
    {id: 1, title: '一生一世演唱会', url: hcy2, detail: '万人合唱《国王与乞丐》，还被嘲笑了'},
    {id: 2, title: '《我管你》MV', url: hcy3, detail: '百龄坛代言，《我管你》——真我版MV'},
    {id: 3, title: '荧——开场', url: hcy4, detail: '首次与机器人乐队合作，异类'},
    {id: 4, title: '王者荣耀总决赛献唱', url: hcy5, detail: '现场圈粉的二猴与二五零'}
];

class Picture extends React.Component{
    previousLocation = this.props.location;
    componentWillUpdate(nextProps) {
        const { location } = this.props;
        // set previousLocation if props.location is not modal
        if (
            nextProps.history.action !== 'POP' &&
            (!location.state || !location.state.modal)
        ) {
            this.previousLocation = this.props.location
        }
    }
    render(){
        const { location } = this.props;
        const isModal = !!(
            location.state &&
            location.state.modal &&
            this.previousLocation !== location
        )
        return (
            <div className="pictures">
                <Switch location={isModal ? this.previousLocation : location}>
                    <Route exact path="/pictures" component={Home}/>
                    <Route path="/pictures/all" component={All}/>
                    <Route path="/pictures/img/:id" component={Img}/>
                </Switch>
                {isModal ? <Route path='/pictures/img/:id' component={Modal} /> : null}
            </div>
        )
    }
}

const Home= ()=>(
    <div className="home">
        <header>
            <h3>华晨宇——pictures <small><Link to="/pictures/all">所有图片</Link></small></h3>
        </header>
        <ul>
            <li><h3>某两张图片</h3></li>
            <li><Link to="/pictures/img/1">演唱会</Link></li>
            <li><Link to="/pictures/img/3">荧——开场</Link></li>
        </ul>
    </div>
);

const All=()=>(
    <ul className="all-hcy">
        {hcy.map(i=>(
            <li key={i.id}><Link to={{pathname: `/pictures/img/${i.id}`,state:{modal: true}}}>
                <img className="imageS" src={i.url} alt=""/>
                <p style={{fontSize: '14px',height: '16px'}}>{i.title}</p>
            </Link></li>
            ))}
    </ul>
);

const Img =({match})=>{
    const image=hcy[parseInt(match.params.id, 10)];
    return (<div>
        <h2>{image.title}</h2>
        <img src={image.url} alt="" className="imageB"/>
    </div>)
};

class Modal extends React.Component{
    // componentWillUpdate(nextProps) {
    //     const { location } = this.props;
    //     console.log(nextProps.history.action)
    //     // set previousLocation if props.location is not modal
    //     if (
    //         nextProps.history.action !== 'POP' &&
    //         !location.state.show
    //     ) {
    //         this.previousLocation = this.props.location
    //     }
    // }
    render() {
        const match = this.props.match;
        const history = this.props.history;
        const image=hcy[parseInt(match.params.id, 10)];
        const back = (e)=>{
            e.stopPropagation();
            history.goBack();
        };
        const showDetail = (e)=>{
            e.stopPropagation();
            document.getElementById('detail').style.display="block";
        };
        const hide = (e)=>{
            e.stopPropagation();
            document.getElementById('detail').style.display="none";
        };
        return (
            <div className="showPic" onClick={back}>
                <div className="showPic_cont">
                    <h2>{image.title}</h2>
                    <img src={image.url} alt="" className="imageB"/><br/>
                    <button onClick={showDetail}>详情</button>
                </div>
                <div className="p_detail" id="detail" onClick={hide}>
                    <p>{image.title}</p>
                    <p>{image.detail}</p>
                </div>
            </div>
        )
    }
}

const Pictures =()=>(
    <Router>
        <Route component={Picture}/>
    </Router>
);

export default Pictures;