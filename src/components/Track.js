import React, { Component } from 'react';
import Video from './Video';

class Track extends Component {
  render() {
    return (
      <div className="track">
        <div className="track__thumb">
          {/* Use image thumbnail and play video via API for each of the source platforms
          <img src={this.props.trackThumb} alt={this.props.trackName} />
          <div className="track__play"></div> */}
          <Video trackId={this.props.trackEId} trackName={this.props.trackName} />
        </div>
        <div className="track__info">
          <h2>{this.props.trackName}</h2>
          <a href={`https://openwhyd.org/u/${this.props.userId}`} className="track__user-info">
            <div className="track__user-avatar" 
            style={{backgroundImage:`url(https://openwhyd.org/img/user/${this.props.userId})`}}></div>
            <div className="track__username">{this.props.userName}</div>
          </a>
        </div>
      </div>
    );
  }
}

export default Track;