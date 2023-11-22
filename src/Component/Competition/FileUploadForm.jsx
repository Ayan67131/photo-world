// FileUploadForm.js

import React, { useState } from 'react';
import axios from 'axios';
import './FileUploadForm.css';

const FileUploadForm = () => {
  const [competitionDetails, setCompetitionDetails] = useState({
    title: '',
    description: '',
    photo: null,
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value, files } = e.target;

    setCompetitionDetails((prevDetails) => ({
      ...prevDetails,
      [name]: files ? files[0] : value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform submission logic here
    console.log('Competition Details:', competitionDetails);
    // Add logic to send data to the server or perform other actions
  };


  return (

    <div className='container'>
    <div className='submit'>
      <form onSubmit={handleSubmit}>
        <h2>Enter A Photo</h2>
        <table>
          <tbody>
            <tr>
              <td><label htmlFor="title">Title:</label></td>
              <td>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={competitionDetails.title}
                  onChange={handleInputChange}
                />
              </td>
            </tr>
            <tr>
              <td><label htmlFor="description">Description:</label></td>
              <td>
                <textarea
                  id="description"
                  name="description"
                  value={competitionDetails.description}
                  onChange={handleInputChange}
                />
              </td>
            </tr>
            <tr>
              <td><label htmlFor="photo">Upload Photo:</label></td>
              <td>
                <input
                  type="file"
                  id="photo"
                  name="photo"
                  accept="image/*"
                  onChange={handleInputChange}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <button type="submit">Submit</button>
      </form>

    </div>
    </div>
  );
};

export default FileUploadForm;