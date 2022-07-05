import { StyleSheet, Text, View } from 'react-native'
import {  Video as VideoPlayer } from 'expo-av';
import React, { useRef, useState } from 'react'

const Video = () => {
  const video = useRef(null);
  const [status, setStatus] = useState({});
  return (
    <View style={{width:"100%",height:"100%",}}>
      <VideoPlayer
        ref={video}
        style={styles.video}
        source={{
          uri: 'https://btay-videos.s3.ap-southeast-1.amazonaws.com/Videos/25+Years+of+Artistic+Yoga.mp4',
        }}
        useNativeControls
        resizeMode="contain"
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
    </View>
  )
}

export default Video

const styles = StyleSheet.create({})