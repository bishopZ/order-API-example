
import React from 'react';
import PropTypes from 'prop-types';

var HomePage = ({requestApiKey, requestCheckList}) => {
  requestApiKey();
  requestCheckList();
  return (
    <div className="container">
      <section className="control-bar">
        <p>Viewing: <strong>Open</strong> - <a href="#">Closed</a></p>
        <button>Create New</button>
      </section>
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
      <section className="edit-form">
        Edit Form
      </section>
    </div>
  );
};

HomePage.propTypes = {
  requestApiKey: PropTypes.func.isRequired,
  requestCheckList: PropTypes.func.isRequired
};

module.exports = HomePage;
