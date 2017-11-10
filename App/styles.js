import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  appBackground:{
    backgroundColor: '#ffffff',
  },
  center:{
    marginTop:15,
    alignSelf:'center',
  },
  profileText:{
    alignSelf:'center',
    color:'white',
    fontSize:20,
    fontWeight: 'bold',
    marginTop:10,
  },
  profilePhone:{
    alignSelf:'center',
    fontSize:15,
    marginTop:10,
    marginBottom: 20,
  },
  item: {
    backgroundColor: 'white',
    flex: 1,
    padding: 10,
    marginRight: 10,
    marginTop: 20,
    borderRadius: 2
  },
  emptyDate: {
    height: 15,
    flex:1,
    paddingTop: 40
  }
});
