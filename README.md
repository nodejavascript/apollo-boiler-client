# apollo-boiler-client

The client half of the Apollo boilerplate: a React application that subscribes to a GraphQL API and updates
itself as the data changes, with no polling and no refresh button.

It is designed to sit in front of [`apollo-boiler-api`](https://github.com/nodejavascript/apollo-boiler-api) —
run that first, then this.

## What it does

- Holds a single Apollo client for both HTTP and web socket traffic (`@apollo/client`, `graphql-ws`).
- Keeps URL state in the address bar with `@scaleway/use-query-params`, so a view can be linked to.
- Renders with `antd` and `@ant-design/colors`.
- Signs users in with Google when `REACT_APP_GOOGLE_CLIENTID` is set (`gapi-script`).

## Run it

```bash
npm install
cp .env.example .env
npm start        # react-scripts, http://localhost:3000
```

`.env`:

| Variable | What it is |
|---|---|
| `REACT_APP_ENV` | the environment label |
| `REACT_APP_GOOGLE_CLIENTID` | the Google client ID, and it must match the API's own setting |
| `REACT_APP_API_URL` | the GraphQL endpoint, e.g. `http://localhost:4015/graphql` |
| `REACT_APP_WSS_URL` | the GraphQL web socket endpoint |

```bash
npm run build    # production bundle
npm test         # standard --verbose
```

## Layout

```
src/
  App.js               app shell
  components/          the panels
  layout/              page chrome
  lib/                 Apollo client and helpers
  models/              client-side models
  routes/              routes
```

## Licence

MIT — see [LICENSE](./LICENSE).
