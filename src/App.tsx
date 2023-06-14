import React, { useState } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import 'aos/dist/aos.css'
import Main from './components/Main'

const App = (): JSX.Element => {

  //* modals state
  const [loginModalOpen, setLoginModalOpen] = useState<boolean>(false)
  const [createArticleModalShow, setCreateArticleModalShow] = useState<boolean>(false)

  const openLoginModal = (): void => setLoginModalOpen(true)
  const openCreateArticleModal = (): void => setCreateArticleModalShow(true)

  //* props
  const loginModalProps = { isOpen: loginModalOpen, setIsOpen: setLoginModalOpen, openCreateArticleModal }
  const createArticleModalProps = { isOpen: createArticleModalShow, setIsOpen: setCreateArticleModalShow }


  return (
    <>
    <Header />
    <Main loginModalProps={loginModalProps} createArticleModalProps={createArticleModalProps} />
    <Footer openLoginModal={openLoginModal} />
    </>
  )
}

export default App