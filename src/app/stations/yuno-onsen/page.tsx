import StationPage from "@/components/stationPage";

export default function YunoOnsen() {
  return (
    <StationPage 
      name="湯野温泉"
      nameRomanized="Yuno-onsen"
      trainNumber="DR07"
    >
      <p>
        <b>湯野温泉</b>は、温泉を中心とした観光地として整備が進められている地域です。
      </p>
      <p>
        現在は「湯野温泉郷」の建設が進められており、完成すればScJPMCを代表する観光地のひとつとなることが期待されています。
      </p>
      <p>
        日々の採掘や建築で疲れたら、湯野の温泉でひと休み。<br />
        そんな過ごし方ができるまちを目指して、少しずつその姿を変えています。
      </p>

      <section className="text-start">
        <h2>
          主なスポット
        </h2>
        <ul>
          <li>湯野温泉郷（建設中）</li>
        </ul>
      </section>
    </StationPage>
  );
}
