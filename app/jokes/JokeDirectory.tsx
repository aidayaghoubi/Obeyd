"use client";
import { motion } from "framer-motion";
import Joke from "../components/JokeBox/Joke";


const JokeDirectory = ({ jokes }) => {


  return <motion.div
    initial={{ y: 30 }}
    animate={{ y: 0 }}
    transition={{ duration: 0.3 }}
    style={{ overflow: "hidden" }}
  >
    <div className='lg:px-48 px-16'>
      {jokes.slice(0, 10).map((joke, index) => (
        <Joke data={joke} key={index} />
      ))}
    </div>
  </motion.div>
}
export default JokeDirectory