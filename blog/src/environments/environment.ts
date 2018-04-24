// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyAbvS6cApIZhif2XZnvpyEPIyiWz30YwuI",
    authDomain: "ip-final-project.firebaseapp.com",
    databaseURL: "https://ip-final-project.firebaseio.com",
    projectId: "ip-final-project",
    storageBucket: "ip-final-project.appspot.com",
    messagingSenderId: "653751690659"
  }
};
