import type { AppProps } from 'next/app'
import { ProductProvider } from '../lib/product-context'
import '../styles/globals.css'
import '../styles/theme.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ProductProvider slug="food-video-content-suite">
      <Component {...pageProps} />
    </ProductProvider>
  )
}
