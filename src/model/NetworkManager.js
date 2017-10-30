//The NetworkManager is going to be responsible for the handling of all our requests to the server.
import axios from 'axios';

const axiosEndpointManager = axios.create (
  {
    baseURL:'https://api.instagram.com/v1/users/',
    timeout:20000
  }
);

const responseState = {
    unsent: 0,
    opened: 1,
    headersRecieved: 2,
    loading: 3,
    done: 4
}

class NetworkManager{

  constructor(accessToken){
    this.accessToken = accessToken;
  }

  getLoggedInUserInformation(completionCallBack)
  {
    return axiosEndpointManager.get('self/?access_token=' + this.accessToken)
    .then(response =>
      {
        if (response.request.readyState == responseState.done)
        {
          completionCallBack(response.data);
        }
      }
    )
    .catch(response =>
      {
        console.log("oops this one is an error");
        console.log(response);
      }
    );

  }

  getFeedData(feedDataCallBack)
  {
    return axiosEndpointManager.get('self/media/recent/?access_token=' + this.accessToken)
    .then(response =>
      {
        if (response.request.readyState == responseState.done)
        {
          feedDataCallBack(response.data);
        }
      }
    )
    .catch(response =>
      {
        console.log("oops this one is an error");
        console.log(response);
      }
    );
  }

  getSessionAndFeedData(sessionDataCallBack, feedDataCallBack)
  {
      this.getLoggedInUserInformation(sessionDataCallBack)
      .then(this.getFeedData(feedDataCallBack))

  }


}

export { NetworkManager };
