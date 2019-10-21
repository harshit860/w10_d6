import React from "react"
import { connect } from "react-redux"
import axios from 'axios'
import './display.css'
import {Link} from 'react-router-dom'

class Display extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            country_filter:null,
            match_type:'',
            AD:'',
            apidata:''
        }
    }
    handleselect=(val)=>{
        //console.log(this.state.AD)
        this.setState({
            [val.target.name]:val.target.value
        })
    }

    totalapi=(v1,v2,v3)=>{
        var num= Number(v1)+Number(v2)+Number(v3)
        console.log(num)

        axios.get('http://numbersapi.com/'+num)
        .then(resp=>{
            this.setState({
                        apidata:resp.data
            })
            console.log(resp.data)})
        .catch(resp=>{
            console.log(resp)})

    }
    render() {

        if(this.state.country_filter===null)
        {
        var disp_data_users = this.props.user_list.map((a,index) => {
            return <div id="one" onClick={()=>this.totalapi(a.TEST,a.ODI,a.T20)} className="row border"> 
                <p className="ml-3 display-4">{"Player: " + a.Player_Name}</p>
                <p className="ml-3 display-4">{"Country: " + a.Country}</p>
                <p className="ml-3 display-4">{"T20:" + a.T20}</p>
                <p className="ml-3 display-4">{"ODI: " + a.ODI}</p>
                <p className="ml-3 display-4">{"TEST: " + a.TEST}</p>
                <hr className="text-secondary" />
            </div>

        //    </div><Link to={`/player/${index}`}>  </Link>
        })
    }
    else
    {
        
        var disp_data_users = this.props.user_list.map((a)=>{
            console.log(a)
            if(this.state.country_filter==a.Country)
            {
                return <div onC className="row"> 
                            <p  className="ml-3 display-4">{"Player: " + a.Player_Name}</p>
                            <p className="ml-5 display-4">{"Country: " + a.Country}</p>
                            <p className="ml-5 display-4">{"T20:" + a.T20}</p>
                            <p className="ml-5 display-4">{"ODI: " + a.ODI}</p>
                            <p className="ml-5 display-4">{"TEST: " + a.TEST}</p>
                            <hr className="text-secondary" />
                        </div>
            }
        })
        console.log(this.props.user_list)
    }
        let country_list = this.props.countries.map(a => {
            return <option className="display-4" value={a}>
                {a}
            </option>
        })
        return (
            <div>
                <h4>Select Country</h4>
                <div className="row">
                    
                        <select style={{width:"300px"}} onChange={(e)=>this.handleselect(e)} name="country_filter" className="bg-secondary text-white  rounded-pill">{country_list}</select>
                        <select onChange={(e)=>this.handleselect(e)} name="match_type" style={{width:"150px"}} className="bg-secondary  text-white rounded-pill ml-3">
                            <option>Sort</option>
                            <option value="ODI" className="display-4">ODI</option>
                            <option value="TEST" className="display-4">TEST</option>
                            <option value="T20" className="display-4">T20</option>
                        </select>
                        <select onChange={(e)=>this.handleselect(e)} style={{width:"150px"}} name="AD" className="bg-secondary  text-white rounded-pill ml-3">
                            <option>Sort</option>
                            <option value="A" className="display-4">Descending</option>
                            <option value="D" className="display-4">Ascending</option>
                            
                        </select>
                        
                        
                </div>
                <div className="mt-4 mb-4">
                <h3 className="mt-2 ">{this.state.apidata}</h3>
                </div>
               
            <div className="mt-2">
                {disp_data_users}
            </div>
            
            </div>
            
        )
    }
}

const mapStateToProp = (state) => {
    return {
        user_list: state.user,
        countries: state.country
    }
}

export default connect(
    mapStateToProp
)(Display);