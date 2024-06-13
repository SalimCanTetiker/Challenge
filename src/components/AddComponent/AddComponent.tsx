import { View, Text, Pressable, Button } from 'react-native'
import React, {useState} from 'react'

import Modal from "react-native-modal";

import styles from './AddComponent.style'

const AddComponent = () => {

    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
      setModalVisible(!isModalVisible);
    };

    return (
        <View style={styles.container}>
            <View style={styles.view}>
                <Text style={styles.text}>Brand Name</Text>
            </View>
            <View style={styles.view}>
                <Pressable onPress={toggleModal}>
                    <Text style={styles.plus}>+</Text>
                </Pressable>
            </View>
            <Modal isVisible={isModalVisible}>
          <View style={{ flex: 1, backgroundColor: 'pink' }}>
            <Text>Hello!</Text>
  
            <Button title="Hide modal" onPress={toggleModal} />
          </View>
        </Modal>
        </View>
    )
}

export default AddComponent