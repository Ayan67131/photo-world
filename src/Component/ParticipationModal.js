// ParticipationModal.js

import React from 'react';
import { Link } from 'react-router-dom';

class ParticipationModal extends React.Component {
  render() {
    return (
      <div>
        <h2>Participation Modal</h2>
        {/* Add your participation form here */}
        <button>
          <Link to="/confirmation">Submit</Link>
        </button>
      </div>
    );
  }
}

export default ParticipationModal;
