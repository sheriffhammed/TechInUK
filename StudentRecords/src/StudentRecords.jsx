import { useState } from 'react'

function App() {
  const [formData, setFormData] = useState({})
  const [studentRecords, setStudentRecords] = useState([])
  const [editFormData, setEditFormData] = useState({})
  const [studentId, setStudentId] = useState(null)

  const handleEdit = (id) => {
    setStudentId(id)
    
  }

  const handleUpdateChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setEditFormData(values => ({...values, [name]: value}))
    
  }

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData(values => ({...values, [name]: value}))
  }

  const handleUpdate = (i) => {
    const editedForm = {
      id : i,
      name : editFormData.name,
      department: editFormData.department,
      school : editFormData.school
    }
    const newRecords = [...studentRecords];
    const index = studentRecords.findIndex((student, index) => i === index);
    newRecords[index] = editedForm
    setStudentRecords(newRecords)
    setStudentId(null)        
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setStudentRecords([...studentRecords, formData])   
    setFormData({}) 
  }
  
  const handleDelete = (id) => {
    const filteredResut = studentRecords.filter((studentRecord, index) => id !== index)
    setStudentRecords(filteredResut)    
  }
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="name" 
            placeholder='Enter Name'
            value={formData.name || ""} 
            onChange={handleChange}
          />
          <input 
              type="text" 
              name="department" 
              value={formData.department || ""} 
              placeholder='Enter Department'
              onChange={handleChange}
            />
            
            <input 
              type="text" 
              name="school" 
              value={formData.school || ""} 
              placeholder='Enter School'
              onChange={handleChange}
            />           
          
          <button style={{backgroundColor: "blue"}}>Add Record</button>
        </form>
      </div>
      <div>
        <table>
            <thead>
                <th>S/N</th>
                <th>Name</th>
                <th>Department</th>
                <th>School</th>                
                <th>Action</th>
            </thead>
           
            <tbody>
                {studentRecords.map ((studentRecord, i) => 
                  i === studentId
                    ?
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td>
                        <input 
                          type="text" 
                          name="name"
                          value={editFormData.name || studentRecord.name} 
                          onChange={handleUpdateChange}
                        />
                      </td>
                      <td>
                        <input 
                            type="text" 
                            name="department"
                            value={editFormData.department || studentRecord.department} 
                            onChange={handleUpdateChange}
                          />
                      </td>  
                      <td>
                        <input 
                            type="text" 
                            name="school"
                            value={editFormData.school || studentRecord.school} 
                            onChange={handleUpdateChange}
                          />
                      </td>                                                         
                      <td>
                        <button onClick={() => handleUpdate(i)} style={{backgroundColor: "blue"}}>
                          Update
                        </button>
                       
                      </td>
                    </tr>
                  :
                    <tr key={i}>
                        <td>{i + 1}</td>
                        <td>{studentRecord.name}</td>
                        <td>{studentRecord.department}</td>  
                        <td>{studentRecord.school}</td>                                                              
                        <td>
                          <button onClick={() => handleEdit(i)} style={{backgroundColor: "green"}}>
                            Edit
                          </button>
                          <button onClick={() => handleDelete(i)} style={{backgroundColor: "red"}}>
                            X
                          </button>
                        </td>
                    </tr>
                    
                    
                )}
            </tbody>
        </table>
      </div>
    </>
  )
}

export default App
