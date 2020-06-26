
import axios from 'axios';
import React, { Component } from 'react';

class ConsultantTable extends React.Component {
constructor(props) {
      super(props)

        this.state = {
          consultants: []
        }
}

  componentDidMount() {
    axios.get(`http://localhost:8080/consultant`)
      .then(res => {
        const consultants = res.data;
        this.setState({ consultants });
      })
  }

  renderTableHeader() {
   return (
<>
   <th>ID</th>
   <th>Consultant</th>
   <th>Role</th>
   <th>Status</th>
</>
   );
  }

    renderTableData() {
      return this.state.consultants.map((consultant, index) => {
        const { consultantId, consultantName, consultantRole, consultantStatus } = consultant; //destructuring
        return (
          <tr key={consultantId}>
            <td>{consultantId}</td>
            <td>{consultantName}</td>
            <td>{consultantRole}</td>
            <td>{consultantStatus}</td>

          </tr>
        )
      })
    }

    render() {
      return (
        <div>
          <h3 id='title'>Consultant Roster</h3>
          <table id='consultants'>
            <tbody>
              <tr>{this.renderTableHeader()}</tr>
              {this.renderTableData()}
            </tbody>
          </table>
        </div>
      );
    }

}
export default  ConsultantTable;