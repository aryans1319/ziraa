import Header from "./components/Header";
import Clients from "./components/Clients";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import ClientModal from "./components/modals/ClientModal";

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
        <Header />
        <div className="container">
          <ClientModal />
          <Clients />
        </div>
      </ApolloProvider>
    </>
  );
}

export default App;
