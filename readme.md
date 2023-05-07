# git commit details

---

> notes for first **4** commits are not available

## 61f33bd - initial commit

1. create project using `npx create-react-app my-app
`
2. go to project folder `cd my-app`
3. `npm start` to run the project

## db8fe5b - create AddUser component

1. create AddUser component (AddUser.js)
2. insert that into App component

## e241c22 - Card component and css modules

1. create Card component
2. insert that into AddUser component
3. insert respective css modules into Card and AddUser components
4. use the css classes imported in step-3

## bab273a - create Button component

1. create Button component
2. import Buttom css modules into Button comp
3. use css classes imported in step-2
4. import Button into AddUser component

## b3bb866 - managing user input state

1. create `userNameChangeHandler` and `ageChangeHandler` in AddUser comp.
2. use the `onChange prop` to set handlers on both username and age inputs.
3. `useState` to manage state of username and age in AddUser component.
4. update the state inside the handlers.

## 770153b - reset input field states after submitting form

1. reset the input field state

```javascript
setEnteredUsername("");
setEnteredAge("");
```

2. reflect the change on UI with value prop

```javascript
<input id="username" type="text" value={enteredUsername} onChange={userNamechangeHandler} />

<input id="age" type="number" value={enteredAge} onChange={ageChangeHandler} />
```

## af9ec03 validate username and age

1. return if username or age is empty.
2. return if age is less than 1

## af9ec03 - create UsersList component

1. create UsersList component
2. Add that to App component

## dc0f1fb - managing list of users via state

1. create `state` for `usersList` in App component
2. delegate `addUserHandler` from App to AddUser component via props.
3. pass new user details to that handler from AddUser.
4. `update` the state when new user is submitted from AddUser component.

## dfd28ee - adding error modal component

1. create ErrorModal component.
2. insert that into AddUser component as a sibling.

## 8f728ca managing error state

1. create state for error
2. set the error state when user enters invalid input
3. conditionally render ErrorModal if error state has an error object
