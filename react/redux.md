// React Redux

### 1. Store

- Acts as a central bank storing state

### 2. Reducer

- Changes store data = state
- Receives two parameters: state and action
- Since Redux needs to maintain immutability

#### Provider: providing the outer 'fence' for Redux to wrap around the child components
```
<Provider store={store}>
	<Left1></Left2>
	<Right1></Right1>
</Provider>
```

### useSelector: when you want to use a state in a component
```
const number = useSelector((state) => state.number);
```