import MessageBox from "./components/MessageBox";
import AccountContext from "./context/AccountContext";
import Theme from "./ThemeProvider/Theme";

function App() {
  return (
    <Theme>
          <AccountContext>
  <MessageBox/>
    </AccountContext>



    </Theme>


  );
}

export default App;
