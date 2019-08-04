import React from 'react';
import { Consumer } from '../context';
import {Card,Button} from 'react-bootstrap'
import {withRouter} from 'react-router-dom';

const GridCard = (props) => <Consumer>
    {
        ctx=>{
            const {pageId,status} = ctx.page;
            let id = props.id;
            const data = ctx.page.data[pageId-1][id];
            return <Card className="text-center" bg="secondary">
                <Card.Header>
                    <Card.Title>{data.name}</Card.Title>
                </Card.Header>
                <Card.Body>
                    <Card.Text><b>D.O.B</b> {data.birth_year}</Card.Text>
                    <Button onClick={()=>{
                        props.history.push('/page/'+pageId+"/"+id);
                    }} variant="warning">Detail</Button>
                </Card.Body>
            </Card>
        }
    }
</Consumer>
export default withRouter(GridCard);