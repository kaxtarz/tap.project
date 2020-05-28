import React, { Component } from 'react';

/*
React Dynamic Table
https://codepen.io/Basit600/pen/JzeZxo?editors=0010
*/

class ClientTable extends React.Component {
  render() {
    // super(props);
    this.state = {
      students: [
        {
          id: 1,
          consultant: 'Mark',
          role: 1,
          status: 'Active',
          skillsets: 'Java, Jenkins, .NET',
        },
        {
          id: 2,
          consultant: 'Ismali',
          role: 1,
          status: 'Active',
          skillsets: 'Java, Jenkins, .NET',
        },
        {
          id: 3,
          consultant: 'Conrad',
          role: 1,
          status: 'Active',
          skillsets: 'Java, Jenkins, .NET',
        },
        {
          id: 4,
          consultant: 'Mingmo',
          role: 1,
          status: 'Active',
          skillsets: 'Java, Jenkins, .NET',
        },
      ],
    };
  }

  renderTableHeader() {
    let header = Object.keys(this.state.students[0]);
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  }

  renderTableData() {
    return this.state.students.map((student, index) => {
      const { id, consultant, role, status, skillsets } = student; //destructuring
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
    return (
      <div>
        <h1 id='title'>tap|QA</h1>
        <h3 id='title'>Client-Consultant Roster</h3>
        <table id='students'>
          <tbody>
            <tr>{this.renderTableHeader()}</tr>
            {this.renderTableData()}
          </tbody>
        </table>
      </div>
    );
  }
}

// ReactDOM.render(<Table />, document.getElementById('root'));

export default ClientTable;
