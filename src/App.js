import React, { useState, useEffect } from 'react';
import { Typography } from '@material-ui/core';
import wordsToNumbers from 'words-to-numbers';
import alanBtn from '@alan-ai/alan-sdk-web';

import { NewsCards, Modal } from './components';

import alan from './assets/alan.png';
import newsAPI from './assets/news.png';
import useStyles from './styles';

const App = () => {
  const [activeArticle, setActiveArticle] = useState(0);
  const [newsArticles, setNewsArticles] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const classes = useStyles();

  useEffect(() => {
    alanBtn({
      key:
        '548386efaabe2be229176ece4abfcdc22e956eca572e1d8b807a3e2338fdd0dc/stage',
      onCommand: ({ command, articles, number }) => {
        if (command === 'newHeadlines') {
          setNewsArticles(articles);
          setActiveArticle(-1);
        } else if (command === 'instructions') {
          setIsOpen(true);
        } else if (command === 'highlight') {
          setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
        } else if (command === 'open') {
          const parsedNumber =
            number.length > 2
              ? wordsToNumbers(number, { fuzzy: true })
              : number;
          const article = articles[parsedNumber - 1];

          if (parsedNumber > articles.length) {
            alanBtn().playText('Please try that again...');
          } else if (article) {
            window.open(article.url, '_blank', 'noopener noreferer');
            alanBtn().playText('Opening...');
          } else {
            alanBtn().playText('Please try that again...');
          }
        }
      },
    });
  }, []);

  return (
    <div>
      <div className={classes.logoContainer}>
        {newsArticles.length ? (
          <div className={classes.infoContainer}>
            <div className={classes.card}>
              <Typography variant='h5' component='h2'>
                Try: &apos;Open article number 4 &apos;
                <br /> Or: &apos;Go back&apos;
              </Typography>
            </div>
          </div>
        ) : null}
      </div>
      <NewsCards articles={newsArticles} activeArticle={activeArticle} />
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
      {!newsArticles.length ? (
        <div className={classes.footer}>
          <Typography variant='body1' component='h2'>
            Created with&nbsp;
            <a
              className={classes.link}
              target='_blank'
              href='https://alan.app/'
              rel='noreferrer noopener'
            >
              <img className={classes.logo} src={alan} alt='Alan app logo' />
            </a>
            &nbsp; and &nbsp;
            <a
              className={classes.link}
              target='_blank'
              href='https://newsapi.org/'
              rel='noreferrer noopener'
            >
              <img className={classes.logo} src={newsAPI} alt='MewsAPI logo' />
            </a>
          </Typography>
        </div>
      ) : null}
    </div>
  );
};

export default App;
