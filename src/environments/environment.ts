// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  // Credentials of Spotify
  Client_ID: '544638e078da4878876be5258ab9db79',
  Client_Secret: 'a23f2e0e42a94e03bf309d13703a0cb0',
  Grant_Type: 'client_credentials',

  // Peticiones API
  base_url: 'https://api.spotify.com/v1',
  token_url: 'https:spotify-get-token.herokuapp.com/spotify',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
