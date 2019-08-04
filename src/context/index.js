import React from 'react';
import {withRouter} from 'react-router-dom';

const Context = React.createContext("starIndex");
export const Consumer = Context.Consumer;

class Provider extends React.Component
{
    state = {
        page:{
            data:[],
            status:1,
            count:0,
            pageId:false
        },
        profile:{
            data:[],
            status:1
        },
        film:{
            data:[],
            status:1
        }
    }
    render()
    {
        let values ={
            ...this.state,
        }
        return <Context.Provider value={values}>
            {this.props.children}
        </Context.Provider>
    }
}
// const Provider = withRouter(CProvider);
export default withRouter(Provider);