import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { Sidebar } from "./Sidebar";
import { mockStore } from "../../mockStore";
import { BrowserRouter } from "react-router-dom";

describe("Sidebar", () => {
  test("renders the name in the Sidebar", () => {
    const view = render(
      <BrowserRouter>
        <Provider store={mockStore}>
          <Sidebar />
        </Provider>
      </BrowserRouter>
    );
    const screen = view;

    expect(screen.getByText(/Pablo Cocciaglia/i)).toBeInTheDocument();
  });
});
