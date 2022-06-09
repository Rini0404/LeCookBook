import { useEffect, useState } from "react"
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';


function Searched() {
    const [searchedRecipes, setSearchedRecipes] = useState([]);
    let params = useParams();
    const getSearched = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`)
        const recipes = await data.json()
        setSearchedRecipes(recipes.results)
    }

    useEffect(() => {
        getSearched(params.search)
    }, [params.search])

    return (
        <Grid animate={{opacity:1}}
        initial={{opacity: 0}}
        exit= {{ opacity: 0 }}
        transition={{ duration: 0.5}}>
            {searchedRecipes.map((item) => {
                return (
                    <Card key={item.id}>
                        <Link to={"/recipe/" + item.id}>
                        <img src={item.image} alt="" />
                        <h4>{item.title}</h4>
                        </Link>
                    </Card>
                );
            })}
        </Grid>
    );
}

const Grid = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 3rem;

`

const Card = styled.div`
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

export default Searched