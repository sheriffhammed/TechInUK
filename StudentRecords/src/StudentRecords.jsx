import { useState } from 'react'

function App() {
  const [formData, setFormData] = useState({})
  const [studentRecords, setStudentRecords] = useState([])
 
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setStudentRecords([...studentRecords, formData])    
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
            placeholder='Enater Name'
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
                        
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{studentRecord.name}</td>
                                <td>{studentRecord.department}</td>  
                                <td>{studentRecord.school}</td>                                                              
                                <td><button onClick={() => handleDelete(i)} style={{backgroundColor: "red"}}>X</button></td>
                            </tr>
                    )
                    
                }
            </tbody>
        </table>
      </div>
    </>
  )
}

export default App
