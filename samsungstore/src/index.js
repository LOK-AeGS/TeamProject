import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'
//리액트 쿼리 설치 방법 https://velog.io/@apro_xo/react-query-react-query-%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0
const root = ReactDOM.createRoot(document.getElementById('root'));

const queryClient = new QueryClient();
root.render(

    <BrowserRouter>
    <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={true} />

        <App />
        </QueryClientProvider>
    </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
