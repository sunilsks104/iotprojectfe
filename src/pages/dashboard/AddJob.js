import { FormRow } from '../../components';
import Wrapper from '../../assets/wrappers/DashboardFormPage';
import { toast } from 'react-toastify';
import { useState } from 'react';

const AddJob = () => {
  const [name, setName] = useState('');
  const [rfidnumber, setRfidnumber] = useState('');
  const [emergencycontact, setEmergencycontact] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !rfidnumber || !emergencycontact) {
      toast.error('Please fill out all fields');
      return;
    }

    const user = { name, rfidnumber, emergencycontact };

    try {
      const url = 'https://careful-lime-fox.cyclic.app/api/v1/tasks/';
      // const url = `/api/v1/auth/login`;
      await fetch(url, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(user),
      });
      setName('');
      setRfidnumber('');
      setEmergencycontact('');
    } catch (error) {
      console.log(error);
    }
  };

  const clearValues = () => {
    setName('');
    setRfidnumber('');
    setEmergencycontact('');
  };

  return (
    <Wrapper>
      <form className="form">
        <h3>Add Person Details</h3>
        <div className="form-center">
          {/* position */}
          <FormRow
            type="text"
            name="name"
            labelText="Name"
            value={name}
            handleChange={(e) => {
              setName(e.target.value);
            }}
          />
          {/* company */}
          <FormRow
            type="text"
            name="rfidnumber"
            labelText="RFID Number"
            value={rfidnumber}
            handleChange={(e) => {
              setRfidnumber(e.target.value);
            }}
          />
          {/* jobLocation */}
          <FormRow
            type="text"
            name="emergencycontact"
            labelText="Emergency Contact"
            value={emergencycontact}
            handleChange={(e) => {
              setEmergencycontact(e.target.value);
            }}
          />
          <div className="btn-container">
            <button
              type="button"
              className="btn btn-block clear-btn"
              onClick={clearValues}
            >
              clear
            </button>
            <button
              type="submit"
              className="btn btn-block submit-btn"
              onClick={handleSubmit}
            >
              submit
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};
export default AddJob;
