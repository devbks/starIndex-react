import React,{useEffect} from 'react';
import { Consumer } from '../context';
import {Card as Bcard} from 'react-bootstrap/Card'

class Movie extends React.PureComponent{
    componentWillMount(){
        this.props.ctx.loadMovie(this.props.id);
    }
    render()
    {
        const {film,status,data} = this.props.ctx.film;
        return <ul className="movie-list">
            {
                (status)?
                    (status===2)?
                        data.map((item,i)=>{
                            return <li key={i}>
                                <b>{item.title}</b>
                                <span>Release Date: {item.release_date}</span>
                                <span>Director: {item.producer}</span>
                            </li>
                        })
                    :<h3>Loading...</h3>
                :<h3>No movies found</h3>
            }
        </ul>
    }
}

export default (props)=><Consumer>
    {
        ctx=><Movie {...props} ctx={ctx}/>
    } 
</Consumer>;
