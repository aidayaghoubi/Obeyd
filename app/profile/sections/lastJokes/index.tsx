import Joke from "@/app/components/JokeBox/Joke"
import { FUNNIEST_JOKES } from "@/app/components/Landing/JokePreview"
import { motion } from "framer-motion";


const LastJokes = () => {
  return <motion.div
    initial={{ y: 30 }}
    animate={{ y: 0 }}
    transition={{ duration: 0.3 }}
    style={{ overflow: "hidden" }}
  >
    <div className="bg-white p-8 rounded-lg ">
      <h2 className="font-bold text-xl">آخرین جک هات</h2>
      {FUNNIEST_JOKES?.map((joke, i) =>
        <Joke data={joke} key={i} />
      )}
    </div>
  </motion.div>
}
export default LastJokes