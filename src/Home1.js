import React, {useState} from 'react'
import img1 from '../src/img/img5.png';
import img3 from '../src/img/image.png';
import Note from './note'
function About() {
    const [body, setbody] = useState({
        title:"",
        content:""
     });
     const [notes, setNotes] = useState([]);
     const [show, setShow] = useState(true);

     function addNote(newNote) {
        setNotes(prevNotes => {
          return [...prevNotes, newNote];
        });
      }
     function update(e){
        const { value, name } = e.target;
        setbody(prevValue => {
          if (name === "title") {
            return {
                title: value,
                content: prevValue.content
            };
          } else if (name === "content") {
            return {
                title: prevValue.title,
                content: value
            };
          }
        });
     }  
     function submit(e){
        e.preventDefault();
        console.log(body);
        addNote(body);
        setShow(false);
        setbody({
            title: "",
            content: ""
          });
          e.preventDefault();  
      }   
      function handleClose(){
        window.$('#exampleModal').modal('hide')
      }
  return (
    <div>
    
<div class="modal fade exampleModal "   id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Add Addresses</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <form onSubmit={submit}>
  <div class="form-group">
    <label for="exampleInputEmail1">Title</label>
    <input name="title" value = {body.title} onChange ={update} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Address</label>
    <input type="text" name ="content" value ={body.content} onChange ={update} type="text" class="form-control" id="exampleInputPassword1"/>
  </div>
  <button type="submit" class=" btns btn-primary modals"  onClick={handleClose}  >Submit</button>
</form>
      </div>
      <div class="modal-footer">
        <button type="button" class=" btnss btn-secondary" data-dismiss="modal" >Close</button>

      </div>
    </div>
  </div>
</div>
       <div class="container">
           <div class="mainsection">
           <div class="row">
               <div class="col-3 col-md-3 box1">
                    <div class="profile">
                         <div class="row row12">
                             <div class="col-6 col-md-6 py-2">
                                 <img src={img1} alt="ima"/>  
                             </div>
                             <div class="col-6 col-md-6 py-2">
                                <p>Hi Mekvahan! </p>
                            </div>
                         </div> 
                     
                    </div>
               </div>
               <div class="col-8 col-md-8 box2 " >
                   <div class="adding">
                   <div class="row">
                           <div class="col-5">
                            <p  className= "profiles" href="#">My Addresses</p>
                           </div>
                           <div class="col-5">
                                <div class="addadd">
                                <button type="button" data-toggle="modal" data-target="#exampleModal"  class="nav-link btn2" href="#">+</button>
                                 <small class="right1">Add Address</small>
                             </div>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
           <div class="row">
            <div class="col-3 col-md-3 box1">
                <div class="profile">
                    <div class="div">
                     <p> My Profile </p>   
                      <p class="red" >Manage Addresses</p>  
                    <p>Change Password</p>
                    </div>
                     
                </div>
           </div>
           <div class="col-8 col-md-8 box2 adding1 " >
               <div class="image1">
                   <div class="row">
                   {  show?(<img className="img-fluid img5" src={img3} alt="image2"></img>):( notes.map((noteItem, index) => {
                        return (
                        <Note
                            key={index}
                            id={index}
                            title={noteItem.title}
                            content={noteItem.content}
                        />
                        );
                        }))
                     }
                   
                  
                   </div>
                
                </div>

                
                  
               </div>
               
           </div>
           </div>
        </div>
    </div>
  )
}

export default About
