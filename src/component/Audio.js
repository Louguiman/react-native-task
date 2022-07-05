import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { Audio as AudioPlayer } from "expo-av";
import { Ionicons } from "@expo/vector-icons";

const Audio = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackObject, setPlaybackObject] = useState(new AudioPlayer.Sound());
  const [playbackStatus, setPlaybackStatus] = useState(null);

  useEffect(() => {
    const loadAudio = async () => {
      try {
        const status = await playbackObject.loadAsync(
          {
            uri: "https://btay-videos.s3.ap-southeast-1.amazonaws.com/Videos/Over+the+Horizon.mp3",
          },
          { shouldPlay: false }
        );
        playbackObject.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);
        console.log(status);
        setIsLoaded(status.isLoaded);
        return setPlaybackStatus(status);
      } catch (error) {
        console.log(error);
      }
    };
    if (playbackStatus === null) {
      loadAudio();
    }
    return () => {
      setPlaybackObject(null);
    };
  }, []);
  const onPlaybackStatusUpdate = (status) => {
    if (status.didJustFinish === false) setIsPlaying(false);
    setPlaybackStatus(status);
  };

  const handleAudioPlayPause = async () => {
    // It will pause our audio
    if (playbackStatus?.isPlaying) {
      try {
        const status = await playbackObject.pauseAsync();
        console.log(status);

        setIsPlaying(false);
        return setPlaybackStatus(status);
      } catch (error) {
        console.log(error);
      }
    }

    // It will resume our audio
    if (!playbackStatus?.isPlaying) {
      try {
        const status = await playbackObject.playAsync();
        setIsPlaying(true);

        return setPlaybackStatus(status);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <View style={styles.controls}>
      <TouchableOpacity style={styles.control} onPress={() => {}}>
        <Ionicons
          name="play-skip-back-circle-outline"
          size={48}
          color="black"
        />
      </TouchableOpacity>
      <TouchableOpacity
        disabled={!isLoaded}
        style={styles.control}
        onPress={handleAudioPlayPause}
      >
        {!isLoaded ? (
          <ActivityIndicator size="large" />
        ) : isPlaying ? (
          <Ionicons name="md-pause-circle-outline" size={48} color="black" />
        ) : (
          <Ionicons name="play-circle-outline" size={48} color="black" />
        )}
      </TouchableOpacity>
      <TouchableOpacity style={styles.control} onPress={() => {}}>
        <Ionicons
          name="play-skip-forward-circle-outline"
          size={48}
          color="black"
        />
      </TouchableOpacity>
    </View>
  );
};

export default Audio;

const styles = StyleSheet.create({
  controls: {
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  control: {
    margin: 20,
  },
});
