
import axios from 'axios';
import React, { Component } from 'react';

class ClientTable extends React.Component {
constructor(props) {
      super(props)

        this.state = {
          clients: []
        }
}

  componentDidMount() {
    axios.get(`http://localhost:8080/client`)
      .then(res => {
        const clients = res.data;
        this.setState({ clients });
      })
  }

  renderTableHeader() {
   return (
<>
   <th>Client_ID</th>
   <th>Client_Name</th>
</>
   );
  }

    renderTableData() {
      return this.state.clients.map((client, index) => {
        const { clientId, clientName } = client; //destructuring
        return (
          <tr key={clientId}>
            <td>{clientId}</td>
            <td>{clientName}</td>

          </tr>
        )
      })
    }

    render() {
      return (
        <div>
          <h3 id='title'>Client List</h3>
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
export default  ClientTable;