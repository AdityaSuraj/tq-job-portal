import React,{useState} from 'react'


const Form = () => {
  const [name, setName] = useState('');
  const [salary, setSalary] = useState('');
  const [occupation, setOccupation] = useState('');
  const [location, setLocation] = useState('');
  const [noopenings, setnoopenings] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSalaryChange = (e) => {
    setSalary(e.target.value);
  };

  const handleOccupationChange = (e) => {
    setOccupation(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handlenoopeningsChange = (e) => {
    setnoopenings(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    console.log('Name:', name);
    console.log('Salary:', salary);
    console.log('Occupation:', occupation);
    console.log('Location:', location);
    console.log('noopenings:', noopenings);
  };

  return (
    <div className= "screen">
    <div className="form-container">
    <h2>JOB DETAILS</h2>
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">company Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="salary">Salary:</label>
        <input
          type="text"
          id="salary"
          value={salary}
          onChange={handleSalaryChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="occupation">Job Title:</label>
        <input
          type="text"
          id="occupation"
          value={occupation}
          onChange={handleOccupationChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="location">Location:</label>
        <input
          type="text"
          id="location"
          value={location}
          onChange={handleLocationChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="noopenings">Number of openings:</label>
        <input
          type="number"
          id="noopenings"
          value={noopenings}
          onChange={handlenoopeningsChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
  </div>
);
  
};
  


export default Form ;