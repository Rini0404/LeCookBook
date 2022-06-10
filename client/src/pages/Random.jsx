import MainCourse from "../components/MainCourse";
import Popular from "../components/Dessert";
import {motion} from 'framer-motion';
import Search from '../components/Search'
import Category from '../components/Category'


function Random() {
  return (
    <div>
    <Search />
    <Category />
    <motion.div
      animate={{opacity:1}}
      initial={{opacity: 0}}
      exit= {{ opacity: 0 }}
      transition={{ duration: 0.5}}>
    <MainCourse />
    <Popular />
    </motion.div>
    </div>
  )
}

export default Random