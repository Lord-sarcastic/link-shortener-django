import { useEffect, useState } from 'react';
import HeroWrapper from './components/Home';
import ModalWrapper from './components/Modal';
import './assets/main.css';

function App() {
  const [modalVisibility, setModalVisibility] = useState(true);
  const closeModal = () => {
    setModalVisibility(false)
  }
  return (
    <div>
      <HeroWrapper className="h-screen" />
      {
        modalVisibility ?
        <ModalWrapper link={"https://google.com"} closeModal={closeModal} />
        : ''
      }
    </div>
  );
}

export default App;
