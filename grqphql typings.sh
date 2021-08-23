# https://www.apollographql.com/blog/tooling/apollo-codegen/typescript-graphql-code-generator-generate-graphql-types/
NODE_TLS_REJECT_UNAUTHORIZED=0 yarn apollo service:download --endpoint=https://192.168.0.158/graphql graphql-schema.json
yarn apollo codegen:generate --localSchemaFile=graphql-schema.json --target=typescript --tagName=gql