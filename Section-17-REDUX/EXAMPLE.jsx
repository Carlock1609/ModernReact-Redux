//  COUNTER
// Action Creators - You don't need to change these
const increment = () => ({ type: 'increment' });
const decrement = () => ({ type: 'decrement' });

const Counter = (props) => {
    return (
        <div>
            {/* When action creators envoked, automatically runs reducers */}
            <button onClick={props.increment} className="increment">Increment</button>
            <button onClick={props.decrement} className="decrement">Decrement</button>
            Current Count: <span>{props.count}</span>
        </div>
    );
};

// Set the state
const mapStateToProps = (state) => {
    console.log(state)
    return {
        count: state.count
    }
}

// Pass in action creators
const WrappedCounter = ReactRedux.connect(mapStateToProps, {
    increment, decrement
})(Counter);

// Only change code *before* me!
// -----------
// reducers run when action creators called?
const store = Redux.createStore(Redux.combineReducers({
    count: (count = 0, action) => {
        if (action.type === 'increment') {
            return count + 1;
        } else if (action.type === 'decrement') {
            return count - 1;
        } else {
            return count;
        }
    }
}));

