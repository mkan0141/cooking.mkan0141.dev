import { h, render } from 'preact'
import { App } from './app'
import './index.scss'

const entryPoint = document.getElementById('app')

if (entryPoint) {
  render(<App />, entryPoint)
}
