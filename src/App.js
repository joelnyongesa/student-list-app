// import { useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import { useState } from 'react';
import StudentsList from './StudentsList';
import Student from './StudentCard';


// To get the students name
function getStudentName(e){
  e.preventDefault();
  console.log(e.target.value)
}

function getStudentImage(e){
  e.preventDefault();
  console.log(e.target.value);
}

function getStudentPartingSHot(e){
  e.preventDefault();
  console.log(e.target.value)
}


// // States and Hooks
// const [age, setAge] = useState(10)

// function addAge(){
//   setAge(age+1)
// }






function App() {
  // State variable for student name, student age and student parting shot.
  const [name, setName] = useState()

  function changeName(e){
    e.preventDefault();
    setName(e.target.value)
  }

  const [image, setImage] = useState()
  function changeImage(e){
    e.preventDefault();
    setImage(e.target.value);
  }

  const [partingShot, setPartingShot] = useState()
  function changePartingShot(e){
    e.preventDefault();
    setPartingShot(e.target.value);
  }

  const [students, setStudents] = useState([])
  function getStudents(e){
    e.preventDefault();
    // Create the student object.
    let student = {
      studentName: name,
      studentImage: image,
      studentPartingShot: partingShot
    }

    // console.log(student)
    let newArray = [...students, student];
    setStudents(newArray);
    e.target.reset();
    // console.log(newArray)
  }

  



  return (
    <div className="App">
      <h1>Hello, this is a React App</h1>
      <Navbar/>
      <form id='form' onSubmit={getStudents}>
        <h1>Fill out the form below</h1>
        <input placeholder='Add Student Name' type='text' onChange={changeName}/>
        <input placeholder='Add student photo link' type='url' onChange={changeImage}/>
        <input placeholder='Add student parting shot' onChange={changePartingShot}/>
        <button type='submit'>Submit</button>
      </form>

      <Student student={students}/>
    </div>
  );
}

export default App;
