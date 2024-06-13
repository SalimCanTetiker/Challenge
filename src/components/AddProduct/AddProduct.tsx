import { View, TextInput, Text, Pressable } from 'react-native'
import React, { useState } from 'react'

import { supabase } from '../../supabaseClient'
import { productStore } from '../../zustand/productStore'
import Modal from "react-native-modal";

import styles from './AddProduct.style'

const AddProduct = () => {

    const [marketName, setMarketName] = useState("")
    const [productName, setProductName] = useState("")
    const [productQuantity, setProductQuantity] = useState("")
    const addProduct = productStore((state) => state.addProduct)
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const handleAddProduct = async () => {
        if (marketName.trim() === '' || productName.trim() === '' || productQuantity.trim() === '') {
            console.log('Market Name, Product Name and Product Quantity cannot be empty.')
            return
        }
        const { data, error } = await supabase
            .from('product')
            .insert([{ marketName, productName, productQuantity }])
            .single();
            setModalVisible(false)
        if (error) {
            console.log(error)
        } else {
            addProduct(data)
            setMarketName('')
            setProductName('')
            setProductQuantity('')
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.viewContainer}>
                <View style={styles.view}>
                    <Text style={styles.text}>Brand Name</Text>
                </View>
                <View style={styles.view}>
                    <Pressable onPress={toggleModal}>
                        <Text style={styles.plus}>+</Text>
                    </Pressable>
                </View>
            </View>
            <Modal isVisible={isModalVisible}>
                <View style={styles.modal}>
                    <TextInput style={styles.input}
                        placeholder='Market Name'
                        value={marketName}
                        onChangeText={setMarketName}
                    />
                    <TextInput style={styles.input}
                        placeholder='Product Name'
                        value={productName}
                        onChangeText={setProductName}
                    />
                    <TextInput style={styles.input}
                        placeholder='Product Quantity'
                        value={productQuantity}
                        onChangeText={setProductQuantity}
                    />
                    <Pressable style={styles.button} onPress={handleAddProduct}>
                        <Text>ADD</Text>
                    </Pressable>
                </View>
            </Modal>
        </View>
    )
}

export default AddProduct