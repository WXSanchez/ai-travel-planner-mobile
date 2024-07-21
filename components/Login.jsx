import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

export default function Login() {

  const router = useRouter(); 
  
  return (
    <View>
      <Image source={require('./../assets/images/mainBackground.jpg')}
      style={{width:'100%',
        height:540,
        
      }}/>
      <View style={styles.container}>
        <Text style={{fontSize:32,
          fontFamily:'mBold',
          textAlign:'center'
        }}>AI Travel Planner</Text>

        <Text style={{
          textAlign:'center', 
          fontFamily:'mRegular', 
          marginTop:20,
          width:'80%',
          color:'gray',
          fontSize:15}}>Discover your next adventure effortlessly. Personalized itineraries at your fingertips. Travek smarter with AI-driven insights.</Text>


          <View style={styles.button}>
            <Text style={{color:'white', 
              textAlign:'center',
              fontFamily:'mMain',
              fontSize:17
            }}>Get Started</Text>
          </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#fff',
    marginTop:-20, 
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    height:'100%',
    padding:25,
    alignItems:'center'
  },

  button:{
    padding:15,
    backgroundColor:"black",
    borderRadius:99,
    marginTop:'25%',
    width:'80%'
  }
})

