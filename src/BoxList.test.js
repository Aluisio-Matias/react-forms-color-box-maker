import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BoxList from "./BoxList";

function addBox(boxList, height = "200", width = "200", color = "blue") {
    const widthInput = boxList.getByLabelText("width");
    const heightInput = boxList.getByLabelText("height");
    const backgroundInput = boxList.getByLabelText("Background Color");
    fireEvent.change(backgroundInput, { target: { value: color } });
    fireEvent.change(widthInput, { target: { value: width } });
    fireEvent.change(heightInput, { target: { value: height } });
    const button = boxList.getByText("Create new box");
    fireEvent.click(button);
}

it("renders without crashing", () => {
    render(<BoxList />);
});

it("matches snapshot", () => {
    const { asFragment } = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot();
});

it("can add a new box", () => {
    const boxList = render(<BoxList />);

    // no boxes yet
    expect(boxList.queryByText("Remove The Box")).not.toBeInTheDocument();

    addBox(boxList);

    // expect to see a box
    const removeButton = boxList.getByTestId("removeButton");
    expect(removeButton).toBeInTheDocument();
    expect(removeButton.previousSibling).toHaveStyle(`
    width: 200px;
    height: 200px;
    background-color: blue;
  `);
    // expect form to be empty / except the color input (black color by default)
    expect(boxList.getAllByDisplayValue("")).toHaveLength(2);
});

it("can remove a box", function () {
    const boxList = render(<BoxList />);
    addBox(boxList);

    const removeButton = boxList.getByTestId("removeButton");

    // click the remove button and the box should be gone
    fireEvent.click(removeButton);
    expect(removeButton).not.toBeInTheDocument();
});
