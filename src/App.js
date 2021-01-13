import React, { useEffect, useState } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

import NewsCards from './components/NewsCards/NewsCards';

const App = () => {
  const [newsArticles, setNewsArticles] = useState([]);

  const alanKey =
    '548386efaabe2be229176ece4abfcdc22e956eca572e1d8b807a3e2338fdd0dc/stage';

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) => {
        if (command === 'newHeadlines') {
          setNewsArticles(articles);
        }
      },
    });
  }, []);

  return (
    <div>
      <h1>News app</h1>
      <NewsCards articles={newsArticles} />
    </div>
  );
};

export default App;
