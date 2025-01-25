

interface IAddJokeButton {
  onShowAddJoke: () => void
}

const AddJokeButton = ({ onShowAddJoke }: IAddJokeButton) => {

  return <div onClick={onShowAddJoke}
    className="bg-activeRed py-2 px-4 rounded-lg cursor-pointer hover:scale-105 transition text-white fixed right-5 bottom-5">
    جوک بگو +
  </div>
}
export default AddJokeButton