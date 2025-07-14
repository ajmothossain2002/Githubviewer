import Rout from "./router/rout"
import { Toaster } from 'react-hot-toast';

function App() {


  return (
    <>
     <Rout/>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  )
}

export default App
