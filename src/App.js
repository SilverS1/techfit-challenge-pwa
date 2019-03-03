import React, { Component, Fragment } from 'react';
import Week from './components/Week';
import Header from './components/Header';

class App extends Component {

	state = {
		dateStart: '01/03/2019',
		dateEnd: '31/03/2019',
		challengers: [
			{id: 1, name: 'Jack'},
			{id: 1, name: 'Mark'},
			{id: 1, name: 'Sarah'},
			{id: 1, name: 'Jamie'},
			{id: 1, name: 'Fabrice'},
			{id: 1, name: 'Dan'},
			{id: 1, name: 'Oriane'},
		]
	}
  
  render() {
    return (
      <div className="App">
      
      	<Header />
      	{this.state.challengers.map((challenger, id) => {
      		return (<Fragment>
      			<h1>{challenger.name}</h1>
      				<Week dateStart={this.state.dateStart}
        	  			  dateEnd={this.state.dateEnd}></Week>
        	  		</Fragment>)

      	})}
        
      </div>
    );
  }
}

export default App;
