import React, { useState } from 'react';
import { ChakraProvider, Box, Button, Text, Spinner } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { setResults, setLoading, selectSearchResults } from './redux/searchSlice';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import DocumentViewer from './components/DocumentViewer';

const App = () => {
  const dispatch = useDispatch();
  const results = useSelector(selectSearchResults);
  const [query, setQuery] = useState('');

  const handleSearch = async () => {
    dispatch(setLoading(true));
    try {
      const response = await axios.post('http://localhost:5000/api/search', { query, filters: {} });
      dispatch(setResults(response.data));
    } catch (error) {
      console.error('Error searching knowledge base:', error);
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <ChakraProvider>
      <Box p={5}>
        <SearchBar setQuery={setQuery} onSearch={handleSearch} />
        <Button onClick={handleSearch}>Search</Button>
        {results.length > 0 ? <DocumentViewer results={results} /> : <Text>No results found</Text>}
      </Box>
    </ChakraProvider>
  );
};

export default App;
