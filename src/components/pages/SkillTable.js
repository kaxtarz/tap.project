
import axios from 'axios';
import React, { Component } from 'react';

class SkillTable extends React.Component {
constructor(props) {
      super(props)

        this.state = {
            skills: []
        }
}

  componentDidMount() {
    axios.get(`http://localhost:8080/skill`)
      .then(res => {
        const skills = res.data;
        this.setState({ skills });
      })
  }

  renderTableHeader() {
   return (
<>
   <th>Skill_ID</th>
   <th>Skill_Description</th>
</>
   );
  }

  renderTableData() {
    return this.state.skills.map((skill, index) => {
      const { skillId, skillDescription } = skill; //destructuring
      return (
        <tr key={skillId}>
          <td>{skillId}</td>
          <td>{skillDescription}</td>

        </tr>
      )
    })
  }

    render() {
      return (
        <div>
          <h3 id='title'>Client Skills</h3>
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
export default  SkillTable;