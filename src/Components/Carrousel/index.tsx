import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

interface CarrouselProps {
  slides: string[];
  curr: number;
  setCurr: React.Dispatch<React.SetStateAction<number>>;
}

function Carrousel({ slides, curr, setCurr }: CarrouselProps) {
  const prev = () => setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () => setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  return (
    <div className="h-full relative ">
      <div className="overflow-hidden relative h-full">
        <div className="flex h-full transition-transform ease-out duration-500" style={{ transform: `translateX(-${curr * 100}%)` }}>
          {slides.map((slide, index) => (
            <img key={index} className='object-cover rounded-lg h-auto w-screen' src={slide} alt="" />
          ))}
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-4 flex items-center justify-center">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurr(index)}
            className={`mx-1 mb-3 size-2 rounded-full ${index === curr ? 'bg-rose-400' : 'bg-gray-300'}`}
          />
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="p-1 rounded-full hover:bg-slate-400/50">
          <ChevronLeftIcon className="w-8" />
        </button>

        <button
          onClick={next}
          className="p-1 rounded-full hover:bg-slate-400/50">
          <ChevronRightIcon className="w-8" />
        </button>
      </div>
    </div>
  )
}

export default Carrousel;
