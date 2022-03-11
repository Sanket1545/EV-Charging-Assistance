import { createBrowserHistory } from 'history';
import React, { Component } from 'react';
import PowerStationService from '../services/PowerStationService';


class ListPowerStationComponent extends Component {
  constructor(props) {
      super(props);
      
        
      this.state = {
          powerStations : []
      }

      this.addPowerstation = this.addPowerstation.bind(this);
      this.editPowerstation = this.editPowerstation.bind(this);
  }

  
  editPowerstation(stationid){
    history.push(`/update-powerstation/${stationid}`);
  }

componentDidMount()
{
    PowerStationService.getPowerStations().then((res) => {
        this.setState({ powerStations:res.data });
    });
}


addPowerstation = () => {
    history.push('/add-powerstation');
   
}

    
  render() {
    return (
      <div>
          <h2 className='text-center'>List of Power Stations</h2>
          <div>
              <button className='btn btn-primary' onClick={this.addPowerstation}>Add Power Station</button>
          </div>
          <div className='row'>
                <table className='table table-striped table-bordered'>
                    <thead>
                        <tr>
                            <th>Power Station</th>
                            <th>Address</th>
                            <th>Actions</th>
                        </tr>
                    </thead> 

                    <tbody>
                        {
                            this.state.powerStations.map(
                                powerStation=>
                                    <tr key = { powerStation.stationid }>
                                        <td> { powerStation.name } </td>
                                        <td> { powerStation.location },{powerStation.area},{powerStation.city} </td>
                                        <td>
                                            <button className='btn btn-info' onClick={() => this.getPowerstationById(powerStation.stationid)}>Datails</button>
                                            <button className='btn btn-primary' onClick={()=> this.editPowerstation(powerStation.stationid)}>Edit</button>
                                            <button className='btn btn-danger' onClick={() => this.deletePowerstation(powerStation.stationid)} >Delete</button>
                                        </td>
                                    </tr>
                            )
                        }
                    </tbody> 
                </table>
          </div>
      </div>
    )
  }
}

export default ListPowerStationComponent;
export const history=createBrowserHistory();