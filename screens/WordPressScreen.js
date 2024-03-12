import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import axios from 'axios';

const WordPressScreen = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=17c589bac7ad4ef481c331357b6d9adf&pageSize=3');
      setPosts(response.data.articles);
    } catch (error) {
      console.error(error);
    }
  };

  const renderPostItem = ({ item }) => (
    <TouchableOpacity onPress={() => {}}>
      <View style={{ marginBottom: 20 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.title}</Text>
        <Text style={{ fontSize: 14 }}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1, alignItems: 'center', padding: 20 }}>
      {posts.length > 0 ? (
        <FlatList
          data={posts}
          renderItem={renderPostItem}
          keyExtractor={(item, index) => index.toString()}
        />
      ) : (
        <Text>No se encontraron publicaciones.</Text>
      )}
    </View>
  );
};

export default WordPressScreen;