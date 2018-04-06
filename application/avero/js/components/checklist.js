
import React from 'react';
import PropTypes from 'prop-types';

var CheckList = ({list, mode})=>{
  const displayList = list.filter((item)=>(item.closed === (mode !== 'open')));
  if (displayList.length < 1) return (<h2>no {mode} checks</h2>);

  return (
    <main>
      <ul>
        {displayList.map(function(item, index){
          return (
            <div key={index}>
              <button>{mode} check for table #{item.table.number}</button>
            </div>
          );            
        })}
      </ul>
    </main>
  );
};

CheckList.propTypes = {
  list: PropTypes.array.isRequired,
  mode: PropTypes.string
};

module.exports = CheckList;
