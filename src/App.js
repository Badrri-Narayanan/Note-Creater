import './App.css';
import React from 'react';
import CustomButton from './components/custom-button/custom-button.component';
import InputField from './components/input-field/input-field.component';
import TaskList from './components/task-list/task-list.component';

import { connect } from 'react-redux'

import { setTaskList, addToList } from './redux/list_of_tasks/list_of_tasks.actions';
import { setNewItem } from './redux/new_item/new_item.actions'

class App extends React.Component {

  componentDidMount() {
    let tasks = [
      "buy groceries",
      "water the plants",
      "go on a vacation"
    ];

    this.props.setTaskList(tasks);
  }

  onInputChange = (event) => {
    this.props.setNewItem(event.target.value)
  }

  AddItemToList = () => {
    const {new_item, addToList, setNewItem} = this.props
    if(new_item === "") {
      return
    }
    setNewItem("");
    addToList(new_item)
  }

  render() {
    const {new_item} = this.props;
    return (
      <div className="App">
        <h1>To Do list</h1>
        <div className="item-adders">
          <InputField placeholder="Enter Item here..." value={new_item} type="text" onChange={this.onInputChange} />
          <CustomButton onClick={ this.AddItemToList}>Add Item</CustomButton>
        </div>
        <TaskList />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  new_item : state.new_item_value.new_item,
})

const mapDispatchToProps = dispatch => ({
    setTaskList: tasks => dispatch(setTaskList(tasks)),
    setNewItem: new_item => dispatch(setNewItem(new_item)),
    addToList: item => dispatch(addToList(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
