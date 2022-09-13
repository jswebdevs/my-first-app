
import { useEffect, useState } from 'react';
import './App.css';




function App() {
  const[users, setusers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data =>setusers(data))

  },[])
  
  const students = [
    {name: 'Ongshu',    roll: '1603176', CGPA: '3.45', status:'unmarried'},
    {name: 'Shantona',  roll: '1603177', CGPA: '3.25', status:'married'},
    {name: 'Fahim',     roll: '1603178', CGPA: '3.75', status:'unmarried'},
    {name: 'Naim',      roll: '1603179', CGPA: '3.55', status:'married'},
    {name: 'Nabil',     roll: '1603180', CGPA: '3.65', status:'unmarried'},
    {name: 'Jamil',     roll: '1603116', CGPA: '2.64', status:'married'}
  ]
  
  return (
    <div className="App">
      <header className="App-header">
        <ul>
          {
            users.map(user => <SingleUser user = {user}></SingleUser>)
          }
        </ul>
          <ul>
          {
           students.map( student => <SingleStudent student={student}></SingleStudent>)
          }
          </ul>
          <Counter></Counter>
      </header>
    </div>
  );
}

function Counter()
{
  const buttonStyle = {
    fontSize: '20px',
    padding: '10px',
    backgroundColor: '#35c7df',
    borderRadius: '10px',
    marginLeft: '10px'
  }
  const [countLikes, setCountLikes] = useState(0);
  const [countComments, setCountComments] = useState(0);
  
  return(
    <div>
      <h2>Total Likes: {countLikes}</h2>
      <button style={buttonStyle} onClick={() => setCountLikes(countLikes+1)}>Give a Like</button>
      <button style={buttonStyle} onClick={() => setCountLikes(countLikes-1)}>Give an Unlike</button>
      <h3>Total Comments: {countComments}</h3>
      <button style={buttonStyle} onMouseUp={() => setCountComments(countComments+1)}>Make a comment</button>
      <button style={buttonStyle} onMouseDown={() => setCountComments(countComments-1)}>Delete a comment</button>
    </div>
  )
}

function SingleUser(props)
{
  const userStyle={
    border: '2px solid red',
    backgroundColor: '#35c7df',
    borderRadius: '10px',
    marginBottom: '10px'
  }
  
  
  const{id, name, username, email, address, phone, company}= props.user;
  return(
    <div>
      <div style={userStyle}>
        <p>
          Id:{id} Name:{name} Username:{username} Email:{email} Phone:{phone}
        </p>
      </div>
    </div>
  )
}

function SingleStudent(props)
{
  const style= {
    border: '2px solid #35c7df',
    backgroundColor: 'black',
    borderRadius: '10px'
  }

  const {name, roll, CGPA, status} = props.student;
  return(
    <div style={style} className='student'>
      <p><i>Name: {name}   Roll: {roll}   CGPA: {CGPA}   Status: {status} </i></p>
    </div>
  )
}

export default App;
