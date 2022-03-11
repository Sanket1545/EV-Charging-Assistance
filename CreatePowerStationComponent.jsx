import React, { Component } from 'react';
import PowerStationService from '../services/PowerStationService';
import { createBrowserHistory } from 'history';

class CreatePowerStationComponent extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name : '',
         email :'',
         password :'',
         mobileno :'',
         location :'',
         area :'',
         city :'',
         portid:''
      }

      this.changeNameHandler = this.changeNameHandler.bind(this);
      this.changeEmailHandler = this.changeEmailHandler.bind(this);
      this.changePasswordHandler = this.changePasswordHandler.bind(this);
      this.changeMobileNoHandler = this.changeMobileNoHandler.bind(this);
      this.changeLocationHandler = this.changeLocationHandler.bind(this);
      this.changeAreaHandler = this.changeAreaHandler.bind(this);
      this.changeCityHandler = this.changeCityHandler.bind(this);
      this.changePortHandler = this.changePortHandler.bind(this);
      
      this.savePowerstation = this.savePowerstation.bind(this);
      this.cancel = this.cancel.bind(this);
    }

    changeNameHandler= (event) => {
        this.setState({name : event.target.value});
    }

    changeEmailHandler = (event) => {
        this.setState({email : event.target.value});
    }

    changePasswordHandler = (event) => {
        this.setState({password : event.target.value});
    }

    changeMobileNoHandler = (event) => {
        this.setState({mobileno : event.target.value});
    }

    changeLocationHandler = (event) => {
        this.setState({location : event.target.value});
    }

    changeAreaHandler = (event) => {
        this.setState({area : event.target.value});
    }

    changeCityHandler = (event) => {
        this.setState({city : event.target.value});
    }

    changePortHandler = (event) => {
        this.setState({portid : event.target.value});
    }


    savePowerstation= (e) => {
        e.preventDefault();

        let Powerstation = {name : this.state.name ,email : this.state.email ,password : this.state.password ,mobileno : 
        this.state.mobileno ,location : this.state.location ,area : this.state.area ,city : this.state.city ,portid : this.state.portid};

        console.log('PowerStations = '+ JSON.stringify(Powerstation));

        PowerStationService.createPowerstation(Powerstation).then(res =>{
            history.push('/powerstations');
            console.log('Data Inserted Successfully.')
        });
    }


    cancel = () => {
        //this.props.history.push('/powerstations');
        history.push('/powerstations');
    }

    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='card col-md-6 offset-md-3 offset-md-3'>
                            <h3 className='text-center'>Add Power Station</h3>
                            <div className='card-body'>
                                <form>
                                    <div className='form-group'>
                                        <label>Name :</label>
                                        <input name='name' className='form-control' value={this.state.name} onChange={this.changeNameHandler}
                                        placeholder='Enter Station Name'/>
                                    </div>
                                    <div className='form-group'>
                                        <lable>Email Id :</lable>
                                        <input name='email' className='form-control' value={this.state.email} onChange={this.changeEmailHandler}
                                        placeholder='Enter Email Address'/>
                                    </div>
                                    <div className='form-group'>
                                        <lable>Password :</lable>
                                        <input name='password' className='form-control' value={this.state.password} onChange={this.changePasswordHandler} 
                                        placeholder='Enter Password'/>
                                    </div>
                                    <div className='form-group'>
                                        <lable>Mobile Number :</lable>
                                        <input name='mobileno' className='form-control' value={this.state.mobileno} onChange={this.changeMobileNoHandler} 
                                        placeholder='Enter Mobile Number'/>
                                    </div>
                                    <div className='form-group'>
                                        <lable>Location :</lable>
                                        <input name='location' className='form-control' value={this.state.location} onChange={this.changeLocationHandler} 
                                        placeholder='Enter Location'/>
                                    </div>
                                    <div className='form-group'>
                                        <lable>Area :</lable>
                                        <input name='area' className='form-control' value={this.state.area} onChange={this.changeAreaHandler} 
                                        placeholder='Enter Area Name'/>
                                    </div>
                                    <div className='form-group'>
                                        <lable>City :</lable>
                                        <input name='city' className='form-control' value={this.state.city} onChange={this.changeCityHandler} 
                                        placeholder='Enter City'/>
                                    </div>
                                    <div className='form-group'>
                                        <lable>Available Port :</lable>
                                        <input name='portid' className='form-control' value={this.state.portid} onChange={this.changePortHandler}
                                        placeholder='Enter 1,2,3 for type1,type2,type3 resp.' />
                                    </div>
                                    <button className='btn btn-success' onClick={this.savePowerstation}>Save</button>
                                    <button className='btn btn-danger' onClick={this.cancel.bind(this)} style={{marginLeft:'10px'}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreatePowerStationComponent;
export const history=createBrowserHistory();