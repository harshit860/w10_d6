import { statement } from "@babel/template"
console.log(JSON.parse(window.localStorage.getItem('data')))


var obj=JSON.parse(window.localStorage.getItem('data'))
if(obj==null)
{
    obj={name:'',
    user:[],
    country:["Select The Country","India","Bermuda","Australia","Newzealand","Australia","Srilanka","USA","Pakistan","England","SouthAfrica","WestIndies"]}
}

    

const reducer = (state=obj,action)=>{
if(action.type=="add")
{
    console.log(state)
    var obj1={
        name:state.name,
        user:[...state.user,action.user],   
        country:state.country
    }
    window.localStorage.setItem('data',JSON.stringify(obj1))
    return  obj1
    

    
}
    return state;
}
export default reducer