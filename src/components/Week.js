import React, { Component } from 'react';
import Day from './Day';
import uniqueId from 'react-html-id';

class Week extends Component {

	constructor() {
		super()
		uniqueId.enableUniqueIds(this)
	}

	state = {
		name: 'Sarah',
		days: [
			{id: 1, date:'01/02/2019', calories: 0},
			{id: 2, date:'02/02/2019', calories: 0},
			{id: 3, date:'03/02/2019', calories: 0},
			{id: 4, date:'04/02/2019', calories: 0},
			{id: 5, date:'05/02/2019', calories: 0},
			{id: 6, date:'06/02/2019', calories: 0},
			{id: 7, date:'07/02/2019', calories: 0},		
		],
		totalCalories: 0
	}

	updateCalories = (id, calorieCount) => {

		if (calorieCount.target.value.length === 0) {
			return;
		}

		const index = this.state.days.findIndex((day) => {
			return (day.id === id);
		})

		const day = Object.assign([], this.state.days[index]);
		day.calories = Number(calorieCount.target.value);

		const days = Object.assign([], this.state.days);
		days[index] = day;

		let calories = 0;
		this.state.days.map((day, index) => {
			calories += day.calories;
		})

		this.setState({days:days, totalCalories: calories})

	}

	totalCalories = () => {
		return(<span>{this.state.totalCalories}</span>)
	}

	render() {

		return (

			<div>
				<h1>{this.state.name}</h1>
				{
		            this.state.days.map((day, index) => {
		              return (
		              		<div>
				              	<Day
				                date={day.date}
				                key={index} ></Day>
				                <input 
				                	onChange={this.updateCalories.bind(this, day.id)} 
				                	type="text"
				                	value={day.calories} />
			                </div>
			                )
			            })
		          }

		        <h1>Total: {this.totalCalories()}</h1>

			</div>

		)

	}

}

export default Week;