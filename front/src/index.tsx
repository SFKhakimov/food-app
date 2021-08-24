import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import StoreProvider from 'common/providers/StoreProvider/StoreProvider'
import ThemeProvider from 'common/providers/ThemeProvider/ThemeProvider'
import RouterProvider from 'common/providers/RouterProvider/RouterProvider'
import routes from './routes'

const App = () => {
    return (
        <BrowserRouter>
            <StoreProvider>
                <ThemeProvider>
                    <RouterProvider routes={routes} />
                </ThemeProvider>
            </StoreProvider>
        </BrowserRouter>
    )
}

ReactDOM.render(<App />, document.querySelector('#app'))
