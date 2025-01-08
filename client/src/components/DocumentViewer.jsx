import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const DocumentViewer = ({ results }) => {
  return (
    <Box>
      {results.map((doc) => (
        <Box key={doc.id} mb={4}>
          <Text fontWeight="bold">{doc.title}</Text>
          <Text>{doc.content}</Text>
        </Box>
      ))}
    </Box>
  );
};

export default DocumentViewer;
