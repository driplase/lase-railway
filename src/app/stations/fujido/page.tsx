import StationPage from "@/components/stationPage";

export default function Fujido() {
  return (
    <StationPage 
      name="藤堂"
      nameRomanized="Fujido"
      trainNumber="DR04"
    >
      <p>
        <b>藤堂</b>は、駅のすぐ近くに広がる「金の島」を中心とした観光のまちです。
      </p>
      <p>
        ひときわ目を引く金の島は、現在ではScJPMCを代表する観光スポットのひとつとして知られています。
      </p>
      <p>
        また、藤堂周辺からは、複雑に入り組んだ島々が織りなす独特の景観を楽しむことができます。<br />
        海と島々がつくり出す風景を眺めながら、ゆっくりと散策してみるのもおすすめです。
      </p>

      <section className="text-start">
        <h2>
          主なスポット
        </h2>
        <ul>
          <li>金の島</li>
          <li>きっきーの拠点</li>
          <li>島々を望む景観</li>
        </ul>
      </section>
    </StationPage>
  );
}
