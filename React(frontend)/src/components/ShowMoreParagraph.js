import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import classes from "./ShowMoreParagraph.module.css"

const ShowMoreParagraph = (props) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(prev => !prev);
  };

  const getFirstLine = (text) => {
    const lines = text.split('.');
    return lines[0]+"...";
  };
  return (
    <div className={`${classes['show-more-paragraph']} ${expanded ? classes['expanded'] : ''}`}>
      <h2 className={classes["paragraph-title"]}>{props.title}</h2>
      <p>{expanded ? props.text : ` ${getFirstLine(props.text)}`}</p>
      {props.text.length > getFirstLine(props.text).length && (
      <button
      onClick={toggleExpanded}
      className={`${classes["show-more-button"]} ${expanded ? classes["expanded"] : ''} ${expanded ? classes["minus"] : classes["plus"]}`}
    >
      {expanded ? <FontAwesomeIcon icon={faMinus} /> : <FontAwesomeIcon icon={faPlus} />}
    </button>
    
     
      )}
    </div>
  );
};

export default ShowMoreParagraph;
