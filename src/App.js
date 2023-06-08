import { useState } from 'react';
import QRcode from 'react-qr-code';
import QrcodeLink from 'qrcode';
import './App.css';

function App() {
  const [link, setLink] = useState('');
  const [qrcodeLink, setQrcodeLink] = useState('');

  function handleGenerate(link_url){
    QrcodeLink.toDataURL(link_url, {
      width: 600,
      margin: 3,

    }, function(err, url){
        setQrcodeLink(url);
    })
  }

  function handleQrcode(event){
    setLink(event.target.value);
    handleGenerate(event.target.value);
  }

  return (
    <div className="container">
      <QRcode
        value={link}
      />

      <input
        className='input'
        placeholder='Digite seu link'
        value={link}
        onChange={ (event) => handleQrcode(event)}
      />

      <a href={qrcodeLink} download={'qrcode.png'}>
        Baixar QRCode
      </a>
    </div>
  );
}

export default App;
