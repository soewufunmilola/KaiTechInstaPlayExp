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
        console.error("oops this one is a session user error");
        console.error(response);
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
          console.log("Succesfully retrieved data");
          console.log("URL is: https://api.instagram.com/v1/users/self/media/recent/?access_token="+this.accessToken);
          feedDataCallBack(response.data.data);
        }
      }
    )
    .catch(response =>
      {
        console.error("oops this one is a data feed error");
        console.error(response);
        throw response;
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
