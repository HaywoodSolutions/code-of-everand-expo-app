import * as React from 'react';
import { Image, View } from 'react-native';
import {db, storage } from '../../firebase';

import { Room, RoomSprite } from '@code-of-everand/types-map';
import { scaleH, scaleW } from './Scales';

var Diamond = (props: {spriteId: string, cord: [number, number], uri?: string, color?: string, depth: [number, number], height: number}) => {
  let height = scaleH * 565 / 15 * props.height;
  let width = scaleW * 980 / 14 * ((props.depth[0] + props.depth[1] - 1) / 2);

  return (
    <View style={{
      position: 'absolute',
      left: scaleW * 980 / 14 * (props.cord[0] + (props.cord[1] % 2 != 0 ? 0.5 : 0)),
      top: scaleH * 565 / 15 * props.cord[1] / 2 - height,
    }}>
      <View style={{
        position: 'absolute',
        width: width,
        height,
        // backgroundColor: props.color || 'black',
      }}>
        <Image source={{uri: props.uri || ""}} style={{flex: 1}} resizeMode="cover"></Image>
      </View>
    </View>
  );
};

type State = {
  roomData: Room,
  roomSprites: Record<string, RoomSprite>,
  roomSpritesURLs: Record<string, string>
}

class RoomScreen extends React.Component<any, State> {
  private roomNumber = "0,1";

  constructor(props: any) {
    super(props);

    this.handleRoomSprites = this.handleRoomSprites.bind(this);
  }

  componentDidMount() {
    db.collection('rooms').doc(this.roomNumber).get().then(snap => {
      this.setState({
        roomData: snap.data() as Room
      }, () => {
        this.handleRoomSprites()
      });
    })
  }

  async handleRoomSprites() {
    const roomSpriteIds: string[] = this.state.roomData.roomSprites.map(v => v.sprite).filter((v, i, l) => l.indexOf(v) === i);

    await Promise.all(roomSpriteIds.map(roomSpriteId => {
      return db.collection('roomSprites').doc(roomSpriteId).get().then(snap => {
        return {
          roomSpriteId,
          data: snap.data() as RoomSprite
        }
      })
    })).then((roomSprites: {roomSpriteId: string, data: RoomSprite}[]) => {
      return this.setState({
        roomSprites: roomSprites.reduce((obj: Record<string, RoomSprite>, {roomSpriteId, data}) => {
          obj[roomSpriteId] = data;
          return obj;
        }, {})
      })
    }).then(() => {
      return Promise.all(Object.entries(this.state.roomSprites).map(([id, sprite]): Promise<[string, string]> => {
        const pathReference = storage.ref(`images/roomSprites/${id}/100.png`);
        return pathReference.getDownloadURL().then(url => [id, url]);
      }, {})).then((roomSpriteUrls: [string, string][]) => {
        return roomSpriteUrls.reduce((obj: Record<string, string>, [key, val]) => {
          obj[key] = val;
          return obj;
        }, {});
      }).then((roomSpritesURLs: Record<string, string>) => {
        this.setState({
          roomSpritesURLs
        })
      });
    });
  }
  


  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'red'}}>
        <View style={{flex: 1}}>
          <Image source={require('../../../assets/ExamplarScreen.png')} style={{width: '100%', height: '100%', position: 'absolute'}} resizeMode='stretch' />
          <View style={{
            position: 'absolute',
            flex: 1
          }}>
            {
              this.state && this.state.roomData && this.state.roomData.roomSprites.map(roomSprite => {
                if (this.state.roomSprites && this.state.roomSprites[roomSprite.sprite])
                return (
                  <Diamond
                    spriteId={roomSprite.sprite}
                    height={this.state.roomSprites[roomSprite.sprite].height}
                    depth={this.state.roomSprites[roomSprite.sprite].depth}
                    uri={this.state.roomSpritesURLs && this.state.roomSpritesURLs[roomSprite.sprite]}
                    cord={roomSprite.cord}
                    color='red'
                  />
                )
                return null;
              })
            }
          </View>
        </View>
      </View>
    );
  }
}

export default RoomScreen;