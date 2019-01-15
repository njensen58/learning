import React from "react";
import ClockDisplay from "./ClockDisplay";
import TopOverlay from "./TopOverlay";
import SlideToUnlock from "./SlideToUnlock";
import PropTypes from 'prop-types'

export default class LockScreen extends React.Component {
  static propTypes = {
    wallpaperPath: PropTypes.string,
    userInfoMessage: PropTypes.string,
    onUnlocked: PropTypes.func,
  };

  render() {
    const {
      wallpaperPath,
      userInfoMessage,
      onUnlocked,
    } = this.props;

    return (
      <div
        style={{
          height: "100%",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          // If a wallpaperPath prop was passed, then this div's CSS background-image
          // should be a url to that wallpaperPath. Otherwise, it should be an empty
          // string (which means the style should not be set).
          backgroundImage: wallpaperPath ? `url(${wallpaperPath})` : "",
          backgroundColor: "black",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <ClockDisplay />
        {/* 
            If a userInfoMessage prop was passed, render that
            userInfoMessage within a TopOverlay. Otherwise,
            don't render anything here (null). 
        */}
        {userInfoMessage ? (
          <TopOverlay
            style={{
              padding: "2em",
              marginBottom: "auto",
            }}
          >
            {userInfoMessage}
          </TopOverlay>
        ) : null}
        <SlideToUnlock onSlide={onUnlocked} />
      </div>
    );
  }
}