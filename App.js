import React from 'react';
import { View, ListView, StyleSheet, Text } from 'react-native';
import List from './pages/List.js'

const App = () => {
  return (
     <List />
  )
}
export default App

// export default class App extends React.Component {
//   constructor(props) {
//     super(props);

//     const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
//     this.state = {
//       dataSource: ds.cloneWithRows(['row 1', 'row 2']),
//     };
//   }
//   render() {
//     return (
//       <ListView
//         style={styles.container}
//         dataSource={this.state.dataSource}
//         renderRow={(data) => <View><Text>{data}</Text></View>}
//       />
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
