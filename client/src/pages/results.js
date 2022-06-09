import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Search from '../components/Search'
import Category from '../components/Category'


function Results() {

  const [results, setResults] = useState([]);
  let URL = JSON.parse(localStorage.getItem("apiCall"));


  const getResults = async (URL) => {
      const data = await fetch(URL)
      const recipes = await data.json()
      setResults(recipes.results)
  }

  useEffect(() => {
      getResults(URL)
      console.log(URL)
  }, [URL]);

  return (
    <div>
    <Search />
    <Category />
      <Grid animate={{opacity:1}}
      initial={{opacity: 0}}
      exit= {{ opacity: 0 }}
      transition={{ duration: 0.5}}>
          {results.map((item) => {
              return (
                  <Card key={item.id}>
                      <Link to={"/recipe/" + item.id}>
                      <img src={item.image} alt="" />
                      <h4>{item.title}</h4>
                      </Link>
                  </Card>
              )
          })}
          
      </Grid>
      </div>
  )
}

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;

`

const Card = styled(motion.div)`
  img{
      width: 100%;
      border-radius: 2rem;
  }
  a {
      text-decoration: none;
  }
  h4 {
      text-align: center;
      padding: 1rem;
  }
`

export default Results;