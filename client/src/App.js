import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import Home from "./pages/Home";
import NotFoundContent from "./pages/NotFoundContent";
import Project from "./pages/Project";

/*
This is done to get rid of the warning: Cache Data may be lost when 
replacing the clients field of a Query object. So we defined an InMemoryCache
to merge the existing and incoming data.
*/
const cache = new InMemoryCache({
  typePolicies: {
    Query: {
    fields: {
      clients: {
        merge(existing, incoming) {
          return incoming;
        },
      },
      projects: {
        merge(existing, incoming) {
          return incoming;
        },
      },
    },
  },
  },
});


const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache,
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/projects/:id"
              element={<Project />}
            />
            <Route path="*" element={<NotFoundContent />} />
          </Routes>
        </div>
        </Router>
       
      </ApolloProvider>
    </>
  );
}

export default App;
