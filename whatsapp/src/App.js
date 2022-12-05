import MessageBox from "./components/MessageBox";
import AccountContext from "./context/AccountContext";
import PersonContext from "./context/PersonContext";
import Theme from "./ThemeProvider/Theme";

function App() {
  return (
    <Theme>
      <PersonContext>
      <AccountContext>
  <MessageBox/>
    </AccountContext>
      </PersonContext>
  



    </Theme>


  );
}

export default App;
