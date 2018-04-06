
import React from 'react';
import PropTypes from 'prop-types';

var CheckList = ({list, mode})=>{
  const displayList = list.filter((item)=>(item.closed === (mode !== 'open')));
  if (displayList.length < 1) return (<h2>no {mode} checks</h2>);
  return (
    <main>
      <table>
        <tbody>
          {displayList.map(function(item, index){
            return (
              <tr key={index}>
                <td><button>Item #{index}</button></td>
                <td>{item.id}</td>
              </tr>
            );            
          })}
        </tbody>
      </table>
    </main>
  );
};

CheckList.propTypes = {
  list: PropTypes.array.isRequired,
  mode: PropTypes.string
};

module.exports = CheckList;
