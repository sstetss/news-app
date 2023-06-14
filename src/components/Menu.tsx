import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay, Text, VStack } from '@chakra-ui/react'
import React, { MouseEventHandler } from 'react'
import useArticlesStore from '../stores/articlesStore'
import { categories, TCategory } from './Header'

type TProps = {
    isOpen: boolean,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Menu = ({isOpen, setIsOpen}: TProps): JSX.Element => {

    //* from articles store
    const selectCategory = useArticlesStore(state => state.selectCategory)

    //* handle select category
    const handleSelectCategory = (category: TCategory): MouseEventHandler<HTMLParagraphElement> => (): void => {
        selectCategory(category)
        setIsOpen(false)
    }

    return (
        <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)} size='xs'>
            <DrawerOverlay />
            <DrawerContent bg='#ECEFF1' boxShadow='1px 0px 6px rgba(0, 0, 0, .2)' fontFamily='Roboto, sans-serif'>
                <DrawerCloseButton />
                <DrawerBody pt='80px'>
                    <VStack spacing='7%'>
                    {
                        categories.map((el, i) => <Text key={i} fontSize='20px' fontWeight={600} color='#333' cursor='pointer' _hover={{ color: 'blue' }} onClick={handleSelectCategory(el)}>{el}</Text>)
                    }
                    </VStack>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    )
}

export default Menu