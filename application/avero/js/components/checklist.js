
import React from 'react';
import PropTypes from 'prop-types';

var CheckList = ({list, mode, editCheck})=>{
  
  const displayList = list.filter((item)=>(item.closed === (mode !== 'open')));

  if (displayList.length < 1) return (<h2>no {mode} checks</h2>);

  return (
    <main>
      <ul>
        {displayList.map(function(item, index){
          return (
            <li key={index}>
              <button onClick={()=>(editCheck(item.id))}>
                {mode} check for <br /> table #{item.table.number}
              </button>
            </li>
          );            
        })}
      </ul>
    </main>
  );
};

CheckList.propTypes = {
  editCheck: PropTypes.func.isRequired,
  list: PropTypes.array.isRequired,
  mode: PropTypes.string
};

module.exports = CheckList;
