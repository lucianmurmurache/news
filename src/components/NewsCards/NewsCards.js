import React from 'react';
import { Grid, Grow, Typography } from '@material-ui/core';

import NewsCard from './NewsCard/NewsCard';
import useStyles from './styles.js';

const infoCards = [
  {
    title: 'Get the latest News',
    text: "'Show me the latest news' or 'Give me the most recent news' ",
  },
  {
    title: 'Get news by categories',
    info: 'Health, Science, Sports, Technology..',
    text: "'Show me the latest Technology news!'",
  },
  {
    title: 'Get news by terms',
    info: 'Java, JavaScript, React, Vue, Nuxt..',
    text: "'What's new about Vue 3?'",
  },
  {
    title: 'Get news by sources',
    info: 'CNN, Wired, BBC News, Time..',
    text: "'Show me the news from CNN'",
  },
];

const NewsCards = ({ articles, activeArticle }) => {
  const classes = useStyles();

  if (!articles.length) {
    return (
      <Grow in>
        <Grid
          className={classes.container}
          container
          alignItems='stretch'
          spacing={3}
        >
          {infoCards.map((infoCard, i) => (
            <Grid
              key={i}
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              className={classes.infoCard}
            >
              <div
                className={classes.card}
                style={{ backgroundColor: infoCard.color }}
              >
                <Typography variant='h5' component='h5'>
                  {infoCard.title}
                </Typography>
                {infoCard.info ? (
                  <Typography variant='h6' component='h6'>
                    for example: <br />
                    {infoCard.info}
                  </Typography>
                ) : null}
                <Typography variant='h6' component='h6'>
                  Select the microphone button and say: <br />
                  <i>{infoCard.text}</i>
                </Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </Grow>
    );
  }

  return (
    <Grow in>
      <Grid
        className={classes.container}
        container
        alignItems='stretch'
        spacing={3}
      >
        {articles.map((article, i) => (
          <Grid
            key={i}
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            style={{ display: 'flex' }}
          >
            <NewsCard activeArticle={activeArticle} i={i} article={article} />
          </Grid>
        ))}
      </Grid>
    </Grow>
  );
};

export default NewsCards;
