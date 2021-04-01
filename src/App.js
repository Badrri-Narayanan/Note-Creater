import './App.css';
import React from 'react';
import CustomButton from './components/custom-button/custom-button.component';
import InputField from './components/input-field/input-field.component';
import TaskList from './components/task-list/task-list.component';

import { connect } from 'react-redux';
import { setTasksList, addTaskToList } from './redux/list_of_tasks/list_of_tasks.actions'

import { setNewItem } from './redux/new_item/new_item.actions'

class App extends React.Component {

  AddItemToList = () => {
    const {new_item, addTaskToList, setNewItem} = this.props
    if(new_item === "") {
      return
    }
    addTaskToList(new_item)
    setNewItem("")
  }

  componentDidMount() {
    let tasks = [
      "buy groceries",
      "water the plants",
      "go on a vacation"
    ];

    this.props.setTasksList(tasks);
  }

  render() {
    return (
      <div className="App">
        <h1>To Do list</h1>
        <div className="item-adders">
          <InputField placeholder="Enter Item here..." type="text" />
          <CustomButton onClick={ this.AddItemToList }>Add Item</CustomButton>
        </div>
        <TaskList removeItem = {this.RemoveItemFromList} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  list_of_tasks: setTasksList, addTaskToList,
  new_item: state.newItem.new_item,
})

const mapDispatchToProps = dispatch => ({
  setTasksList : taskslist => dispatch(setTasksList(taskslist)),
  addTaskToList : new_item => dispatch(addTaskToList(new_item)),
  setNewItem : new_value => dispatch(setNewItem(new_value))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
