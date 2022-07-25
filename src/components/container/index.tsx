import { h, FunctionComponent, Fragment } from 'preact'
import styles from './index.modules.scss'

export const Container: FunctionComponent<{}> = ({ children }) => {
  return (
    <>
      <div className={styles.container}>{children}</div>
    </>
  )
}
