//The NetworkManager is going to be responsible for the handling of all our requests to the server.
import axios from 'axios';

const axiosEndpointManager = axios.create (
  {
    baseURL:'https://api.instagram.com/v1/users/',
    timeout:20000
  }
);

class NetworkManager{

  constructor(accessToken){
    this.accessToken = accessToken;
  }

  getLoggedInUserInformation(completionCallBack)
  {
    axiosEndpointManager.get('self/?access_token=' + this.accessToken)
    .then(response =>
      {
        completionCallBack(response.data);
      }
    )
    .catch(response =>
      {
        console.log("oops this one is an error");
        console.log(response);
      }
    );

  }
}

export { NetworkManager };
