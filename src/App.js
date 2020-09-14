import React, { useEffect, useState } from 'react';
import getForms from './jotFormService';
import './App.css';

function App() {

  const [formUrl, setFormUrl] = useState(null);

  useEffect(() => {

    (async () => {
      try {
        const res = await getForms();
        const { data: { content: [{ url }]}} = res;
        setFormUrl(url)
      }
      catch(e)
      {
        console.log('Call to retrieve forms failed: ' + e.message);
      }

    })();

  }, []);

  return (
    <div className="App">
      <iframe id="jotForm"
          title="MDR"
          width="100%"
          height="100%"
          //src="https://form.jotform.com/{202575577685066}">
          src={ formUrl }>
      </iframe>
    </div>
  );
}

export default App;
