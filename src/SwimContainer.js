import { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const SwimContainer = ({swim}) => {
  const [descriptExpanded, setDescriptExpanded] = useState(false);

  const toggleDescript = () => {
    setDescriptExpanded((prevState) => !prevState);
  };

  return (
    <div className="swim-item" onClick={toggleDescript}>
      {!descriptExpanded ? (
        <>
          <img
            src={swim.url}
            alt={`수영 이미지 ${swim.name}`}
          />
          <div className="swim-name">{swim.name}</div>
          <div className="swim-level">
            {[...Array(swim.level)].map((_, index) => (
              <FaStar key={index} />
            ))}
          </div>
        </>
      )
      :
      (
        <pre className="swim-descript">{swim.descript}</pre>
      )}
    </div>
  );
};

export default SwimContainer;
