import create from "zustand"
import { persist } from "zustand/middleware"
import { IArticle } from "../components/Article"
import { TCategory } from "../components/Header"

interface IState {
    articles: IArticle[],
    selectedId: number,
    selectedCategory: TCategory | null,

    createArticle: (article: IArticle) => void,
    deleteArticle: (id: number) => void,
    selectArticle: (id: number) => void,
    selectCategory: (category: TCategory | null) => void
}

const useArticlesStore = create<IState>()(
    persist((set, get) => ({
        articles: [],
        selectedId: 0,
        selectedCategory: null,

        //* create article
        createArticle: (article) => {
            const articles = get().articles
            articles.unshift(article)

            set({articles})
        },

        //* delete article
        deleteArticle: (id) => {
            const articles = get().articles
            const filtered = articles.filter((_, i) => i !== id)

            set({articles: filtered})
        },

        //* select article
        selectArticle: (id) => {
            set({selectedId: id})
        },

        //* select category
        selectCategory: (category) => {
            set({selectedCategory: category})
        }
    }), 
    {
        getStorage: () => localStorage,
        name: 'articles'
    })
)

export default useArticlesStore