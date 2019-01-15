import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import UserInput from './components/UserInput.js'
import Display from './components/Display.js'

export default class App extends React.Component {
  constructor(){
    super()
    this.state = { 
      input: '',
      todos: [],
      // subValue: ''
    }
  }

  handleChangeText = input => {
    this.setState({ 
      input
    })
  }

  // handleSubText = subValue => {
  //   this.setState({
  //     subValue
  //   })
  // }

  handleAddTodo = () => {
    if(this.state.input.length > 0){
      this.setState(prevState => ({
        todos: [...prevState.todos, this.state.input],
        input: ''
      }))
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>My Native Todo App</Text>
        <UserInput 
            handleChangeText={ this.handleChangeText } 
            handleAddTodo={ this.handleAddTodo } 
            value={ this.state.input } 
            handleSubText={ this.handleSubText }
            subValue={ this.state.subValue }
        />
        <Text>{ this.state.subValue }</Text>
        <Display text={ this.state.input } todos={ this.state.todos }/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 50
  },
});
