import React, {useEffect} from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

const App = ()  => {

  const alanKey = ''
  /* **** To read ****
  
  https://alan.app/docs/usage/getting-started
  */

  useEffect(() => {
    alanBtn({
      key: alanKey
    })
  }, [])

  return (
    <div>
      <h1>News app</h1>
    </div>
  );
}

export default App;
