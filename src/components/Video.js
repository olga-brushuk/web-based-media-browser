import React, { Component } from 'react';

class Video extends Component {

  render() {
    // depending on the source platform of the track generate different track id
    const trackLinkIdentifier = this.props.trackId;
    let trackId;

    if (trackLinkIdentifier.startsWith('/yt/')) { // Youtube source platform
      trackId = trackLinkIdentifier.replace('/yt/', ''); // get the id only

      return (
        <div className="track__video">
          <iframe type="text/html" width="640" height="360" frameBorder="no" title={this.props.trackName} 
          src={`https://www.youtube.com/embed/${trackId}`} allowFullScreen></iframe>
        </div>
      );
    } 
    else if (trackLinkIdentifier.startsWith('/sc/')) { // SoundCloud source platform
      // get the id only (maybe this can be improved or implemented in a different way, doesn't seem reliable)
      trackId = trackLinkIdentifier.split('tracks/')[1].slice(0, -7);
      
      return (
        <div className="track__video">
          <iframe width="100%" height="166" scrolling="no" frameBorder="no" title={this.props.trackName}
          src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${trackId}`}></iframe>
        </div>
      );
    } else { // fallback for other providers as it was not implemented yet
      return (
        <p>The track playback is not available</p>
      );
    }
  }
}

export default Video;