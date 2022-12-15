import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import SearchBar from './components/SearchBar';
import Loading from './components/Loading';

const queryClient =new QueryClient()

function App() {
  return (
    <div className='w-1200 m-auto'>
      <Header/>
      <SearchBar />
      <QueryClientProvider client={queryClient}>
        <Outlet/>
      </ QueryClientProvider >
    </div>
  );
}

export default App;
