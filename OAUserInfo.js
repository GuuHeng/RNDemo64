import React, {Component} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import {Navigation} from 'react-native-navigation';

class OAUserInfo extends Component {
  render() {
    return (
      <View style={styles.base}>
        <HeaderView />
        <Text>sldfjlsdjf</Text>
      </View>
    );
  }
}

export default OAUserInfo;

const styles = StyleSheet.create({
  base: {
    backgroundColor: 'yellow',
    flex: 1,
  },
  header: {
    height: 200,
    backgroundColor: 'orange',
  },
  avatarName: {
    height: 50,
    flexDirection: 'row',
    marginTop: 20,
  },
  avatar: {
    width: 50,
    height: 50,
    backgroundColor: 'blue',
    marginLeft: 20,
    borderRadius: 25,
  },
  name: {
    marginLeft: 10,
    padding: 15,
    backgroundColor: 'red',
    fontSize: 20,
  },
  channel: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-around',
  },
  channelBox: {
    width: 60,
    height: 60,
  },
});

const ChannelButton = props => {
  return (
    <View style={{backgroundColor: 'white'}}>
      <Image
        source={props.icon}
        style={{width: 60, height: 50, resizeMode: 'center'}}></Image>
      <Text style={{color: 'red', fontSize: 12}}>{props.name}</Text>
    </View>
  );
};

const HeaderView = () => {
  return (
    <View style={styles.header}>
      <View style={styles.avatarName}>
        <View style={styles.avatar} />
        <Text style={styles.name}>aaaaaaaaaaa</Text>
      </View>
      <View style={styles.channel}>
        <ChannelButton
          style={styles.channelBox}
          name="语音电话"
          icon={require('./resource/userInfo_phone.png')}
        />
        <ChannelButton
          style={styles.channelBox}
          name="发起聊天"
          icon={require('./resource/userInfo_im.png')}
        />
        <ChannelButton
          style={styles.channelBox}
          name="添至通讯录"
          icon={require('./resource/userInfo_contact.png')}
        />
        <View />
      </View>
    </View>
  );
};
