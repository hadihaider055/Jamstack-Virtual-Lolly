const { ApolloServer, gql } = require("apollo-server-lambda");
const shortid = require('shortid');
const faunadb = require("faunadb");
const q = faunadb.query;

const typeDefs = gql`
  type Query {
    lollies: [Lolly!]
    lollyByPath(lollyPath: String!): Lolly
  }
  type Lolly {
    recipientName: String!
    message: String!
    sender: String!
    lollyPath: String!
    colorTop: String!
    colorMiddle: String!
    colorBottom: String!
  }
  type Mutation {
    createLolly(recipientName: String!, message: String!, sender: String!, colorTop: String!, colorMiddle: String!, colorBottom: String!): Lolly
  }
`;

const resolvers = {
  Query: {
    lollies: async (root, args, context) => {
      try {
        const client = new faunadb.Client({
          secret: process.env.FAUNADB_SERVER_SECRET,
        });

        const response = await client.query(
          q.Map(
            q.Paginate(q.Documents(q.Collection("lollies_data"))),
            q.Lambda((x) => q.Get(x))
          )
        );
        return response.data.map((lolly) => {
          return lolly.data;
        });
      } catch (error) {
        console.log(error);
      }
    },
    lollyByPath: async (_, { lollyPath }) => {
      try {
        const client = new faunadb.Client({
          secret: process.env.FAUNADB_SERVER_SECRET,
        });
        const result = await client.query(
          q.Get(q.Match(q.Index("lolly_by_link"), lollyPath))
        );
        console.log(result);
        return result.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
  Mutation: {
    createLolly: async (_, args) => {
      try {
        const client = new faunadb.Client({
          secret: process.env.FAUNADB_SERVER_SECRET,
        });
        const link = shortid.generate();
        const response = await client.query(
          q.Create(q.Collection("lollies_data"), {
            data: {
              recipientName: args.recipientName,
              message: args.message,
              sender: args.sender,
              lollyPath: link,
              colorTop: args.colorTop,
              colorMiddle: args.colorMiddle,
              colorBottom: args.colorBottom,
            },
          })
        );
        return response.data;
      } catch (error) {
        console.log(error);
      }
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const apolloHandler = server.createHandler();
exports.handler = (event, context, ...args) => {
  return apolloHandler(
    {
      ...event,
      requestContext: context,
    },
    context,
    ...args
  );
};
