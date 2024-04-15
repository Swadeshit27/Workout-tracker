import { useNavigate } from "react-router-dom"
import { goals } from "../Data/goalsData"
import { Button } from "../components"
import { Input } from "../components"

const GoalsPage = () => {
  const navigate = useNavigate();
  const submit = () => {
    navigate('/tracker')
  }

  return (
    <form
      onSubmit={submit}
      className=' h-screen max-w-[475px] w-full px-4 py-11 flex flex-col justify-between'
    >
      <div>
        <h1 className=' text-xl text-mediumBlack font-Montserrat font-semibold text-center my-2'>What are your goals?</h1>
        <div className="my-8 space-y-5">
          {goals.map((data) => (
            <div className=' relative' key={data.id}>
              <Input
                type='text'
                readOnly
                value={data.title}
              />
              <input
                type='checkbox'
                className=' absolute top-3.5 right-3.5 h-5 w-5 '
              />
            </div>
          ))}
        </div>
      </div>
      <Button
        className=" rounded-xl mb-8"
        type="submit"
      >Confirm</Button>
    </form>
  )
}

export default GoalsPage
