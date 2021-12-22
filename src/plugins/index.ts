import { ApolloServerPluginInlineTrace, PluginDefinition } from "apollo-server-core";

export const plugins: PluginDefinition[] = [{
  requestDidStart: async () => {
    return {
      async didEncounterErrors(ctx) {
        ctx.logger.error(ctx.errors);
      }
    }
  }
}];

if (process.env.NODE_ENV !== 'production') {
  plugins.push(ApolloServerPluginInlineTrace());
}