import {render, screen} from "@testing-library/react";

import Sign from "../../src/Pages/Sign/Sign";

test("로그인 라는 글자가 포함되는가?", () => {
  render(<Sign />);
  const helloEl = screen.getByText(/로그인/i);
  expect(helloEl).toBeInTheDocument();
});
