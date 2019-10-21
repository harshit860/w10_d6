import React from 'react'
import { connect } from "react-redux"
import { Add_user } from '../redux/action'
import Display from './Display'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            Player_Name: '',
            Country: '',
            T20: '',
            ODI: '',
            TEST: '',
            flag: false
        }
    }
    handleChange = (e) => {
        console.log(e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })

    }
    handleFlag = () => {
        this.setState({
            flag: !this.state.flag
        })
    }

    render() {
      
        let country_list = this.props.countries.map(a => {
            return <option value={a}>
                {a}
            </option>
        })
        //  console.log(this.props.countries)
        return (
            <div className="col">
                
                <div className="row mt-3">
                    <label >Player Name:</label>
                    <input className="ml-2 rounded display-4" onChange={(e) => this.handleChange(e)} name={"Player_Name"}></input>
                </div>
                <div className="row mt-3">
                    <label >Country:</label>
                    <select className="border border-white ml-2 bg-white  ml-4 " style={{fontSize:"30px"}} onChange={(e) => this.handleChange(e)} name="Country">
                        {/* <option value={"test"}>test</option>
                        <option value={"test1"}>test1</option> */}
                        {country_list}
                    </select>
                </div>
                <div className="row mt-3">
                    <label>T20 Score:</label>
                    <input className="ml-4  rounded display-4" type={"number"} onChange={(e) => this.handleChange(e)} name={"T20"}></input>
                </div>
                <div className="row mt-3">
                    <label >ODI Score:</label>
                    <input className="ml-4 rounded display-4" type={"number"} onChange={(e) => this.handleChange(e)} name={"ODI"} ></input>
                </div>
                <div className="row mt-3">
                    <label >Test Score:</label>
                    <input className="ml-3 rounded display-4" type={"number"} onChange={(e) => this.handleChange(e)} name={"TEST"}></input>
                </div>
                <div className="row mt-3">
                    <button className="btn  text-white btn btn-primary col-xl-1"  onClick={() => this.props.add(this.state)}>Create </button>
                    <button className="btn ml-4 text-white btn-success col-xl-1"  onClick={() => this.handleFlag()}>Show</button>
                </div>
                <div className="mt-4">
                    {this.state.flag ? (<Display />) : ("")}

                </div>

            </div>

        )
    }

}
const mapStatetProps = (state) => {
    console.log(state)
    return {
        user_list: state.user,
        countries: state.country
    }
}
const mapDispatchToProps = (dispatch) => {
    console.log(dispatch)
    return {
        add: (val) => dispatch(Add_user(val))
    }
}
export default connect(
    mapStatetProps,
    mapDispatchToProps
)(Home);