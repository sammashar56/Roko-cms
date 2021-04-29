import React from 'react';
import Nav from './nav';
import {loadToken} from '../_services/user_services';
import axios from 'axios';
import {NotificationManager} from 'react-notifications';
import Toggle from 'react-toggle'
import '../index.css'

class Updateclient extends React.Component {
  constructor(props){
  super(props)
  this.state = {
    category: '',
    status:'',
    Ideal_for_roko:false,
    brand_focused:false,
    level:''
  };
  this.handleChange = this.handleChange.bind(this);
  this.handleClick = this.handleClick.bind(this)

}
handleChange = event => {
  this.setState({name: event.target.value})
}

handleClick (){
  this.setState(prevState => ({
    brand_focused: prevState.brand_focused
  }));
}

onChange = (e) => {
  const NAME = e.target.name;
  const VALUE = e.target.value;
  this.setState({
    [NAME]: VALUE  
  })
}

handleSubmit = event => {
  event.preventDefault();
  const newSeller = {
    category: this.state.category,
    level: this.state.level,
    status:this.state.status,
    Ideal_for_roko: this.state.Ideal_for_roko,
    brand_focused: this.state.brand_focused
  }

const {REACT_APP_URL} = process.env;
const url = REACT_APP_URL 
const token = loadToken()
const options = {
  headers: {
    'Authorization': token
  }
}
const {match: {params}} = this.props;
axios.put(`${url}/onb/sellers/${params.seller_id}`, newSeller, options)
  .then((res) => {
    console.log(res.data)
    setTimeout(() => {
      window.location.href = `/sellers`;
    }, 1000);      
    NotificationManager.success(res.data.message, 'Successfully', 1000);
    console.log("RESPONSE ==== : ", res);
  })
  .catch((error) => {
    console.log("ERROR: ====", error);
  })
}

  render(){
    return (
      <div >
      <Nav/>
      <div class="flex justify-center my-32 max-w-4xl mx-auto " >  
      <div class="space-y-6"> 
      <h1 class="text-3xl font-semibold">Onbording a new seller.</h1>
      <div class="mt-1 relative shadow-sm ">
        <div class="flex items-center justify-between-space ">
        <ul class="space-y-6">
        <li>
       <label  class="sr-only">Category</label>
          <select id="currency" name="category" onChange={this.onChange} value={this.state.category} class="border border-gray-400 px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 rounded">
            <option>Sportswear</option>
            <option>Ladie's dresses/skirts</option>
            <option>Streetware</option>
            <option>Women's official</option>
            <option>women casual</option>
            <option>Mtumba thrift</option>
            <option>Shoewear</option>
            <option>Men's offical</option>
            <option>Jewellry </option>
            <option>bags</option>
            <option>eye wear</option>
            <option>creative</option>
            <option>Ankara</option>
            <option>Local artisan accessories.</option>
          </select>
          </li>      
        <li class="space-x-2 flex">
        <label for="currency" class="sr-only">level</label>
          <select id="currency" name="status" onChange={this.onChange} value={this.state.status}  class="border border-gray-400 px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500 h-full border-transparent bg-transparent text-gray-500  rounded">
            <option>Offborded</option>
            <option>Interested</option>
            <option>Joined</option>
          </select>
        </li>
        <li>
        <label>
        <Toggle
          defaultChecked={this.state.aubergineIsReady}
          className='custom-classname'
          onChange={this.handleAubergineChange} />
        <span> Ideal_for_roko</span>
        </label>
        </li>
        <li>
        <label>
        <Toggle
          Checked={this.state.brand_focused }
          className='custom-classname'
          onChange={this.handleClick} 
          value={this.state.brand_focused}/>
          
        <span> brand_focused</span>
        </label>
        </li>
        <li>
       <label for="currency" class="sr-only">level</label>
          <select id="currency" name="level" onChange={this.onChange} value={this.state.level}  class="border border-gray-400 px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500 h-full border-transparent bg-transparent text-gray-500  rounded">
            <option>Brand</option>
            <option>Low</option>
            <option>Creator</option>
            <option>High End</option>
            <option>influencer</option>
          </select>
       </li> 
       <li>
       <button type="button" class="font-semibold bg-teal-600 px-4 py-2 text-white rounded"  onClick={(e) => this.handleSubmit(e)}> update seller</button>
       </li>
       </ul>
        </div>
      </div>
    </div>
    </div>
    </div>
    )
  }
}

export default Updateclient
