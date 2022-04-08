import { Button, FlexProps, ListItem } from '@chakra-ui/react'
import NextLink from 'next/link'
import type { ReactText } from 'react'

interface Props extends FlexProps {
  current: boolean
  href: string
  children: ReactText
}
export const MemoItem: React.VFC<Props> = ({ current, href, children }) => {
  return (
    <ListItem>
      <NextLink href={href} passHref>
        <Button
          as="a"
          w="100%"
          justifyContent="flex-start"
          _focus={{ boxShadow: 'none' }}
          {...(current
            ? {
                disabled: true,
                bg: 'gray.100',
                color: 'gray.600',
                pointerEvents: 'none',

                // cursor: 'default', // NOTE: 効かない
                style: {
                  opacity: 1,
                  cursor: 'default',
                },
              }
            : {
                bg: '0',
                fontWeight: 'normal',
                _hover: {
                  bg: 'gray.100',
                },
              })}
        >
          {children}
        </Button>
      </NextLink>
    </ListItem>
  )
}
