import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, ScrollView, Modal, Button } from 'react-native';
import Mail from '../../Assets/verification/mail.png'
import SuccussMark from '../../Assets/verification/check.png'
import { useNavigation } from '@react-navigation/native';

const Verification = () => {
  const navigation = useNavigation()

  const [isModalVisible, setIsModalVisible] = useState(false)

  return (

    <ScrollView style={{ height: "100%", width:"100%",backgroundColor: "white"}}>

      <View style={{ alignItems: 'center', justifyContent: 'center', rowGap: 15,marginTop:"20%",height: "100%", width:"100%",marginBottom:"50%"}}>

        {/* ......LOCK IMAGE MAIN VIEW */}

        <View style={{ width: 150, height: 150, backgroundColor: "#F0F8FF", borderRadius: 100, alignItems: 'center', justifyContent: 'center' }}>
          <View style={{ width: 100, height: 100, backgroundColor: "#318ce7", borderRadius: 100, alignItems: 'center', justifyContent: 'center' }}>
            <Image source={Mail} style={{ width: 30, height: 30 }} />
          </View>
        </View>



        {/* ......VERFICATION...... */}
        <View style={{width:"90%"}}>
          <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 18,textAlign:'center' }}>
            Register Success
          </Text>
        </View>

        {/* ......sent code message...... */}
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ color: '#C0C0C0', fontWeight: 'bold', fontSize: 14 }}>
            We have to sent the code verification to
          </Text>
          <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 14 }}>
            Abc@gmail.com
          </Text>
        </View>



        {/* ..........CODE BOX ....... */}

        <View style={{ flexDirection: 'row', columnGap: 5 ,width:"100%",alignItems:'center',justifyContent:'center'}}>

          <View style={{ height: 80, width: 60, borderWidth: 1, borderRadius: 15, padding: 5, }}>
            <TextInput style={{ width: "100%", height: "100%", color: 'black', fontSize: 45, textAlign: 'center' }} keyboardType='numeric' maxLength={1} />
          </View>

          <View style={{ height: 80, width: 60, borderWidth: 1, borderRadius: 15, padding: 5, }}>
            <TextInput style={{ width: "100%", height: "100%", color: 'black', fontSize: 45, textAlign: 'center' }} keyboardType='numeric' maxLength={1} />
          </View>


          <View style={{ height: 80, width: 60, borderWidth: 1, borderRadius: 15, padding: 5, }}>
            <TextInput style={{ width: "100%", height: "100%", color: 'black', fontSize: 45, textAlign: 'center' }} keyboardType='numeric' maxLength={1} />
          </View>


          <View style={{ height: 80, width: 60, borderWidth: 1, borderRadius: 15, padding: 5, }}>
            <TextInput style={{ width: "100%", height: "100%", color: 'black', fontSize: 45, textAlign: 'center' }} keyboardType='numeric' maxLength={1} />
          </View>


          <View style={{ height: 80, width: 60, borderWidth: 1, borderRadius: 15, padding: 5, }}>
            <TextInput style={{ width: "100%", height: "100%", color: 'black', fontSize: 45, textAlign: 'center' }} keyboardType='numeric' maxLength={1} />
          </View>


        </View>



        {/* ...........SUBMIT BUTTON........ */}

        <TouchableOpacity style={{
          width: '90%',
          height: 55,
          borderRadius: 30,
          marginTop: "20%",
          backgroundColor: "#6495ED",
          alignItems: 'center',
          justifyContent: 'center'
        }} onPress={() => setIsModalVisible(true)}>
          <Text style={{ color: "white" }}>Submit</Text>
        </TouchableOpacity>




        {/* ...........DO NOT GET THE CODE...... */}
        <View style={{ flexDirection: 'row', columnGap: 5 }}>
          <Text style={{ color: 'black' }}>
            Didn't get the code?
          </Text>
          <TouchableOpacity>
            <Text style={{ color: "#6495ED" }}>Resend</Text>
          </TouchableOpacity>
        </View>

        {/* ........................MODAL........................... */}

        <Modal
  visible={isModalVisible}
  animationType="slide"
  presentationStyle="formSheet"
  style={{ alignItems: 'center', justifyContent: 'flex-end' }}
>
  <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
    <View style={{ height: "50%", width: '100%', alignItems: 'center', justifyContent: 'center', borderTopRightRadius: 50, borderTopLeftRadius: 50, borderWidth: 1 }}>
      {/* .........SUCCESS IMAGE....... */}
      <View style={{ width: 150, height: 150, backgroundColor: "#ECFFDC", borderRadius: 100, alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ width: 100, height: 100, backgroundColor: "#50C878", borderRadius: 100, alignItems: 'center', justifyContent: 'center' }}>
          <Image source={SuccussMark} style={{ width: 30, height: 30 }} />
        </View>
      </View>

      {/* ..........REGISTER TEXT.......... */}
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ color: "black", fontSize: 24, fontWeight: 'bold' }}>Register Success</Text>
        <Text style={{ color: '#C0C0C0', marginTop: 10 }}>
          Congratulations! Your account has been created.
        </Text>
        <Text style={{ color: '#C0C0C0', marginTop: 8 }}>
          Please login to experience amazing features.
        </Text>
      </View>

      {/* ...........SUBMIT BUTTON........ */}
      <TouchableOpacity style={{
        width: '90%',
        height: 55,
        borderRadius: 30,
        marginTop: "20%",
        backgroundColor: "#6495ED",
        alignItems: 'center',
        justifyContent: 'center'
      }} onPress={() => navigation.navigate("BottomNav")}>
        <Text style={{ color: "white" }}>Go to Homepage</Text>
      </TouchableOpacity>
    </View>
  </View>
</Modal>




      </View>

    </ScrollView>
  );
}

export default Verification;
