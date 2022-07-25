import { h, Fragment } from 'preact'

import { Header } from './components/header'
import { Container } from './components/container'

export function App(props: any) {
  return (
    <>
      <Container>
        <Header />
      </Container>
    </>
  )
}
