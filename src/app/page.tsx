import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-6xl max-w-full mx-auto p-8 text-center">
      {/* 仮 */}
      <h2>
        【泥急とは？】
      </h2>
      <p>
        どろぷす急行電鉄は、中央スポーン（ScJP中央駅）から南、東への路線を運行している、
        <Link href="https://mcscr.jp">ScJPMC</Link>
        内で運営されている鉄道です。
      </p>
      <p>
        driplaseの出資の元、路線拡大が行われています。
      </p>

      <h2>
        【どんなところを走っているの？】
      </h2>
      <p>
        泥急は、中央スポーンから、採掘場の近くの「採掘場前」、乱歩村の近くの「新乱歩」、新しい開発地「祭明」、「lase中央」などを走っています。
      </p>
      <p>
        また、温泉地の「湯野温泉」（※現在開発中）など、観光地も走っています。
      </p>
    </main>
  );
}
