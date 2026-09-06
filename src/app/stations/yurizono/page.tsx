import StationPage from "@/components/stationPage";

export default function Yurizono() {
  return (
    <StationPage 
      name="百合園"
      nameRomanized="Yurizono"
      trainNumber="DR06"
    >
      <p>
        <b>百合園</b>は、美しい花々に囲まれた、ScJPMCでも特に景観に恵まれたまちです。
      </p>
      <p>
        駅の出口を出ると、そこには一面に広がる雄大な花畑。<br />
        季節を感じさせる色とりどりの花々が、訪れる人々を出迎えます。
      </p>
      <p>
        ゆっくりと花畑を歩きながら、ScJPMCの自然を楽しんでみてはいかがでしょうか。
      </p>

      <section className="text-start">
        <h2>
          主なスポット
        </h2>
        <ul>
          <li>一面に広がる花畑</li>
        </ul>
      </section>
    </StationPage>
  );
}
