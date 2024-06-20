import { fireEvent, render,screen } from "@testing-library/react"
import Header from "../Header"
import {Provider} from "react-redux"
import appStore from "../../reduxStore/appStore"
import '@testing-library/jest-dom'
import {BrowserRouter} from 'react-router-dom'
describe('Testing header Component  ',()=>{

    test('should render login button', () => {
        render(
          <BrowserRouter>
          <Provider store={appStore}>
              <Header />
          </Provider>
          </BrowserRouter>
         )
      
         const loginButton = screen.getByRole('button')
         expect(loginButton).toBeInTheDocument()
      })
      
      it('should render cart with 0 items',()=>{
          render(
              <BrowserRouter>
              <Provider store={appStore}>
                  <Header />
              </Provider>
              </BrowserRouter>
             )
          const cart = screen.getByText("Cart -(0 items)")
          expect(cart).toBeInTheDocument()
      
      })

      test('should change text logout from login on click',()=>{
        render(
            <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
            </BrowserRouter>
           )
        const login = screen.getByText('LogIn')
        fireEvent.click(login)
        const logout = screen.getByText('logOut')
        expect(logout).toBeInTheDocument()

      })
})
