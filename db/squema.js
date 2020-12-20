const {gql} = require('apollo-server');
//Schema
const typeDefs = gql`

    type Curso {
        titulo: String
        teconologia: String
    }

    type Tecnologia {
        tecnologia: String
    }

    type Query {
        obtenerCursos : [Curso]
        obtenerTecnologias: [Tecnologia]
    }
`

module.exports = typeDefs;