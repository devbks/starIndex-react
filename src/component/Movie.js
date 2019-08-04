import React,{useEffect} from 'react';
import { Consumer } from '../context';
import {Card as Bcard} from 'react-bootstrap/Card'
import Loading from './Loading';
import NotFound from './NotFound';

class Movie extends React.PureComponent{
    componentWillMount(){
        this.props.ctx.loadMovie(this.props.id);
    }
    render()
    {
        const {film,status,data} = this.props.ctx.film;
        return <React.Fragment>
                <h3>Films:</h3>
                <ul className="movie-list">
            {
                (status)?
                    (status===2)?
                        data.map((item,i)=>{
                            return <li key={i}>
                                <b>{item.title}</b>
                                <span>Release: {item.release_date}</span>
                                <span>Director: {item.producer}</span>
                            </li>
                        })
                    :<Loading size="small"/>
                :<NotFound/>
            }
        </ul>
            </React.Fragment>
    }
}

export default (props)=><Consumer>
    {
        ctx=><Movie {...props} ctx={ctx}/>
    } 
</Consumer>;
