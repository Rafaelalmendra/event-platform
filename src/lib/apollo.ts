import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4u7ktij0mje01uda05g3kxn/master",
  cache: new InMemoryCache(),
});
