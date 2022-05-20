import {gql} from 'apollo-server-express'

const typeDefs = gql`
type Usuario{
    nombre:String!
}
type Query{
    Uduarios: [Usuarios]
}
`
export {typeDefs}