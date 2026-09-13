import StationPage from "@/components/stationPage";
import { stations } from "@/data/stations";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const station = stations.find(s => s.id === slug)

  if (!station) notFound();
  
  const { default: Post } = await import(`@/content/stations/${slug}.mdx`).catch(() => notFound())
 
  return (
    <StationPage 
      name={station.name}
      nameRomanized={station.nameRomanized}
      trainNumber={station.trainNumber}
    >
      <Post />
    </StationPage>
  )
}
 
export function generateStaticParams() {
  return stations.map(station => {
    return { slug: station.id };
  })
}
 
export const dynamicParams = false