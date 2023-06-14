import { Box } from '@chakra-ui/react'
import React from 'react'
import Articles from './Articles'
import LoginModal, { TProps as TLoginModalProps } from './LoginModal'
import CreateArticleModal, { TProps as TCreateArticleModalProps } from './CreateArticleModal'
import useArticlesStore from '../stores/articlesStore'

type TProps = {
    loginModalProps: TLoginModalProps,
    createArticleModalProps: TCreateArticleModalProps
}

const Main = ({loginModalProps, createArticleModalProps}: TProps): JSX.Element => {

    //* from articles store
    const articles = useArticlesStore(state => state.articles)

    return (
        <>
        <LoginModal {...loginModalProps} />
        <CreateArticleModal {...createArticleModalProps} />
        <Box w='100%'>
            <Articles articles={articles} />
        </Box>
        </>
    )
}

export default Main