import React from 'react';
import {withRouter,Link} from 'react-router-dom';
import {Container,Pagination as BPagination} from 'react-bootstrap';
import { Consumer } from '../context';

const Pagination= (props) =><Consumer>
{
    ctx=>{
        const {count,pageId} = ctx.page
        const pages = [...Array( Math.ceil(count/10) ).keys()].map(i=>{
            i+=1
            return <BPagination.Item key={i} active={pageId == i} onClick={()=>ctx.route('/page/'+i,i)}>
                {i}
            </BPagination.Item>
        });
        return <Container className="centered">
            <BPagination>
                {pages}
            </BPagination>
        </Container>
    }
}
</Consumer>

export default withRouter(Pagination);