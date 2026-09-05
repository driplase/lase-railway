export interface Station {
  id: string;
  trainNumber: string[];
  name: string;
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
  { id: "scjp-chuo", trainNumber: ["DR01", "DP01"], name: "ScJP中央", nameRomanized: "ScJP-chuo", position: [-159, 56] },
  { id: "roten-mae", trainNumber: ["DR02", "DP02"], name: "露天前", nameRomanized: "Roten-mae", position: [-148, 248] },
  { id: "scjp-minamino", trainNumber: ["DR03"], name: "ScJPみなみ野", nameRomanized: "ScJP-minamino", position: [-153, 590] },
  { id: "fujido", trainNumber: ["DR04"], name: "藤堂", nameRomanized: "Fujido", position: [-100, 689] },
  { id: "saimyo", trainNumber: ["DR05"], name: "祭明", nameRomanized: "Saimyo", position: [0, 867] },
  { id: "yurizono", trainNumber: ["DR06"], name: "百合園", nameRomanized: "Yurizono", position: [0, 1041] },
  { id: "yuno-onsen", trainNumber: ["DR07"], name: "湯野温泉", nameRomanized: "Yuno-onsen", position: [0, 1246] },
  { id: "lase-chuo", trainNumber: ["DR08"], name: "lase中央", nameRomanized: "lase-chuo", position: [0, 1435] },
  { id: "shin-ranpo", trainNumber: ["DP03"], name: "新乱歩", nameRomanized: "Shin-ranpo", position: [37, 370] },
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
      "DR08",
    ],
  },
]