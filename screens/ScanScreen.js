import React, { useState, useEffect } from 'react';
import {Text,View,Image,StyleSheet,TouchableOpacity,Button, Alert} from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import * as Permissions from 'expo-permissions';

export default class Scanscreen extends React.Component {
    constructor(){
        super();
        this.state = {
            hasCameraPermission: null,
            buttonState:'normal',
            scanned: false,
            scannedData:'',

        }
    }

    getCameraPermission = async ()=>{
        const {status} = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({
            hasCameraPermission:status=="granted",
            buttonState:'clicked',

        })

    }

    handleBarCodeScanner = async (data,type)=>{
        this.setState({
            scanned:true,
            scannedData:data,
        });
        alert("data: "+data);
    }

    render(){

        if(this.state.buttonState=='normal' || this.state.hasCameraPermission==false || this.state.hasCameraPermission==null) {
            return(
            <View>

                <Image
          style={styles.image}
          source={require('../assets/scanner-image.jpg')}
        />

        <TouchableOpacity onPress={()=>{
            this.getCameraPermission()
          }}>
            <Text>SCAN</Text>
        </TouchableOpacity>

                    <Text>
                   { (this.state.hasCameraPermissions==null)?
                       ("Allow access to camera for scanning QR CODE"):this.state.scannedData
                         
                   }
                    </Text>
                         </View>
            );
        }   
    


    
        return(
            <View>
                <BarCodeScanner onBarCodeScanned={this.state.scanned? undefined : this.handleBarCodeScanner()}/>
                {this.state.scanned && <Button title={'Tap to Scan Again'} onPress={() => this.setState({scanned:false,})} />}
            </View>
        );

   
    
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      buttonstyle:{
        backgroundColor:'red',
        borderRadius:50,
        width:100,
        height:20,
      },
    image: {
        width: 100,
        height: 100,

      },
})