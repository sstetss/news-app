import React from 'react'
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, Heading } from '@chakra-ui/react'
import useArticlesStore from '../stores/articlesStore'

type TProps = {
    isOpen: boolean,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const ArticleModal = ({isOpen, setIsOpen}: TProps): JSX.Element => {

    //* from articles store
    const selectedId = useArticlesStore(state => state.selectedId)
    const articles = useArticlesStore(state => state.articles)

    //* onclose
    const onClose = () => setIsOpen(false)

    return (
        <Modal isOpen={isOpen} onClose={onClose} size='5xl'>
            <ModalOverlay />
                {
                    articles[selectedId] && <ModalContent>
                    <ModalHeader>
                        <Heading fontSize='130%' fontFamily='Cabin, sans-serif'>{articles[selectedId].title}</Heading>
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text>{articles[selectedId].fullText}</Text>
                    </ModalBody>
                    <ModalFooter>
                        <Button bg='blue' borderRadius='15px' color='white' p='16px 20px' border='none' cursor='pointer' w='100%' h='50px' opacity='0.8' _hover={{ bg: 'rgb(0, 0, 224)' }} onClick={onClose}>Close</Button>
                    </ModalFooter>
                </ModalContent>
                }
        </Modal>
    )
}

export default ArticleModal