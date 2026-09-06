import StationPage from "@/components/stationPage";

export default function LaseChuo() {
  return (
    <StationPage 
      name="lase中央"
      nameRomanized="lase-chuo"
      trainNumber="DR08"
    >
      <p>
        <b>lase中央</b>は、ScJPMC有数の規模を誇る大ターミナルです。
      </p>
      <p>
        複数の交通機関が集まる交通の要衝であり、<b>寿鉄（すしてつ）線</b>との乗り換えも可能となっています。
      </p>
      <p>
        また、トロッコによる荷物輸送の受け取り拠点にもなっており、ScJP中央に届いた大きな荷物を手軽に運ぶことができます。
      </p>
      <p>
        人だけでなく、物も集まる――。<br />
        ScJPMCの交通・物流を支える重要な駅、それがlase中央です。
      </p>

      <section className="text-start">
        <h2>
          主なスポット
        </h2>
        <ul>
          <li>寿鉄（すしてつ）線</li>
          <li>トロッコ荷物輸送受取所</li>
          <li>玲洲商店街（れいずしょうてんがい、建設中）</li>
        </ul>
      </section>
    </StationPage>
  );
}
