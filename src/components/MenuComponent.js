import React, {Component} from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import DishDetail from './DishdetailComponent';

class Menu extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedDish: null
		}
		// console.log('Menu Component constructor is invoked');
	}

	// componentDidMount() {
	// 	console.log('Menu Component componentDidMount is invoked');
	// }

	onDishSelect(dish) {
		this.setState({selectedDish: dish});
	}

renderDish(dish) {
	if (dish != null) {
		return (<div className="col-12 col-md-5 m-1">
			<Card>
				<CardImg top="top" src={dish.image} alt={dish.name}/>
				<CardBody>
					<CardTitle>{dish.name}</CardTitle>
					<CardText>{dish.description}</CardText>
				</CardBody>
			</Card>
		</div>);
	} else {
		return (<div/>);
	}
}

render() {

	const menu = this.props.dishes.map((dish) => {
		return (<div className="col-12 col-md-5 m-1">
			<Card key={dish.id} onClick={() => this.onDishSelect(dish)}>
				<CardImg width="100%" src={dish.image} alt={dish.name}/>
				<CardImgOverlay>
					<CardTitle>{dish.name}</CardTitle>
				</CardImgOverlay>
			</Card>
		</div>);
	});

	return (<div className="container">
		<div className="row">
			{menu}
		</div>
		<DishDetail selectedDish={this.state.selectedDish}/>
	</div>);
}
}

	// renderDish(dish) {
	// 	if (dish != null) {
	// 		return (<Card>
	// 			<CardImg width='100%' object="object" src={dish.image} alt={dish.name}/>
	// 			<CardBody>
	// 				<CardTitle heading="heading">{dish.name}</CardTitle>
	// 				<CardText>{dish.description}</CardText>
	// 			</CardBody>
	// 		</Card>);
	// 	} else {
	// 		return (<div></div>);
	// 	}
	// }

// 	render() {
// 		const menu = this.props.dishes.map((dish) => {
// 			return (<div className="col-12 col-md-5 m-1">
// 				<Card key={dish.id} onClick={() => this.onDishSelect(dish)}>
// 					<CardImg width="100%" src={dish.image} alt={dish.name}/>
// 					<CardImgOverlay>
// 						<CardTitle>{dish.name}</CardTitle>
// 					</CardImgOverlay>
// 				</Card>
// 			</div>);
// 		});
//
// 		console.log('Menu Component render is invoked');
//
// 		return (<div className="container">
// 			<div className="row">
// 				{menu}
// 			</div>
// 			<div className="row">
// 				<div className="col-12 col-md-5 m-1">
// 					{this.renderDish(this.state.selectedDish)}
// 				</div>
// 			</div>
// 		</div>)
// 	}
// }

export default Menu;
