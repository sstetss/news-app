import { Button, FormControl, FormLabel, VStack, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalOverlay, Textarea, Select, Box } from '@chakra-ui/react'
import React from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import useArticlesStore from '../stores/articlesStore'
import { IArticle } from './Article'
import { categories } from './Header'

export type TProps = {
    isOpen: boolean,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const CreateArticleModal = ({isOpen, setIsOpen}: TProps): JSX.Element => {

    //* from articles store
    const createArticle = useArticlesStore(state => state.createArticle)

    //* react-hook-form
    const { handleSubmit, control, register } = useForm<IArticle>()

    //* submit
    const onSubmit: SubmitHandler<IArticle> = (data): void => {
        createArticle(data)
        setIsOpen(false)
    }

    return (
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} size='3xl' isCentered>
            <ModalOverlay />
            <ModalContent boxShadow='5px 5px 10px #000' border='3px solid blue' borderRadius='10px' bg='#fff' >
                <Box py='1%'><ModalCloseButton /></Box>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <ModalBody>
                        <VStack spacing='1.5%'>
                        <Controller 
                        name='title'
                        control={control}
                        rules={{ required: true }}
                        render={({field}) => <FormControl {...field}>
                            <FormLabel fontSize='22px' fontWeight='400' mb='1%'>Write article title</FormLabel>
                            <Input border='1px solid blue' borderRadius='5px' boxShadow='2px 2px 5px rgba(0, 0, 0, 0.5)' textAlign='center' placeholder='Введите не более 65 символов' maxLength={65} />
                        </FormControl>}
                        />
                        <Controller 
                        name='publicationText'
                        control={control}
                        rules={{ required: true }}
                        render={({field}) => <FormControl {...field}>
                            <FormLabel fontSize='22px' fontWeight='400' mb='1%'>Write article text</FormLabel>
                            <Textarea border='1px solid blue' borderRadius='5px' boxShadow='2px 2px 5px rgba(0, 0, 0, 0.5)' size='md' maxLength={350} placeholder='Введите не более 350 символов' />
                        </FormControl>}
                        />
                        <Controller 
                        name='fullText'
                        control={control}
                        rules={{ required: true }}
                        render={({field}) => <FormControl {...field}>
                            <FormLabel fontSize='22px' fontWeight='400' mb='1%'>Write article full text</FormLabel>
                            <Textarea border='1px solid blue' borderRadius='5px' boxShadow='2px 2px 5px rgba(0, 0, 0, 0.5)' size='md' />
                        </FormControl>}
                        />
                        <Controller 
                        name='imageUrl'
                        control={control}
                        rules={{ required: true }}
                        render={({field}) => <FormControl {...field}>
                            <FormLabel fontSize='22px' fontWeight='400' mb='1%'>Write article URL</FormLabel>
                            <Input border='1px solid blue' borderRadius='5px' boxShadow='2px 2px 5px rgba(0, 0, 0, 0.5)' textAlign='center' type='url' />
                        </FormControl>}
                        />
                        <FormControl>
                            <FormLabel fontSize='22px' fontWeight='400' mb='1%'>Choose a category</FormLabel>
                            <Select {...register('category')} border='1px solid blue' borderRadius='5px' boxShadow='2px 2px 5px rgba(0, 0, 0, 0.5)'>
                                {
                                    categories.map((el, i) => <option key={i} value={el}>{el}</option>)
                                }
                            </Select>
                        </FormControl>
                        </VStack>
                    </ModalBody>
                    <ModalFooter>
                        <Button type='submit' bg='#ffffff' color='blue' border='1px solid blue' w='155px' p='5px 15px' borderRadius='10px' boxShadow='1px 1px 3px rgb(0 0 0 / 50%)' _hover={{ opacity: '0.7' }}>Post</Button>
                    </ModalFooter>
                </form>
            </ModalContent>
        </Modal>
    )
}

export default CreateArticleModal