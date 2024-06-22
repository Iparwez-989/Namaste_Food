import Body from "../Body"
import { render } from "@testing-library/react"
import mockData from "../../utils/mockData"
import { act } from "react-dom/test-utils"

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(mockData)
        }
    })
})

test('should render search button in body', async () => {
   await act(async ()=>render(<Body />))
    


  
})
