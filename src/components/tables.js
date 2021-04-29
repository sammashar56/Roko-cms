import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom'
import moment from 'moment';
import Nav from './nav'
import {loadToken} from '../_services/user_services'


 class Sellertable extends React.Component {

      state = {
      isLoaded: false,
      thrifters: [],
      isBrandfocused: false
    }

     fetchSellers() {
      const {REACT_APP_URL} = process.env;
      const url = REACT_APP_URL 
      const token = loadToken()
      const options = {
        headers: {
          'Authorization': token
        }
      }
      axios.get(`${url}/onb/onborder`, options)
      .then((res) => {
      const thrifter = res.data
      const { sellers } = thrifter
      this.setState({thrifters: sellers})
      // const [brand_focused] = this.state.thrifters 
      // console.log(brand_focused)
    })  
    .catch(function(error) {
        if (error.response) {

        } else if (error.request) { 
          console.log(error.request);
        }else {
          console.log('Error', error.message);
        }
    })
  }
    handleSubmit = event => {
      event.preventDefault();
      this.fetchSingleSeller()
    }
    componentDidMount() {
      this.fetchSellers()
      
  }
  render() {    
    // const isBrandfocused = this.state.thrifters.
    return (
        <div>
          <Nav/>
          <div>
        <div> 
      <table class="min-w-full table-auto">
        <thead class="justify-between">
          <tr class="bg-gray-800">
            <th class="px-16 py-2">
              <span class="text-gray-300"></span>
            </th>
            <th class="px-16 py-2">
              <span class="text-gray-300"> Thrift Name</span>
            </th>
            <th class="px-16 py-2">
              <span class="text-gray-300">Price Range</span>
            </th>
            <th class="px-16 py-2">
              <span class="text-gray-300">Status</span>
            </th>
            <th class="px-16 py-2">
              <span class="text-gray-300">Level</span>
            </th>
            <th class="px-16 py-2">
              <span class="text-gray-300">Date</span>
            </th>
            <th class="px-16 py-2">
              <span class="text-gray-300">Category</span>
            </th>
            <th class="px-16 py-2">
              <span class="text-gray-300">Ideal for roko?</span>
            </th>
            <th class="px-16 py-2">
              <span class="text-gray-300">Followers</span>
            </th>
             <th class="px-16 py-2">
              <span class="text-gray-300">IG posts</span>
            </th>
            <th class="px-16 py-2">
              <span class="text-gray-300">Brand focused</span>
            </th>
            <th class="px-16 py-2">
              <span class="text-gray-300">Board </span>
            </th>
          </tr>
        </thead>
        <tbody class="bg-gray-200">
        {this.state.thrifters.map(thrifter => (
          <tr class="bg-white border-4 border-gray-200">
            <td class="px-16 py-2 flex flex-row items-center">
              <img
                class="h-8 w-8 rounded-full object-cover "
                src="https://randomuser.me/api/portraits/men/30.jpg"
                alt=""
              />
            </td>
            <td>
              <span class="text-center ml-2 font-semibold">{thrifter.shopName}</span>
            </td>
            <td>
              <span class="text-center ml-2 font-bold">{thrifter.price_range}</span>
            </td>
            <td class="px-16 py-2">
              <button class="bg-indigo-500 text-white px-4 py-2 border rounded-md hover:bg-white hover:border-indigo-500 hover:text-black ">
              {thrifter.status}
              </button> 
            </td>
            <td>
              <span class="text-center ml-2 font-bold">{thrifter.level}</span>
            </td>
            <td class="px-16 py-2">
              <span>{ moment(thrifter.createdAt).format('ll')}</span>
            </td>
            <td class="px-16 py-2">
              <span>{thrifter.category}</span>
            </td>
            {/* use conditional rendering to show true ir false */}
            <td class="px-16 py-2">
              <span class="text-green-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h5 "
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#2c3e50"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M5 12l5 5l10 -10" />
                </svg>
              </span>
            </td>
            <td class="px-16 py-2">
              <span>{thrifter.no_of_followers}</span>
            </td>
            <td class="px-16 py-2">
              <span>{thrifter.no_of_posts}</span>
            </td>
            {/* use conditional rendering to show if true to say yes */}
            <td class="px-16 py-2">
              {/* {isBrandfocused ?} */}
              <span>Yes</span>
            </td>
            <td>
              <Link to={`/thrifter/${thrifter._id}`}>
            <button class="bg-green-300 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" >view</button>
            </Link>
            </td>
          </tr>
          ))} 
        </tbody>
      </table>
    </div>
    </div>
    </div>
    )
}
}

export default Sellertable 


























































