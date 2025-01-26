import { useEffect, useState } from "react"
import Button from "../Button"
import { useAuth } from "@/context/AuthContext"
import fetcher from "@/app/utils/fetcher"
import { useJokes } from "@/context/JokeContext"

interface IJokeModal {
  showModal: boolean,
  onCloseModal: () => void
}

const JokeModal = ({ showModal, onCloseModal }: IJokeModal) => {

  const [inputValue, setInputValue] = useState<{ content: string }>({ content: "" });
  const [isLoading, setIsLoading] = useState(false);
  const { updateJokes } = useJokes()
  const { user } = useAuth()

  function createNewJokeHandler() {
    setIsLoading(true)
    const payload = {
      content: inputValue.content,
      likeCount: 0,
      dislikeCount: 0,
      createdTime: Date.now(),
      replies: [],
      creator: {
        name: user.name,
        id: user.userName,
      },
    }
    fetcher("joke", { method: "POST", body: payload })
      .then(() => {
        updateJokes()
        onCloseModal()
        setInputValue({ content: '' })
        setIsLoading(false)
      })
  }



  useEffect(() => {
    if (showModal) {
      const dialog = document.getElementById('my_modal_1') as HTMLDialogElement;
      dialog?.showModal();
    }
  }, [showModal])

  if (!showModal) {
    return null
  }

  return <dialog id="my_modal_1" className="modal">
    <div className="modal-box bg-white">
      <div className="flex gap-2">
        <h3 className="text-lg">
          یه جوک بامزه برامون بنویس
        </h3>
      </div>
      <textarea
        value={inputValue.content}
        onChange={e => setInputValue(prev => ({ ...prev, content: e.target.value }))}
        placeholder="جوکت رو بنویس"
        className="textarea min-h-40 bg-white textarea-bordered textarea-md w-full mt-5"></textarea>

      <div className="modal-action justify-end gap-5 ">
        <Button disabled={false} variant="rounded" className="!m-0 !w-1/4" title="بستن" onClick={onCloseModal} />
        <Button variant="submit"
          title={isLoading ? "در حال ارسال" : "جوکت و به اشتراک بزار"}
          disabled={inputValue.content.length < 6 || isLoading}
          onClick={createNewJokeHandler}
          className="!w-2/4 !m-0" />
      </div>
    </div>
  </dialog>

}
export default JokeModal
