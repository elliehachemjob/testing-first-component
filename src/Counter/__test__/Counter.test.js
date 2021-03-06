import React from "react"; //need react to test a react component
import Counter from "../Counter"; //component we want to test
import { render, fireEvent, cleanup } from "@testing-library/react"; //render component in a virtual dom
import "@testing-library/jest-dom/extend-expect"; // to use the excpect keyword

//to run before each test and does not need imponrt and to save a lot of writing code
//in it we write the logic that is gonna be excuted before each test

//this code save us from retyping same code
//helpful to reduce some code espically if it s a lot
// let getByTestId;

// beforeEach(() => {
//   const component = render(<Counter />);
//   getByTestId = component.getByTestId;
// });

// same but after each
// afterEach(() => {
//  cleanup()  //cleans from doms though that is already specfied
// });

// before all test have run
// beforeAll(() => {
//  cleanup()  //cleans from doms though that is already specfied
// });

// after all test have run
// afterAll(() => {
//  cleanup()  //cleans from doms though that is already specfied
// });

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

test("clicking on plus button add one to counter", () => {
  const { getByTestId } = render(<Counter />);
  const addBtnEL = getByTestId("add-btn");

  const counterEl = getByTestId("counter");
  expect(counterEl.textContent).toBe("0");

  fireEvent.click(addBtnEL);

  expect(counterEl.textContent).toBe("1");
});

test("clicking on subtract button subtracts one to counter", () => {
  const { getByTestId } = render(<Counter />);
  const subtractBtnEL = getByTestId("subtract-btn");

  const counterEl = getByTestId("counter");
  expect(counterEl.textContent).toBe("0");

  fireEvent.click(subtractBtnEL);

  expect(counterEl.textContent).toBe("-1");
});

test("changing input value then clicking on add btn works correctly ", () => {
  const { getByTestId } = render(<Counter />);
  const addBtnEL = getByTestId("add-btn");
  const counterEl = getByTestId("counter");
  const inputEl = getByTestId("input");
  fireEvent.change(inputEl, {
    target: {
      value: "5",
    },
  });
  fireEvent.click(addBtnEL);

  expect(counterEl.textContent).toBe("5");
});

test("changing input value then clicking on subtract  works correctly ", () => {
  const { getByTestId } = render(<Counter />);
  const subtractBtnEL = getByTestId("subtract-btn");
  const counterEl = getByTestId("counter");
  const inputEl = getByTestId("input");
  fireEvent.change(inputEl, {
    target: {
      value: "5",
    },
  });
  fireEvent.click(subtractBtnEL);

  expect(counterEl.textContent).toBe("-5");
});

// test("adding and subtracting leads to the correct counter number  ", () => {
//   const { getByTestId } = render(<Counter />);
//   const addBtnEL = getByTestId("add-btn");
//   const subtractBtnEL = getByTestId("subtract-btn");
//   const counterEl = getByTestId("counter");
//   const inputEl = getByTestId("input");

//   fireEvent.change(inputEl, {
//     target: {
//       value: "10",
//     },
//   });
//   fireEvent.click(addBtnEL);
//   fireEvent.click(addBtnEL);
//   fireEvent.click(addBtnEL);
//   fireEvent.click(addBtnEL);
//   fireEvent.click(subtractBtnEL);
//   fireEvent.click(subtractBtnEL);

//   expect(counterEl.textContent).toBe("20");

//   fireEvent.change(inputEl, {
//     target: {
//       value: "5 ",
//     },
//   });

//   fireEvent.click(addBtnEL);
//   fireEvent.click(subtractBtnEL);
//   fireEvent.click(subtractBtnEL);

//   expect(counterEl.textContent).toBe("15");
// });

// test("counter contains correct className  ", () => {
//   const { getByTestId } = render(<Counter />);
//   const addBtnEL = getByTestId("add-btn");
//   const counterEl = getByTestId("counter");
//   const inputEl = getByTestId("input");
//   const subtractBtnEL = getByTestId("subtract-btn");

//   expect(counterEl.className).toBe(" ");

//   fireEvent.change(inputEl, {
//     target: {
//       value: "50 ",
//     },
//   });

//   fireEvent.click(addBtnEL);

//   expect(counterEl.className).toBe(" ");

//   fireEvent.click(addBtnEL);

//   expect(counterEl.className).toBe("green");

//   fireEvent.click(addBtnEL);

//   expect(counterEl.className).toBe("green");

//   fireEvent.click(subtractBtnEL);
//   fireEvent.click(subtractBtnEL);

//   expect(counterEl.className).toBe(" ");

//   fireEvent.click(subtractBtnEL);
//   fireEvent.click(subtractBtnEL);
//   fireEvent.click(subtractBtnEL);
//   fireEvent.click(subtractBtnEL);

//   expect(counterEl.className).toBe("red");
// });

//note  string = textContent /  input/numbers =  value
