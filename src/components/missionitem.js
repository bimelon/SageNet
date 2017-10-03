import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';


export default class Missionitem extends Component {
  render() {
    console.log(this.props.data);
    var clearSorce="×";
    if(this.props.data.clearflag){
      clearSorce="○";
    }
    return (
      <View>
        <View style={styles.body}>
          <View style={styles.textarea}>
            <Text style={styles.title}>{this.props.data.title}</Text>
            <Text style={styles.subtext}>{this.props.data.subtext}</Text>
          </View>
          <TouchableHighlight style={styles.checkbox} onPress={()=>{}}>
            <Text style={styles.title}>{clearSorce}</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    marginBottom:3,
    marginHorizontal:3,
    backgroundColor: '#F5FCFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textarea: {
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  title: {
    fontSize:30,
    fontWeight:'bold'
  },
  subtext: {
    fontSize:10,
  },
  checkbox:{
  justifyContent: 'center',
  alignItems: 'center',
    backgroundColor: '#8080FF',
    height: 50,
    width: 50,
  }
});
