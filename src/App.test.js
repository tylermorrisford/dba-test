import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

const renderApp = () => {
  render(<Router><App /></Router>);
}

describe("The app", () => {

 test("renders welcome section", () => {
    renderApp()
    expect(screen.getByText(/welcome/i)).toBeInTheDocument();
  });

  test("renders the about section", () => {
    renderApp()
    expect(screen.getByText(/about section/i)).toBeInTheDocument();
  })

})
