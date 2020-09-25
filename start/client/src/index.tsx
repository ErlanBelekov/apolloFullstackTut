import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";
import React from "react";
import ReactDOM from "react-dom";
import Pages from "./pages";
import injectStyles from "./styles";

// import { cache } from "./cache";
import { cache } from "./cache";

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient<
  NormalizedCacheObject
>({
  uri: "http://localhost:4000",
  cache,
  link: new HttpLink({
    uri: "http://localhost:4000/graphql",
    headers: {
      authorization: localStorage.getItem("token"),
    },
  }),
});

// Apollo docs suck!
// this was removed
// cache.writeData({
//   data: { isLoggedIn: !!localStorage.getItem("token"), cartItems: [] },
// });

injectStyles();
ReactDOM.render(
  <ApolloProvider client={client}>
    <Pages />
  </ApolloProvider>,
  document.getElementById("root")
);
