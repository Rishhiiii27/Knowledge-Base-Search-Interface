import React from 'react';
import { Input, Box, Text } from '@chakra-ui/react';

const SearchBar = ({ setQuery, onSearch }) => {
  return (
    <Box mb={4}>
      <Text mb={2}>Search Knowledge Base</Text>
      <Input
        type="text"
        placeholder="Enter your query"
        onChange={(e) => setQuery(e.target.value)}
        mb={2}
      />
    </Box>
  );
};

export default SearchBar;
