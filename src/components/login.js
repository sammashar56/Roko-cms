import React from 'react';
import axios from 'axios';
import Nav from '../components/nav'; 

import {NotificationManager} from 'react-notifications';

class Login extends React.Component{
        state = {
            email: '',
            password: '',
            submitted: false
          };
          
          // const [login ,setLogin] = useState(false)
        handleChange = event => {
          this.setState({name: event.target.value});
        }
        onChange = (e) => {
            const NAME = e.target.name;
            const VALUE = e.target.value;
            this.setState({
              [NAME]: VALUE  
            })
          }
          handleSubmit =  event => {
            
              event.preventDefault();
              this.setState({ submitted: true})
              const user = {
                email: this.state.email,
                password: this.state.password
              };
              const {REACT_APP_URL} = process.env;
            const url = REACT_APP_URL 
            // console.log(user)
            axios.post(`${url}/onb/in`,  user )
            .then(res => {
              if(res.data.token){
                localStorage.setItem('user', res.data.token)
                  setTimeout(() => {
                    window.location.href = '/';
                  }, 1000);
              }
              NotificationManager.success(res.data.message, 'Successful!', 2000);
            }).catch(function (error) {

              if (error.response) {
                // (error.response.data);
                NotificationManager.error('wrong email/password', 'error', 2000)
              } else if (error.request) {
              } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
              }
              console.log(error.config);
            });
            //`url${/forum/in}`
          }

    render() {
        //here am trying to get the values inputed from the front end
      const {email, password, submitted} = this.state
 
    return (
      <div>
        <Nav/>
        <section handleSubmit={this.handleSubmit} className="App   flex justify-center  bg-white-200">
        <div className="w-full max-w-md bg-gray-800 mt-16" >
          <form action="" className=" bg-white shadow-md rounded px-8 py-8 pt-9">
            <div className="px-4 pb-4">
              <label htmlFor="email" className="text-sm block font-bold  pb-2">EMAIL ADDRESS</label>
              <input  type="email" name="email" required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300 " placeholder="Johnbull@example.com" onChange={this.onChange} value={this.state.email} />
              { !email && submitted &&  
                            <div className="text-red-400">email is required</div>
                        }
            </div>
            <div className="px-4 pb-4">
              <label htmlFor="password" className="text-sm block font-bold pb-2">PASSWORD</label>
              <input required type="password" name="password"  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300" placeholder="Enter your password" onChange={this.onChange} value={this.state.password} />
              { !password && submitted && 
                            <div className="text-red-400">password is required</div>
                        }
            </div>
            <div>
              <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "type="submit" onClick={(e) => this.handleSubmit(e)} >Sign In</button>
            </div>
          </form>
        </div>
      </section>
      </div>
    )
  }
}

export default Login

// some function that is only going to show the thrift table after 
//successfull signin 