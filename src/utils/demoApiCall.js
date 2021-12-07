import { Auth } from "aws-amplify";

/**
 * Singleton class to perform operations with the change request backend.
 */
class DemoApiCall {

  async submit(data) {
    try {
      const userAuth = await Auth.currentAuthenticatedUser();
      //Normalize the user data.
      data = {
        email: userAuth.email
      };
    } catch (error) {
      console.log(error)
    }

  }
}

const instance = new DemoApiCall();
Object.freeze(instance);

export default instance;
