import { ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";

//lib
import { client } from "./lib/apollo";

//router
import Router from "./Router";

const App = () => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ApolloProvider>
  );
};

export default App;
