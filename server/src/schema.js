const { gql } = require("apollo-server");

const typeDefs = gql`
type Query {
    tracksforHome:[Track!]!

}

" A Track is a group of Modules that teaches abput a specific topic"
type Track {
   id: ID!
   title: String!
   author: Author!
   thumbnail: String!
   length: Int
   modulesCount: Int
},

"Author of a complete track"
type Author {
    id: ID!
    name: String!
    photo: String!
}
`;

module.exports = typeDefs;
