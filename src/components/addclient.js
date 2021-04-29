import axios from 'axios';
import React from 'react';
import Nav from './nav'
import {loadToken} from '../_services/user_services'
import {NotificationManager} from 'react-notifications';

class Addclient extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      shopName: '',
      no_of_followers: '',
      category: '',
      no_of_posts:'',
      price_range:'',
      level:''
      
    };
    this.handleChange = this.handleChange.bind(this);
}
  
  handleChange = event => {
    this.setState({name: event.target.value})
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
          shopName : this.state.shopName,
          category: this.state.category,
          no_of_posts: this.state.no_of_posts,
          no_of_followers: this.state.no_of_followers,
          price_range: this.state.price_range,
          level: this.state.level
        }
      const {REACT_APP_URL} = process.env;
      const url = REACT_APP_URL 
      const token = loadToken()
      const options = {
        headers: {
          'Authorization': token
        }
      }
      axios.post(`${url}/onb/new`, newSeller, options)
        .then((res) => {
          setTimeout(() => {
            window.location.href = '/sellers';
          }, 1000);      
          NotificationManager.success(res.data.message, 'Successfully', 1000);
          console.log("RESPONSE ==== : ", res);
          
        })
        .catch((error) => {
          console.log("ERROR: ====", error);
        })
  }
  render() {
    return (
      <div >
        <Nav/>
        <div class="flex justify-center my-32 max-w-4xl mx-auto " >  
        <div class="space-y-6"> 
        <h1 class="text-3xl font-semibold">Onbording a new seller.</h1>
        <div class="mt-1 relative shadow-sm ">
          
          <div class="flex items-center justify-between-space ">
          <ul class="space-y-6">
          <li class=" flex" >
          <input type="text" 
          name="shopName" 
          value={this.state.shopName}
          onChange={this.onChange}
          class="px-4 py-2 rounded border border-gray-400 focus:outline-none"
          placeholder="Thrift name"/>
          </li>   
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
          <input type="number" 
          name="no_of_posts"  onChange={this.onChange} value={this.state.no_of_posts} 
          class="px-4 py-2 rounded border border-gray-400 focus:outline-none"
          
          placeholder="no_of_posts"/>
          </li>
         
          <li class="space-x-2 flex">
          <input type="text" 
          name="price_range" id="name" onChange={this.onChange} value={this.state.price_range} 
          class="px-4 py-2 rounded border border-gray-400 focus:outline-none"
          placeholder="price range"/>
          </li>
          <li class="space-x-2 flex">
          <input type="text" 
          name="no_of_followers" id="name" onChange={this.onChange} value={this.state.no_of_followers} 
          class="px-4 py-2 rounded border border-gray-400 focus:outline-none"
          placeholder="no of followers"/>
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
         <button type="button" class="font-semibold bg-teal-600 px-4 py-2 text-white rounded"  onClick={(e) => this.handleSubmit(e)}> Add seller</button>
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


export default Addclient;