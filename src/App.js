import './App.css';
import Form from './components/Form';
import Header from './components/Header';
import Paragraphs from './components/Paragraphs';

function App() {
  return (
    <div className='h-screen bgscreen'>
    <div className="bgscreen w-screen  h-auto flex flex-col items-center p-10 text-white">
     <Header/>
     <hr className='w-3/4' />
     <Form/>
     <Paragraphs/>
    </div>
    </div>
  );
}

export default App;
