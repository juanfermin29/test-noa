'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import store from './config/redux/store'
import { Provider } from 'react-redux'

export default function Providers({ children }: { children: React.ReactNode }) {
    const queryClient = new QueryClient({})
    return (
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                {children}
            </Provider>
        </QueryClientProvider>
    )
}
