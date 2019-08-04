import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { Consumer } from '../../context';
import { Container, Row, Col } from 'react-bootstrap';
import Movie from '../Movie';


const Item = (props) => ["height","mass","hair_color","eye_color","birth_year","gender"].map((key,i)=>{
    return <li key={i}>
        <b>{key}</b>
        <span>{props.data[key]}</span>
    </li>
})

class Profile extends React.PureComponent
{
    render()
    {
        let ctx= this.props.ctx;
        let id = this.props.match.params.id;
        const {pageId,data} = ctx.page

        return (ctx.page.status)?
            (ctx.page.status===2)?
                <Modal show={true} onHide={()=>this.props.history.push('/page/'+pageId)}>
                    <Modal.Header closeButton>
                        <Modal.Title>{ (data[pageId-1][id].name) } </Modal.Title>
                    </Modal.Header>
                    <div className="profile-body">
                        <ul className="detail">
                            <Item data={data[pageId-1][id]}/>
                        </ul>
                        <Movie id={id}/>
                    </div>
                </Modal>
            :<h1>Loading</h1>
        :<h1>Not Found</h1>
    }
}

export default (props)=><Consumer>{ctx=><Profile ctx={ctx} {...props}/>}</Consumer>