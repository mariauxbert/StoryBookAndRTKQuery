import React, { useState } from 'react';
import { View, TextInput, Button, Alert, FlatList, Text } from 'react-native';
import { useAppDispatch, useAppSelector } from "./../redux/hooks/hooks";
import { addNote, noteSelector, Note } from '../redux/slices/notesslice';

//
import { useAddNewDataMutation, useGetDataByIdQuery, useGetDataQuery } from "./../RTKQuery/services/GetApiCall";
const Notes = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const dispatch = useAppDispatch();
    const notes = useAppSelector(noteSelector);
    //console.log("notes",notes);
    //const {data,isLoading,isError,isFetching}=useGetDataQuery();
    const { data, isLoading, isError, isFetching } = useGetDataByIdQuery("1");
    //console.log("data", data);


    const [addData] = useAddNewDataMutation();



    const handleSaveNote = async () => {

        if (title.trim() === '' || content.trim() === '') {
            Alert.alert('Error', 'Please fill in both fields');
            return;
        }

        // Here you can handle saving the note, for example, sending it to an API or saving it locally
        console.log('Title:', title);
        console.log('Content:', content);
     const res= await   addData({
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
        <View style={{ marginTop: 100 }}>
            <TextInput
                placeholder="Title"
                value={title}
                onChangeText={text => setTitle(text)}
                style={{ borderWidth: 1, borderColor: 'gray', margin: 10, padding: 10 }}
            />
            <TextInput
                placeholder="Content"
                value={content}
                onChangeText={text => setContent(text)}
                multiline
                style={{ borderWidth: 1, borderColor: 'gray', margin: 10, padding: 10, height: 100 }}
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
