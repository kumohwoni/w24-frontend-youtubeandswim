import { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const SwimContainer = (props) => {
  const [descriptExpanded, setDescriptExpanded] = useState(false);

  const toggleDescript = () => {
    setDescriptExpanded((prevState) => !prevState);
  };

  return (
    <div className="swim-item" onClick={toggleDescript}>
      {!descriptExpanded ? (
        <>
          <img
            src={`/images/${props.swim.name}.jpg`}
            alt={`수영 이미지 ${props.swim.name}`}
          />
          <div className="swim-name">{props.swim.name}</div>
          <div className="swim-level">
            {[...Array(props.swim.level)].map((_, index) => (
              <FaStar key={index} />
            ))}
          </div>
        </>
      )
      :
      (
        <pre className="swim-descript">{props.swim.descript}</pre>
      )}
    </div>
  );
};

export default SwimContainer;
