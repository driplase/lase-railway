import StationPage from "@/components/stationPage";

export default function RotenMae() {
  return (
    <StationPage 
      name="露天前"
      nameRomanized="Roten-mae"
      trainNumber="DR02"
    >
      <p>
        <b>露天前</b>は、その名の通り、駅のすぐ近くに巨大な露天掘り採掘場を擁するまちです。
      </p>
      <p>
        日々多くの作業厨たちが集まり、資源を求めて黙々と採掘に励んでいます。<br />
        最近では駅周辺に地下街も整備され、採掘場だけではない新たなにぎわいが生まれつつあります。
      </p>

      <section className="text-start">
        <h2>
          主なスポット
        </h2>
        <ul>
          <li>露天掘り採掘場</li>
          <li>地下街「ホリチカ」</li>
          <li>泥急線本社</li>
        </ul>
      </section>
    </StationPage>
  );
}
