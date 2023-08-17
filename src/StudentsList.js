import Student from "./StudentCard";


function StudentsList({ students}){
    return(
        <div>
            {students.map(student =>{
                return (
                    <Student student={student}/>
                )
            })}
        </div>
    )
}

export default StudentsList;