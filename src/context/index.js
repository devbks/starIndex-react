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

    loadPage= (id=1) =>{
        if(id>=0){
            this.setState(pstate=>({
                ...pstate,
                page:{...pstate.page,pageId:id}
            }))
        }
        if(!this.state.page.data[id-1]){
            this.setState(pstate=>({
                ...pstate,
                page:{...pstate.page,status:1}
            }))
            fetch("https://swapi.co/api/people/?page="+id)
            .then(res=>res.json())
            .then(res=>{
                let page = this.state.page;
                page.status = 2;
                page.data[id-1] = res.results;
                page.count = res.count;
                page.pageId = id;
                this.setState({
                    page:page
                });
            }).catch(err=>{
                this.setState(pState=>({
                    ...pState,
                    page:{
                        ...pState.page,
                        status:0
                    }
                }))
            })
        }else{
            return false;
        }
    }

    loadMovie = async (id) =>{
        if (!id) return false;
        const pageId = this.state.page.pageId
        if (this.state.page.data[pageId-1][id].loadedMovies){
            this.setState(pstate=>({
                ...pstate,
                film:{
                    ...pstate.film,
                    data:this.state.page.data[pageId-1][id].loadedMovies
                }
            }));
            return
        } 

        this.setState(pstate=>({ ...pstate,film:{...pstate.film,status:1,pageId:id} }))
        try{
            let data = this.state.page.data;
            const ret = data[pageId-1][id].films.map( async (item)=>{
                let temp = await fetch(item);
                temp = await temp.json();
                return temp;
            })
            const result = await Promise.all(ret);
            data[pageId-1][id]["loadedMovies"] = result;
            this.setState(pstate=>({
                ...pstate,
                page:{
                    ...pstate.page,
                    data:data
                },
                film:{
                    data:result,
                    status:2
                }
            }))
        }catch(e){
            console.log(e);
            this.setState(pstate=>({
                ...pstate,
                film:{
                    ...pstate.film,
                    status:0
                }
            }))
            return false;
        }
    }
    route = (to,page) =>{
        this.loadPage(page);
        this.props.history.push(to);
    }
    render()
    {
        let values ={
            ...this.state,
            loadPage:this.loadPage,
            loadMovie:this.loadMovie,
            route:this.route
        }
        return <Context.Provider value={values}>
            {this.props.children}
        </Context.Provider>
    }
}
// const Provider = withRouter(CProvider);
export default withRouter(Provider);