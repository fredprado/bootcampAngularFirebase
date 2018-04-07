// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase:{
    apiKey: "AIzaSyCzV2ijIIH4Bt-GV4os79qPToIqYv818-E",
    authDomain: "vntfrpr-shopping-list.firebaseapp.com",
    databaseURL: "https://vntfrpr-shopping-list.firebaseio.com",
    projectId: "vntfrpr-shopping-list",
    storageBucket: "vntfrpr-shopping-list.appspot.com",
    messagingSenderId: "219913387236"
  }
};
