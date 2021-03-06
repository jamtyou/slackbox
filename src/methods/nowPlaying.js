import request from 'request-promise';

const nowPlaying = res => async token => {
  try {
    const playing = await request.get({
      headers: { Authorization: `Bearer ${token}` },
      url: 'https://api.spotify.com/v1/me/player/currently-playing'
    });
    const parsed = JSON.parse(playing);
    return res.send({
      response_type: "in_channel",
      attachments: [
        {
          fallback: `${parsed.item.name} by ${parsed.item.artists[0].name}`,
          title: `${parsed.item.name} by ${parsed.item.artists[0].name}`,
          title_link: `${parsed.item.external_urls.spotify}`,
        }
      ]
    });
  } catch (e) {
    res.end(e)
  }
};

export default nowPlaying;
