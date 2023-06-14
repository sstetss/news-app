import { Box, VStack, Heading, Text, Button } from '@chakra-ui/react'
import React from 'react'

type TProps = {
    openLoginModal: () => void
}

const Footer = ({openLoginModal}: TProps): JSX.Element => {
    return (
        <Box w='100%' bg='rgb(247, 247, 247)' h='220px' p={['40px 0', '65px 0', '65px 0']} fontFamily='Cabin, sans-serif'>
            <VStack>
                <Box w={['95%', '85%', '75%']}>
                    <Heading fontSize='1.2rem' mb='0.5rem' fontFamily='Cabin, sans-serif'>Newsletter Subcribe</Heading>
                    <Text fontSize='0.9rem' opacity='0.7' w={['100%', '400px', '400px']}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis aspernatur ut at quae omnis pariatur obcaecati possimus nisi ea iste!</Text>
                    <Button mb='2%' onClick={openLoginModal}>Sign In</Button>
                </Box>
            </VStack>
        </Box>
    )
}

export default Footer