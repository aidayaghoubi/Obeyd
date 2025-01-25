import Joke from "@/app/components/JokeBox/Joke"
import { IJoke } from "@/app/jokes/JokeDirectory";
import { motion } from "framer-motion";

interface IUserJokes {
  userJokes: IJoke[]
}
const LastJokes = ({ userJokes }:IUserJokes) => {
  return <motion.div
    initial={{ y: 30 }}
    animate={{ y: 0 }}
    transition={{ duration: 0.3 }}
  >
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h2 className="font-[600] text-xl">آخرین جوک هات</h2>
      {userJokes?.map((joke: IJoke) =>
        <Joke data={joke} key={joke._id} />
      )}
    </div>
  </motion.div>
}
export default LastJokes