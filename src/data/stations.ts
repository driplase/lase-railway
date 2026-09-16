export interface Station {
  id: string;
  stationNumber: string[];
  name: string;
  nameHiragana?: string;
  nameRomanized?: string;
  position: [number, number];
  url?: string | true;
}

export interface Line {
  id: string;
  name: string;
  color: string;
  stationNumbers: string[];
}

export interface StationAppearance {
  id: string;
  label?: {
    offsetX?: number;
    offsetY?: number;
    rotation?: number;
  };
}

export const stations: Station[] = [
  { id: "scjp-chuo", stationNumber: ["DR01", "DP01"], name: "ScJP中央", nameRomanized: "ScJP-chuo", position: [-159, 56], url: true },
  { id: "roten-mae", stationNumber: ["DR02", "DP02"], name: "露天前", nameRomanized: "Roten-mae", position: [-148, 248], url: true },
  { id: "takakanagawa-gateway-shin-rampo-seinan-kosho-rakka-kiki-ana-toshi-chiiki", stationNumber: ["DR03"], name: "高神奈川ゲートウェイ〈新乱歩西南高所落下危機穴都市地域〉", nameHiragana: "たかかながわげーとうぇい〈しんらんぽせいなんこうしょらっかききあなとしちいき〉", nameRomanized: "Takakanagawa Gateway <Shin-rampo Seinan Kosho Rakka Kiki Ana Toshi Chiiki>", position: [-153, 632], url: true },
  { id: "saimyo", stationNumber: ["DR04"], name: "祭明", nameRomanized: "Saimyo", position: [0, 867], url: true },
  { id: "yurizono", stationNumber: ["DR05"], name: "百合園", nameRomanized: "Yurizono", position: [0, 1041], url: true },
  { id: "yuno-onsen", stationNumber: ["DR06"], name: "湯野温泉", nameRomanized: "Yuno-onsen", position: [0, 1246], url: true },
  { id: "lase-chuo", stationNumber: ["DR07", "sushi-railway-lase-chuo"], name: "lase中央", nameRomanized: "lase-chuo", position: [0, 1435], url: true },

  { id: "shin-ranpo", stationNumber: ["DP03"], name: "新乱歩", nameRomanized: "Shin-ranpo", position: [37, 370], url: true },

  { id: "sushi-railway-mura", stationNumber: ["sushi-railway-mura"], name: "村", nameRomanized: "Mura", position: [859, 1658] },
  { id: "sushi-railway-portal", stationNumber: ["sushi-railway-portal"], name: "ポータル", nameRomanized: "Portal", position: [1117, 1590] },
  
  { id: "scjp-chuowan", stationNumber: ["IS01"], name: "ScJP中央湾", nameRomanized: "ScJP-chuowan", position: [-74, 27] },
  { id: "keikenchi-farm", stationNumber: ["IS02"], name: "経験値ファーム", nameRomanized: "Keikenchi Farm", position: [-74, -65] },
  { id: "kojo-gun", stationNumber: ["IS03"], name: "工場群", nameRomanized: "Kojo-gun", position: [-74, -158] },
  { id: "kaitei-shinden-mae", stationNumber: ["IS04"], name: "海底神殿前", nameRomanized: "Kaitei Shinden-mae", position: [193, -244] },
  { id: "murabito-no-sokutsu", stationNumber: ["IS05"], name: "村人ノ巣窟", nameRomanized: "Murabito no Sokutsu", position: [831, -243] },
  { id: "kaiteishinden", stationNumber: ["IS11"], name: "海底神殿", nameRomanized: "Kaitei Shinden", position: [195, -401] },

  { id: "scjp-nishi", stationNumber: ["IA01"], name: "ScJP西", nameRomanized: "ScJP Nishi", position: [-216, 69] },
  { id: "ia02-scjp-chuo", stationNumber: ["IA02"], name: "ScJP中央", nameRomanized: "ScJP Chuo", position: [-94, 67] },
  { id: "rotenboriba-mae", stationNumber: ["IA03"], name: "露天掘り場前", nameRomanized: "Rotenboriba-mae", position: [-81, 224] },
]

export const lines: Line[] = [
  { 
    id: "DP", 
    name: "乱歩線", 
    color: "#c1a470", 
    stationNumbers: [
      "DP01",
      "DP02",
      "DP03",
    ],
  },
  { 
    id: "sushi-railway", 
    name: "寿鉄", 
    color: "#fcba03", 
    stationNumbers: [
      "sushi-railway-lase-chuo",
      "sushi-railway-mura",
      "sushi-railway-portal",
    ],
  },
  { 
    id: "IS0X", 
    name: "揚芋洋上線", 
    color: "#ff3633", 
    stationNumbers: [
      "IS01",
      "IS02",
      "IS03",
      "IS04",
      "IS05",
    ],
  },
  { 
    id: "IS1X", 
    name: "揚芋洋上線", 
    color: "#ff3633", 
    stationNumbers: [
      "IS04",
      "IS11",
    ],
  },
  { 
    id: "IA", 
    name: "揚芋アクセス線", 
    color: "#ff4d70", 
    stationNumbers: [
      "IA01",
      "IA02",
      "IA03",
    ],
  },
  { 
    id: "DR", 
    name: "本線", 
    color: "#2478ff", 
    stationNumbers: [
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

export const stationAppearance: StationAppearance[] = [
  {
    id: "scjp-chuo",
    label: {
      offsetX: -55,
      offsetY: -50,
      rotation: 45,
    },
  },
  {
    id: "roten-mae",
    label: {
      offsetX: -62.5,
      offsetY: 5,
    },
  },
  {
    id: "ia02-scjp-chuo",
    label: {
      offsetY: 6,
    },
  },
  {
    id: "kojo-gun",
    label: {
      offsetX: -60,
      offsetY: 4,
    },
  },
  {
    id: "kaitei-shinden-mae",
    label: {
      offsetX: 3,
      offsetY: 17,
      rotation: 45,
    },
  },
  {
    id: "scjp-nishi",
    label: {
      offsetX: -55,
    },
  },
  {
    id: "sushi-railway-mura",
    label: {
      offsetX: -8,
      offsetY: -15,
    },
  },
]