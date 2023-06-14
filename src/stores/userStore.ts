import create from "zustand";
import { persist } from 'zustand/middleware'

interface IState {
    userType: 'user' | 'admin',
    login: (password: string) => void
}

const useUserStore = create<IState>()(
    persist((set, get) => ({
        userType: 'user',

        //* login
        login: (password) => {
            if (password === process.env.REACT_APP_ADMIN_PASSWORD) set({userType: 'admin'})
        }
    }),
    {
        getStorage: () => sessionStorage,
        name: 'user'
    })
)

export default useUserStore