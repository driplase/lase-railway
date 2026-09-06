export function StationPanel({
  name,
  nameRomanized,
  trainNumber,
}: {
  name: string,
  nameRomanized?: string,
  trainNumber?: string,
}) {
  return (
    <div className="grid justify-items-center my-2">
      <div className="w-lg min-h-64 max-w-full bg-white flex flex-col items-center justify-center">
        <h1 className="mt-2! mb-4!">
          { name }
        </h1>
        <div className="my-2 text-md">{ nameRomanized }</div>
      </div>
    </div>
  )
}

export default function StationPage({ 
  children,
  name,
  nameRomanized,
  trainNumber,
}: {
  children?: React.ReactNode,
  name: string,
  nameRomanized?: string,
  trainNumber?: string,
}) {
  return (
    <main className="w-4xl max-w-full mx-auto p-8 text-center">
      <section className="bg-slate-100 p-6 shadow-[inset_0_0_1rem_var(--tw-inset-shadow-color)] inset-shadow-white rounded-lg mb-8">
        <StationPanel 
          name={name}
          nameRomanized={nameRomanized}
        />
      </section>

      { children }
    </main>
  )
}