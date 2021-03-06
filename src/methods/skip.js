import request from 'request-promise';

const skip = res => async token => {
  try {
    await request.post({
      headers: { Authorization: `Bearer ${token}` },
      url: 'https://api.spotify.com/v1/me/player/next'
    });
    return res.send({
      response_type: "in_channel",
      attachments: [
        {
          text: 'Good shout DJ! Fuck this shit!',
          image_url: 'http://now-here-this.timeout.com/wp-content/uploads/2014/09/DJ-Trick-The-Helicopter.gif'
        }
      ]
    });
  } catch (e) {
    res.end(e.message);
  }
};

export default skip;
