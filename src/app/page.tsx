import { Noise } from '@/components/noise/noise'
import { Calculator } from '@/features/imc/components/calculator'

export default function Home() {
  return (
    <div className="flex flex-col size-full relative bg-gradient-to-br from-[#364161] via-[#242120] to-[#324564]">
      <Noise className="size-full" />
      <main className="w-full flex flex-col justify-center isolate">
        <div className="mt-[8rem] flex flex-col gap-5 items-center">
          <h1 className="text-white text-5xl/14 font-semibold text-center tracking-tighter z-[1]">
            Calculadora de <br />
            <span className="font-serif tracking-normal font-medium italic text-[2.875rem]">
              índice de masa corporal
            </span>{' '}
            (IMC)
          </h1>
          <p className="text-center text-input-white tracking-tight">
            Conoce tu peso ideal y empieza a cuidar tu salud hoy
          </p>
        </div>
        <div className="w-full mt-[8rem] flex flex-col items-center">
          <Calculator />
        </div>
      </main>
    </div>
  )
}
