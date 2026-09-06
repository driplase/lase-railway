import StationPage from "@/components/stationPage";

export default function ScJPChuo() {
  return (
    <StationPage 
      name="ScJP中央"
      nameRomanized="ScJP-chuo"
      trainNumber="DR01"
    >
      <p>
        ScJPMCサーバーに初めて降り立ったとき、まず訪れることになるのが<b>ScJP中央</b>です。
      </p>
      <p>
        ここはサーバーの初期スポーン地点にあたり、現在もっとも多くの人が集まる、ScJPMC最大のにぎわいを見せるまちです。<br />
        プレイヤーたちの生活拠点や施設が集まり、日々さまざまな出来事が起こっています。
      </p>

      <section className="text-start">
        <h2>
          主なスポット
        </h2>
        <ul>
          <li>初期スポーン</li>
          <li>ネザーゲート</li>
          <li>各種トラップ施設</li>
          <li>イキスギフロンティア（人工島）</li>
          <li>ぽてとの拠点（駅西）</li>
        </ul>
      </section>
    </StationPage>
  );
}