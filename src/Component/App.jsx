import React, { Component } from "react";
import "./App.css";
import DisplayName from "./DisplayName/DisplayName";
import NamesList from "./NamesList/NamesList";
import AlertUser from "./AlertUser/AlertUser";
import SuperheroTable from "./SuperheroTable/SuperheroTable";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      names: ["Mike", "Nevin", "Aaron", "Tory", "Kelly"],
      player: {
        firstName: "Reggie",
        lastName: "White",
      },
      superheroes: [
        {
            superheroId: 1,
            name: 'Batman',
            primaryAbility: 'Wealthy',
            secondaryAbility: 'Rich'
        },
        {
            superheroId: 2,
            name: 'Superman',
            primaryAbility: 'Super strength',
            secondaryAbility: 'Fly'
        },
        {
            superheroId: 3,
            name: 'Spiderman',
            primaryAbility: 'Spider senses',
            secondaryAbility: 'Shoots web'
        }
    ]
    };
  }
  sendAlert = () => {
    alert("devCodeCamp");
  };
  render() {
    return (
      <div>
        <NamesList names={this.state.names} />
        <DisplayName firstName = {this.state.player.firstName} lastName = {this.state.player.lastName}/>
        <AlertUser sendAlert = {this.sendAlert}/>
        <SuperheroTable superheroes = {this.state.superheroes}/>
      </div>
    );
  }
}

export default App;