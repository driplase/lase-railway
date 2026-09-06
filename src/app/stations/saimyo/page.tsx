import StationPage from "@/components/stationPage";

export default function Saimyo() {
  return (
    <StationPage 
      name="祭明"
      nameRomanized="Saimyo"
      trainNumber="DR05"
    >
      <p>
        <b>祭明</b>は、ScJPMCにおける主要駅のひとつで、急行列車も停車する交通の拠点です。
      </p>
      <p>
        現在はまだ開発の途中にありますが、今後の発展が期待されている地域のひとつです。
      </p>

      <section className="text-start">
        <h2>
          主なスポット
        </h2>
        <ul>
          <li>現在開発中</li>
        </ul>
      </section>
    </StationPage>
  );
}
