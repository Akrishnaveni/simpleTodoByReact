import './index.css'

import {Component} from 'react'

import TodoItem from '../TodoItem'

const initialDodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {id: 5, title: 'Order fruits on Big Basket'},
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

class SimpleTodos extends Component {
  state = {TodoList: initialDodosList}

  deleteTodo = id => {
    const {TodoList} = this.state
    const filterTodos = TodoList.filter(each => each.id !== id)
    this.setState({TodoList: filterTodos})
  }

  render() {
    const {TodoList} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="title">Simple Todos</h1>
          <ul className="list-container">
            {TodoList.map(each => (
              <TodoItem
                todoDetails={each}
                key={each.id}
                deleteTodo={this.deleteTodo}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
