import { h } from 'preact'
import styles from './index.modules.scss'

export function Header() {
  return (
    <header>
      <div className={styles.logo}>mkan's cooking</div>
    </header>
  )
}
