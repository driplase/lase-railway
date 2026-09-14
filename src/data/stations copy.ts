export interface Station {
  id: string;
  stationNumber: string[];
  name: string;
  nameHiragana?: string;
  nameRomanized?: string;
  position: [number, number];
}

export interface Line {
  id: string;
  name: string;
  color: string;
  stationIds: string[];
}

export const stations: Station[] = [
  { id: "scjp-chuo", stationNumber: ["DR01", "DP01"], name: "ScJP中央", nameRomanized: "ScJP-chuo", position: [-159, 56] },
  { id: "roten-mae", stationNumber: ["DR02", "DP02"], name: "露天前", nameRomanized: "Roten-mae", position: [-148, 248] },
  { id: "takakanagawa-gateway-shin-rampo-seinan-kosho-rakka-kiki-ana-toshi-chiiki", stationNumber: ["DR03"], name: "高神奈川ゲートウェイ〈新乱歩西南高所落下危機穴都市地域〉", nameHiragana: "たかかながわげーとうぇい〈しんらんぽせいなんこうしょらっかききあなとしちいき〉", nameRomanized: "Takakanagawa Gateway <Shin-rampo Seinan Kosho Rakka Kiki Ana Toshi Chiiki>", position: [-153, 632] },
  { id: "saimyo", stationNumber: ["DR04"], name: "祭明", nameRomanized: "Saimyo", position: [0, 867] },
  { id: "yurizono", stationNumber: ["DR05"], name: "百合園", nameRomanized: "Yurizono", position: [0, 1041] },
  { id: "yuno-onsen", stationNumber: ["DR06"], name: "湯野温泉", nameRomanized: "Yuno-onsen", position: [0, 1246] },
  { id: "lase-chuo", stationNumber: ["DR07"], name: "lase中央", nameRomanized: "lase-chuo", position: [0, 1435] },
  { id: "shin-ranpo", stationNumber: ["DP03"], name: "新乱歩", nameRomanized: "Shin-ranpo", position: [37, 370] },
]

export const lines: Line[] = [
  { 
    id: "DP", 
    name: "乱歩線", 
    color: "#c1a470", 
    stationIds: [
      "DP01",
      "DP02",
      "DP03",
    ],
  },
  { 
    id: "DR", 
    name: "本線", 
    color: "#2478ff", 
    stationIds: [
      "DR01",
      "DR02",
      "DR03",
      "DR04",
      "DR05",
      "DR06",
      "DR07",
    ],
  },
]