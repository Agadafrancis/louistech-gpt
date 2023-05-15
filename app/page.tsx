import { SunIcon } from '@heroicons/react/24/outline';

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center h-screen px-2 text-white'>
      <h1 className='text-5xl font-bold mb-20'>Louis GPT</h1>

      <div>
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <SunIcon className="h-8 w-8 " />
            <h2>Examples</h2>
          </div>

          <div className="space-y-2">
            <p className="infoText">"Explain Something to me"</p>
            <p className="infoText">"What is the diference between a cow and a beef"</p>
            <p className="infoText">"What is the color of the moon"</p>
          </div>
        </div>
      </div>
    </div>
  )
}
