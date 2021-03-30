import './App.css';
import React from 'react';
import CustomButton from './components/custom-button/custom-button.component';
import InputField from './components/input-field/input-field.component';
import TaskList from './components/task-list/task-list.component';

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      new_item_field: '',
      list_of_tasks: [],
    }
  }

  componentDidMount() {
    let tasks = [
      "buy groceries",
      "water the plants",
      "go on a vacation"
    ];

    this.setState({list_of_tasks: tasks});
  }

  onInputChange = (event) => {
    this.setState({new_item_field: event.target.value})
  }

  AddItemToList = () => {
    const {list_of_tasks, new_item_field} = this.state;
    if(new_item_field !== '') {
      let new_task = list_of_tasks;
      new_task.push(new_item_field)
      this.setState({
        list_of_tasks : new_task,
        new_item_field : '',
      });
    }
  }

  RemoveItemFromList = (index) => {
    let tasks = this.state.list_of_tasks;
    tasks.splice(index, 1);
    this.setState({list_of_tasks: tasks});
  }

  render() {
    return (
      <div className="App">
        <h1>To Do list</h1>
        <div className="item-adders">
          <InputField placeholder="Enter Item here..." value={this.state.new_item_field} type="text" onChange={this.onInputChange} />
          <CustomButton onClick={ this.AddItemToList}>Add Item</CustomButton>
        </div>
        <TaskList list_of_tasks={this.state.list_of_tasks} removeItem = {this.RemoveItemFromList} />
      </div>
    );
  }
}

export default App;
