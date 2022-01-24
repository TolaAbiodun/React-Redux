import "./App.css";
import { useReducer, useRef } from "react";
import Home from "./components/Home";
import UseRefComponent from "./components/UseRef";
import UselayoutEffect from "./components/UselayoutEffect";
import ImperativeHandle from "./components/ImperativeHandle";


// import { useSelector, useDispatch } from "react-redux";
// import { increment, decrement } from "./actions";

// function App() {
//   const counter = useSelector(state => state.counter);
//   const dispatch = useDispatch();

//   const incrementHandler = () => dispatch(increment(5));
//   const decrementHandler = () => dispatch(decrement());
//   return (
//     <div className="App">
//       <div>
//         <h1>Count: {counter}</h1>
//         <button onClick={incrementHandler}>Increment</button>
//         <button onClick={decrementHandler}>Decrement</button>
//       </div>
//     </div>
//   );
// }

// UseReducer HOOK
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1, showText: state.showText };
    case "DECREMENT":
      return {
        count: state.count === 0 ? 0 : state.count - 1,
        showText: state.showText,
      };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });

  const incrementHandler = () => dispatch({ type: "INCREMENT" });
  const decrementHandler = () => dispatch({ type: "DECREMENT" });


  return (
    <div className="App">
      <div>
        <h1>Count: {state.count}</h1>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <Home />
        <UseRefComponent />
        <UselayoutEffect />
        <ImperativeHandle />

      </div>
    </div>
  );
};

export default App;
