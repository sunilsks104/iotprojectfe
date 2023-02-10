import { useState } from 'react';
import Wrapper from '../../assets/wrappers/DashboardFormPage';
import axios from 'axios';

const Profile = () => {
  const [rfidnumber, setRfidnumber] = useState('');
  const [name, setName] = useState('');
  const [contact, setcontact] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const getUserDetails = async () => {
      const resp = await axios.get(
        `https://careful-lime-fox.cyclic.app/api/v1/tasks/${rfidnumber}`
      );
      // const url =
      //   'https://careful-lime-fox.cyclic.app/api/v1/tasks/${rfidnumber}';

      // const resp = await fetch(url, {
      //   method: 'POST',
      //   headers: {
      //     'Content-type': 'application/json',
      //   },
      //   body: JSON.stringify(rfidnumber),
      // });

      // axios
      //   .post('https://careful-lime-fox.cyclic.app/api/v1/tasks/', {
      //     firstName: 'Fred',
      //     lastName: 'Flintstone',
      //   })
      //   .then(function (response) {
      //     console.log(response);
      //   })
      //   .catch(function (error) {
      //     console.log(error);
      //   });
      console.log(resp);
      const data = resp.data;
      setName(data.task.name);
      setcontact(data.task.emergencycontact);
    };
    getUserDetails();
  };
  const handleChange = (e) => {
    setRfidnumber(e.target.value);
  };

  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <h3>Person Details</h3>
        <div className="form-center">
          <div>
            <div className="form-row">
              <label htmlFor={rfidnumber} className="form-label">
                RFID Number
              </label>
              <input
                id="rfidnumber"
                type="text"
                name="rfidnumber"
                value={rfidnumber}
                onChange={handleChange}
                className="form-input"
              />
            </div>
          </div>

          <button type="submit" className="btn btn-block">
            Get Details
          </button>
        </div>
      </form>
      <br />
      <div className="form-center">
        <div className="form-row">
          <h3 className="form-label">Name</h3>
          <h3 className="form-label">{name}</h3>
        </div>
        <div className="form-row">
          <h3 className="form-label">Contact</h3>
          <h3 className="form-label">{contact}</h3>
        </div>
      </div>
    </Wrapper>
  );
};
export default Profile;
