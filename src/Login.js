import React, { useState } from 'react';
import './App.css';
import axios from 'axios'
import Home from './Home';
import img1 from './img/img1.png';
import img2 from './img/img2.png';
import img3 from './img/img3.png';
import img4 from './img/img4.png'
function Login() {
  const [body, setbody] = useState({
     mobile:"",
     password:""
  });
  const [check, setCheck] = useState();
  const [form, setForm] = useState(true);
  const [popup ,setPopup] = useState(false);
  function update(e){
    const { value, name } = e.target;
    setbody(prevValue => {
      if (name === "mobile") {
        return {
          mobile: value,
          password: prevValue.password
        };
      } else if (name === "password") {
        return {
          mobile: prevValue.mobile,
          password: value
        };
      }
    });
  }
  function submit(e){
    e.preventDefault();
    console.log(body);
    axios.post('https://mekvahan.com/api/android_intern_task', body)
    .then(res=>{
       console.log(res);
       if(res.data.status){
           setCheck(res.data.status)
           setForm(!res.data.status)
       }else{
           setPopup(true);
       }
    }).catch(err=>{
      console.log(err);
    })

  }
  return (
    <div className="App">
     {  
      form ? (
        <div>
        {!popup? (''):(<div class="alert alert-warning alert-dismissible fade show" role="alert">
              <strong>Status : False</strong> 
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
       </button>
        </div>)}
        <h1>Mekvahan React Intern Assignment</h1>
       <div className="container loginmain">
          <div className="login">
            <div className="row shadow">
                <div className="col-12 col-md-3 right ">
                    <img  className="car" src={img1} alt=""/>
                </div>
                <div className="col-12 col-md-5 colom2 mx-auto">
                       <div className="row row3 ">
                           <div className="col-3 ">
                            <div className="logos">
                                <img className="logo" src={img2} alt=""/>
                               
                              </div>
                           </div>
                           <div className="col-4">
                               <div className="title">
                                <h5>MEKVAHAN</h5>
                               </div>
                                 
                           </div>
                       </div>
                     
                   
                  <form onSubmit= {submit}>
                      <div className="form-group">
                         <small>10 digit mobile number</small> 
                         <input type="text" name="mobile" value = {body.mobile} onChange ={update} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                      
                      </div>
                      <div className="form-group">
                         <small>Password</small>
                         <input type="text" name ="password" value ={body.password} onChange ={update} className="form-control" id="exampleInputPassword1"></input>
                        <small className="forgot" >Forgot Password</small> 
                      </div>
                     <div className="buttun"> <button type="submit" className="btn btn-danger">Login</button></div>
                     <div>
                        <small className="signsmall">Don't have an account?</small><a href=""><p>Sing Up now</p></a>
                     </div>
                    
                    </form>
                    <div className="row row4">
                        <div className="col-5 col-md-5">
                              <hr/>
                        </div>
                        <div className="col-2 col-md-2">
                            <small>or</small>
                        </div>
                        <div className="col-5 col-md-5">
                            <hr/>
                        </div>
                    </div>
                    <div className="continue">
                        <small className="signsmall" >Continue With</small>
                    </div><br/>
                    <div className="row row5">
                        <div className="col-3 ">
                            <img id="imgg" src={img3} className="img-fluid" alt=""/>
                        </div>
                        <div className="col-3">
                            <img id="imgg" src={img4} className="img-fluid"  alt=""/>
                        </div>
                    </div>
              </div>
            </div>
          </div>
        
      </div>
 
        </div>
      ):('')
     }{  check ? (<Home></Home>):("")}  
    </div>
  );
}

export default Login;
// form ? 
// (
//     <form onSubmit= {submit}>
// {
//     !popup? (''):(<div className="alert alert-primary" role="alert">A simple primary alert—check it out!</div>)}
//     <div className="form-group">
//     <label for="exampleInputEmail1">Phone</label>
//     <input type="text" name="mobile" value = {body.mobile} onChange ={update} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
//     <small id="emailHelp"  className="form-text text-muted">We'll never share your email with anyone else.</small>
//     </div>
//    <div className="form-group">
//    <label for="exampleInputPassword1">Password</label>
//    <input type="text" name ="password" value ={body.password} onChange ={update} className="form-control" id="exampleInputPassword1"></input>
//    </div>
// <button type="submit"   className="btn btn-primary">Submit</button>
// </form>
// ):('')
// {  check ? (<Home></Home>):("")}