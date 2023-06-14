import { Box, Flex, Image, HStack, VStack, Text, Link, useMediaQuery } from '@chakra-ui/react'
import React, { useState } from 'react'
import twitterSrc from '../images/twitter.png'
import facebookSrc from '../images/facebook.png'
import instagramSrc from '../images/instagram.png'
import { arrowStyles, arrowActiveStyles, arrowBoxAfterStyles, arrowBoxBeforeStyles, slideIn } from '../styles/headerStyles'
import { HamburgerIcon } from '@chakra-ui/icons'
import useArticlesStore from '../stores/articlesStore'
import Menu from './Menu'

interface INetwork {
    iconSrc: string;
    href: string;
}

export type TCategory = 'Politic' | 'Design' | 'Sport' | 'Health' | 'Technology' | 'Business'

//* categories
export const categories: TCategory[] = ['Politic', 'Design', 'Sport', 'Health', 'Technology', 'Business']

const Header = (): JSX.Element => {

    const [isLargerThan481] = useMediaQuery('(min-width: 481px)')

    const [categoriesOpen, setCategoriesOpen] = useState<boolean>(false)

    //* menu state
    const [menuOpen, setMenuOpen] = useState<boolean>(false)

    //* from categories store
    const selectCategory = useArticlesStore(state => state.selectCategory)

    //* open categories
    const openCategories = (): void => setCategoriesOpen(true)

    //* close categories
    const closeCategories = (): void => {
        selectCategory(null)
        setCategoriesOpen(false)
    }

    //* search icons
    const networks: INetwork[] = [
        {iconSrc: twitterSrc, href: ''},
        {iconSrc: facebookSrc, href: ''},
        {iconSrc: instagramSrc, href: ''}
    ]

    return (
        <>
        <Menu isOpen={menuOpen} setIsOpen={setMenuOpen} />
        <Box w='100%' h='auto'>
            <VStack spacing='2%' p={['5% 0 5% 0', '3 0 3% 0', '1% 0 0 0']}>
                <Flex justify='space-between' align='center' w={['95%', '85%', '75%']}>
                    <Text fontSize='2rem' color='blue' fontWeight='300' letterSpacing='0.3px' fontFamily='Cabin, sans-serif'>News Blog</Text>
                    {
                        isLargerThan481 ? <Flex w='180px' justify='space-around' align='center'>
                        {
                            networks.map((el, i) => <Link key={i} href={el.href}>
                            <Image src={el.iconSrc} alt='icon' w='40px' h='40px' transitionDuration='0.15s' _hover={{ opacity: '0.6', border: '2px solid rgba(255, 255, 255, 0)', borderRadius: '5px', cursor: 'pointer' }} />
                            </Link>)
                        }
                    </Flex>
                    :
                    <Flex w='50px' h='50px' justify='center' align='center' _hover={{ cursor: 'pointer' }} onClick={() => setMenuOpen(true)}>
                        <HamburgerIcon w={7} h={7} />
                    </Flex>
                    }
                </Flex>
                {
                    isLargerThan481 && <HStack w={['95%', '85%', '75%']} opacity='0.7' p='1.5% 0 1.5% 0' fontFamily='B612 Mono, monospace' _hover={{ cursor: 'pointer' }}>
                    <Box position='relative' w='140px' cursor='pointer' transitionDuration='500ms' opacity={categoriesOpen ? '0.5': 'none'} _hover={{ opacity: categoriesOpen ? '1': 'none' }} onClick={categoriesOpen ? closeCategories : openCategories}>
                    <Text fontSize='md'>CATEGORY</Text> 
                    <Box position='absolute' sx={categoriesOpen ? arrowActiveStyles : arrowStyles}>
                        <Box position='absolute' top={categoriesOpen ? '20px' : '0'} w='25px' h='1px' bg='black' boxShadow='0 3px 5px rgba(0, 0, 0, .2)' display='block' _after={arrowBoxAfterStyles} _before={arrowBoxBeforeStyles}></Box>
                    </Box>
                    </Box>
                    {
                        categoriesOpen && <Flex w='100%' justify='space-around' align='center' animation={slideIn}>
                        {
                            categories.map((el, i) => <Text key={i} fontSize='md' color='black' letterSpacing='0.7px' transitionDuration='500ms' _hover={{ cursor: 'pointer', color: 'blue' }} onClick={() => selectCategory(el)}>{el.toUpperCase()}</Text>
                            )
                        }
                    </Flex>
                    }
                </HStack>
                }
            </VStack>
            <Box bg='grey' h='1px' w='100%' opacity='0.3'></Box>
        </Box>
        </>
    )
}

export default Header