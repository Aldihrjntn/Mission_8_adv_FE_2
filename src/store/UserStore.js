import { create } from "zustand"

const useUserStore = create((set) => ({
    user: null,
    isLoggedIn: false,

    users: [],

    loading: false,
    error: null,


    setUser: (data) => set({ user: data, isLoggedIn: true }),
    logout: () => set({ user: null, isLoggedIn: false }),

    setUsers: (usersData) => set({ users: usersData }),

    setLoading: (val) => set({ loading: val }),
    setError: (error) => set({ error }),    
}))

export default useUserStore;