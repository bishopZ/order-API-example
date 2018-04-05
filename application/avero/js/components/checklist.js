
import React from 'react';
import PropTypes from 'prop-types';

var CheckList = ({list, mode})=>{
  const displayList = list.filter((item)=>(item.closed === (mode === 'open')));
  if (displayList.length < 1) return (<h2>no {mode} checks</h2>);
  return (
    <main>
      <table>
        <tbody>
          {displayList.map(function(name, index){
            (
              <tr>
                <td><button>Item #{index}</button></td>
                <td>{name}</td>
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
