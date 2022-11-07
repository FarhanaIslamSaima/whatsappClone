import MessageBox from "./components/MessageBox";
import AccountContext from "./context/AccountContext";

function App() {
  return (
    <AccountContext>
  <MessageBox/>
    </AccountContext>

  );
}

export default App;
