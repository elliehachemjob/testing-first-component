import React from "react"; //need react to test a react component
import Counter from "../Counter"; //component we want to test
import { render, fireEvent } from "@testing-library/react"; //render component in a virtual dom
import "@testing-library/jest-dom/extend-expect"; // to use the excpect keyword
//using test function
//first field is just descrprition of test
//second field a function that have all logic of the test
//first thing we render out component
test("header render with correct text ", () => {
  //now component is checked  if rendered in the virutal dom
  const component = render(<Counter />); //same as const {getByTestId} = render(<Counter />);
  //now we make sure if it contain text my counter
  //type component.get by to test component
  //but best way to test is to give the component an id
  //now we save this value in a new variable to test on that element
  const headerEl = component.getByTestId("header");

  //now to do main test using excpect
  expect(headerEl.textContent).toBe("My Counter");
});

test("counter initially starts with text of 0", () => {
  const { getByTestId } = render(<Counter />);
  const counterEl = getByTestId("counter");

  expect(counterEl.textContent).toBe("0");
});

test("input contain initial value of 1", () => {
  const { getByTestId } = render(<Counter />);
  const inputEl = getByTestId("input");

  expect(inputEl.value).toBe("1");
});

test("add button renders with + sign", () => {
  const { getByTestId } = render(<Counter />);
  const addBtn = getByTestId("add-btn");

  expect(addBtn.textContent).toBe("+");
});

test("subtract button renders with - sign", () => {
  const { getByTestId } = render(<Counter />);
  const subtractBtn = getByTestId("subtract-btn");

  expect(subtractBtn.textContent).toBe("-");
});

test("changing value of input works correctly", () => {
  const { getByTestId } = render(<Counter />);
  const inputEl = getByTestId("input");

  //we can have multiple excpect statments
  expect(inputEl.value).toBe("1");

  //we fire an event and append(say/add what time of event we want to fire(use))
  // in useState we are using the change event so we specifiy change
  // so  change function we say what element to change
  //and what to change about it
  //kinda like a virual person firing the event to test if the function excpected is working out as it should be
  //so fireevent . change = onchange(just like removing the on)  in inputel we use e.traget.value  but the event here not shown
  fireEvent.change(inputEl, {
    target: {
      value: "5",
    },
  });
  expect(inputEl.value).toBe("5");
});

//note  string = textContent /  input/numbers =  value
