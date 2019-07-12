import React , {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: [
        {name: 'Kaiser Bun', color: 'saddlebrown'},
        {name: 'Sesame Bun', color: 'sandybrown'},
        {name: 'Gluten Free Bun', color: 'peru'},
        {name: 'Lettuce Wrap', color: 'olivedrab'},
        {name: 'Beef Patty', color: '#3F250B'},
        {name: 'Soy Patty', color: '#3F250B'},
        {name: 'Black Bean Patty', color: '#3F250B'},
        {name: 'Chicken Patty', color: 'burlywood'},
        {name: 'Lettuce', color: 'lawngreen'},
        {name: 'Tomato', color: 'tomato'},
        {name: 'Bacon', color: 'maroon'},
        {name: 'Onion', color: 'lightyellow'}
      ],
      stack: []
    }
    this.addIngredient = this.addIngredient.bind(this); 
  }

  addIngredient (e) {
    e.preventDefault();
    let stack = Array.from(this.state.stack);
    stack.push(this.state.ingredients);
    this.setState({
      stack
    })
  }

  render() {
  // let stack = Array.from(this.state.stack);

    return (
      <>
      <div>
      <container id="menu">
      <input type="text"></input>
      <button onClick={this.addIngredient}>Add</button>
      </container>
      </div>
      </>
    )
}
}


export default App;
