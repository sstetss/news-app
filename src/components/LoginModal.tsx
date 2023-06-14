import { Modal, ModalContent, ModalOverlay, Button, FormControl, Input, HStack } from '@chakra-ui/react'
import React from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import useUserStore from '../stores/userStore'

export type TProps = { 
    isOpen: boolean,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
    openCreateArticleModal: () => void 
}

interface ILoginData { password: string }

const LoginModal = ({isOpen, setIsOpen, openCreateArticleModal}: TProps): JSX.Element => {

    //* from user store
    const login = useUserStore(state => state.login)

    //* react-hook-form
    const { handleSubmit, control } = useForm<ILoginData>()

    //* submit
    const onSubmit: SubmitHandler<ILoginData> = (data): void => {
        const { password } = data 
        login(password)  

        if (password === process.env.REACT_APP_ADMIN_PASSWORD) {
            setIsOpen(false)
            setTimeout(() => openCreateArticleModal(), 500)
        }
    }

    return (
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} size='3xl' isCentered>
            <ModalOverlay />
                <ModalContent p={['3%', '2%', '1%']} border='3px solid blue' boxShadow='5px 5px 10px #000' bg='#fff'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <HStack>
                        <Controller 
                        name='password'
                        control={control}
                        rules={{ required: true }}
                        render={({field}) => <FormControl {...field}>
                            <Input type='password' textAlign='center' placeholder='Write password' />
                        </FormControl>}
                        />
                        <Button type='submit' bg='blue' borderRadius='5px' color='white' p='16px 20px' border='none' cursor='pointer' w={['50%', '40%', '20%']} h='42px' opacity='0.8' _hover={{ bg: 'rgb(0, 0, 224)' }}>Click</Button>
                    </HStack>
                </form>
                </ModalContent>
        </Modal>
    )
}

export default LoginModal