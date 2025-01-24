"use client";
import { motion } from "framer-motion";
import Joke from "../components/JokeBox/Joke";
import { useAuth } from "@/context/AuthContext";
import Button from "../components/Button";
import { useRouter } from 'next/navigation'



const JokeDirectory = ({ jokes }) => {

  const { user } = useAuth()
  const router = useRouter()

  const onClickOnBack = () => {
    router.push('/login')
  };

  const jokeCount = user ? "0" : "0,5"

  return <motion.div
    initial={{ y: 30 }}
    animate={{ y: 0 }}
    transition={{ duration: 0.3 }}
    style={{ overflow: "hidden" }}
  >
    <div className='lg:px-48 px-16 mb-40'>
      {(user?.name ? jokes : jokes.slice(0, 5)).map((joke, index) => (
        <Joke data={joke} key={index} />
      ))}
      {!user &&
        <div className="flex justify-center">
          <Button className="!w-1/4" title="نمایش بیشتر" variant="submit" disabled={false} onClick={onClickOnBack} />
        </div>
      }
    </div>
  </motion.div>
}
export default JokeDirectory