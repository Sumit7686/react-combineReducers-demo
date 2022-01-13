import './App.css';

// redux
import {connect} from 'react-redux';

// action
import {anotherName, addWish} from './Actions/Action';

function App(props) {
  // console.log('props :::', props)
  const myWish = props.myWish.map((item, index) => {
    return <h2 key={index}>{item}</h2>
  });

  return (
    <div className="App">
      <h1>App Component.</h1>
      <h2>My name is {props.myName}.</h2>
      {myWish}
      <button onClick={() => {props.changeName()}}>Click me.</button>
      <button onClick={() => {props.addWish()}}>Add Wish.</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myName: state.name,
    myWish: state.wish
  }
}

const mapDispatchToProps = (dispatch) => {
  // console.log('dispatch :::', dispatch)
  return {
    // changeName: (name) => {dispatch(anotherName(name))}
    changeName: () => {dispatch(anotherName())},
    addWish: () => {dispatch(addWish())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
