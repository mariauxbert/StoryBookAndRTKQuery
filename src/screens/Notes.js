import React, { useState } from 'react';
import { View, TextInput, Button, Alert, FlatList, Text } from 'react-native';
import { useAppDispatch, useAppSelector } from "../redux/hooks/hooks";
import { addNote, noteSelector, Note } from '../redux/slices/notesslice';
import Styles from "./Styles";

import { useAddNewDataMutation, useGetDataByIdQuery, useGetDataQuery } from "../RTKQuery/services/GetApiCall";
const Notes = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const dispatch = useAppDispatch();
    const notes = useAppSelector(noteSelector);
    const { data, isLoading, isError, isFetching } = useGetDataByIdQuery("1");

    const [addData] = useAddNewDataMutation();

    const handleSaveNote = async () => {

        if (title.trim() === '' || content.trim() === '') {
            Alert.alert('Error', 'Please fill in both fields');
            return;
        }

        // Here you can handle saving the note, for example, sending it to an API or saving it locally
        console.log('Title:', title);
        console.log('Content:', content);
        const res = await addData({
            title: title,
            description: content

        })
        console.log("res", res);


        dispatch(addNote({ title, content }))
        // Resetting fields after saving
        setTitle('');
        setContent('');
    };

    return (
        <View style={Styles.container}>
            <TextInput
                placeholder="Title"
                value={title}
                onChangeText={text => setTitle(text)}
                style={Styles.textInput}
            />
            <TextInput
                placeholder="Content"
                value={content}
                onChangeText={text => setContent(text)}
                multiline
                style={Styles.input}
            />
            <Button title="Save" onPress={handleSaveNote} />
            <FlatList
                data={[data]}
                renderItem={({ item }: { item: Note }) => {
                    return (
                        <Text>{item?.title}</Text>)
                }} />
        </View>
    );
};

export default Notes;
