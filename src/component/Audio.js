import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Audio as AudioPlayer } from "expo-av";
import { Ionicons } from "@expo/vector-icons";

const Audio = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackObject, setPlaybackObject] = useState(null);
  const [playbackStatus, setPlaybackStatus] = useState(null);

  useEffect(() => {
    if (playbackObject === null) {
      setPlaybackObject(new AudioPlayer.Sound());
    }

    return () => {
      setPlaybackObject(null)
    };
  }, []);

  const handleAudioPlayPause = async () => {
    if (playbackObject !== null && playbackStatus === null) {
      try {
        
        const status = await playbackObject.loadAsync(
          {
            uri: "https://btay-videos.s3.ap-southeast-1.amazonaws.com/Videos/Over+the+Horizon.mp3",
          },
          { shouldPlay: true }
        );
        console.log(status);
        setIsPlaying(true);
        return setPlaybackStatus(status);
      } catch (error) {
        console.log(error)
      }
    }
    // It will pause our audio
    if (playbackStatus.isPlaying) {
      try {
        
        const status = await playbackObject.pauseAsync();
        setIsPlaying(false);
        return setPlaybackStatus(status);
      } catch (error) {
        console.log(error)
        
      }
    }

    // It will resume our audio
    if (!playbackStatus.isPlaying) {
      try {
        
        const status = await playbackObject.playAsync();
        setIsPlaying(true);
        return setPlaybackStatus(status);
      } catch (error) {
        console.log(error)
      }
    }
  };

  return (
    <View style={styles.controls}>
      <TouchableOpacity style={styles.control} onPress={() => alert("")}>
        <Ionicons
          name="play-skip-back-circle-outline"
          size={48}
          color="black"
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.control} onPress={handleAudioPlayPause}>
        {isPlaying ? (
          <Ionicons name="md-pause-circle-outline" size={48} color="black" />
        ) : (
          <Ionicons name="play-circle-outline" size={48} color="black" />
        )}
      </TouchableOpacity>
      <TouchableOpacity style={styles.control} onPress={() => alert("")}>
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
