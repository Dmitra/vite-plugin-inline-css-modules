import React from 'react'
import { css } from 'vite-plugin-inline-css-modules'

const styles = css`
  background-color: azure;
`

const styles2 = css`
  color: aqua;
`

export const Root = () => <div className={`${styles} ${styles2}`}>Hello world</div>