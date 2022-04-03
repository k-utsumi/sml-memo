import { Box, Button, List, ListItem, Stack, Divider } from '@chakra-ui/react'

export const DefaultLayout: React.FC = ({ children }) => {
  return (
    <Stack
      direction={{ xs: 'row', md: 'column' }}
      height="100vh"
      divider={<Divider borderColor="gray.200" orientation="vertical" />}
      spacing="4"
      align="stretch"
    >
      <Box overflowY="auto" minWidth="200px" fontSize="sm">
        <List>
          <ListItem p="2" borderBottom="1px" borderColor="gray.200">
            すべてのメモ
          </ListItem>
          <ListItem p="2">お気に入り</ListItem>
          <ListItem p="2">作業中</ListItem>
          <ListItem p="2">アーカイブ</ListItem>
        </List>
      </Box>
      <Box p="2" overflowY="auto" flex="1">
        empty
      </Box>

      <Stack flex="2" spacing="0">
        <Box
          p="2"
          as="header"
          position="sticky"
          top="0"
          borderBottom="1px"
          borderColor="gray.200"
        >
          <List display="flex" gap="2">
            <ListItem>
              <Button colorScheme="blue" variant="outline">
                お気に入り
              </Button>
            </ListItem>
            <ListItem>
              <Button colorScheme="blue" variant="outline">
                作業中
              </Button>
            </ListItem>
            <ListItem>
              <Button colorScheme="blue" variant="outline">
                アーカイブ
              </Button>
            </ListItem>

            <ListItem ml="auto">
              <Button colorScheme="blue">保存</Button>
            </ListItem>
          </List>
        </Box>
        <Box p="2" overflowY="auto">
          {children}
        </Box>
      </Stack>
    </Stack>
  )
}
