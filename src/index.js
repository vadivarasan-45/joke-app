import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"
import { Provider } from "react-redux"
import Store from "./store"
const root=ReactDOM.createRoot(document.getElementById("root"))
function Add()
{
  return(
    <Provider store={Store}>
    <App/>
    </Provider>
  )
}
root.render(<Add/>)