import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        console.log(json, '>>>>.>  data come ')
      }).catch((error) => {
        console.log(error, "errror")
      })
  }, []) // Called API on ComponentDidUpdate (Updating)

  function Damo({ d }) {
    return (
      <View style={styles.primaryView}>

        <Text style={[styles.text, { alignSelf: 'center', padding: 10 }]}>{d.id}</Text>

        <View style={styles.secondaryView} >
          <Text>{d.albumId}</Text>
          <Text style={styles.text}>{d.title}</Text>
        </View>

        <View style={styles.tertiaryView}>
          <Text>{d.title}</Text>
        </View>

      </View>
    )
  }

  return (
    <View style={{ backgroundColor: 'linen' }}>
      <Text style={{ textAlign: 'center' }}>Hello Please wait while Data is loading</Text>

      <ScrollView>

        {data.map((e) => <Damo key={e.id} d={e} />)}
      </ScrollView>

    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  primaryView: { backgroundColor: 'powderblue', marginVertical: 10, borderRadius: 0, width: "90%", alignSelf: 'center', borderWidth: 1, borderRadius: 10 },
  secondaryView: { backgroundColor: 'linen', flexDirection: 'row', justifyContent: 'space-around', padding: 5 },
  tertiaryView: { width: "90%", backgroundColor: 'pink', alignSelf: 'center', borderWidth: 0.5, borderRadius: 10, borderColor: 'green', padding: 5 },
  text: { fontWeight: 'bold' }

})