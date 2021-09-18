import React, { useEffect, useState } from 'react'
import { useStyles } from "./style";
import ArticlesList from '../../components/articlesList/articlesList';
import { useSelector } from 'react-redux';
import { connect } from 'react-redux';

export const ReadLater = (props) => {
    const classes = useStyles();
    const {readlaterList} =props;

    const [result, setResult]=  useState(null);

    useEffect(() => {
        if(readlaterList){
        const distinctSections = readlaterList.reduce((acc, article) => {
            if(!acc[article.section]) acc[article.section] = [];
            acc[article.section].push(article);
            return acc;
        }, {});
        console.log(distinctSections)
        setResult(distinctSections);
        }
    }, [readlaterList]);

    return (
        <div>
        {result && <ArticlesList result={result}  />}
    </div>
    )
}

const mapStatesToProp = (states)=>({
    readlaterList: states.readList
})

export default connect(mapStatesToProp)(ReadLater)


