export default function Typography({ children }: {
  children: React.ReactElement,
}) {
  return (
    <div className="typeset typeset-docs max-w-[37em]">
      { children }
    </div>
  )
}