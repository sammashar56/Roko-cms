import axios from 'axios'
import React from 'react'
import {Link, useParams} from 'react-router-dom'
import Nav from './nav'
import moment from 'moment'
import {NotificationManager} from 'react-notifications';
import {loadToken} from '../_services/user_services'
// import History from './History'

class Sellercard extends React.Component {
  
  state = {
    thrifter: [],
    id:null
  }
    
  fetchSeller() {
    const token = loadToken()
    const {REACT_APP_URL} = process.env;
    const url = REACT_APP_URL
    const options = {
      headers: {
        'Authorization': token
      }
    }
    // console.log(seller_id)
    const {match: {params}} = this.props;
    this.setState({id: params.seller_id})
    axios.get(`${url}/onb/sellers/${params.seller_id}`, options)
    .then((res) => {
      const {seller} = res.data
      this.setState({thrifter: seller})
      this.setState({id: params.seller_id})
      // console.log(this.state.id)
    })
    .catch(function(error) {
      if(error.response) {
      }else if (error.request) {
        console.log(error.request);
      }else {
        console.log( 'Error', error.message);
      }
    })
  }

  componentDidMount (){
    this.fetchSeller()
    // this.handleDelete()
    // this.handleEdit()
  }

  handleDelete(){
    const {_id} = useParams
    alert('sure my g? make the mufaka go?')
    const token = loadToken()
    const {REACT_APP_URL} = process.env;
    const url = REACT_APP_URL 
    const options = {
      headers: {
        'Authorization': token
      }
    }
    // const {match: {params}} = this.props;
    console.log(_id)
    axios.delete(`${url}/onb/sellers/${_id}`, options)
    .then((res) => {
      NotificationManager.success(res.data.message, 'Successfully', 1000);      
    })
    .catch(function(error) {
      if(error.response) {
      }else if (error.request) {
        console.log(error.request);
      }else {
        console.log( 'Error', error.message);
      }
    })
  }
render() {
    const seller = this.state.thrifter
    return (
      <div>
        <Nav/>
        
     <div  class="flex h-screen ">
    <div class="max-w-sm rounded overflow-hidden shadow-lg m-auto">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">{seller.shopName}</div>
    <p class="text-gray-700 text-base">
      We have succesfully scheduled a meet with them next week on Tuesday and she says she is going to introduce us to a few of her friends Who might be our potential customers.
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{seller.no_of_followers}</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{seller.no_of_posts}</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{seller.price_range}</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{seller.category}</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{seller.level}</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{seller.status}</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{seller.brand_focused}</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{seller.Ideal_for_roko}</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{moment(seller.createdAt).format('ll')}</span>
  </div>
  <Link to={`/sellers/${seller._id}`}>
  <div class="px-6 "> <button  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">edit </button></div>
  </Link>
  <div class="px-6 pt-4 pb-6 "> <button onClick={(this.handleDelete)} class="bg-red-300 text-white font-bold py-2 px-2 rounded opacity-50 cursor-not-allowed">Delete</button></div>

   </div>
   </div>
   </div>
      
    )
}
}

export default Sellercard