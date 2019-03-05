import React, { PropTypes, Component } from 'react';
import { Link } from "react-router";
import {Jumbotron} from 'react-bootstrap';

var Blank = React.createClass({
  componentDidMount() {
    fetch("https://reactnodb.herokuapp.com/api.json")
      .then(res => res.json())
      .then(res => this.setState({ data: res }))
      .catch(err => console.log(err));
  };
  render: function() {
    return (
       <div className={styles.Main}>
        <h1>Database API</h1>
        <div className={styles.Container}>
          <h2>Data</h2>
          {this.state.data.map((item, i) => {
            return (
              <div key={i} className={styles.Data}>
                <ul>
                  <li>DID: {item.did}</li>
				  <li>Name: {item.name}</li>
                  {/* <li>Name: {item.name</li> */}
                  {/* <li>Age: {item.age}</li> */}
                  {/* <li>Password: {item.pass}</li> */}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      
      
    );
  }

});

export default Blank;
