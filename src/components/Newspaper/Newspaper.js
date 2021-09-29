import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import News from '../News/News';

const Newspaper = () => {
    const [news, setNews] = useState([])
    useEffect(() => {
        fetch('https://newsapi.org/v2/everything?q=tesla&from=2021-08-29&sortBy=publishedAt&apiKey=e970d0ccb0ed4345a65e3dff5ab106ef')
            .then(res => res.json())
            .then(data => setNews(data.articles))
    }, [])
    return (
        <div>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    news.map(article => <Grid item xs={2} sm={3} md={4}>
                        <News news={article}></News>
                    </Grid>)
                }
            </Grid>
        </div>
    );
};

export default Newspaper;