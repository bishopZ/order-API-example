
import React from 'react';
import PropTypes from 'prop-types';

var CheckList = ({})=>{
  return (
    <main>
      <table>
        <tbody>
          <tr>
            <td><button>Item #1</button></td>
            <td>Table #7</td>
          </tr>
          <tr>
            <td><button>Item #2</button></td>
            <td>Table #7</td>
          </tr>
        </tbody>
      </table>
    </main>
  );
};

CheckList.propTypes = {};

module.exports = CheckList;
