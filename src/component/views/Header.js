import React,{useEffect} from 'react';
import {Consumer} from '../../context';
import { Navbar } from 'react-bootstrap';
import {Link} from 'react-router-dom';

class Header extends React.PureComponent{
    componentWillMount(){
        this.props.ctx.loadPage(this.props.match.params.pageId);
    }
    render()
    {
        let ctx= this.props.ctx;
        return <div>
            <Navbar >
                <Link to="/"><img src={require('../../asset/logo.png')}/></Link>
            </Navbar>
            <div id="bg-star1"></div>
            <div id="bg-star2"></div>
        </div>
    }
}

export default (props) => <Consumer>{ctx=><Header {...props} ctx={ctx}/>}</Consumer>