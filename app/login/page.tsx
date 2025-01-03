import Image from "next/image"
import LoginForm from './LoginForm'
import BackButton from "../components/BackButton"

function Login() {

  return <div className="bg-white min-h-[100vh] flex justify-center items-center">
    <BackButton />
    <div className="bg-[#F8FAFC] gap-10 flex flex-wrap items-center justify-center rounded-3xl p-10">
      <div className="flex-grow w-[40%] min-w-[400px]">
        <LoginForm />
      </div>
      <div className="flex-grow flex justify-center">
        <Image
          src="/loginBg.png"
          width={400}
          height={400}
          alt="Picture of the author"
        />
      </div>
    </div>
  </div>
}
export default Login