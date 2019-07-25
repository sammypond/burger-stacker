import React from 'react';
import IngredientList from './IngredientList';
import Burger from './Burger';

class App extends React.Component {
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
  this.removeIngredient = this.removeIngredient.bind(this)
  this.addIngredient = this.addIngredient.bind(this)
  }
  
  addIngredient(e, i) {
    e.preventDefault();
    const stackCopy = Array.from(this.state.stack); 
    stackCopy.unshift(this.state.ingredients[i]);
    this.setState({
      stack: stackCopy
    })
  }
  
  removeIngredient(e) {
    e.preventDefault();
    this.setState({
      stack: []
    })
  }
  
  render() {
    const listCopy = Array.from(this.state.ingredients)
    const stackCopy = Array.from(this.state.stack);
    return(
      <main>
        <div id='ingredients'>
          <IngredientList ingredients={listCopy} addIngredient={this.addIngredient} />
        </div>
        
        <div id='burgerlist'>
          <Burger usedIngredients={stackCopy} removeIngredient={this.removeIngredient}/>
        </div>
      </main>  
    )
  }
}

export default App;