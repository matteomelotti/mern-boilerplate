import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import ApplicationRouter from './ApplicationRouter'
import { RecoilRoot } from 'recoil'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
})

const App = () => {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <ApplicationRouter />
        </BrowserRouter>
      </QueryClientProvider>
    </RecoilRoot>
  )
}

export default App
