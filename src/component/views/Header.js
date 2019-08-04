import React,{useEffect} from 'react';
import {Consumer} from '../../context';

class Header extends React.PureComponent{
    componentWillMount(){
        this.props.ctx.loadPage(this.props.match.params.pageId);
    }
    render()
    {
        let ctx= this.props.ctx;
        return <div>
            <h1>This is page header</h1>
        </div>
    }
}

export default (props) => <Consumer>{ctx=><Header {...props} ctx={ctx}/>}</Consumer>