import React, { useEffect, useState } from 'react';
import { errors, URLS, BASE_URL } from './constants';
import HeroWrapper from './components/Home';
import ModalWrapper from './components/Modal';

export const ModalContext = React.createContext({
  showModal: false,
  setShowModal: () => {}
});

export const UrlContext = React.createContext();

export const ShortUrlContext = React.createContext({
    shortUrl: '',
    setShortUrl: () => {}
  }
);

function App() {
  const [showModal, setShowModal] = useState(false);
  const [url, setUrl] = useState('');
  const [error, setError] = useState('init');
  const [shortUrl, setShortUrl] = useState('');

  useEffect(() => {
  }, [showModal])

    const handleUrlChange = (url) => {
        const urlRegex = /\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()[\]{};:'".,<>?«»“”‘’]))/i;
        setUrl(url);
        
        if (!url.match(urlRegex)) {
            setError(errors.invalidUrl);
            return;
        }

        setError(false);
    }

  function handleSubmit() {
    fetch(URLS.shortener, {
      method: 'POST',
      body: JSON.stringify({url}),
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then((res) => {
        setShortUrl(`${BASE_URL}${res.short_url_code}`);
      })
      .catch((e) => setError(errors.networkError))
    
  }

  useEffect(() => {
    if (shortUrl) {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  }, [shortUrl]);

  return (
    <>
    <ModalContext.Provider value={{ showModal, setShowModal }}>
      <UrlContext.Provider value={{ url, handleUrlChange, error }}>
        <ShortUrlContext.Provider value={{ shortUrl, setShortUrl }}>
        <div>
          <HeroWrapper className="h-screen" handleSubmit={handleSubmit} />
          {
            showModal ?
            <ModalWrapper link={shortUrl} />
            : ''
          }
        </div>
        </ShortUrlContext.Provider>
      </UrlContext.Provider>
    </ModalContext.Provider>
    </>
  );
}

export default App;
