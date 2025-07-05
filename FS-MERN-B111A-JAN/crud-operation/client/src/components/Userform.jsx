import React,{useState} from 'react'
import axios from 'axios'

const Userform = () => {
    const [formdata,setFormdata] = useState({name:"",email:"",age:""});
    const hc = (e)=>{
        setFormdata({...formdata,[e.target.name]:e.target.value});
    };
    const hs = async(e)=>{
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:4700/api/users',formdata);
            alert('user added successfully');
            console.log(response.data);
            setFormdata({name:'',email:'',age:''});
        } catch(error) {
            console.error('error adding: ',error.message);
            alert('failed to add user');
        }
    }
  return <>
    <form onSubmit={hs}>
     name: 
     <input 
        type='text'
        name='name'
        required
        onChange={hc}
        value={formdata.name}
     />
     <br></br>
     Email: 
     <input 
        type='email'
        name='email'
        required
        onChange={hc}
        value={formdata.email}
     />
     <br></br>
     Age: 
     <input 
        type='number'
        name='age'
        required
        onChange={hc}
        value={formdata.age}
     />
     <br></br>
     <button type='submit'>Add user</button>
    </form>
  </>
}

export default Userform