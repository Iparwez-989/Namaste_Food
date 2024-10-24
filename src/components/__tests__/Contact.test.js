import { render, screen } from "@testing-library/react"
import ContactUs from "../ContactUs"
import "@testing-library/jest-dom"

test('should load contact us component', () => {
  render(<ContactUs />)

 const check =  screen.getByRole("paragraph")
    expect(check).toBeInTheDocument();
})

test('should include button', () => {
  render(<ContactUs />)
  const button = screen.getByRole('button')
  expect(button).toBeInTheDocument();
})

test('should include particular text', () => {
  render(<ContactUs />)
  const text = screen.getByText("Submit")
  expect(text).toBeInTheDocument()
})
test('should load all three input boxes ', () => {
  render(<ContactUs />)
  const inputBoxes = screen.getAllByRole('textbox')
  
  expect(inputBoxes.length).toBe(3)
  
})

// We can also group various test cases inside a describe block.
// Instead of using test function we can also use it function.
// In header testing we've used describe function as well as it function.
