import React from 'react'

import img3 from '../src/img/img7.png';
function note(props) {
    return (
        
             <div class="col-6 col-md-6">
                        <div class="adress">
                            <div class="row">
                                <div class="col-6 col-md-3">
                                  <img src={img3} class="img-fluid1" alt=""/>
                                </div>
                                <div class="col-6 col-md-6 title">
                                     <p>{props.title}</p>
                                </div>
                                <div id="contenting">
                              
                                   {props.content}
                                
                                </div>
                               
                                <div class="row twobtn">
                                    <div class="col-5 col-md-5">
                                        <button class="btns btns btn-danger">Edit</button>
                                    </div>
                                    <div class="col-5 col-md-5">
                                        <button class="btns btnss  btn-secondary">Edit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                       </div> 
      
    )
}

export default note
