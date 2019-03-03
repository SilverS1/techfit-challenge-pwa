import React, { Component } from 'react';
import Day from './Day';
import uniqueId from 'react-html-id';

class Week extends Component {

	constructor() {
		super()
		uniqueId.enableUniqueIds(this)
		window.techfit = this.state;
	}

	state = {
		days: [
			{id: 1, date:'01/02/2019', calories: 0, exercise: ''},
			{id: 2, date:'02/02/2019', calories: 0, exercise: ''},
			{id: 3, date:'03/02/2019', calories: 0, exercise: ''},
			{id: 4, date:'04/02/2019', calories: 0, exercise: ''},
			{id: 5, date:'05/02/2019', calories: 0, exercise: ''},
			{id: 6, date:'06/02/2019', calories: 0, exercise: ''},
			{id: 7, date:'07/02/2019', calories: 0, exercise: ''},		
		],
		totalCalories: 0,
	}

	updateCalories = (id, calorieCount) => {

		if (calorieCount.target.value.length === 0) {
			return;
		}

		const index = this.state.days.findIndex((day) => {
			return (day.id === id);
		})

		const day = Object.assign({}, this.state.days[index]);		
		day.calories = Number(calorieCount.target.value);

		const days = Object.assign([], this.state.days);
		days[index] = day;

		this.setState({days:days});

		let calories = 0;
		days.map((singleDay, index) => {
			calories += singleDay.calories;
		});

		this.setState({totalCalories: calories});

	};

	updateExercise = (id, exercise) => {

		if (exercise.target.value.length === 0) {
			return;
		}

		const index = this.state.days.findIndex((day) => {
			return (day.id === id);
		})

		const day = Object.assign({}, this.state.days[index]);		
		day.exercise = exercise.target.value;

		const days = Object.assign([], this.state.days);
		days[index] = day;

		this.setState({days:days});

	};

	render() {

		return (

			<div>
			<h1>Total: <span>{this.state.totalCalories}</span></h1>
				{
		            this.state.days.map((day, index) => {
		              return (
		              		<div>
				              	<Day
				                date={day.date}
				                key={index} ></Day>
				                Calories: <input 
				                	onChange={this.updateCalories.bind(this, day.id)} 
				                	type="text"/>
				                Exercise: <input
				                	onChange={this.updateExercise.bind(this, day.id)}  
				                	type="text"/>
			                </div>
			                )
			            })
		          }


		        

			</div>

		)

	}

}

export default Week;