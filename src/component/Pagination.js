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
        return <div className="pagination">
            <BPagination >
                <BPagination.First onClick={()=>ctx.route('/page/1',1)}/>
                {pages}
                <BPagination.Last onClick={()=>ctx.route('/page/'+Math.ceil(count/10),Math.ceil(count/10))}/>
            </BPagination>
        </div>
    }
}
</Consumer>

export default withRouter(Pagination);