// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false
};

export const settings = {
  // apiBaseUrl: 'http://idsmed-sales-funnel-api.test/api'
  // apiBaseUrl: 'https://api.idsmed.websight-app.com/api'
  apiBaseUrl: 'http://127.0.0.1:8000/api'
}
