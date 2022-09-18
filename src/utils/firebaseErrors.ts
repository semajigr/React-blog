export type FirebaseErrorCode =
  | "auth/email-already-in-use"
  | "auth/wrong-password"
  | "auth/user-not-found";

export enum FirebaseError {
  EMAIL_ALREADY_IN_USE = "Hi! Its email used",
  WRONG_PASSWORD = "Invalid password",
  NOT_FOUND = "User not found, please enter correct email",
  UNKNOWN_ERROR = "unknow error, please reload page",
}

const getFirebaseMessage = (code: FirebaseErrorCode): FirebaseError => {
  switch (code) {
    case "auth/email-already-in-use":
      return FirebaseError.EMAIL_ALREADY_IN_USE;
    case "auth/wrong-password":
      return FirebaseError.WRONG_PASSWORD;
    case "auth/user-not-found":
      return FirebaseError.NOT_FOUND;
    default:
      return FirebaseError.UNKNOWN_ERROR;
  }
};

export { getFirebaseMessage };
