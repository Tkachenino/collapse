import {useState} from 'react';
import Arrow from '../assets/arrow.svg'
import PropTypes from 'prop-types';

const Collapse = ({collapsedLabel, expandedLabel, children}) => {
  const [hideStatus, setShowStatus] = useState(false);  
 
  return (
    <div className="Collapse">
      <div className={`CollapseContent ${hideStatus ? 'hidden' : ''}`} >{children}</div>
      <div className='CollapseHandler'>
        <button 
          className='CollapseButton' 
          onClick={() => setShowStatus(prevS => !prevS)}
        >
          {hideStatus ? collapsedLabel : expandedLabel}
          <img className={`${hideStatus ? 'top' : 'bottom'}`} src={Arrow} alt='arrow'/>
        </button>
      </div>
    </div>
  )
};

Collapse.defaultProps = {
  collapsedLabel: 'Развернуть',
  expandedLabel: 'Свернуть'
};

Collapse.propTypes = {
  collapsedLabel: PropTypes.string,
  expandedLabel: PropTypes.string,
  children: PropTypes.element
};

export default  Collapse;