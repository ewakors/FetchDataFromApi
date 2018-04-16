import React, { Component } from 'react'
import { Text, View, StyleSheet, ListView, ActivityIndicator, Alert, Image } from 'react-native'

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: ''
    }
  }
  GetItem(name, company, website, phone, email) {
    Alert.alert(
      name,
      "Company: " + company + " \nWebsite: " + website + "\nPhone: " + phone + "\nEmail: " + email,
      [
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ]
    )
  }

  componentDidMount() {

    return fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((responseJson) => {
        let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.setState({
          isLoading: false,
          dataSource: ds.cloneWithRows(responseJson),
        }, function () {
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  ListViewItemSeparator = () => {
    return (
      <View
        style={{
          height: .5,
          width: "100%",
          backgroundColor: "#03204c",
        }}
      />
    );
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, paddingTop: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View style={styles.MainContainer}>
        <View style={styles.logoContainer}>
          <Text style={styles.title}> Users </Text>
          <Image style={styles.logo} source={require('./users.png')} />
        </View>
        <View
          style={{
            height: .5,
            width: "100%",
            backgroundColor: "#03204c",
          }}
        />
        <ListView
          style={styles.listView}
          dataSource={this.state.dataSource}
          renderSeparator={this.ListViewItemSeparator}
          renderRow={(rowData) => <Text style={styles.rowViewContainer}
            onPress={this.GetItem.bind(this, rowData.name, rowData.company.name, rowData.website, rowData.phone, rowData.email)} >{rowData.name}</Text>}
        />
      </View>
    );
  }
}
export default List

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 3,
    backgroundColor: '#d9f9b1',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: 'blue',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 20,
    fontSize: 20
  },
  MainContainer: {
    backgroundColor: '#d6e5fc',
    justifyContent: 'center',
    flex: 1,
    margin: 10,
  },
  rowViewContainer: {
    fontSize: 20,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    color: '#2172ed',
    margin: 10
  },
  listView: {
    backgroundColor: '#d6e5fc'
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 30
  },
  title: {
    color: '#1077dd',
    fontSize: 35,
    fontWeight: 'bold',
    marginTop: 30
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  }
})