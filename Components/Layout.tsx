import React from 'react'
import Head from 'next/head'
import Link from 'next/link'


type LayoutProps = {
  title?: string
}

const layoutStyle = {
  background: '#f4f4f4'
}

const Layout: React.FunctionComponent<LayoutProps> = ({ children, title }) => {
  return (
    <div style={layoutStyle}>
      <Head>
        <title>NextJs with Typescript</title>
        
      </Head>

      <h3>{title}</h3>

      {children}

      <footer>&copy; {new Date().getFullYear()}</footer>

      <style global jsx>{`
        body {
          margin: 0;
          padding: 0;
          font-family: 'Roboto', sans-serif;
        }
        h3 {
          margin: 0 0 20px;
        }
      `}</style>
    </div>
  )
}

export default Layout