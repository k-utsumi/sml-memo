import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider {...theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
