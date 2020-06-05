import React, { Component } from 'react';

/*
React Dynamic Table
https://codepen.io/Basit600/pen/JzeZxo?editors=0010
*/

class ClientTable extends React.Component {

  renderTableHeader() {
    let header = Object.keys(this.props.clients[0]);
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  }

  renderTableData() {
    return this.props.clients.map((client, index) => {
      const { id, consultant, role, status, skillsets } = client; //destructuring
      return (
        <tr key={id}>
          <td>{id}</td>
          <td>{consultant}</td>
          <td>{role}</td>
          <td>{status}</td>
          <td>{skillsets}</td>
        </tr>
      );
    });
  }

  render() {
    console.log(this);
    return (
      <div>
        <h1 id='title'>tap|QA</h1>
        <h3 id='title'>Client-Consultant Roster</h3>
        <table id='students'>
          <tbody>
            {/* <tr>{this.renderTableHeader()}</tr> */}
            {this.props.clients[0]}
          </tbody>
        </table>
      </div>
    );
  }
}

// ReactDOM.render(<Table />, document.getElementById('root'));

export default ClientTable;
