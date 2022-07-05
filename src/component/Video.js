import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Video as VideoPlayer } from "expo-av";
import * as VideoThumbnails from "expo-video-thumbnails";

const Video = () => {
  const video = useRef(null);
  const [status, setStatus] = useState({});
  const [thumbnail, setThumbnail] = useState(null);

  useEffect(() => {
    const generateThumbnail = async () => {
      try {
        const { uri } = await VideoThumbnails.getThumbnailAsync(
          "https://btay-videos.s3.ap-southeast-1.amazonaws.com/Videos/25+Years+of+Artistic+Yoga.mp4",
          {
            time: 15000,
          }
        );
        setThumbnail(uri);
      } catch (e) {
        console.log(e);
      }
    };
    generateThumbnail();

    return () => {
    };
  }, []);

  return (
    <VideoPlayer
      ref={video}
      usePoster={true}
      posterSource={{
        uri: thumbnail,
      }}
      style={styles.video}
      source={{
        uri: "https://btay-videos.s3.ap-southeast-1.amazonaws.com/Videos/25+Years+of+Artistic+Yoga.mp4",
      }}
      useNativeControls
      resizeMode="contain"
      onPlaybackStatusUpdate={(status) => setStatus(() => status)}
    />
  );
};

export default Video;

const styles = StyleSheet.create({
  video: {
    width: 340,
    height: 220,
    alignSelf: "center",
  },
});
