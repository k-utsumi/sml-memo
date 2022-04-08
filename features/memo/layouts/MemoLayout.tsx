import {
  Box,
  Button,
  Divider,
  Flex,
  List,
  ListItem,
  Stack,
  Textarea,
} from '@chakra-ui/react'
import { ChangeEventHandler } from 'react'
import { NavItem } from '../components'
import { MemoItem } from '../components/MemoItem'
import type { Memo, MemoType, MemoTypeName } from '../types'

const NAV_ITEMS: { title: string; typeName: MemoTypeName; path: string }[] = [
  {
    title: 'すべてのメモ',
    typeName: 'all',
    path: '/',
  },
  {
    title: '作業中',
    typeName: 'working',
    path: '/working',
  },
  {
    title: 'お気に入り',
    typeName: 'favorits',
    path: '/favorits',
  },
  {
    title: 'アーカイブ',
    typeName: 'archive',
    path: '/archive',
  },
]

type Props = {
  hndleSaveClick: () => void
  handleInputChange: ChangeEventHandler<HTMLTextAreaElement>
  memos: Memo[]
  value: string
  type?: MemoType

  children: React.ReactNode
}

export const MemoLayout: React.VFC<Props> = ({
  hndleSaveClick,
  handleInputChange,
  memos,
  value,
  type = 'all',
  children,
}) => {
  return (
    <Stack
      direction={{ xs: 'row', md: 'column' }}
      height="100vh"
      divider={<Divider borderColor="gray.200" orientation="vertical" />}
      spacing="4"
      align="stretch"
    >
      {/* - 左 */}
      <Box overflowY="auto" minWidth="200px" fontSize="sm">
        <Stack as={List} p="2" spacing="1">
          {NAV_ITEMS.map((item) => (
            <NavItem
              key={item.title}
              current={item.typeName === type}
              href={item.path}
            >
              {item.title}
            </NavItem>
          ))}
        </Stack>
      </Box>

      {/* - 中 */}
      <Box p="2" overflowY="auto" flex="1">
        {memos ? (
          <Stack as={List} spacing="1">
            {memos.map((memo) => (
              <MemoItem
                key={memo.id}
                current={false}
                href={`/${type}/${memo.id}`}
              >
                {memo.content}
              </MemoItem>
            ))}
          </Stack>
        ) : (
          'empty'
        )}
      </Box>

      {/* - 右 */}
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
                作業中
              </Button>
            </ListItem>
            <ListItem>
              <Button colorScheme="blue" variant="outline">
                お気に入り
              </Button>
            </ListItem>

            <ListItem ml="auto">
              <Button colorScheme="blue" variant="outline">
                アーカイブ
              </Button>
            </ListItem>

            <ListItem>
              <Button colorScheme="blue" onClick={hndleSaveClick}>
                保存
              </Button>
            </ListItem>
          </List>
        </Box>

        <Flex p="2" flexDirection="column" flex="1">
          <Textarea
            placeholder="Here is a sample placeholder"
            flex="1"
            value={value}
            onChange={handleInputChange}
          />
          {children}
        </Flex>
      </Stack>
    </Stack>
  )
}
