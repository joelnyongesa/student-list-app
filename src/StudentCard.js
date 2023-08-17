function Student({student}){
    return(
        <div>
            <img src={student.studentImage}/>
            <h2>{student.studentName}</h2>
            <p>{student.studentPartingShot}</p>
        </div>
    )
}

export default Student;