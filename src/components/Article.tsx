import { Box, Heading, Image, Stack, VStack, Text, Button, useMediaQuery, Flex } from '@chakra-ui/react';
import React from 'react'
import { TCategory } from './Header';
import { deleteHoverStyles, readMoreHoverStyles } from '../styles/articleStyles';
import useArticlesStore from '../stores/articlesStore';
import useUserStore from '../stores/userStore';
import deleteSrc from '../images/delete.png'

export interface IArticle {
    title: string;
    publicationText: string;
    fullText: string;
    imageUrl: string;
    category: TCategory
}

type TProps = IArticle & { 
    id: number,
    setArticleModalShow: React.Dispatch<React.SetStateAction<boolean>>
 }

const Article = ({title, publicationText, imageUrl, setArticleModalShow, id}: TProps): JSX.Element => {
    const [smallerThan768] = useMediaQuery('(max-width: 767px)')

    //* from users store
    const userType = useUserStore(state => state.userType)

    //* from articles store
    const selectArticle = useArticlesStore(state => state.selectArticle)
    const deleteArticle = useArticlesStore(state => state.deleteArticle)

    //* view full article
    const viewFullArticle = (): void => {
        selectArticle(id)
        setArticleModalShow(true)
    }

    return (
        <Box w={['95%', '95%', '95%', '95%', '75%']} h='auto'>
            <Stack direction={smallerThan768 ? 'column' : 'row'} spacing='0'>
                <Image src={imageUrl} borderRadius='5px' h={['220px', '370px', '380px']} w={['100%', '100%', '50%', '50%']} />
                <VStack spacing={['5%', '5%', '2%', '4%']} w={['100%', '100%', '50%', '50%']} bg='rgb(247, 247, 247)' p={['5% 5% 2% 5%', '5% 5% 2% 5%', '2% 5% 2% 5%', '5% 5% 2% 5%']}>
                    <Heading fontSize='160%' fontFamily='Cabin, sans-serif'>{title}</Heading>
                    <Text>{publicationText}</Text>
                    <Flex justify={userType === 'admin' ? 'space-between' : 'flex-start'} align='center' w='100%' pb={['4%', '0', '0']}>
                        <Button bg='rgb(247, 247, 247)' border='1px solid black' borderRadius='20px' p='25px 50px' transitionDuration='500ms' cursor='pointer' _hover={readMoreHoverStyles} onClick={viewFullArticle}>More</Button>
                        {
                            userType === 'admin' && <Image src={deleteSrc} alt='icon' w='40px' h='40px' transitionDuration='0.15s' _hover={deleteHoverStyles} onClick={()=> deleteArticle(id)} />
                        }
                    </Flex>
                </VStack>
            </Stack>
        </Box>
    )
}

export default Article