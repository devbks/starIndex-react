import React from 'react';
import {Col,Row,Container} from 'react-bootstrap';
import GridCard from '../GridCard';
import {Consumer} from '../../context';
 
class Page extends React.PureComponent
{
    render()
    {
        const {data,pageId,status} = this.props.ctx.page;
        const List = (status===2)? data[pageId-1].map( (data,i)=>{
            return <Col sm={4} key={i}>
                <GridCard id={i}/>  
            </Col>
        }):(status===1)?
            <h1>Loading</h1>
        :<h1>Not Found</h1>

        return <Container>
            <Row>
                {List}
            </Row>
        </Container>
    }
}

export default (props)=><Consumer>{ctx=><Page ctx={ctx} {...props}/>}</Consumer>;
