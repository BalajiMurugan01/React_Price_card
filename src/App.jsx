import './App.css'
import MainPage from './Pages/MainPage'
import Card1 from './components/Card1';
import Card2 from './components/Card2';
import Card3 from './components/Card3';
function App() {
  return(
    <div className='flex items-center justify-center h-screen'>
      <MainPage>
       <Card1/>
       <Card2/>
       <Card3/>
        </MainPage>
    </div>
  );
}

export default App
