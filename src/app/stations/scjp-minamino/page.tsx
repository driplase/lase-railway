import StationPage from "@/components/stationPage";

export default function ScJPMinamino() {
  return (
    <StationPage 
      name="ScJPみなみ野"
      nameRomanized="ScJP-minamino"
      trainNumber="DR03"
    >
      <p>
        <b>ScJPみなみ野</b>は、川と豊かな緑に囲まれた、これからの発展が期待される地域です。
      </p>
      <p>
        現在はまだ開発の途上にあり、これからどのようなまちへと成長していくのかは、そこに住むプレイヤーたちの手に委ねられています。
      </p>
      <p>
        住宅地をつくるもよし、新たな観光地を開拓するもよし。<br />
        あなたの手で、この地域の新しい歴史をつくってみませんか？
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
