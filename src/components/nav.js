import React from "react";
import { logoutUser } from '../_services/user_services'
//import {Link} from "react-router-dom"
class Nav extends React.Component {

  handleSubmit = event =>{
      event.preventDefault();
      logoutUser()
      setTimeout(() => {
        window.location.href = '/sellers';
      }, 500);
  }

  render () {
  return (
    <div className="m-4  px-6 flex-wrap bg-blue 400 bg-white dark:bg-black">
      <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <div class="flex items-center flex-shrink-0 text-white mr-8">
          <svg class="fill-current h-8 w-8 mr-2" width="540" height="540" viewBox="0 0 54 54" xmlns="https://beta.seller.roko.store/logo-light.svg"></svg>
          <span class="font-semibold text-xl tracking-tight">Roko Onborder</span>
        </div>
        <div class="block lg:hidden ">

        </div>
        <div id='menu' className="w-full block flex-grow lg:flex lg:items-center lg:w-auto space-x-4 ">
          <div class="text-sm lg:flex-grow">
            <a href="/sellers" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              List
      </a>
            <a href="/seller" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-6">
              Interested
      </a>
            <a href="/sellers" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
              Feedback
      </a>
          </div>
          <div>
            <a href="/add" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Add new customer</a>
          </div>
          <div>
            <button className="text-sm px-4 py-2 leading-none border rounded hover:text-red-700 font-extrabold hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0 " onClick={(e) => this.handleSubmit(e)} >Log out</button>
          </div>
        </div>
      </nav>
    </div>
  )
}

}

export default Nav;


//logo and a menu for sing in log in and log out