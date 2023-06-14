import { VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import useArticlesStore from '../stores/articlesStore'
import Article, { IArticle } from './Article'
import ArticleModal from './ArticleModal'
import { TCategory } from './Header'

type TProps = { articles: IArticle[] }

const Articles = ({articles}: TProps): JSX.Element => {

    //* article modal state
    const [articleModalOpen, setArticleModalOpen] = useState<boolean>(false)

    //* from article store
    const selectedCategory = useArticlesStore(state => state.selectedCategory)

    //* filter articles
    const filterArticles = (articles: IArticle[], category: TCategory | null): IArticle[] => {
        if (selectedCategory) return articles.filter(el => el.category === category)
        else return articles
    }

    return (
        <>
        <ArticleModal isOpen={articleModalOpen} setIsOpen={setArticleModalOpen} />
        <VStack w='100%' spacing={['5%', '3%', '1.5%']} my={['5%', '3%', '1.5%']} fontFamily='Cabin, sans-serif'>
            {
                filterArticles(articles, selectedCategory).map((el, i) => <Article key={i} {...el} id={i} setArticleModalShow={setArticleModalOpen} />)
            }
        </VStack>
        </>
    )
}

export default Articles