const firebaseConfig = {
  // your firebase project config
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const email = "example@example.com";
const password = "password123";

auth.createUserWithEmailAndPassword(email, password)
  .then(() => {
    // user registered successfully
  })
  .catch((error) => {
    console.error(error);
});
const email = "example@example.com";
const password = "password123";

auth.signInWithEmailAndPassword(email, password)
  .then(() => {
    // user logged in successfully
  })
  .catch((error) => {
    console.error(error);
});
auth.signOut()
  .then(() => {
    // user logged out successfully
  })
  .catch((error) => {
    console.error(error);
});