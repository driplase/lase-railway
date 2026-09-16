import RouteMap from "@/components/RouteMap";

export default function Stations() {
  return (
    <main className="w-6xl max-w-full mx-auto p-8">
      <h1>駅一覧・路線図</h1>

      <div className="w-full h-128">
        <RouteMap />
      </div>
    </main>
  )
}