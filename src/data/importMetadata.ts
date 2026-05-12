export type ImportMetadataSource = "bangumi" | "anilist";

export type ImportMetadataPart = {
  inputTitle: string;
  matchedTitle?: string;
  source?: ImportMetadataSource;
  sourceUrl?: string;
  platform?: string;
  totalEpisodes?: number;
  rating?: number;
  confidence: number;
  query?: string;
  cacheKey?: string;
  hintSignature?: string;
};

export type ImportMetadataRecord = {
  raw: string;
  parts: ImportMetadataPart[];
};

export const importMetadataRecords: ImportMetadataRecord[] = [
  {
    "raw": "金色时光(青春纪行)24",
    "parts": [
      {
        "inputTitle": "金色时光(青春纪行)",
        "matchedTitle": "青春纪行",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/68031",
        "platform": "TV",
        "totalEpisodes": 24,
        "rating": 6.5,
        "confidence": 133,
        "query": "金色时光(青春纪行)",
        "cacheKey": "import-metadata-v1:79c2eeb7b7f87c4677a2",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "达尔文游戏12",
    "parts": [
      {
        "inputTitle": "达尔文游戏",
        "matchedTitle": "达尔文游戏",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/266147",
        "platform": "TV",
        "totalEpisodes": 11,
        "rating": 6.2,
        "confidence": 133,
        "query": "达尔文游戏",
        "cacheKey": "import-metadata-v1:bedb5c8a63d1c4dda9b4",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "刀剑神域二季+爱丽丝篇三季+ggo剧场版+无星之夜的咏叹调+序列之争+extra edition+进击篇暮色黄昏+外传Gun Gale Online 第二季 12",
    "parts": [
      {
        "inputTitle": "刀剑神域",
        "matchedTitle": "刀剑神域",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/23686",
        "platform": "TV",
        "totalEpisodes": 25,
        "rating": 7.4,
        "confidence": 135,
        "query": "刀剑神域",
        "cacheKey": "import-metadata-v1:035ffbf9bd9d38f2ed5e",
        "hintSignature": "[]"
      },
      {
        "inputTitle": "爱丽丝篇",
        "matchedTitle": "刀剑神域 爱丽丝篇",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/225604",
        "platform": "TV",
        "totalEpisodes": 24,
        "rating": 6.2,
        "confidence": 135,
        "query": "爱丽丝篇",
        "cacheKey": "import-metadata-v1:badcfb764ea31f40c636",
        "hintSignature": "[]"
      },
      {
        "inputTitle": "ggo剧场版",
        "matchedTitle": "刀剑神域外传 Gun Gale Online",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/226750",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 6.5,
        "confidence": 135,
        "query": "ggo剧场版",
        "cacheKey": "import-metadata-v1:6b05adeabfbe43ef9b2e",
        "hintSignature": "[]"
      },
      {
        "inputTitle": "无星之夜的咏叹调",
        "matchedTitle": "剧场版 刀剑神域 进击篇 无星之夜的咏叹调",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/315375",
        "platform": "剧场版",
        "totalEpisodes": 1,
        "rating": 7,
        "confidence": 135,
        "query": "刀剑神域 进击篇 无星之夜的咏叹调",
        "cacheKey": "import-metadata-v1:354b56a3341e72e6606f",
        "hintSignature": "[\"刀剑神域 进击篇 无星之夜的咏叹调\"]"
      },
      {
        "inputTitle": "序列之争",
        "matchedTitle": "刀剑神域 序列之争",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/148099",
        "platform": "剧场版",
        "totalEpisodes": 1,
        "rating": 6.8,
        "confidence": 135,
        "query": "刀剑神域 序列之争",
        "cacheKey": "import-metadata-v1:10fbe981d9d732c35a45",
        "hintSignature": "[\"刀剑神域 序列之争\"]"
      },
      {
        "inputTitle": "extra edition",
        "matchedTitle": "刀剑神域 Extra Edition",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/84866",
        "platform": "TV",
        "totalEpisodes": 1,
        "rating": 6.3,
        "confidence": 133,
        "query": "extra edition",
        "cacheKey": "import-metadata-v1:5ec20974e3b79adbd751",
        "hintSignature": "[]"
      },
      {
        "inputTitle": "进击篇暮色黄昏",
        "matchedTitle": "剧场版 刀剑神域 进击篇 黯淡黄昏的谐谑曲",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/355004",
        "platform": "剧场版",
        "totalEpisodes": 1,
        "rating": 6.4,
        "confidence": 135,
        "query": "刀剑神域 进击篇 暮色黄昏",
        "cacheKey": "import-metadata-v1:4db57a987c252df0c05d",
        "hintSignature": "[\"刀剑神域 进击篇 暮色黄昏\"]"
      },
      {
        "inputTitle": "外传Gun Gale Online",
        "matchedTitle": "刀剑神域外传 Gun Gale Online",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/226750",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 6.5,
        "confidence": 135,
        "query": "Gun Gale Online",
        "cacheKey": "import-metadata-v1:491c340a207deedecfe7",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "缘之空12",
    "parts": [
      {
        "inputTitle": "缘之空",
        "matchedTitle": "缘之空",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/7157",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 6.6,
        "confidence": 135,
        "query": "缘之空",
        "cacheKey": "import-metadata-v1:9f4540d66baf38ec0341",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "小林家的龙女仆2季",
    "parts": [
      {
        "inputTitle": "小林家的龙女仆",
        "matchedTitle": "小林家的龙女仆",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/179949",
        "platform": "TV",
        "totalEpisodes": 14,
        "rating": 7.4,
        "confidence": 135,
        "query": "小林家的龙女仆",
        "cacheKey": "import-metadata-v1:4f7d485a758a83ec5c01",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "转生成蜘蛛又怎样24",
    "parts": [
      {
        "inputTitle": "转生成蜘蛛又怎样",
        "matchedTitle": "转生成蜘蛛又怎样！",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/252782",
        "platform": "TV",
        "totalEpisodes": 24,
        "rating": 6,
        "confidence": 135,
        "query": "转生成蜘蛛又怎样",
        "cacheKey": "import-metadata-v1:cad10035dd3d74c73bab",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "打工吧魔王大人二季25集",
    "parts": [
      {
        "inputTitle": "打工吧魔王大人",
        "matchedTitle": "打工吧！魔王大人",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/50814",
        "platform": "TV",
        "totalEpisodes": 13,
        "rating": 7.1,
        "confidence": 135,
        "query": "打工吧魔王大人",
        "cacheKey": "import-metadata-v1:5df26be8c266d4a60c30",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "无职转生二季2part",
    "parts": [
      {
        "inputTitle": "无职转生",
        "matchedTitle": "无职转生～到了异世界就拿出真本事～",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/277554",
        "platform": "TV",
        "totalEpisodes": 11,
        "rating": 7.9,
        "confidence": 135,
        "query": "无职转生",
        "cacheKey": "import-metadata-v1:ef643e8fff2294b60aec",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "终末的女武神2季26",
    "parts": [
      {
        "inputTitle": "终末的女武神",
        "matchedTitle": "终末的女武神",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/322900",
        "platform": "WEB",
        "totalEpisodes": 12,
        "rating": 5.5,
        "confidence": 127,
        "query": "终末的女武神",
        "cacheKey": "import-metadata-v1:18ba6ad420d8f35dd99a",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "剃须然后捡到女高中生12",
    "parts": [
      {
        "inputTitle": "剃须然后捡到女高中生",
        "matchedTitle": "剃须。然后捡到女高中生。",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/297254",
        "platform": "TV",
        "totalEpisodes": 13,
        "rating": 5.3,
        "confidence": 135,
        "query": "剃须然后捡到女高中生",
        "cacheKey": "import-metadata-v1:0cedd1544158589c4bcb",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "打了300年史莱姆不知不觉满级12",
    "parts": [
      {
        "inputTitle": "打了300年史莱姆不知不觉满级",
        "matchedTitle": "打了300年的史莱姆，不知不觉就练到了满级",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/292969",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 6.3,
        "confidence": 135,
        "query": "打了300年的史莱姆，不知不觉就练到了满级",
        "cacheKey": "import-metadata-v1:b9c47dbbfdfb51b6cb00",
        "hintSignature": "[\"打了300年的史莱姆，不知不觉就练到了满级\"]"
      }
    ]
  },
  {
    "raw": "新妹魔王的契约者 12...",
    "parts": [
      {
        "inputTitle": "新妹魔王的契约者 12",
        "matchedTitle": "新妹魔王的契约者",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/100205",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 5.8,
        "confidence": 135,
        "query": "新妹魔王的契约者 12",
        "cacheKey": "import-metadata-v1:0ea0bfef66b285866174",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "魔王学院的不适任者二季 24",
    "parts": [
      {
        "inputTitle": "魔王学院的不适任者",
        "matchedTitle": "魔王学院的不适任者～史上最强的魔王始祖，转生就读子孙们的学校～ 第二季",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/330054",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 5.8,
        "confidence": 132,
        "query": "魔王学院的不适任者",
        "cacheKey": "import-metadata-v1:791c4910070c5a0a5a5f",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "JOJO的奇妙冒险 123456部 -- 完结",
    "parts": [
      {
        "inputTitle": "JOJO的奇妙冒险",
        "matchedTitle": "JOJO的奇妙冒险",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/43558",
        "platform": "TV",
        "totalEpisodes": 26,
        "rating": 7.7,
        "confidence": 135,
        "query": "JOJO的奇妙冒险",
        "cacheKey": "import-metadata-v1:d83d17dc3d3341b7fb71",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "约会大作战12345 -- 完结 ➕狂三外传",
    "parts": [
      {
        "inputTitle": "约会大作战",
        "matchedTitle": "约会大作战",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/49131",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 6.7,
        "confidence": 135,
        "query": "约会大作战",
        "cacheKey": "import-metadata-v1:16e9de73f0185c9a2133",
        "hintSignature": "[]"
      },
      {
        "inputTitle": "狂三外传",
        "matchedTitle": "约会大作战 赤黑新章：虚或实",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/291171",
        "platform": "OVA",
        "totalEpisodes": 1,
        "rating": 6.2,
        "confidence": 132,
        "query": "狂三外传",
        "cacheKey": "import-metadata-v1:f29e9b73f246827a1ecc",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "我想吃掉你的胰脏",
    "parts": [
      {
        "inputTitle": "我想吃掉你的胰脏",
        "matchedTitle": "我想吃掉你的胰脏",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/221736",
        "platform": "剧场版",
        "totalEpisodes": 1,
        "rating": 6.9,
        "confidence": 135,
        "query": "我想吃掉你的胰脏",
        "cacheKey": "import-metadata-v1:c13f40fac63a89a9f904",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "天气之子",
    "parts": [
      {
        "inputTitle": "天气之子",
        "matchedTitle": "天气之子",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/269235",
        "platform": "剧场版",
        "totalEpisodes": 1,
        "rating": 7.1,
        "confidence": 135,
        "query": "天气之子",
        "cacheKey": "import-metadata-v1:65bf7a4b77cb2b15e262",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "你的名字",
    "parts": [
      {
        "inputTitle": "你的名字",
        "matchedTitle": "你的名字。",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/160209",
        "platform": "剧场版",
        "totalEpisodes": 1,
        "rating": 8.1,
        "confidence": 135,
        "query": "你的名字",
        "cacheKey": "import-metadata-v1:bb9fa6d39eef7249ecfb",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "漆黑的子弹13",
    "parts": [
      {
        "inputTitle": "漆黑的子弹",
        "matchedTitle": "漆黑的子弹",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/84873",
        "platform": "TV",
        "totalEpisodes": 13,
        "rating": 6.5,
        "confidence": 135,
        "query": "漆黑的子弹",
        "cacheKey": "import-metadata-v1:ea8f688a8314c712115b",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "魔女之旅 12",
    "parts": [
      {
        "inputTitle": "魔女之旅",
        "matchedTitle": "魔女之旅",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/292970",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 7.2,
        "confidence": 135,
        "query": "魔女之旅",
        "cacheKey": "import-metadata-v1:16fb145ae4642ac982a0",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "青梅竹马不会输的恋爱喜剧 12",
    "parts": [
      {
        "inputTitle": "青梅竹马不会输的恋爱喜剧",
        "matchedTitle": "我女友与青梅竹马的惨烈修罗场",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/43557",
        "platform": "TV",
        "totalEpisodes": 13,
        "rating": 6.4,
        "confidence": 85,
        "query": "青梅竹马不会输的恋爱喜剧",
        "cacheKey": "import-metadata-v1:f442174bc75986fdd1fa",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "这个勇者明明超强却过分慎重 12",
    "parts": [
      {
        "inputTitle": "这个勇者明明超强却过分慎重",
        "matchedTitle": "慎重勇者 ～这个勇者明明超强却过分慎重～",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/266157",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 6.9,
        "confidence": 85,
        "query": "这个勇者明明超强却过分慎重",
        "cacheKey": "import-metadata-v1:1b45ede6c6abbfb80a55",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "为美好的世界献上祝福3季+红传说",
    "parts": [
      {
        "inputTitle": "为美好的世界献上祝福",
        "matchedTitle": "为美好的世界献上祝福！",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/135275",
        "platform": "TV",
        "totalEpisodes": 10,
        "rating": 7.7,
        "confidence": 135,
        "query": "为美好的世界献上祝福",
        "cacheKey": "import-metadata-v1:bcdf001a9691815379c6",
        "hintSignature": "[]"
      },
      {
        "inputTitle": "红传说",
        "matchedTitle": "电影 为美好的世界献上祝福！红传说",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/220631",
        "platform": "剧场版",
        "totalEpisodes": 1,
        "rating": 7.6,
        "confidence": 135,
        "query": "为美好的世界献上祝福 红传说",
        "cacheKey": "import-metadata-v1:9814ee0b46e89138a23f",
        "hintSignature": "[\"为美好的世界献上祝福 红传说\",\"この素晴らしい世界に祝福を 紅伝説\"]"
      }
    ]
  },
  {
    "raw": "+为美好的世界献上爆炎 12",
    "parts": [
      {
        "inputTitle": "为美好的世界献上爆炎",
        "matchedTitle": "为美好的世界献上爆焰！",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/385209",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 7,
        "confidence": 135,
        "query": "为美好的世界献上爆炎",
        "cacheKey": "import-metadata-v1:4a2d76e306df91526b3f",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "妖狐X仆SS 13",
    "parts": [
      {
        "inputTitle": "妖狐X仆SS",
        "matchedTitle": "妖狐×仆SS",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/20582",
        "platform": "TV",
        "totalEpisodes": 13,
        "rating": 6.7,
        "confidence": 85,
        "query": "妖狐X仆SS",
        "cacheKey": "import-metadata-v1:51d5ab5886d8da50d59e",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "我女友与青梅竹马的惨烈修罗场",
    "parts": [
      {
        "inputTitle": "我女友与青梅竹马的惨烈修罗场",
        "matchedTitle": "我女友与青梅竹马的惨烈修罗场",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/43557",
        "platform": "TV",
        "totalEpisodes": 13,
        "rating": 6.4,
        "confidence": 135,
        "query": "我女友与青梅竹马的惨烈修罗场",
        "cacheKey": "import-metadata-v1:25cd8fd8a714398879e5",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "终结的炽天使 12+名古屋决战 24",
    "parts": [
      {
        "inputTitle": "终结的炽天使",
        "matchedTitle": "终结的炽天使",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/112151",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 5.7,
        "confidence": 135,
        "query": "终结的炽天使",
        "cacheKey": "import-metadata-v1:8ba04ce3dbe8d0a2ff53",
        "hintSignature": "[]"
      },
      {
        "inputTitle": "名古屋决战",
        "matchedTitle": "终结的炽天使",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/112151",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 5.7,
        "confidence": 135,
        "query": "终结的炽天使 名古屋决战",
        "cacheKey": "import-metadata-v1:681bd339fd1829d1779a",
        "hintSignature": "[\"终结的炽天使 名古屋决战\"]"
      }
    ]
  },
  {
    "raw": "五等分的花嫁2季 24+剧场版",
    "parts": [
      {
        "inputTitle": "五等分的花嫁",
        "matchedTitle": "五等分的新娘",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/256114",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 6,
        "confidence": 135,
        "query": "五等分的花嫁",
        "cacheKey": "import-metadata-v1:05aa17b3ff09524cede5",
        "hintSignature": "[]"
      },
      {
        "inputTitle": "剧场版",
        "matchedTitle": "剧场版 空之境界 第一章 俯瞰风景",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/233",
        "platform": "剧场版",
        "totalEpisodes": 1,
        "rating": 7.9,
        "confidence": 135,
        "query": "剧场版",
        "cacheKey": "import-metadata-v1:f0b00271dc54319e2af0",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "斩赤红之瞳 24",
    "parts": [
      {
        "inputTitle": "斩赤红之瞳",
        "matchedTitle": "斩·赤红之瞳！",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/94244",
        "platform": "TV",
        "totalEpisodes": 24,
        "rating": 6.6,
        "confidence": 135,
        "query": "斩赤红之瞳",
        "cacheKey": "import-metadata-v1:728a562924749be3accb",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "在魔王的城堡说晚安 12",
    "parts": [
      {
        "inputTitle": "在魔王的城堡说晚安",
        "matchedTitle": "在魔王城说晚安",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/290426",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 7,
        "confidence": 135,
        "query": "在魔王城说晚安",
        "cacheKey": "import-metadata-v1:9585f62b023550af95a9",
        "hintSignature": "[\"在魔王城说晚安\"]"
      }
    ]
  },
  {
    "raw": "冰菓 22",
    "parts": [
      {
        "inputTitle": "冰菓",
        "matchedTitle": "冰菓",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/27364",
        "platform": "TV",
        "totalEpisodes": 22,
        "rating": 8.2,
        "confidence": 135,
        "query": "冰菓",
        "cacheKey": "import-metadata-v1:6f2b4ad8951289e2165f",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "Darling in Frankxx(国家队) 24",
    "parts": [
      {
        "inputTitle": "Darling in Frankxx(国家队)",
        "matchedTitle": "DARLING in the FRANXX",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/218711",
        "platform": "TV",
        "totalEpisodes": 24,
        "rating": 6.2,
        "confidence": 85,
        "query": "Darling in Frankxx(国家队)",
        "cacheKey": "import-metadata-v1:9b41d82ff67f5d60fdc2",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "星刻的龙骑士 12",
    "parts": [
      {
        "inputTitle": "星刻的龙骑士",
        "matchedTitle": "星刻的龙骑士",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/79225",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 5.3,
        "confidence": 130,
        "query": "星刻的龙骑士",
        "cacheKey": "import-metadata-v1:988c217466a487fea4f1",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "游戏人生 12+剧场版",
    "parts": [
      {
        "inputTitle": "游戏人生",
        "matchedTitle": "游戏人生",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/79227",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 7.8,
        "confidence": 135,
        "query": "游戏人生",
        "cacheKey": "import-metadata-v1:04a2d09f2fdbf06c5d7e",
        "hintSignature": "[]"
      },
      {
        "inputTitle": "剧场版",
        "matchedTitle": "剧场版 空之境界 第一章 俯瞰风景",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/233",
        "platform": "剧场版",
        "totalEpisodes": 1,
        "rating": 7.9,
        "confidence": 135,
        "query": "剧场版",
        "cacheKey": "import-metadata-v1:bdda4b9b9586e968bbbc",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "re 0 从零开始的异世界生活 三季（前后半） 79 + 剧场版2部",
    "parts": [
      {
        "inputTitle": "re 0 从零开始的异世界生活",
        "matchedTitle": "Re：从零开始的异世界生活 第三季 袭击篇",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/425998",
        "platform": "TV",
        "totalEpisodes": 8,
        "rating": 7.2,
        "confidence": 135,
        "query": "re 0 从零开始的异世界生活",
        "cacheKey": "import-metadata-v1:5103177ed9681cc0abab",
        "hintSignature": "[]"
      },
      {
        "inputTitle": "剧场版2部",
        "matchedTitle": "机动警察剧场版2 和平保卫战",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/321",
        "platform": "剧场版",
        "totalEpisodes": 1,
        "rating": 8.8,
        "confidence": 84,
        "query": "剧场版2部",
        "cacheKey": "import-metadata-v1:da222a9385906936b2b7",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "咒文禁忌 12（垃圾）",
    "parts": [
      {
        "inputTitle": "咒文禁忌",
        "matchedTitle": "禁忌咒纹",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/123178",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 4.5,
        "confidence": 129,
        "query": "禁忌咒纹",
        "cacheKey": "import-metadata-v1:e296a36d347b071b5259",
        "hintSignature": "[\"禁忌咒纹\"]"
      }
    ]
  },
  {
    "raw": "咒术回战二季 47+剧场版",
    "parts": [
      {
        "inputTitle": "咒术回战",
        "matchedTitle": "咒术回战",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/294993",
        "platform": "TV",
        "totalEpisodes": 24,
        "rating": 7.1,
        "confidence": 135,
        "query": "咒术回战",
        "cacheKey": "import-metadata-v1:0a2ae579ceaf70c782ce",
        "hintSignature": "[]"
      },
      {
        "inputTitle": "剧场版",
        "matchedTitle": "剧场版 空之境界 第一章 俯瞰风景",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/233",
        "platform": "剧场版",
        "totalEpisodes": 1,
        "rating": 7.9,
        "confidence": 135,
        "query": "剧场版",
        "cacheKey": "import-metadata-v1:9a3927f37734514766c5",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "东京喰种四季",
    "parts": [
      {
        "inputTitle": "东京喰种",
        "matchedTitle": "东京喰种",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/93714",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 6.8,
        "confidence": 135,
        "query": "东京喰种",
        "cacheKey": "import-metadata-v1:8bb2ce43c60e35bc9162",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "鬼灭之刃（漫画至少看完了）",
    "parts": [
      {
        "inputTitle": "鬼灭之刃",
        "matchedTitle": "鬼灭之刃",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/245665",
        "platform": "TV",
        "totalEpisodes": 26,
        "rating": 7.3,
        "confidence": 135,
        "query": "鬼灭之刃",
        "cacheKey": "import-metadata-v1:522fdbf862f06f1881d4",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "干物妹小埋12+ova",
    "parts": [
      {
        "inputTitle": "干物妹小埋",
        "matchedTitle": "干物妹！小埋",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/120187",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 6.8,
        "confidence": 135,
        "query": "干物妹小埋",
        "cacheKey": "import-metadata-v1:9cc1f58d0c73937220eb",
        "hintSignature": "[]"
      },
      {
        "inputTitle": "ova",
        "matchedTitle": "皇家国教骑士团 OVA",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/493",
        "platform": "OVA",
        "totalEpisodes": 10,
        "rating": 8.2,
        "confidence": 135,
        "query": "ova",
        "cacheKey": "import-metadata-v1:2ee13cf4e0ebfa405761",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "变态王子与不笑猫 12",
    "parts": [
      {
        "inputTitle": "变态王子与不笑猫",
        "matchedTitle": "变态王子与不笑猫。",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/45842",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 6.8,
        "confidence": 135,
        "query": "变态王子与不笑猫",
        "cacheKey": "import-metadata-v1:dfd69f0823cde8177cc1",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "不正经的魔法讲师 15",
    "parts": [
      {
        "inputTitle": "不正经的魔法讲师",
        "matchedTitle": "不正经的魔术讲师与禁忌教典",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/174138",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 6.2,
        "confidence": 85,
        "query": "不正经的魔法讲师",
        "cacheKey": "import-metadata-v1:30c779e385a5eb978eff",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "只要可爱即使是变态 12",
    "parts": [
      {
        "inputTitle": "只要可爱即使是变态",
        "matchedTitle": "只要可爱即使是变态你也会喜欢我吧？",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/275371",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 6.1,
        "confidence": 85,
        "query": "只要可爱即使是变态",
        "cacheKey": "import-metadata-v1:faecb76416c1d5189e38",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "夏洛特 13",
    "parts": [
      {
        "inputTitle": "夏洛特",
        "matchedTitle": "夏洛特",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/120925",
        "platform": "TV",
        "totalEpisodes": 14,
        "rating": 6.4,
        "confidence": 135,
        "query": "夏洛特",
        "cacheKey": "import-metadata-v1:c8d89168f72a86c7cae1",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "贤者之孙 12",
    "parts": [
      {
        "inputTitle": "贤者之孙",
        "matchedTitle": "贤者之孙",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/226256",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 4.6,
        "confidence": 134,
        "query": "贤者之孙",
        "cacheKey": "import-metadata-v1:a3046e92f6145aafa6d1",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "高校之神12",
    "parts": [
      {
        "inputTitle": "高校之神",
        "matchedTitle": "高校之神",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/305511",
        "platform": "TV",
        "totalEpisodes": 13,
        "rating": 6,
        "confidence": 129,
        "query": "高校之神",
        "cacheKey": "import-metadata-v1:da330f47d43c9abca1ce",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "青春笨蛋少年不做兔女郎学姐的梦13",
    "parts": [
      {
        "inputTitle": "青春笨蛋少年不做兔女郎学姐的梦",
        "matchedTitle": "青春猪头少年不会梦到兔女郎学姐",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/240038",
        "platform": "TV",
        "totalEpisodes": 13,
        "rating": 7.4,
        "confidence": 135,
        "query": "青春笨蛋少年不做兔女郎学姐的梦",
        "cacheKey": "import-metadata-v1:efaf889514b451e66e46",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "青春笨蛋少年不做怀梦美少女的梦",
    "parts": [
      {
        "inputTitle": "青春笨蛋少年不做怀梦美少女的梦",
        "matchedTitle": "青春猪头少年不会梦到怀梦美少女",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/260680",
        "platform": "剧场版",
        "totalEpisodes": 1,
        "rating": 7.4,
        "confidence": 135,
        "query": "青春笨蛋少年不做怀梦美少女的梦",
        "cacheKey": "import-metadata-v1:21bb7b027517f001a25a",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "青春笨蛋少年不做娇怜外出妹的梦",
    "parts": [
      {
        "inputTitle": "青春笨蛋少年不做娇怜外出妹的梦",
        "matchedTitle": "青春猪头少年不会梦到娇怜外出妹",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/402656",
        "platform": "剧场版",
        "totalEpisodes": 1,
        "rating": 6.6,
        "confidence": 135,
        "query": "青春笨蛋少年不做娇怜外出妹的梦",
        "cacheKey": "import-metadata-v1:481e56927d86da6cc995",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "青春笨蛋少年不做小学美少女的梦",
    "parts": [
      {
        "inputTitle": "青春笨蛋少年不做小学美少女的梦",
        "matchedTitle": "青春猪头少年不会梦到红书包女孩",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/426239",
        "platform": "剧场版",
        "totalEpisodes": 1,
        "rating": 6.9,
        "confidence": 135,
        "query": "青春笨蛋少年不做小学美少女的梦",
        "cacheKey": "import-metadata-v1:db19301efcd541228cc8",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "青春笨蛋少年不做圣诞服女郎的梦",
    "parts": [
      {
        "inputTitle": "青春笨蛋少年不做圣诞服女郎的梦",
        "matchedTitle": "青春猪头少年不会梦到圣诞服女郎",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/467930",
        "platform": "TV",
        "totalEpisodes": 13,
        "rating": 6.8,
        "confidence": 135,
        "query": "青春笨蛋少年不做圣诞服女郎的梦",
        "cacheKey": "import-metadata-v1:8f9ccc3c027624b6ab6c",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "月色真美12",
    "parts": [
      {
        "inputTitle": "月色真美",
        "matchedTitle": "月色真美",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/207573",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 7.9,
        "confidence": 135,
        "query": "月色真美",
        "cacheKey": "import-metadata-v1:acac48a438f9956d28f8",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "樱花庄的宠物女孩24",
    "parts": [
      {
        "inputTitle": "樱花庄的宠物女孩",
        "matchedTitle": "樱花庄的宠物女孩",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/41488",
        "platform": "TV",
        "totalEpisodes": 24,
        "rating": 7.4,
        "confidence": 135,
        "query": "樱花庄的宠物女孩",
        "cacheKey": "import-metadata-v1:c5c60ae2ec04c20ef463",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "境界的彼方12+过去未来篇",
    "parts": [
      {
        "inputTitle": "境界的彼方",
        "matchedTitle": "境界的彼方",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/49278",
        "platform": "TV",
        "totalEpisodes": 13,
        "rating": 6.8,
        "confidence": 135,
        "query": "境界的彼方",
        "cacheKey": "import-metadata-v1:4088a4d43c2c2b603dad",
        "hintSignature": "[]"
      },
      {
        "inputTitle": "过去未来篇",
        "matchedTitle": "境界的彼方",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/49278",
        "platform": "TV",
        "totalEpisodes": 13,
        "rating": 6.8,
        "confidence": 135,
        "query": "境界的彼方 过去篇",
        "cacheKey": "import-metadata-v1:768b2c0031665fda3c0d",
        "hintSignature": "[\"境界的彼方 过去篇\",\"境界的彼方 未来篇\"]"
      }
    ]
  },
  {
    "raw": "武装少女12",
    "parts": [
      {
        "inputTitle": "武装少女",
        "matchedTitle": "武装少女",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/185562",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 6,
        "confidence": 131,
        "query": "武装少女",
        "cacheKey": "import-metadata-v1:8e74a86e9028cd65b026",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "中二病也要谈恋爱2季+take on me剧场 + 恋 lite",
    "parts": [
      {
        "inputTitle": "中二病也要谈恋爱",
        "matchedTitle": "中二病也要谈恋爱！",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/29648",
        "platform": "TV",
        "totalEpisodes": 13,
        "rating": 7.4,
        "confidence": 135,
        "query": "中二病也要谈恋爱",
        "cacheKey": "import-metadata-v1:8ecff5343734f2f932b0",
        "hintSignature": "[]"
      },
      {
        "inputTitle": "take on me剧场",
        "matchedTitle": "电影 中二病也要谈恋爱！ -Take On Me-",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/215425",
        "platform": "剧场版",
        "totalEpisodes": 1,
        "rating": 7.5,
        "confidence": 135,
        "query": "take on me剧场",
        "cacheKey": "import-metadata-v1:c6576e58ecb775f4daad",
        "hintSignature": "[]"
      },
      {
        "inputTitle": "恋 lite",
        "matchedTitle": "中二病也要谈恋爱！恋 Lite",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/91651",
        "platform": "WEB",
        "totalEpisodes": 6,
        "rating": 6.9,
        "confidence": 132,
        "query": "恋 lite",
        "cacheKey": "import-metadata-v1:9deae96e5fb1cfecbafa",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "工作细胞2季+black",
    "parts": [
      {
        "inputTitle": "工作细胞",
        "matchedTitle": "工作细胞",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/235612",
        "platform": "TV",
        "totalEpisodes": 14,
        "rating": 6.9,
        "confidence": 135,
        "query": "工作细胞",
        "cacheKey": "import-metadata-v1:cb68a60099dfbf2b2052",
        "hintSignature": "[]"
      },
      {
        "inputTitle": "black",
        "matchedTitle": "黑礁",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/979",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 7.8,
        "confidence": 85,
        "query": "black",
        "cacheKey": "import-metadata-v1:cc62092b5a710f4940ea",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "昴宿七星12",
    "parts": [
      {
        "inputTitle": "昴宿七星",
        "matchedTitle": "昴宿七星",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/225843",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 4.5,
        "confidence": 129,
        "query": "昴宿七星",
        "cacheKey": "import-metadata-v1:d449ebb2ab75511bd2cd",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "辉夜大小姐三季+初吻不会结束(剧场版) + 通往大人的阶梯 2",
    "parts": [
      {
        "inputTitle": "辉夜大小姐",
        "matchedTitle": "辉夜大小姐想让我告白～天才们的恋爱头脑战～",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/248175",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 7.8,
        "confidence": 135,
        "query": "辉夜大小姐",
        "cacheKey": "import-metadata-v1:4b6eeb13fbad638f752c",
        "hintSignature": "[]"
      },
      {
        "inputTitle": "初吻不会结束(剧场版)",
        "matchedTitle": "辉夜大小姐想让我告白-初吻不会结束- 电影",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/389474",
        "platform": "剧场版",
        "totalEpisodes": 1,
        "rating": 8,
        "confidence": 135,
        "query": "初吻不会结束(剧场版)",
        "cacheKey": "import-metadata-v1:f422cf6f45a3a99898d3",
        "hintSignature": "[]"
      },
      {
        "inputTitle": "通往大人的阶梯",
        "matchedTitle": "辉夜大小姐想让我告白 通往大人的阶梯",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/565802",
        "platform": "TV",
        "totalEpisodes": 2,
        "rating": 8.3,
        "confidence": 135,
        "query": "辉夜大小姐 通往大人的阶梯",
        "cacheKey": "import-metadata-v1:0bd1dbfe6fdf21ff23f3",
        "hintSignature": "[\"辉夜大小姐 通往大人的阶梯\"]"
      }
    ]
  },
  {
    "raw": "街角魔族二季 24",
    "parts": [
      {
        "inputTitle": "街角魔族",
        "matchedTitle": "街角魔族",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/272510",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 7.5,
        "confidence": 135,
        "query": "街角魔族",
        "cacheKey": "import-metadata-v1:08ed1524d0ec8d473074",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "关于我女友是一个一本正经的处女碧池10",
    "parts": [
      {
        "inputTitle": "关于我女友是一个一本正经的处女碧池",
        "matchedTitle": "关于我女友是个一本正经的碧池这件事",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/216570",
        "platform": "TV",
        "totalEpisodes": 10,
        "rating": 5.5,
        "confidence": 132,
        "query": "关于我女友是个一本正经的碧池这件事",
        "cacheKey": "import-metadata-v1:63b273d08e6f77b06215",
        "hintSignature": "[\"关于我女友是个一本正经的碧池这件事\"]"
      }
    ]
  },
  {
    "raw": "笨女孩12",
    "parts": [
      {
        "inputTitle": "笨女孩",
        "matchedTitle": "笨女孩",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/208450",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 6.6,
        "confidence": 135,
        "query": "笨女孩",
        "cacheKey": "import-metadata-v1:831ea15ca5c12ca351c9",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "一拳超人2季24",
    "parts": [
      {
        "inputTitle": "一拳超人",
        "matchedTitle": "一拳超人",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/127563",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 8,
        "confidence": 135,
        "query": "一拳超人",
        "cacheKey": "import-metadata-v1:030fd78276224fc60748",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "总之就是非常可爱2季+制服篇+女子高中篇",
    "parts": [
      {
        "inputTitle": "总之就是非常可爱",
        "matchedTitle": "总之就是非常可爱",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/301541",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 6.3,
        "confidence": 135,
        "query": "总之就是非常可爱",
        "cacheKey": "import-metadata-v1:a5586f627a2fb2119d78",
        "hintSignature": "[]"
      },
      {
        "inputTitle": "制服篇",
        "matchedTitle": "总之就是非常可爱 ～制服～",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/376708",
        "platform": "WEB",
        "totalEpisodes": 1,
        "rating": 6.4,
        "confidence": 127,
        "query": "制服篇",
        "cacheKey": "import-metadata-v1:c45350107e8bda8fe95d",
        "hintSignature": "[]"
      },
      {
        "inputTitle": "女子高中篇",
        "matchedTitle": "总之就是非常可爱 女子高中篇",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/441233",
        "platform": "WEB",
        "totalEpisodes": 4,
        "rating": 6.5,
        "confidence": 127,
        "query": "女子高中篇",
        "cacheKey": "import-metadata-v1:876b9fe6f8f51a9f6d0a",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "平凡职业造就世界最强三季 42",
    "parts": [
      {
        "inputTitle": "平凡职业造就世界最强",
        "matchedTitle": "平凡职业造就世界最强",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/231414",
        "platform": "TV",
        "totalEpisodes": 13,
        "rating": 5,
        "confidence": 135,
        "query": "平凡职业造就世界最强",
        "cacheKey": "import-metadata-v1:47d4098b33283f1f96b2",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "吸血鬼马上死 12-？",
    "parts": [
      {
        "inputTitle": "吸血鬼马上死",
        "matchedTitle": "吸血鬼马上死",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/305579",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 6.5,
        "confidence": 129,
        "query": "吸血鬼马上死",
        "cacheKey": "import-metadata-v1:9d12e2c6aabfe5ebddd9",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "Hello World！",
    "parts": [
      {
        "inputTitle": "Hello World！",
        "matchedTitle": "你好 世界",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/269090",
        "platform": "剧场版",
        "totalEpisodes": 1,
        "rating": 6.8,
        "confidence": 135,
        "query": "Hello World！",
        "cacheKey": "import-metadata-v1:1e6958615d7ecb29c7cf",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "重来吧，魔王大人 12",
    "parts": [
      {
        "inputTitle": "重来吧，魔王大人",
        "matchedTitle": "重来吧、魔王大人！",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/260407",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 5.2,
        "confidence": 132,
        "query": "重来吧，魔王大人",
        "cacheKey": "import-metadata-v1:1fd7e68dbebbf7a0c55a",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "Clannad 2季+ova2部",
    "parts": [
      {
        "inputTitle": "Clannad",
        "matchedTitle": "CLANNAD",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/51",
        "platform": "TV",
        "totalEpisodes": 23,
        "rating": 8.4,
        "confidence": 135,
        "query": "Clannad",
        "cacheKey": "import-metadata-v1:4136c51060186983a22b",
        "hintSignature": "[]"
      },
      {
        "inputTitle": "ova2部",
        "matchedTitle": "猎人 OVA2 贪婪大陆",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/10357",
        "platform": "OVA",
        "totalEpisodes": 8,
        "rating": 7.8,
        "confidence": 129,
        "query": "ova2部",
        "cacheKey": "import-metadata-v1:2b05f06faf48e7f44f37",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "回复术士的重启人生12",
    "parts": [
      {
        "inputTitle": "回复术士的重启人生",
        "matchedTitle": "回复术士的重来人生",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/295017",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 6.3,
        "confidence": 135,
        "query": "回复术士的重启人生",
        "cacheKey": "import-metadata-v1:af4ecb5b689f701ca992",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "滑头鬼之孙2季52",
    "parts": [
      {
        "inputTitle": "滑头鬼之孙",
        "matchedTitle": "滑头鬼之孙",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/5474",
        "platform": "TV",
        "totalEpisodes": 26,
        "rating": 6.8,
        "confidence": 134,
        "query": "滑头鬼之孙",
        "cacheKey": "import-metadata-v1:be5967cbe9433a43a404",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "Litter Buster26+refrain13",
    "parts": [
      {
        "inputTitle": "Litter Buster",
        "matchedTitle": "Little Busters!",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/38040",
        "platform": "TV",
        "totalEpisodes": 26,
        "rating": 7.2,
        "confidence": 135,
        "query": "Little Busters!",
        "cacheKey": "import-metadata-v1:b4bc6ee49b0ee06f61fa",
        "hintSignature": "[\"Little Busters!\"]"
      },
      {
        "inputTitle": "refrain",
        "matchedTitle": "Little Busters! 〜Refrain〜",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/69484",
        "platform": "TV",
        "totalEpisodes": 13,
        "rating": 7.8,
        "confidence": 85,
        "query": "refrain",
        "cacheKey": "import-metadata-v1:b54a471f10465eeaddb6",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "侦探已经死了12（几年没动静了）",
    "parts": [
      {
        "inputTitle": "侦探已经死了",
        "matchedTitle": "侦探已经死了。",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/325727",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 5,
        "confidence": 135,
        "query": "侦探已经死了",
        "cacheKey": "import-metadata-v1:4ccaca15e6a3cbd7e1e3",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "立于百万生命之上2季24",
    "parts": [
      {
        "inputTitle": "立于百万生命之上",
        "matchedTitle": "我立于百万生命之上",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/301469",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 5.9,
        "confidence": 83,
        "query": "立于百万生命之上",
        "cacheKey": "import-metadata-v1:695ee2a58f8e2155f0f6",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "女友成双12",
    "parts": [
      {
        "inputTitle": "女友成双",
        "matchedTitle": "女友成堆",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/319513",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 6,
        "confidence": 135,
        "query": "女友成双",
        "cacheKey": "import-metadata-v1:324f64529229061b165f",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "在下坂本有何贵干13",
    "parts": [
      {
        "inputTitle": "在下坂本有何贵干",
        "matchedTitle": "在下坂本，有何贵干？",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/165829",
        "platform": "TV",
        "totalEpisodes": 13,
        "rating": 6.5,
        "confidence": 135,
        "query": "在下坂本有何贵干",
        "cacheKey": "import-metadata-v1:d2918856e0415dd13126",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "东京复仇者24+圣夜决战篇13+天竺篇13",
    "parts": [
      {
        "inputTitle": "东京复仇者",
        "matchedTitle": "东京复仇者",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/308936",
        "platform": "TV",
        "totalEpisodes": 24,
        "rating": 5.6,
        "confidence": 130,
        "query": "东京复仇者",
        "cacheKey": "import-metadata-v1:eb483de629d9e5fa1679",
        "hintSignature": "[]"
      },
      {
        "inputTitle": "圣夜决战篇",
        "matchedTitle": "东京复仇者 圣夜决战篇",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/360783",
        "platform": "TV",
        "totalEpisodes": 13,
        "rating": 5.7,
        "confidence": 128,
        "query": "圣夜决战篇",
        "cacheKey": "import-metadata-v1:c47682b9d5f50bf06144",
        "hintSignature": "[]"
      },
      {
        "inputTitle": "天竺篇",
        "matchedTitle": "东京复仇者 天竺篇",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/427329",
        "platform": "TV",
        "totalEpisodes": 13,
        "rating": 5.6,
        "confidence": 127,
        "query": "天竺篇",
        "cacheKey": "import-metadata-v1:06d80319bcfe8a0e1aef",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "我们的重制人生12",
    "parts": [
      {
        "inputTitle": "我们的重制人生",
        "matchedTitle": "我们的重制人生",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/296870",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 6.4,
        "confidence": 135,
        "query": "我们的重制人生",
        "cacheKey": "import-metadata-v1:003f746e44454f68f809",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "异世界迷宫黑心企业12",
    "parts": [
      {
        "inputTitle": "异世界迷宫黑心企业",
        "matchedTitle": "异世界迷宫黑心企业",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/309668",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 6.7,
        "confidence": 135,
        "query": "异世界迷宫黑心企业",
        "cacheKey": "import-metadata-v1:ba4e5629c6a07e402661",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "见面之后五秒开始战斗12",
    "parts": [
      {
        "inputTitle": "见面之后五秒开始战斗",
        "matchedTitle": "见面之后5秒开始战斗",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/319286",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 5.6,
        "confidence": 83,
        "query": "见面之后五秒开始战斗",
        "cacheKey": "import-metadata-v1:9dfddabe0bba0a3081f3",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "月光下的异世界之旅12",
    "parts": [
      {
        "inputTitle": "月光下的异世界之旅",
        "matchedTitle": "月光下的异世界之旅",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/317275",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 6,
        "confidence": 133,
        "query": "月光下的异世界之旅",
        "cacheKey": "import-metadata-v1:3bf716d6030837238eec",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "死神少爷与黑女仆三季36（完）",
    "parts": [
      {
        "inputTitle": "死神少爷与黑女仆",
        "matchedTitle": "死神少爷与黑女仆",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/327055",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 6.6,
        "confidence": 133,
        "query": "死神少爷与黑女仆",
        "cacheKey": "import-metadata-v1:26e7b057ad05b610226f",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "我的青春恋爱物语果然有问题2季26",
    "parts": [
      {
        "inputTitle": "我的青春恋爱物语果然有问题",
        "matchedTitle": "我的青春恋爱物语果然有问题",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/54433",
        "platform": "TV",
        "totalEpisodes": 13,
        "rating": 7.5,
        "confidence": 135,
        "query": "我的青春恋爱物语果然有问题",
        "cacheKey": "import-metadata-v1:07c2ef229432b08874a5",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "开挂药师的异世界生活12",
    "parts": [
      {
        "inputTitle": "开挂药师的异世界生活",
        "matchedTitle": "从Lv2开始开挂的原勇者候补悠闲的异世界生活",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/459725",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 5.5,
        "confidence": 81,
        "query": "开挂药师的异世界生活",
        "cacheKey": "import-metadata-v1:9ab174a6a3e93cfab69c",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "刃牙123季+范马刃牙第二季13",
    "parts": [
      {
        "inputTitle": "刃牙",
        "matchedTitle": "刃牙",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/199373",
        "platform": "TV",
        "totalEpisodes": 26,
        "rating": 6.2,
        "confidence": 129,
        "query": "刃牙",
        "cacheKey": "import-metadata-v1:265288147f3e0ad26c23",
        "hintSignature": "[]"
      },
      {
        "inputTitle": "范马刃牙",
        "matchedTitle": "范马刃牙",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/317852",
        "platform": "WEB",
        "totalEpisodes": 12,
        "rating": 6.2,
        "confidence": 125,
        "query": "范马刃牙",
        "cacheKey": "import-metadata-v1:5709f3adbe2afdd689ef",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "末日三问12",
    "parts": [
      {
        "inputTitle": "末日三问",
        "matchedTitle": "末日时在做什么？有没有空？可以来拯救吗？",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/185943",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 7.6,
        "confidence": 135,
        "query": "末日三问",
        "cacheKey": "import-metadata-v1:5451e5999abbdf5b4613",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "成神之日12",
    "parts": [
      {
        "inputTitle": "成神之日",
        "matchedTitle": "成神之日",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/306429",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 3.9,
        "confidence": 135,
        "query": "成神之日",
        "cacheKey": "import-metadata-v1:c51201c3a2a16bb2a507",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "伤物语 三部+ 化物语15+花物语5+恋物语6+猫物语（黑4+白5）+忍物语+怪物语 （14） + 终？伪",
    "parts": [
      {
        "inputTitle": "伤物语",
        "matchedTitle": "伤物语Ⅰ铁血篇",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/7707",
        "platform": "剧场版",
        "totalEpisodes": 1,
        "rating": 7.9,
        "confidence": 135,
        "query": "伤物语",
        "cacheKey": "import-metadata-v1:7c0f1c48baf36bdd8b75",
        "hintSignature": "[]"
      },
      {
        "inputTitle": "化物语",
        "matchedTitle": "化物语",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/1671",
        "platform": "TV",
        "totalEpisodes": 15,
        "rating": 8.4,
        "confidence": 135,
        "query": "化物语",
        "cacheKey": "import-metadata-v1:a911015e679591ec0878",
        "hintSignature": "[]"
      },
      {
        "inputTitle": "花物语5",
        "matchedTitle": "花物语",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/82322",
        "platform": "TV",
        "totalEpisodes": 5,
        "rating": 7.3,
        "confidence": 135,
        "query": "花物语5",
        "cacheKey": "import-metadata-v1:f08ec25e8d79b925a701",
        "hintSignature": "[]"
      },
      {
        "inputTitle": "恋物语6",
        "matchedTitle": "英国恋物语艾玛",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/1964",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 7.2,
        "confidence": 77,
        "query": "恋物语6",
        "cacheKey": "import-metadata-v1:81373563d30fed6f3cac",
        "hintSignature": "[]"
      },
      {
        "inputTitle": "猫物语（黑4",
        "matchedTitle": "猫物语（黑）",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/56117",
        "platform": "TV",
        "totalEpisodes": 4,
        "rating": 7.7,
        "confidence": 135,
        "query": "猫物语（黑4",
        "cacheKey": "import-metadata-v1:97041acba17e0ce8a629",
        "hintSignature": "[]"
      },
      {
        "inputTitle": "白5）",
        "matchedTitle": "白圣女与黑牧师",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/387822",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 6.7,
        "confidence": 85,
        "query": "白5）",
        "cacheKey": "import-metadata-v1:385ff4305958e99e4841",
        "hintSignature": "[]"
      },
      {
        "inputTitle": "忍物语",
        "matchedTitle": "伤物语Ⅰ铁血篇",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/7707",
        "platform": "剧场版",
        "totalEpisodes": 1,
        "rating": 7.9,
        "confidence": 135,
        "query": "伤物语 忍物语",
        "cacheKey": "import-metadata-v1:b8c31cada2e5e5ee3d11",
        "hintSignature": "[]"
      },
      {
        "inputTitle": "怪物语 （14）",
        "matchedTitle": "伤物语Ⅰ铁血篇",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/7707",
        "platform": "剧场版",
        "totalEpisodes": 1,
        "rating": 7.9,
        "confidence": 135,
        "query": "伤物语 怪物语 （14）",
        "cacheKey": "import-metadata-v1:816191d9eac013e52d6a",
        "hintSignature": "[]"
      },
      {
        "inputTitle": "终？伪",
        "matchedTitle": "终物语",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/138829",
        "platform": "TV",
        "totalEpisodes": 13,
        "rating": 7.8,
        "confidence": 85,
        "query": "终？伪",
        "cacheKey": "import-metadata-v1:c12a6892aa2bef89acb8",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "宿命回响12",
    "parts": [
      {
        "inputTitle": "宿命回响",
        "matchedTitle": "宿命回响：命运节拍",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/331535",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 5.2,
        "confidence": 135,
        "query": "宿命回响",
        "cacheKey": "import-metadata-v1:131f5acd52bc2ecf54f4",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "世界顶尖的暗杀者转生成异世界贵族12",
    "parts": [
      {
        "inputTitle": "世界顶尖的暗杀者转生成异世界贵族",
        "matchedTitle": "世界顶尖的暗杀者转生为异世界贵族",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/328313",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 6.1,
        "confidence": 85,
        "query": "世界顶尖的暗杀者转生成异世界贵族",
        "cacheKey": "import-metadata-v1:811866e70ace7a1799ba",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "大正少女御伽话12",
    "parts": [
      {
        "inputTitle": "大正少女御伽话",
        "matchedTitle": "大正处女御伽话",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/323158",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 6.4,
        "confidence": 129,
        "query": "大正少女御伽话",
        "cacheKey": "import-metadata-v1:c4d0ce86978d1fa56500",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "关于前辈很烦人的事12",
    "parts": [
      {
        "inputTitle": "关于前辈很烦人的事",
        "matchedTitle": "关于前辈很烦人的事",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/309670",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 6.8,
        "confidence": 135,
        "query": "关于前辈很烦人的事",
        "cacheKey": "import-metadata-v1:aeaa6d567bcdd465e608",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "秒速五厘米",
    "parts": [
      {
        "inputTitle": "秒速五厘米",
        "matchedTitle": "秒速5厘米",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/927",
        "platform": "剧场版",
        "totalEpisodes": 3,
        "rating": 7.9,
        "confidence": 135,
        "query": "秒速五厘米",
        "cacheKey": "import-metadata-v1:c4641bc10b768482c2ec",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "龙王的工作12",
    "parts": [
      {
        "inputTitle": "龙王的工作",
        "matchedTitle": "龙王的工作！",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/219658",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 6.4,
        "confidence": 135,
        "query": "龙王的工作",
        "cacheKey": "import-metadata-v1:be018da050f447c42ee1",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "徒然喜欢你12",
    "parts": [
      {
        "inputTitle": "徒然喜欢你",
        "matchedTitle": "徒然喜欢你",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/208754",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 7.1,
        "confidence": 135,
        "query": "徒然喜欢你",
        "cacheKey": "import-metadata-v1:5f8e42ceb626db7769be",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "天使的心跳(Angel Beats)12",
    "parts": [
      {
        "inputTitle": "天使的心跳(Angel Beats)",
        "matchedTitle": "天使的心跳！",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/1851",
        "platform": "TV",
        "totalEpisodes": 13,
        "rating": 7.6,
        "confidence": 135,
        "query": "天使的心跳(Angel Beats)",
        "cacheKey": "import-metadata-v1:391b34b32cd9914d4297",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "田中君总是如此慵懒12",
    "parts": [
      {
        "inputTitle": "田中君总是如此慵懒",
        "matchedTitle": "田中君总是如此慵懒",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/155704",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 6.9,
        "confidence": 133,
        "query": "田中君总是如此慵懒",
        "cacheKey": "import-metadata-v1:a69a496f390bfcb74b3b",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "这个美术社大有问题12",
    "parts": [
      {
        "inputTitle": "这个美术社大有问题",
        "matchedTitle": "这个美术社大有问题！",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/150746",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 7.3,
        "confidence": 135,
        "query": "这个美术社大有问题",
        "cacheKey": "import-metadata-v1:8177b4863483bcdf900c",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "黑社会的超能力女儿12",
    "parts": [
      {
        "inputTitle": "黑社会的超能力女儿",
        "matchedTitle": "黑社会的超能力女儿",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/225631",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 7.2,
        "confidence": 135,
        "query": "黑社会的超能力女儿",
        "cacheKey": "import-metadata-v1:6c92c84b85432ee6bc9e",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "妖精森林的小不点13",
    "parts": [
      {
        "inputTitle": "妖精森林的小不点",
        "matchedTitle": "妖精森林的小不点",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/221726",
        "platform": "TV",
        "totalEpisodes": 13,
        "rating": 7.9,
        "confidence": 134,
        "query": "妖精森林的小不点",
        "cacheKey": "import-metadata-v1:4b3e715c1cb8c92fb007",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "珈百璃的堕落14",
    "parts": [
      {
        "inputTitle": "珈百璃的堕落",
        "matchedTitle": "珈百璃的堕落",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/188091",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 7.1,
        "confidence": 135,
        "query": "珈百璃的堕落",
        "cacheKey": "import-metadata-v1:bad872e7f834cb3e69c7",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "看得见的女孩12",
    "parts": [
      {
        "inputTitle": "看得见的女孩",
        "matchedTitle": "看得见的女孩",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/330973",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 6.8,
        "confidence": 135,
        "query": "看得见的女孩",
        "cacheKey": "import-metadata-v1:6fcd56ad7ee8fd906e14",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "Air 13",
    "parts": [
      {
        "inputTitle": "Air",
        "matchedTitle": "AIR",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/234",
        "platform": "TV",
        "totalEpisodes": 13,
        "rating": 8,
        "confidence": 135,
        "query": "Air",
        "cacheKey": "import-metadata-v1:203c85076e229e4a1543",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "龙与虎26",
    "parts": [
      {
        "inputTitle": "龙与虎",
        "matchedTitle": "龙与虎",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/909",
        "platform": "TV",
        "totalEpisodes": 25,
        "rating": 8,
        "confidence": 135,
        "query": "龙与虎",
        "cacheKey": "import-metadata-v1:a0c385f19f3993598379",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "地缚少年花子君 二季 36",
    "parts": [
      {
        "inputTitle": "地缚少年花子君",
        "matchedTitle": "地缚少年花子君",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/277551",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 6.4,
        "confidence": 135,
        "query": "地缚少年花子君",
        "cacheKey": "import-metadata-v1:ad95dbf23be7eab465de",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "日常26",
    "parts": [
      {
        "inputTitle": "日常",
        "matchedTitle": "日常",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/9912",
        "platform": "TV",
        "totalEpisodes": 26,
        "rating": 8.5,
        "confidence": 135,
        "query": "日常",
        "cacheKey": "import-metadata-v1:c766f50136ffd58a50a2",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "未闻花名12",
    "parts": [
      {
        "inputTitle": "未闻花名",
        "matchedTitle": "我们仍未知道那天所看见的花的名字。",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/10440",
        "platform": "TV",
        "totalEpisodes": 11,
        "rating": 7.6,
        "confidence": 135,
        "query": "未闻花名",
        "cacheKey": "import-metadata-v1:a787eee86e37dba4f630",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "羁绊者12",
    "parts": [
      {
        "inputTitle": "羁绊者",
        "matchedTitle": "羁绊者",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/148281",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 6.3,
        "confidence": 132,
        "query": "羁绊者",
        "cacheKey": "import-metadata-v1:7f63623197d978071032",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "天使降临我身边13+剧场版",
    "parts": [
      {
        "inputTitle": "天使降临我身边",
        "matchedTitle": "天使",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/431539",
        "platform": "剧场版",
        "rating": 7.3,
        "confidence": 77,
        "query": "天使降临我身边",
        "cacheKey": "import-metadata-v1:eb09ae0d26b5b843f337",
        "hintSignature": "[]"
      },
      {
        "inputTitle": "剧场版",
        "matchedTitle": "剧场版 空之境界 第一章 俯瞰风景",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/233",
        "platform": "剧场版",
        "totalEpisodes": 1,
        "rating": 7.9,
        "confidence": 135,
        "query": "剧场版",
        "cacheKey": "import-metadata-v1:4d2055632b862fbde22c",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "杀戮天使16",
    "parts": [
      {
        "inputTitle": "杀戮天使",
        "matchedTitle": "杀戮天使",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/220566",
        "platform": "TV",
        "totalEpisodes": 16,
        "rating": 6.4,
        "confidence": 135,
        "query": "杀戮天使",
        "cacheKey": "import-metadata-v1:c381f176dfb103aa2949",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "女神宿舍的宿管君10",
    "parts": [
      {
        "inputTitle": "女神宿舍的宿管君",
        "matchedTitle": "女神宿舍的宿管君。",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/305390",
        "platform": "TV",
        "totalEpisodes": 10,
        "rating": 5.8,
        "confidence": 132,
        "query": "女神宿舍的宿管君",
        "cacheKey": "import-metadata-v1:390e657b5e6c626350ec",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "某科学的超电磁炮三部 约75",
    "parts": [
      {
        "inputTitle": "某科学的超电磁炮",
        "matchedTitle": "某科学的超电磁炮",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/2585",
        "platform": "TV",
        "totalEpisodes": 24,
        "rating": 7.5,
        "confidence": 135,
        "query": "某科学的超电磁炮",
        "cacheKey": "import-metadata-v1:1b6837a49cb6a7191a16",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "某科学的一方通行12",
    "parts": [
      {
        "inputTitle": "某科学的一方通行",
        "matchedTitle": "某科学的一方通行",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/262939",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 5.2,
        "confidence": 135,
        "query": "某科学的一方通行",
        "cacheKey": "import-metadata-v1:f85be8872e046f60275e",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "古见同学有交流障碍症2季 36",
    "parts": [
      {
        "inputTitle": "古见同学有交流障碍症",
        "matchedTitle": "古见同学有交流障碍症",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/335225",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 7,
        "confidence": 135,
        "query": "古见同学有交流障碍症",
        "cacheKey": "import-metadata-v1:7dd41437c5d9d367412d",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "心灵代码 12",
    "parts": [
      {
        "inputTitle": "心灵代码",
        "matchedTitle": "心灵代码",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/161704",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 5.6,
        "confidence": 129,
        "query": "心灵代码",
        "cacheKey": "import-metadata-v1:00c53ec63353319480fb",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "弩级战队H 11",
    "parts": [
      {
        "inputTitle": "弩级战队H",
        "matchedTitle": "弩级战队HXEROS",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/293648",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 5.7,
        "confidence": 80,
        "query": "弩级战队H",
        "cacheKey": "import-metadata-v1:c13f50264456cd54bb48",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "没有黄段子的无聊世界 12",
    "parts": [
      {
        "inputTitle": "没有黄段子的无聊世界",
        "matchedTitle": "没有黄段子存在的无聊世界",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/115780",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 6.1,
        "confidence": 135,
        "query": "没有黄段子的无聊世界",
        "cacheKey": "import-metadata-v1:e01aac21898673cb8bb7",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "为什么老师在这里 （？？？）",
    "parts": [
      {
        "inputTitle": "为什么老师在这里",
        "matchedTitle": "为什么老师会在这里！？",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/262111",
        "platform": "TV",
        "totalEpisodes": 13,
        "rating": 6.2,
        "confidence": 133,
        "query": "为什么老师会在这里！？",
        "cacheKey": "import-metadata-v1:ff7ba5ebe79dff0c90e7",
        "hintSignature": "[\"为什么老师会在这里！？\"]"
      }
    ]
  },
  {
    "raw": "魔法禁书目录 3季 74 + 剧场版",
    "parts": [
      {
        "inputTitle": "魔法禁书目录",
        "matchedTitle": "魔法禁书目录",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/1014",
        "platform": "TV",
        "totalEpisodes": 24,
        "rating": 6.7,
        "confidence": 135,
        "query": "魔法禁书目录",
        "cacheKey": "import-metadata-v1:4e00025c5693cc5d5ca0",
        "hintSignature": "[]"
      },
      {
        "inputTitle": "剧场版",
        "matchedTitle": "剧场版 空之境界 第一章 俯瞰风景",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/233",
        "platform": "剧场版",
        "totalEpisodes": 1,
        "rating": 7.9,
        "confidence": 135,
        "query": "剧场版",
        "cacheKey": "import-metadata-v1:3d92258f66050a2cd339",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "欢迎来到实力主义至上教室三季 38",
    "parts": [
      {
        "inputTitle": "欢迎来到实力主义至上教室",
        "matchedTitle": "欢迎来到实力至上主义的教室",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/214272",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 6.2,
        "confidence": 135,
        "query": "欢迎来到实力至上主义的教室",
        "cacheKey": "import-metadata-v1:86f9f6e8fee7a39a4d53",
        "hintSignature": "[\"欢迎来到实力至上主义的教室\"]"
      }
    ]
  },
  {
    "raw": "因为太怕痛所以全点了防御 二季 24",
    "parts": [
      {
        "inputTitle": "因为太怕痛所以全点了防御",
        "matchedTitle": "因为太怕痛就全点防御力了。",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/268545",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 6.2,
        "confidence": 135,
        "query": "因为太怕痛就全点防御力了",
        "cacheKey": "import-metadata-v1:57f8013b458ee5d4f867",
        "hintSignature": "[\"因为太怕痛就全点防御力了\",\"痛いのは嫌なので防御力に極振りしたいと思います\"]"
      }
    ]
  },
  {
    "raw": "death note 37",
    "parts": [
      {
        "inputTitle": "death note",
        "matchedTitle": "死亡笔记",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/1773",
        "platform": "TV",
        "totalEpisodes": 37,
        "rating": 8.4,
        "confidence": 135,
        "query": "death note",
        "cacheKey": "import-metadata-v1:2d527b266776be963333",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "我被逐出队伍后过上慢生活 二季 25",
    "parts": [
      {
        "inputTitle": "我被逐出队伍后过上慢生活",
        "matchedTitle": "因为不是命中注定的同伴而被赶出了勇者的队伍、从此以后过上了悠闲的隐居生活",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/319739",
        "platform": "TV",
        "totalEpisodes": 13,
        "rating": 5.7,
        "confidence": 135,
        "query": "我被逐出队伍后过上慢生活",
        "cacheKey": "import-metadata-v1:7068a534dead92ff5cd1",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "家有女友 12",
    "parts": [
      {
        "inputTitle": "家有女友",
        "matchedTitle": "家有女友",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/253628",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 6.2,
        "confidence": 135,
        "query": "家有女友",
        "cacheKey": "import-metadata-v1:f4f7782319390fa553e2",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "异种族风俗娘评选指南12（？！）",
    "parts": [
      {
        "inputTitle": "异种族风俗娘评选指南",
        "matchedTitle": "异种族风俗娘评鉴指南",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/285482",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 7.7,
        "confidence": 85,
        "query": "异种族风俗娘评选指南",
        "cacheKey": "import-metadata-v1:fceba4905316c153b56a",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "灵能百分百三季 37",
    "parts": [
      {
        "inputTitle": "灵能百分百",
        "matchedTitle": "灵能百分百",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/158316",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 7.8,
        "confidence": 135,
        "query": "灵能百分百",
        "cacheKey": "import-metadata-v1:0a264288779af1706696",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "宇崎学妹想要玩二季 25",
    "parts": [
      {
        "inputTitle": "宇崎学妹想要玩",
        "matchedTitle": "宇崎学妹想要玩！",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/299498",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 6.1,
        "confidence": 135,
        "query": "宇崎学妹想要玩",
        "cacheKey": "import-metadata-v1:3dadd0b37aec225cecc5",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "真理面具 20",
    "parts": [
      {
        "inputTitle": "真理面具",
        "matchedTitle": "真理面具 动态漫",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/331782",
        "platform": "动态漫画",
        "totalEpisodes": 20,
        "rating": 6.4,
        "confidence": 124,
        "query": "真理面具",
        "cacheKey": "import-metadata-v1:28c2970de35fbd11ff94",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "言叶之庭",
    "parts": [
      {
        "inputTitle": "言叶之庭",
        "matchedTitle": "言叶之庭",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/58949",
        "platform": "剧场版",
        "totalEpisodes": 1,
        "rating": 7.4,
        "confidence": 135,
        "query": "言叶之庭",
        "cacheKey": "import-metadata-v1:35bf223ff46fba28eee1",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "百妖谱二季+京师篇",
    "parts": [
      {
        "inputTitle": "百妖谱",
        "matchedTitle": "百妖谱",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/562310",
        "platform": "剧场版",
        "rating": 7,
        "confidence": 127,
        "query": "百妖谱",
        "cacheKey": "import-metadata-v1:ae47ffabdcd6b6090e12",
        "hintSignature": "[]"
      },
      {
        "inputTitle": "京师篇",
        "matchedTitle": "百妖谱·京师篇",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/350795",
        "platform": "WEB",
        "totalEpisodes": 12,
        "rating": 7,
        "confidence": 124,
        "query": "京师篇",
        "cacheKey": "import-metadata-v1:faf3905223464311ad67",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "野良神 2季 25",
    "parts": [
      {
        "inputTitle": "野良神",
        "matchedTitle": "野良神",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/82572",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 7.1,
        "confidence": 135,
        "query": "野良神",
        "cacheKey": "import-metadata-v1:7c9f0339f1788834047d",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "异度入侵 13",
    "parts": [
      {
        "inputTitle": "异度入侵",
        "matchedTitle": "异度侵入",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/285776",
        "platform": "TV",
        "totalEpisodes": 13,
        "rating": 7.5,
        "confidence": 85,
        "query": "异度入侵",
        "cacheKey": "import-metadata-v1:a631134ba7a2d9ff0ff6",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "多罗罗 24",
    "parts": [
      {
        "inputTitle": "多罗罗",
        "matchedTitle": "多罗罗",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/240838",
        "platform": "TV",
        "totalEpisodes": 24,
        "rating": 6.6,
        "confidence": 135,
        "query": "多罗罗",
        "cacheKey": "import-metadata-v1:e337af9c12e6c098ccac",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "致不灭的你 2季 40",
    "parts": [
      {
        "inputTitle": "致不灭的你",
        "matchedTitle": "致不灭的你",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/297954",
        "platform": "TV",
        "totalEpisodes": 20,
        "rating": 6.6,
        "confidence": 135,
        "query": "致不灭的你",
        "cacheKey": "import-metadata-v1:1225e9f17fb63d714702",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "堀与宫村 2季 26",
    "parts": [
      {
        "inputTitle": "堀与宫村",
        "matchedTitle": "堀与宫村",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/315069",
        "platform": "TV",
        "totalEpisodes": 13,
        "rating": 6.8,
        "confidence": 135,
        "query": "堀与宫村",
        "cacheKey": "import-metadata-v1:4f1744280caa05a82cfd",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "虚构推理 2季 24",
    "parts": [
      {
        "inputTitle": "虚构推理",
        "matchedTitle": "虚构推理",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/271687",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 6.3,
        "confidence": 135,
        "query": "虚构推理",
        "cacheKey": "import-metadata-v1:631356433f0c20e665d3",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "碧蓝之海 二季 24",
    "parts": [
      {
        "inputTitle": "碧蓝之海",
        "matchedTitle": "碧蓝之海",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/235130",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 7.9,
        "confidence": 135,
        "query": "碧蓝之海",
        "cacheKey": "import-metadata-v1:021c205608ee3690e9dd",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "理科生坠入情网 2季 24",
    "parts": [
      {
        "inputTitle": "理科生坠入情网",
        "matchedTitle": "理科生坠入情网，故尝试证明。",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/271145",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 6.2,
        "confidence": 85,
        "query": "理科生坠入情网",
        "cacheKey": "import-metadata-v1:1aecf33ab68c6e7205df",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "日在校园14",
    "parts": [
      {
        "inputTitle": "日在校园",
        "matchedTitle": "日在校园",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/827",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 6.2,
        "confidence": 135,
        "query": "日在校园",
        "cacheKey": "import-metadata-v1:43747bb5c57471cb774e",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "转生成为了只有乙女游戏破灭flag的邪恶大小姐 2季",
    "parts": [
      {
        "inputTitle": "转生成为了只有乙女游戏破灭flag的邪恶大小姐",
        "matchedTitle": "转生成为了只有乙女游戏破灭Flag的邪恶大小姐",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/264089",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 6.6,
        "confidence": 135,
        "query": "转生成为了只有乙女游戏破灭flag的邪恶大小姐",
        "cacheKey": "import-metadata-v1:a6db6e782c490ccb4803",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "喜欢本大爷的就你一个 12",
    "parts": [
      {
        "inputTitle": "喜欢本大爷的就你一个",
        "matchedTitle": "喜欢本大爷的竟然就你一个？",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/262943",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 6.1,
        "confidence": 135,
        "query": "喜欢本大爷的竟然就你一个？",
        "cacheKey": "import-metadata-v1:0e726eca4e1ae95a547f",
        "hintSignature": "[\"喜欢本大爷的竟然就你一个？\"]"
      }
    ]
  },
  {
    "raw": "极主夫道2part-15",
    "parts": [
      {
        "inputTitle": "极主夫道-",
        "matchedTitle": "极主夫道",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/317691",
        "platform": "WEB",
        "totalEpisodes": 5,
        "rating": 6.3,
        "confidence": 131,
        "query": "极主夫道-",
        "cacheKey": "import-metadata-v1:42835986727ae1e22f81",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "吊带袜天使 2季 26",
    "parts": [
      {
        "inputTitle": "吊带袜天使",
        "matchedTitle": "吊带袜天使",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/8402",
        "platform": "TV",
        "totalEpisodes": 13,
        "rating": 8,
        "confidence": 135,
        "query": "吊带袜天使",
        "cacheKey": "import-metadata-v1:aa6a4606bdc4e85c4992",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "食戟之灵 5季",
    "parts": [
      {
        "inputTitle": "食戟之灵",
        "matchedTitle": "食戟之灵",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/116461",
        "platform": "TV",
        "totalEpisodes": 24,
        "rating": 7.2,
        "confidence": 135,
        "query": "食戟之灵",
        "cacheKey": "import-metadata-v1:aa526b138c5fc174f58e",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "石纪元（新石纪） 4季 + 特别篇",
    "parts": [
      {
        "inputTitle": "石纪元（新石纪）",
        "matchedTitle": "石纪元",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/266794",
        "platform": "TV",
        "totalEpisodes": 24,
        "rating": 7.2,
        "confidence": 135,
        "query": "石纪元（新石纪）",
        "cacheKey": "import-metadata-v1:c7140641e027f35325e4",
        "hintSignature": "[]"
      },
      {
        "inputTitle": "特别篇",
        "matchedTitle": "全职高手 特别篇",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/221020",
        "platform": "WEB",
        "totalEpisodes": 3,
        "rating": 6.5,
        "confidence": 126,
        "query": "特别篇",
        "cacheKey": "import-metadata-v1:ee36a68997d621ca872d",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "四月是你的谎言 22",
    "parts": [
      {
        "inputTitle": "四月是你的谎言",
        "matchedTitle": "四月是你的谎言",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/100444",
        "platform": "TV",
        "totalEpisodes": 22,
        "rating": 8,
        "confidence": 135,
        "query": "四月是你的谎言",
        "cacheKey": "import-metadata-v1:77d602a47a85414c201a",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "全员恶玉 12",
    "parts": [
      {
        "inputTitle": "全员恶玉",
        "matchedTitle": "全员恶玉",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/302076",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 4.7,
        "confidence": 135,
        "query": "全员恶玉",
        "cacheKey": "import-metadata-v1:ba7bf93ca3a6e341cab5",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "未来日记 26",
    "parts": [
      {
        "inputTitle": "未来日记",
        "matchedTitle": "未来日记",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/16235",
        "platform": "TV",
        "totalEpisodes": 26,
        "rating": 7.2,
        "confidence": 135,
        "query": "未来日记",
        "cacheKey": "import-metadata-v1:63f4645d57bf27e07dcd",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "擅长捉弄的高木同学3季+剧场版",
    "parts": [
      {
        "inputTitle": "擅长捉弄的高木同学",
        "matchedTitle": "擅长捉弄的高木同学",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/219200",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 7.5,
        "confidence": 135,
        "query": "擅长捉弄的高木同学",
        "cacheKey": "import-metadata-v1:0bac1129e178a918a6ad",
        "hintSignature": "[]"
      },
      {
        "inputTitle": "剧场版",
        "matchedTitle": "剧场版 空之境界 第一章 俯瞰风景",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/233",
        "platform": "剧场版",
        "totalEpisodes": 1,
        "rating": 7.9,
        "confidence": 135,
        "query": "剧场版",
        "cacheKey": "import-metadata-v1:eaaa731d6ba99bc7bf74",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "国王排名 23",
    "parts": [
      {
        "inputTitle": "国王排名",
        "matchedTitle": "国王排名",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/296109",
        "platform": "TV",
        "totalEpisodes": 23,
        "rating": 4.8,
        "confidence": 135,
        "query": "国王排名",
        "cacheKey": "import-metadata-v1:182e9b8237bd49b8bf7d",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "战斗员派遣中 12",
    "parts": [
      {
        "inputTitle": "战斗员派遣中",
        "matchedTitle": "派遣战斗员！",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/302190",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 6.4,
        "confidence": 135,
        "query": "战斗员派遣中",
        "cacheKey": "import-metadata-v1:ac691743c47ee2cc6ad7",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "约定的梦幻岛 2季",
    "parts": [
      {
        "inputTitle": "约定的梦幻岛",
        "matchedTitle": "约定的梦幻岛",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/243916",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 7.6,
        "confidence": 135,
        "query": "约定的梦幻岛",
        "cacheKey": "import-metadata-v1:fd58ad3c06f6aa65279c",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "盾之勇者成名录 三季",
    "parts": [
      {
        "inputTitle": "盾之勇者成名录",
        "matchedTitle": "盾之勇者成名录",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/217660",
        "platform": "TV",
        "totalEpisodes": 25,
        "rating": 5.6,
        "confidence": 135,
        "query": "盾之勇者成名录",
        "cacheKey": "import-metadata-v1:ff3acd383537f767558b",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "阿宅的恋爱有点难 11",
    "parts": [
      {
        "inputTitle": "阿宅的恋爱有点难",
        "matchedTitle": "宅男腐女恋爱真难",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/220312",
        "platform": "TV",
        "totalEpisodes": 11,
        "rating": 6.6,
        "confidence": 85,
        "query": "阿宅的恋爱有点难",
        "cacheKey": "import-metadata-v1:a991c512bc60bf91abcc",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "不是说了能力值要平均吗 12",
    "parts": [
      {
        "inputTitle": "不是说了能力值要平均吗",
        "matchedTitle": "我，不是说了能力要平均值么！",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/238962",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 5.9,
        "confidence": 135,
        "query": "我，不是说了能力要平均值么！",
        "cacheKey": "import-metadata-v1:831249784f21fbd405cb",
        "hintSignature": "[\"我，不是说了能力要平均值么！\"]"
      }
    ]
  },
  {
    "raw": "好比是最终迷宫前的少年到新手村生活的故事 12",
    "parts": [
      {
        "inputTitle": "好比是最终迷宫前的少年到新手村生活的故事",
        "matchedTitle": "好比是最终迷宫前的少年到新手村生活一般的故事",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/293193",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 5.2,
        "confidence": 131,
        "query": "好比是最终迷宫前的少年到新手村生活一般的故事",
        "cacheKey": "import-metadata-v1:e39de186ccb4dc7357cf",
        "hintSignature": "[\"好比是最终迷宫前的少年到新手村生活一般的故事\"]"
      }
    ]
  },
  {
    "raw": "就算是哥哥只要有爱就没问题了吧 12",
    "parts": [
      {
        "inputTitle": "就算是哥哥只要有爱就没问题了吧",
        "matchedTitle": "就算是哥哥只要有爱就没问题对吧",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/40339",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 5.9,
        "confidence": 135,
        "query": "就算是哥哥只要有爱就没问题对吧",
        "cacheKey": "import-metadata-v1:10177214c7678d0ae2d8",
        "hintSignature": "[\"就算是哥哥只要有爱就没问题对吧\"]"
      }
    ]
  },
  {
    "raw": "更衣人偶坠入爱河 二季 36",
    "parts": [
      {
        "inputTitle": "更衣人偶坠入爱河",
        "matchedTitle": "更衣人偶坠入爱河",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/333158",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 7.2,
        "confidence": 135,
        "query": "更衣人偶坠入爱河",
        "cacheKey": "import-metadata-v1:99e1d3a14394a39f2c0e",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "关于我转生史莱姆 3季 72+剧场版 红莲之绊+ 彩叶草之梦 3",
    "parts": [
      {
        "inputTitle": "关于我转生史莱姆",
        "matchedTitle": "关于我转生变成史莱姆这档事",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/239816",
        "platform": "TV",
        "totalEpisodes": 24,
        "rating": 6.6,
        "confidence": 85,
        "query": "关于我转生史莱姆",
        "cacheKey": "import-metadata-v1:725c03ec26cc0fa323e6",
        "hintSignature": "[]"
      },
      {
        "inputTitle": "剧场版 红莲之绊",
        "matchedTitle": "天元突破红莲螺岩 螺岩篇",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/3996",
        "platform": "剧场版",
        "totalEpisodes": 1,
        "rating": 8.2,
        "confidence": 85,
        "query": "剧场版 红莲之绊",
        "cacheKey": "import-metadata-v1:957364a6a30627466673",
        "hintSignature": "[]"
      },
      {
        "inputTitle": "彩叶草之梦",
        "matchedTitle": "关于我转生变成史莱姆这档事 柯里乌斯之梦",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/421174",
        "platform": "WEB",
        "totalEpisodes": 3,
        "rating": 5.9,
        "confidence": 126,
        "query": "关于我转生变成史莱姆这档事 彩叶草之梦",
        "cacheKey": "import-metadata-v1:b57d67583512fd2732a9",
        "hintSignature": "[\"关于我转生变成史莱姆这档事 彩叶草之梦\"]"
      }
    ]
  },
  {
    "raw": "夏日幻魂",
    "parts": [
      {
        "inputTitle": "夏日幻魂",
        "matchedTitle": "夏日幽灵",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/328674",
        "platform": "剧场版",
        "totalEpisodes": 1,
        "rating": 6.9,
        "confidence": 135,
        "query": "夏日幻魂",
        "cacheKey": "import-metadata-v1:7fa916256fa59990ac19",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "终末的后宫 11",
    "parts": [
      {
        "inputTitle": "终末的后宫",
        "matchedTitle": "终末的后宫",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/306559",
        "platform": "TV",
        "totalEpisodes": 11,
        "rating": 5,
        "confidence": 131,
        "query": "终末的后宫",
        "cacheKey": "import-metadata-v1:45dcd14c867b2e9b6606",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "双星之阴阳师 50",
    "parts": [
      {
        "inputTitle": "双星之阴阳师",
        "matchedTitle": "双星之阴阳师",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/155778",
        "platform": "TV",
        "totalEpisodes": 50,
        "rating": 5.8,
        "confidence": 131,
        "query": "双星之阴阳师",
        "cacheKey": "import-metadata-v1:59bad6ab8a69bc4e03bb",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "声之形",
    "parts": [
      {
        "inputTitle": "声之形",
        "matchedTitle": "声之形",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/117777",
        "platform": "剧场版",
        "totalEpisodes": 1,
        "rating": 7.1,
        "confidence": 135,
        "query": "声之形",
        "cacheKey": "import-metadata-v1:25a268f405c4436ff357",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "入间同学入魔了 3季",
    "parts": [
      {
        "inputTitle": "入间同学入魔了",
        "matchedTitle": "入间同学入魔了",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/273844",
        "platform": "TV",
        "totalEpisodes": 23,
        "rating": 6.5,
        "confidence": 134,
        "query": "入间同学入魔了",
        "cacheKey": "import-metadata-v1:d5d5d95578d92ce053ff",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "公主连结 2季",
    "parts": [
      {
        "inputTitle": "公主连结",
        "matchedTitle": "公主连结 Re:Dive",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/274646",
        "platform": "TV",
        "totalEpisodes": 13,
        "rating": 6.5,
        "confidence": 135,
        "query": "公主连结",
        "cacheKey": "import-metadata-v1:b5775fdbe92a5e03ddd2",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "后街女孩 10",
    "parts": [
      {
        "inputTitle": "后街女孩",
        "matchedTitle": "后街女孩",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/231278",
        "platform": "TV",
        "totalEpisodes": 10,
        "rating": 6.6,
        "confidence": 135,
        "query": "后街女孩",
        "cacheKey": "import-metadata-v1:5d7c3c0fd10abff13940",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "天才王子的赤子振兴术 12",
    "parts": [
      {
        "inputTitle": "天才王子的赤子振兴术",
        "matchedTitle": "天才王子的赤字国家振兴术",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/326868",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 6,
        "confidence": 135,
        "query": "天才王子的赤字国家振兴术",
        "cacheKey": "import-metadata-v1:4463a86d236aa53ef2be",
        "hintSignature": "[\"天才王子的赤字国家振兴术\"]"
      }
    ]
  },
  {
    "raw": "装甲重拳 2季 26",
    "parts": [
      {
        "inputTitle": "装甲重拳",
        "matchedTitle": "MEGALO BOX",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/227718",
        "platform": "TV",
        "totalEpisodes": 13,
        "rating": 7.6,
        "confidence": 135,
        "query": "装甲重拳",
        "cacheKey": "import-metadata-v1:f6dc644ff8cf5e9e4e21",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "路人女主的养成方法 2季 25 + fine剧场版",
    "parts": [
      {
        "inputTitle": "路人女主的养成方法",
        "matchedTitle": "路人女主的养成方法",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/100403",
        "platform": "TV",
        "totalEpisodes": 13,
        "rating": 7.2,
        "confidence": 135,
        "query": "路人女主的养成方法",
        "cacheKey": "import-metadata-v1:5d89acb4216f3734eec2",
        "hintSignature": "[]"
      },
      {
        "inputTitle": "fine剧场版",
        "matchedTitle": "路人女主的养成方法 Fine",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/231497",
        "platform": "剧场版",
        "totalEpisodes": 1,
        "rating": 7.7,
        "confidence": 135,
        "query": "路人女主的养成方法 Fine",
        "cacheKey": "import-metadata-v1:f025c2ea73159b658ced",
        "hintSignature": "[\"路人女主的养成方法 Fine\"]"
      }
    ]
  },
  {
    "raw": "紫罗兰永恒花园 13",
    "parts": [
      {
        "inputTitle": "紫罗兰永恒花园",
        "matchedTitle": "紫罗兰永恒花园",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/183878",
        "platform": "TV",
        "totalEpisodes": 13,
        "rating": 7.6,
        "confidence": 135,
        "query": "紫罗兰永恒花园",
        "cacheKey": "import-metadata-v1:2d22ebbb7f5f802bbfa2",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "伪恋 2季 32",
    "parts": [
      {
        "inputTitle": "伪恋",
        "matchedTitle": "伪恋",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/74628",
        "platform": "TV",
        "totalEpisodes": 20,
        "rating": 7.1,
        "confidence": 135,
        "query": "伪恋",
        "cacheKey": "import-metadata-v1:2db6259eaeebf60f5570",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "租借女友 三季 36",
    "parts": [
      {
        "inputTitle": "租借女友",
        "matchedTitle": "租借女友",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/296076",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 5.6,
        "confidence": 135,
        "query": "租借女友",
        "cacheKey": "import-metadata-v1:264b3454484a857f8e88",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "齐木楠雄的灾难 2季",
    "parts": [
      {
        "inputTitle": "齐木楠雄的灾难",
        "matchedTitle": "齐木楠雄的灾难",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/181354",
        "platform": "TV",
        "totalEpisodes": 24,
        "rating": 7.7,
        "confidence": 135,
        "query": "齐木楠雄的灾难",
        "cacheKey": "import-metadata-v1:bf4fa748d7e3bc96cbea",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "炎炎消防队 2季 48",
    "parts": [
      {
        "inputTitle": "炎炎消防队",
        "matchedTitle": "炎炎消防队",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/266372",
        "platform": "TV",
        "totalEpisodes": 24,
        "rating": 6.5,
        "confidence": 135,
        "query": "炎炎消防队",
        "cacheKey": "import-metadata-v1:5fcdb4497f1e060e62ee",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "淫乱的青酱不能学习 12",
    "parts": [
      {
        "inputTitle": "淫乱的青酱不能学习",
        "matchedTitle": "淫乱的青酱不能学习",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/268412",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 6.2,
        "confidence": 134,
        "query": "淫乱的青酱不能学习",
        "cacheKey": "import-metadata-v1:73d41900f135d4e2e6f2",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "游戏三人娘 12",
    "parts": [
      {
        "inputTitle": "游戏三人娘",
        "matchedTitle": "来玩游戏吧",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/236020",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 7.6,
        "confidence": 135,
        "query": "游戏三人娘",
        "cacheKey": "import-metadata-v1:99a74c8546826b93b817",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "怪物事变 12",
    "parts": [
      {
        "inputTitle": "怪物事变",
        "matchedTitle": "怪物事变",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/296941",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 6.5,
        "confidence": 132,
        "query": "怪物事变",
        "cacheKey": "import-metadata-v1:c102d72a8de51de591e4",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "无能力者娜娜 13",
    "parts": [
      {
        "inputTitle": "无能力者娜娜",
        "matchedTitle": "无能的奈奈",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/302418",
        "platform": "TV",
        "totalEpisodes": 13,
        "rating": 7,
        "confidence": 135,
        "query": "无能力者娜娜",
        "cacheKey": "import-metadata-v1:893af22e6b1b1af30384",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "少女终末旅行 12",
    "parts": [
      {
        "inputTitle": "少女终末旅行",
        "matchedTitle": "少女终末旅行",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/218707",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 8.1,
        "confidence": 135,
        "query": "少女终末旅行",
        "cacheKey": "import-metadata-v1:504ea1e6619fb19d3f88",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "CAROLE ＆ TUESDAY  24",
    "parts": [
      {
        "inputTitle": "CAROLE ＆ TUESDAY",
        "matchedTitle": "CAROLE & TUESDAY",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/239912",
        "platform": "TV",
        "totalEpisodes": 24,
        "rating": 6.7,
        "confidence": 135,
        "query": "CAROLE ＆ TUESDAY",
        "cacheKey": "import-metadata-v1:129642f5590837c385b3",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "你与我最后的战场，亦或是世界起始的圣战12",
    "parts": [
      {
        "inputTitle": "你与我最后的战场，亦或是世界起始的圣战",
        "matchedTitle": "你与我最后的战场，亦或是世界起始的圣战",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/292273",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 5.4,
        "confidence": 133,
        "query": "你与我最后的战场，亦或是世界起始的圣战",
        "cacheKey": "import-metadata-v1:03a91ec25468eca7d297",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "忧国的莫里亚蒂 24",
    "parts": [
      {
        "inputTitle": "忧国的莫里亚蒂",
        "matchedTitle": "忧国的莫里亚蒂",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/297022",
        "platform": "TV",
        "totalEpisodes": 11,
        "rating": 6.6,
        "confidence": 130,
        "query": "忧国的莫里亚蒂",
        "cacheKey": "import-metadata-v1:4b0f7a18c0c4bc2dd567",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "冰海战记 两季 48",
    "parts": [
      {
        "inputTitle": "冰海战记",
        "matchedTitle": "冰海战记",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/240386",
        "platform": "TV",
        "totalEpisodes": 24,
        "rating": 8.3,
        "confidence": 135,
        "query": "冰海战记",
        "cacheKey": "import-metadata-v1:62a5c06e3773adb547e2",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "尸体派对 4",
    "parts": [
      {
        "inputTitle": "尸体派对",
        "matchedTitle": "尸体派对 Tortured Souls",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/58957",
        "platform": "OVA",
        "totalEpisodes": 4,
        "rating": 6,
        "confidence": 132,
        "query": "尸体派对",
        "cacheKey": "import-metadata-v1:b6ce60ab102f7311cbd9",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "替身another 13",
    "parts": [
      {
        "inputTitle": "替身another",
        "matchedTitle": "Another",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/20851",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 6.9,
        "confidence": 85,
        "query": "替身another",
        "cacheKey": "import-metadata-v1:38620c4046f3a6a78ac1",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "恶魔之子 10",
    "parts": [
      {
        "inputTitle": "恶魔之子",
        "matchedTitle": "真女神转生 恶魔之子 光与暗",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/35980",
        "platform": "TV",
        "totalEpisodes": 52,
        "rating": 6,
        "confidence": 77,
        "query": "恶魔之子",
        "cacheKey": "import-metadata-v1:adb852233b76c1fc97a3",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "异世界食堂 2季 24",
    "parts": [
      {
        "inputTitle": "异世界食堂",
        "matchedTitle": "异世界食堂",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/192252",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 6.7,
        "confidence": 134,
        "query": "异世界食堂",
        "cacheKey": "import-metadata-v1:0d4b0b8bf13402316a66",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "relife 17",
    "parts": [
      {
        "inputTitle": "relife",
        "matchedTitle": "ReLIFE",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/126173",
        "platform": "TV",
        "totalEpisodes": 13,
        "rating": 7.7,
        "confidence": 135,
        "query": "relife",
        "cacheKey": "import-metadata-v1:5ca57d8e25fc40e0dc15",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "罪恶王冠 23",
    "parts": [
      {
        "inputTitle": "罪恶王冠",
        "matchedTitle": "罪恶王冠",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/18635",
        "platform": "TV",
        "totalEpisodes": 22,
        "rating": 6.5,
        "confidence": 135,
        "query": "罪恶王冠",
        "cacheKey": "import-metadata-v1:5aabe9df517fcd703809",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "实况主的逃脱游戏 13",
    "parts": [
      {
        "inputTitle": "实况主的逃脱游戏",
        "matchedTitle": "中之人基因组【实况中】",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/247548",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 5.8,
        "confidence": 80,
        "query": "实况主的逃脱游戏",
        "cacheKey": "import-metadata-v1:61d2234cecde536cab84",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "赛马娘 2季 26",
    "parts": [
      {
        "inputTitle": "赛马娘",
        "matchedTitle": "赛马娘 Pretty Derby",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/212003",
        "platform": "TV",
        "totalEpisodes": 16,
        "rating": 7,
        "confidence": 135,
        "query": "赛马娘",
        "cacheKey": "import-metadata-v1:a403ee71463c4c654673",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "测不准的阿波连同学 2季 24",
    "parts": [
      {
        "inputTitle": "测不准的阿波连同学",
        "matchedTitle": "测不准的阿波连同学",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/343656",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 6.4,
        "confidence": 135,
        "query": "测不准的阿波连同学",
        "cacheKey": "import-metadata-v1:2892a7d8a8e09613baec",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "瓦尼塔斯的手记 24",
    "parts": [
      {
        "inputTitle": "瓦尼塔斯的手记",
        "matchedTitle": "瓦尼塔斯的手记",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/331692",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 6.4,
        "confidence": 130,
        "query": "瓦尼塔斯的手记",
        "cacheKey": "import-metadata-v1:c53b7335f6ed958c41b7",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "宝石之国 12",
    "parts": [
      {
        "inputTitle": "宝石之国",
        "matchedTitle": "宝石之国",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/214799",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 7.6,
        "confidence": 135,
        "query": "宝石之国",
        "cacheKey": "import-metadata-v1:9c9aac9d73efaf4fcb43",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "邻家索菲 12",
    "parts": [
      {
        "inputTitle": "邻家索菲",
        "matchedTitle": "邻家的吸血鬼小妹",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/241158",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 7,
        "confidence": 135,
        "query": "邻家索菲",
        "cacheKey": "import-metadata-v1:7a74125cf1704a225dc5",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "暗杀教室 2季 47",
    "parts": [
      {
        "inputTitle": "暗杀教室",
        "matchedTitle": "暗杀教室",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/106818",
        "platform": "TV",
        "totalEpisodes": 22,
        "rating": 7.4,
        "confidence": 135,
        "query": "暗杀教室",
        "cacheKey": "import-metadata-v1:1c5aa444c4fbb57c6bd5",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "间谍过家家三季50 + 剧场版代号：白",
    "parts": [
      {
        "inputTitle": "间谍过家家",
        "matchedTitle": "间谍过家家",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/329906",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 7.2,
        "confidence": 135,
        "query": "间谍过家家",
        "cacheKey": "import-metadata-v1:19840825474f2dabec84",
        "hintSignature": "[]"
      },
      {
        "inputTitle": "剧场版代号：白",
        "matchedTitle": "剧场版 间谍过家家 代号：白",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/411428",
        "platform": "剧场版",
        "totalEpisodes": 1,
        "rating": 6.7,
        "confidence": 135,
        "query": "剧场版代号：白",
        "cacheKey": "import-metadata-v1:2cc7ec4f3c28b1a75fc3",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "可塑性记忆 13",
    "parts": [
      {
        "inputTitle": "可塑性记忆",
        "matchedTitle": "可塑性记忆",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/114685",
        "platform": "TV",
        "totalEpisodes": 13,
        "rating": 7,
        "confidence": 135,
        "query": "可塑性记忆",
        "cacheKey": "import-metadata-v1:9fc82776d4396b3640ef",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "邻座的怪同学 14",
    "parts": [
      {
        "inputTitle": "邻座的怪同学",
        "matchedTitle": "邻座的怪同学",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/40533",
        "platform": "TV",
        "totalEpisodes": 13,
        "rating": 7.2,
        "confidence": 135,
        "query": "邻座的怪同学",
        "cacheKey": "import-metadata-v1:a51b022c977d44b768d0",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "萤火之森",
    "parts": [
      {
        "inputTitle": "萤火之森",
        "matchedTitle": "萤火之森",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/12544",
        "platform": "剧场版",
        "totalEpisodes": 1,
        "rating": 7.3,
        "confidence": 135,
        "query": "萤火之森",
        "cacheKey": "import-metadata-v1:71085ad158147453ba1e",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "埃罗芒阿老师 12",
    "parts": [
      {
        "inputTitle": "埃罗芒阿老师",
        "matchedTitle": "埃罗芒阿老师",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/172498",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 6.6,
        "confidence": 135,
        "query": "埃罗芒阿老师",
        "cacheKey": "import-metadata-v1:d9c37aacac2641256d81",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "雾山五行 3季",
    "parts": [
      {
        "inputTitle": "雾山五行",
        "matchedTitle": "雾山五行",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/305515",
        "platform": "WEB",
        "totalEpisodes": 3,
        "rating": 7.6,
        "confidence": 132,
        "query": "雾山五行",
        "cacheKey": "import-metadata-v1:8a615a0ac00112119d23",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "我太受欢迎了怎么办 12",
    "parts": [
      {
        "inputTitle": "我太受欢迎了怎么办",
        "matchedTitle": "我太受欢迎了该怎么办",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/172492",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 6,
        "confidence": 130,
        "query": "我太受欢迎了该怎么办",
        "cacheKey": "import-metadata-v1:60de3e5cfec1fec25e05",
        "hintSignature": "[\"我太受欢迎了该怎么办\"]"
      }
    ]
  },
  {
    "raw": "式守同学不止可爱 12",
    "parts": [
      {
        "inputTitle": "式守同学不止可爱",
        "matchedTitle": "式守同学不只可爱而已",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/324295",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 5.7,
        "confidence": 134,
        "query": "式守同学不只可爱而已",
        "cacheKey": "import-metadata-v1:923b00ade613f4cae59f",
        "hintSignature": "[\"式守同学不只可爱而已\"]"
      }
    ]
  },
  {
    "raw": "魔法少女小圆 12 + 外传 2季 25",
    "parts": [
      {
        "inputTitle": "魔法少女小圆",
        "matchedTitle": "魔法少女小圆",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/9717",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 8.6,
        "confidence": 135,
        "query": "魔法少女小圆",
        "cacheKey": "import-metadata-v1:35c9e9a8624513f5da8d",
        "hintSignature": "[]"
      },
      {
        "inputTitle": "外传",
        "matchedTitle": "武林外传",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/66140",
        "platform": "TV",
        "totalEpisodes": 300,
        "rating": 4.9,
        "confidence": 77,
        "query": "外传",
        "cacheKey": "import-metadata-v1:7f20e7c45dff6b3b917c",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "神之塔 13",
    "parts": [
      {
        "inputTitle": "神之塔",
        "matchedTitle": "神之塔",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/300839",
        "platform": "TV",
        "totalEpisodes": 13,
        "rating": 6.6,
        "confidence": 133,
        "query": "神之塔",
        "cacheKey": "import-metadata-v1:83f37e31653eab26d68b",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "契约之吻 13",
    "parts": [
      {
        "inputTitle": "契约之吻",
        "matchedTitle": "契约之吻",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/375817",
        "platform": "TV",
        "totalEpisodes": 13,
        "rating": 6.9,
        "confidence": 135,
        "query": "契约之吻",
        "cacheKey": "import-metadata-v1:74c42518f752677976d1",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "变身成黑辣妹之后就和死党上床了 8",
    "parts": [
      {
        "inputTitle": "变身成黑辣妹之后就和死党上床了",
        "matchedTitle": "变身！偶像公主",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/4530",
        "platform": "TV",
        "totalEpisodes": 51,
        "rating": 6.4,
        "confidence": 77,
        "query": "变身成黑辣妹之后就和死党上床了",
        "cacheKey": "import-metadata-v1:2f849810384988c93f10",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "86-不存在的战区 2季 34",
    "parts": [
      {
        "inputTitle": "86-不存在的战区",
        "matchedTitle": "86 -不存在的战区-",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/302189",
        "platform": "TV",
        "totalEpisodes": 11,
        "rating": 7.6,
        "confidence": 135,
        "query": "86-不存在的战区",
        "cacheKey": "import-metadata-v1:b5de07035b8807875b7c",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "玉子市场 12 + 玉子爱情故事",
    "parts": [
      {
        "inputTitle": "玉子市场",
        "matchedTitle": "玉子市场",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/55113",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 7.3,
        "confidence": 135,
        "query": "玉子市场",
        "cacheKey": "import-metadata-v1:a8879ab96652643286e5",
        "hintSignature": "[]"
      },
      {
        "inputTitle": "玉子爱情故事",
        "matchedTitle": "玉子爱情故事",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/90880",
        "platform": "剧场版",
        "totalEpisodes": 1,
        "rating": 7.9,
        "confidence": 135,
        "query": "玉子市场 玉子爱情故事",
        "cacheKey": "import-metadata-v1:aeb6c65fbd8b881e3be7",
        "hintSignature": "[\"玉子市场 玉子爱情故事\"]"
      }
    ]
  },
  {
    "raw": "想哭的我戴上了猫的面具",
    "parts": [
      {
        "inputTitle": "想哭的我戴上了猫的面具",
        "matchedTitle": "想哭的我戴上了猫的面具",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/299202",
        "platform": "WEB",
        "totalEpisodes": 1,
        "rating": 6.3,
        "confidence": 130,
        "query": "想哭的我戴上了猫的面具",
        "cacheKey": "import-metadata-v1:42cc7abbb4dcc84eee5f",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "lycoris recoil 莉可丽丝 13  小剧场 6",
    "parts": [
      {
        "inputTitle": "lycoris recoil 莉可丽丝 13 小剧场",
        "matchedTitle": "莉可丽丝",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/364450",
        "platform": "TV",
        "totalEpisodes": 13,
        "rating": 6.3,
        "confidence": 85,
        "query": "lycoris recoil 莉可丽丝 13 小剧场",
        "cacheKey": "import-metadata-v1:89ebb80c04d625cceaaa",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "夏日重现 25",
    "parts": [
      {
        "inputTitle": "夏日重现",
        "matchedTitle": "夏日重现",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/326895",
        "platform": "TV",
        "totalEpisodes": 25,
        "rating": 7.5,
        "confidence": 135,
        "query": "夏日重现",
        "cacheKey": "import-metadata-v1:6c09ebc769d8f8946f29",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "赛博朋克：边缘行者 10",
    "parts": [
      {
        "inputTitle": "赛博朋克：边缘行者",
        "matchedTitle": "赛博浪客",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/309311",
        "platform": "WEB",
        "totalEpisodes": 10,
        "rating": 8.3,
        "confidence": 132,
        "query": "赛博朋克：边缘行者",
        "cacheKey": "import-metadata-v1:2b8861fdd81a35a0d7e6",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "文豪野犬五季+剧场版 DEAD APPLE",
    "parts": [
      {
        "inputTitle": "文豪野犬",
        "matchedTitle": "文豪野犬",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/144357",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 6.6,
        "confidence": 135,
        "query": "文豪野犬",
        "cacheKey": "import-metadata-v1:e29eab2728f96603ee23",
        "hintSignature": "[]"
      },
      {
        "inputTitle": "剧场版 DEAD APPLE",
        "matchedTitle": "剧场版 空之境界 第一章 俯瞰风景",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/233",
        "platform": "剧场版",
        "totalEpisodes": 1,
        "rating": 7.9,
        "confidence": 85,
        "query": "剧场版 DEAD APPLE",
        "cacheKey": "import-metadata-v1:fe3b1ecfc718125c8a18",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "派对浪客诸葛孔明 12",
    "parts": [
      {
        "inputTitle": "派对浪客诸葛孔明",
        "matchedTitle": "派对浪客诸葛孔明",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/356756",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 7,
        "confidence": 135,
        "query": "派对浪客诸葛孔明",
        "cacheKey": "import-metadata-v1:5ff92c6142da5c9844eb",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "彻夜之歌 二季 25",
    "parts": [
      {
        "inputTitle": "彻夜之歌",
        "matchedTitle": "彻夜之歌",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/356774",
        "platform": "TV",
        "totalEpisodes": 13,
        "rating": 7.4,
        "confidence": 135,
        "query": "彻夜之歌",
        "cacheKey": "import-metadata-v1:9254f9d4de0922f3d718",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "她和她的猫 4话",
    "parts": [
      {
        "inputTitle": "她和她的猫",
        "matchedTitle": "她和她的猫 -Everything Flows-",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/164649",
        "platform": "TV",
        "totalEpisodes": 4,
        "rating": 7,
        "confidence": 133,
        "query": "她和她的猫",
        "cacheKey": "import-metadata-v1:cbfb568a8489ef144b28",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "女高中生的虚度日常 12",
    "parts": [
      {
        "inputTitle": "女高中生的虚度日常",
        "matchedTitle": "女高中生的无所事事",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/265708",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 7.6,
        "confidence": 135,
        "query": "女高中生的虚度日常",
        "cacheKey": "import-metadata-v1:5d543525f67ca81d0947",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "从零开始的魔法书 12",
    "parts": [
      {
        "inputTitle": "从零开始的魔法书",
        "matchedTitle": "从零开始的魔法书",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/194259",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 6.1,
        "confidence": 135,
        "query": "从零开始的魔法书",
        "cacheKey": "import-metadata-v1:077a0e1453ffcf6b3b38",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "恋爱游戏世界对路人角色很不友好 12",
    "parts": [
      {
        "inputTitle": "恋爱游戏世界对路人角色很不友好",
        "matchedTitle": "恋爱游戏世界对路人角色很不友好",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/359980",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 5.9,
        "confidence": 133,
        "query": "恋爱游戏世界对路人角色很不友好",
        "cacheKey": "import-metadata-v1:835f3fb79112feb03aa2",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "恋如雨止 12",
    "parts": [
      {
        "inputTitle": "恋如雨止",
        "matchedTitle": "恋如雨止",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/210458",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 7.5,
        "confidence": 135,
        "query": "恋如雨止",
        "cacheKey": "import-metadata-v1:7a445640808a00063d33",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "blood-c  12",
    "parts": [
      {
        "inputTitle": "blood-c",
        "matchedTitle": "BLOOD-C",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/14427",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 6,
        "confidence": 133,
        "query": "blood-c",
        "cacheKey": "import-metadata-v1:b849cb0c20b678a91ff7",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "孤独摇滚 12",
    "parts": [
      {
        "inputTitle": "孤独摇滚",
        "matchedTitle": "孤独摇滚！",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/328609",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 8.4,
        "confidence": 135,
        "query": "孤独摇滚",
        "cacheKey": "import-metadata-v1:e71b9a1e3da8a21b9435",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "电锯人 12  + Reze篇",
    "parts": [
      {
        "inputTitle": "电锯人",
        "matchedTitle": "链锯人",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/321885",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 6.9,
        "confidence": 135,
        "query": "电锯人",
        "cacheKey": "import-metadata-v1:0dc0b571dc758b7d74c4",
        "hintSignature": "[]"
      },
      {
        "inputTitle": "Reze篇",
        "matchedTitle": "剧场版 链锯人 蕾塞篇",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/470660",
        "platform": "剧场版",
        "totalEpisodes": 1,
        "rating": 8.4,
        "confidence": 135,
        "query": "电锯人 蕾塞篇",
        "cacheKey": "import-metadata-v1:c9fb8f1e7dec16799b1a",
        "hintSignature": "[\"电锯人 蕾塞篇\"]"
      }
    ]
  },
  {
    "raw": "奇幻世界舅舅 13",
    "parts": [
      {
        "inputTitle": "奇幻世界舅舅",
        "matchedTitle": "异世界舅舅",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/339326",
        "platform": "TV",
        "totalEpisodes": 13,
        "rating": 7.6,
        "confidence": 135,
        "query": "奇幻世界舅舅",
        "cacheKey": "import-metadata-v1:a7b160f61f3f3662fdfa",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "散华礼弥 14",
    "parts": [
      {
        "inputTitle": "散华礼弥",
        "matchedTitle": "散华礼弥",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/28230",
        "platform": "TV",
        "totalEpisodes": 13,
        "rating": 6.8,
        "confidence": 135,
        "query": "散华礼弥",
        "cacheKey": "import-metadata-v1:6c9422b1e8e7116aede9",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "别当欧尼酱了 12",
    "parts": [
      {
        "inputTitle": "别当欧尼酱了",
        "matchedTitle": "别当欧尼酱了！",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/378862",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 7.6,
        "confidence": 135,
        "query": "别当欧尼酱了",
        "cacheKey": "import-metadata-v1:0330f2ac8e66552eab71",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "政宗君的复仇（烂...）12",
    "parts": [
      {
        "inputTitle": "政宗君的复仇",
        "matchedTitle": "政宗君的复仇",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/185762",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 5.7,
        "confidence": 135,
        "query": "政宗君的复仇",
        "cacheKey": "import-metadata-v1:88d3fad388b9dc71a007",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "轻音少女二季 14 + 27  and  剧场版",
    "parts": [
      {
        "inputTitle": "轻音少女",
        "matchedTitle": "轻音少女",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/1424",
        "platform": "TV",
        "totalEpisodes": 14,
        "rating": 8.3,
        "confidence": 135,
        "query": "轻音少女",
        "cacheKey": "import-metadata-v1:f46cbf11c0bb2318e066",
        "hintSignature": "[]"
      },
      {
        "inputTitle": "27 and 剧场版",
        "matchedTitle": "迷幻27",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/484737",
        "platform": "剧场版",
        "totalEpisodes": 1,
        "rating": 4.7,
        "confidence": 77,
        "query": "27 and 剧场版",
        "cacheKey": "import-metadata-v1:fbd06ba04e848cbd1884",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "强风吹拂 23（！）",
    "parts": [
      {
        "inputTitle": "强风吹拂",
        "matchedTitle": "强风吹拂",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/248154",
        "platform": "TV",
        "totalEpisodes": 23,
        "rating": 8.4,
        "confidence": 135,
        "query": "强风吹拂",
        "cacheKey": "import-metadata-v1:e66d4088de29d01b25cc",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "GOSICK 24",
    "parts": [
      {
        "inputTitle": "GOSICK",
        "matchedTitle": "GOSICK",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/9781",
        "platform": "TV",
        "totalEpisodes": 24,
        "rating": 7.4,
        "confidence": 135,
        "query": "GOSICK",
        "cacheKey": "import-metadata-v1:c7d3858099539ea25ba1",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "通往夏天的隧道，再见的出口",
    "parts": [
      {
        "inputTitle": "通往夏天的隧道，再见的出口",
        "matchedTitle": "通往夏天的隧道，再见的出口",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/362575",
        "platform": "剧场版",
        "totalEpisodes": 1,
        "rating": 6.1,
        "confidence": 135,
        "query": "通往夏天的隧道，再见的出口",
        "cacheKey": "import-metadata-v1:78af40b299a08b3ad587",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "蜘蛛侠：平行世界+纵横宇宙",
    "parts": [
      {
        "inputTitle": "蜘蛛侠：平行世界",
        "matchedTitle": "蜘蛛侠：平行宇宙",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/232067",
        "platform": "剧场版",
        "totalEpisodes": 1,
        "rating": 7.9,
        "confidence": 135,
        "query": "蜘蛛侠：平行世界",
        "cacheKey": "import-metadata-v1:f43a1882b11558473428",
        "hintSignature": "[]"
      },
      {
        "inputTitle": "纵横宇宙",
        "matchedTitle": "蜘蛛侠：纵横宇宙",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/282413",
        "platform": "剧场版",
        "totalEpisodes": 1,
        "rating": 7.9,
        "confidence": 85,
        "query": "纵横宇宙",
        "cacheKey": "import-metadata-v1:fb35ccab24dd0dede777",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "久保同学不放过我 12",
    "parts": [
      {
        "inputTitle": "久保同学不放过我",
        "matchedTitle": "久保同学不放过我",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/381793",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 6.3,
        "confidence": 134,
        "query": "久保同学不放过我",
        "cacheKey": "import-metadata-v1:cbf6c15055c9de24b475",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "やがて君になる 终将成为你 13",
    "parts": [
      {
        "inputTitle": "やがて君になる 终将成为你",
        "matchedTitle": "终将成为你",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/243981",
        "platform": "TV",
        "totalEpisodes": 13,
        "rating": 7.8,
        "confidence": 85,
        "query": "やがて君になる 终将成为你",
        "cacheKey": "import-metadata-v1:a26567ae8a0e58e0af59",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "我推的孩子 二季 24",
    "parts": [
      {
        "inputTitle": "我推的孩子",
        "matchedTitle": "【我推的孩子】",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/386809",
        "platform": "TV",
        "totalEpisodes": 11,
        "rating": 7.4,
        "confidence": 135,
        "query": "我推的孩子",
        "cacheKey": "import-metadata-v1:af1cc56807e0cdb98f04",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "物理魔法使马修二季 24",
    "parts": [
      {
        "inputTitle": "物理魔法使马修",
        "matchedTitle": "物理魔法使马修",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/389571",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 5.8,
        "confidence": 134,
        "query": "物理魔法使马修",
        "cacheKey": "import-metadata-v1:7b48d669b50bfa7a3b04",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "柑橘味香气 12",
    "parts": [
      {
        "inputTitle": "柑橘味香气",
        "matchedTitle": "citrus～柑橘味香气～",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/198098",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 6.3,
        "confidence": 85,
        "query": "柑橘味香气",
        "cacheKey": "import-metadata-v1:9e7c37ec13b42d4cfd43",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "亡骸游戏 二季 24",
    "parts": [
      {
        "inputTitle": "亡骸游戏",
        "matchedTitle": "亡骸游戏",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/408013",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 6,
        "confidence": 130,
        "query": "亡骸游戏",
        "cacheKey": "import-metadata-v1:69289bd6880c1aead839",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "日常系的异能战斗 12",
    "parts": [
      {
        "inputTitle": "日常系的异能战斗",
        "matchedTitle": "日常系的异能战斗",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/99538",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 6.6,
        "confidence": 135,
        "query": "日常系的异能战斗",
        "cacheKey": "import-metadata-v1:5d73155f0cc5e33c946b",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "命运石之门 第一季 25 + 第二季 23 + ova +web +sp（β线）",
    "parts": [
      {
        "inputTitle": "命运石之门",
        "matchedTitle": "命运石之门",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/10380",
        "platform": "TV",
        "totalEpisodes": 25,
        "rating": 8.8,
        "confidence": 135,
        "query": "命运石之门",
        "cacheKey": "import-metadata-v1:264a798aef94b10de5ce",
        "hintSignature": "[]"
      },
      {
        "inputTitle": "ova",
        "matchedTitle": "皇家国教骑士团 OVA",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/493",
        "platform": "OVA",
        "totalEpisodes": 10,
        "rating": 8.2,
        "confidence": 135,
        "query": "ova",
        "cacheKey": "import-metadata-v1:a5e6245f893a6e4d7bf1",
        "hintSignature": "[]"
      },
      {
        "inputTitle": "web",
        "matchedTitle": "阿滋漫画Web大王",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/49979",
        "platform": "WEB",
        "totalEpisodes": 1,
        "rating": 6.3,
        "confidence": 124,
        "query": "web",
        "cacheKey": "import-metadata-v1:4a4df3a18b174807defb",
        "hintSignature": "[]"
      },
      {
        "inputTitle": "sp",
        "matchedTitle": "战国无双SP 真田之章",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/89942",
        "platform": "TV",
        "totalEpisodes": 1,
        "rating": 5.4,
        "confidence": 127,
        "query": "sp",
        "cacheKey": "import-metadata-v1:f58369df7b8440568ef2",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "其实，我乃最强 12",
    "parts": [
      {
        "inputTitle": "其实，我乃最强",
        "matchedTitle": "其实，我是最强的？",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/400215",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 5.4,
        "confidence": 130,
        "query": "其实，我乃最强",
        "cacheKey": "import-metadata-v1:b58627d6843a7c227d68",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "利兹与青鸟",
    "parts": [
      {
        "inputTitle": "利兹与青鸟",
        "matchedTitle": "莉兹与青鸟",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/216371",
        "platform": "剧场版",
        "totalEpisodes": 1,
        "rating": 8.6,
        "confidence": 135,
        "query": "利兹与青鸟",
        "cacheKey": "import-metadata-v1:02a0d8840bd25c3dd80c",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "BanG It's MyGO  13",
    "parts": [
      {
        "inputTitle": "BanG It's MyGO",
        "matchedTitle": "BanG Dream! It's MyGO!!!!!",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/428735",
        "platform": "TV",
        "totalEpisodes": 13,
        "rating": 8,
        "confidence": 85,
        "query": "BanG It's MyGO",
        "cacheKey": "import-metadata-v1:f0005403e74a87c9fa9b",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "皇家国教骑士团 13 + ova",
    "parts": [
      {
        "inputTitle": "皇家国教骑士团",
        "matchedTitle": "皇家国教骑士团",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/2216",
        "platform": "TV",
        "totalEpisodes": 13,
        "rating": 6.7,
        "confidence": 130,
        "query": "皇家国教骑士团",
        "cacheKey": "import-metadata-v1:a73b1fa3289d87e08f4d",
        "hintSignature": "[]"
      },
      {
        "inputTitle": "ova",
        "matchedTitle": "皇家国教骑士团 OVA",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/493",
        "platform": "OVA",
        "totalEpisodes": 10,
        "rating": 8.2,
        "confidence": 135,
        "query": "ova",
        "cacheKey": "import-metadata-v1:0f3c0de3af2fc1aad1d9",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "魔法使的新娘 第二季 48+剧场版：等待繁星之人+西之少年与青岚的骑士",
    "parts": [
      {
        "inputTitle": "魔法使的新娘",
        "matchedTitle": "魔法使的新娘",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/210864",
        "platform": "TV",
        "totalEpisodes": 24,
        "rating": 7.2,
        "confidence": 134,
        "query": "魔法使的新娘",
        "cacheKey": "import-metadata-v1:b469de1df5b5e0110132",
        "hintSignature": "[]"
      },
      {
        "inputTitle": "剧场版：等待繁星之人",
        "matchedTitle": "剧场版 空之境界 第一章 俯瞰风景",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/233",
        "platform": "剧场版",
        "totalEpisodes": 1,
        "rating": 7.9,
        "confidence": 85,
        "query": "剧场版：等待繁星之人",
        "cacheKey": "import-metadata-v1:1eaf5b88ce7d97b48b3a",
        "hintSignature": "[]"
      },
      {
        "inputTitle": "西之少年与青岚的骑士",
        "matchedTitle": "魔法使的新娘 西之少年与青岚的骑士",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/330394",
        "platform": "OVA",
        "totalEpisodes": 3,
        "rating": 6.6,
        "confidence": 128,
        "query": "西之少年与青岚的骑士",
        "cacheKey": "import-metadata-v1:00389ed7c67c5ef68103",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "吹响吧，上低音号 三季 40 + 剧场版：誓言的终章+合奏篇",
    "parts": [
      {
        "inputTitle": "吹响吧，上低音号",
        "matchedTitle": "吹响吧！上低音号",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/115908",
        "platform": "TV",
        "totalEpisodes": 14,
        "rating": 8.3,
        "confidence": 135,
        "query": "吹响吧，上低音号",
        "cacheKey": "import-metadata-v1:4765064da4647b165eac",
        "hintSignature": "[]"
      },
      {
        "inputTitle": "剧场版：誓言的终章",
        "matchedTitle": "剧场版 吹响吧！上低音号～誓言的终章～",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/216372",
        "platform": "剧场版",
        "totalEpisodes": 1,
        "rating": 8.1,
        "confidence": 85,
        "query": "剧场版：誓言的终章",
        "cacheKey": "import-metadata-v1:817e642fab14d7c0758f",
        "hintSignature": "[]"
      },
      {
        "inputTitle": "合奏篇",
        "matchedTitle": "特别篇 吹响吧！上低音号～合奏比赛～",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/386195",
        "platform": "剧场版",
        "totalEpisodes": 1,
        "rating": 7.5,
        "confidence": 85,
        "query": "合奏篇",
        "cacheKey": "import-metadata-v1:2755b691a69e229b3e3d",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "16bit的感动  13",
    "parts": [
      {
        "inputTitle": "16bit的感动",
        "matchedTitle": "16bit的感动 ANOTHER LAYER",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/413741",
        "platform": "TV",
        "totalEpisodes": 13,
        "rating": 5.5,
        "confidence": 135,
        "query": "16bit的感动",
        "cacheKey": "import-metadata-v1:d126309b6823e047df30",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "僕の心ろのやばいやつ（我心危！）第二季25",
    "parts": [
      {
        "inputTitle": "僕の心ろのやばいやつ（我心危！）",
        "matchedTitle": "我心里危险的东西",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/394260",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 7.8,
        "confidence": 85,
        "query": "僕の心ろのやばいやつ（我心危！）",
        "cacheKey": "import-metadata-v1:bde18ad0deb3d089d662",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "葬送的芙莉莲 二季 38",
    "parts": [
      {
        "inputTitle": "葬送的芙莉莲",
        "matchedTitle": "葬送的芙莉莲",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/400602",
        "platform": "TV",
        "totalEpisodes": 28,
        "rating": 8.5,
        "confidence": 135,
        "query": "葬送的芙莉莲",
        "cacheKey": "import-metadata-v1:96d9ccf22d3ccf5c162f",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "不死不幸 24",
    "parts": [
      {
        "inputTitle": "不死不幸",
        "matchedTitle": "不死不幸",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/397808",
        "platform": "TV",
        "totalEpisodes": 24,
        "rating": 6.4,
        "confidence": 135,
        "query": "不死不幸",
        "cacheKey": "import-metadata-v1:764e544a55128951141a",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "你想活出怎样的人生",
    "parts": [
      {
        "inputTitle": "你想活出怎样的人生",
        "matchedTitle": "你想活出怎样的人生",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/228715",
        "platform": "剧场版",
        "totalEpisodes": 1,
        "rating": 7.2,
        "confidence": 135,
        "query": "你想活出怎样的人生",
        "cacheKey": "import-metadata-v1:61bca92ada6d25b481fc",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "梦想成为魔法少女 13",
    "parts": [
      {
        "inputTitle": "梦想成为魔法少女",
        "matchedTitle": "梦想成为魔法少女",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/424663",
        "platform": "TV",
        "totalEpisodes": 13,
        "rating": 7,
        "confidence": 135,
        "query": "梦想成为魔法少女",
        "cacheKey": "import-metadata-v1:732877348848f1c5113b",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "香格里拉边境 二季 50",
    "parts": [
      {
        "inputTitle": "香格里拉边境",
        "matchedTitle": "香格里拉边境",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/390980",
        "platform": "TV",
        "totalEpisodes": 25,
        "rating": 6.4,
        "confidence": 135,
        "query": "香格里拉边境",
        "cacheKey": "import-metadata-v1:6ab0d6eead2665a26040",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "跃动青春 12",
    "parts": [
      {
        "inputTitle": "跃动青春",
        "matchedTitle": "跃动青春",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/357961",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 7.7,
        "confidence": 135,
        "query": "跃动青春",
        "cacheKey": "import-metadata-v1:69c12775facf2cb7adce",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "邪神与厨二病少女3季 36",
    "parts": [
      {
        "inputTitle": "邪神与厨二病少女",
        "matchedTitle": "邪神与厨二病少女",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/231722",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 7,
        "confidence": 135,
        "query": "邪神与厨二病少女",
        "cacheKey": "import-metadata-v1:58a5569546520b297022",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "摇曳露营3季37+sp 6+剧场版",
    "parts": [
      {
        "inputTitle": "摇曳露营",
        "matchedTitle": "摇曳露营△",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/207195",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 8.2,
        "confidence": 135,
        "query": "摇曳露营",
        "cacheKey": "import-metadata-v1:dfdd977f2c0bdcc3808c",
        "hintSignature": "[]"
      },
      {
        "inputTitle": "sp",
        "matchedTitle": "战国无双SP 真田之章",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/89942",
        "platform": "TV",
        "totalEpisodes": 1,
        "rating": 5.4,
        "confidence": 127,
        "query": "sp",
        "cacheKey": "import-metadata-v1:136f04a05cb2828d8dc9",
        "hintSignature": "[]"
      },
      {
        "inputTitle": "剧场版",
        "matchedTitle": "剧场版 空之境界 第一章 俯瞰风景",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/233",
        "platform": "剧场版",
        "totalEpisodes": 1,
        "rating": 7.9,
        "confidence": 135,
        "query": "剧场版",
        "cacheKey": "import-metadata-v1:6946b6bd1276bf1b444f",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "迷宫饭 24",
    "parts": [
      {
        "inputTitle": "迷宫饭",
        "matchedTitle": "迷宫饭",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/395378",
        "platform": "TV",
        "totalEpisodes": 24,
        "rating": 7.8,
        "confidence": 135,
        "query": "迷宫饭",
        "cacheKey": "import-metadata-v1:ad7e52eb06a76b425e9a",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "Grils Band Cry 哭泣少女乐队 13",
    "parts": [
      {
        "inputTitle": "Grils Band Cry 哭泣少女乐队",
        "matchedTitle": "少女乐队的呐喊",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/431767",
        "platform": "TV",
        "totalEpisodes": 13,
        "rating": 7.6,
        "confidence": 135,
        "query": "GIRLS BAND CRY",
        "cacheKey": "import-metadata-v1:079301e4f2d4d2f6edbc",
        "hintSignature": "[\"GIRLS BAND CRY\",\"ガールズバンドクライ\"]"
      }
    ]
  },
  {
    "raw": "Ave Mujika  13",
    "parts": [
      {
        "inputTitle": "Ave Mujika",
        "matchedTitle": "BanG Dream! Ave Mujica",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/454684",
        "platform": "TV",
        "totalEpisodes": 13,
        "rating": 4.1,
        "confidence": 135,
        "query": "BanG Dream! Ave Mujica",
        "cacheKey": "import-metadata-v1:683a2a5f73cbec6d8911",
        "hintSignature": "[\"BanG Dream! Ave Mujica\"]"
      }
    ]
  },
  {
    "raw": "夜晚的水母不会游泳 12",
    "parts": [
      {
        "inputTitle": "夜晚的水母不会游泳",
        "matchedTitle": "夜晚的水母不会游泳",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/425909",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 5.2,
        "confidence": 135,
        "query": "夜晚的水母不会游泳",
        "cacheKey": "import-metadata-v1:7a43058a559aba522b07",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "恋与轻唱10+2特别场（2集延期）",
    "parts": [
      {
        "inputTitle": "恋与轻唱",
        "matchedTitle": "恋与制作人",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/260736",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 4.7,
        "confidence": 77,
        "query": "恋与轻唱",
        "cacheKey": "import-metadata-v1:aa0f23a0857bcb1683ad",
        "hintSignature": "[]"
      },
      {
        "inputTitle": "2特别场",
        "matchedTitle": "恋与制作人",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/260736",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 4.7,
        "confidence": 77,
        "query": "恋与轻唱 2特别场",
        "cacheKey": "import-metadata-v1:c14304a257347b489545",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "鹿乃子乃子乃子虎视眈眈 12",
    "parts": [
      {
        "inputTitle": "鹿乃子乃子乃子虎视眈眈",
        "matchedTitle": "鹿乃子乃子乃子虎视眈眈",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/484761",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 5.1,
        "confidence": 135,
        "query": "鹿乃子乃子乃子虎视眈眈",
        "cacheKey": "import-metadata-v1:40bafa97d595158fe5d9",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "不時轻声以俄语遮羞的邻座艾莉同學 12",
    "parts": [
      {
        "inputTitle": "不時轻声以俄语遮羞的邻座艾莉同學",
        "matchedTitle": "不时轻声地以俄语遮羞的邻座艾莉同学",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/424883",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 5.5,
        "confidence": 85,
        "query": "不時轻声以俄语遮羞的邻座艾莉同學",
        "cacheKey": "import-metadata-v1:1dbfac2fffd290ede7af",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "义妹生活  12",
    "parts": [
      {
        "inputTitle": "义妹生活",
        "matchedTitle": "义妹生活",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/393037",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 7.4,
        "confidence": 135,
        "query": "义妹生活",
        "cacheKey": "import-metadata-v1:b292081becd5af0526ef",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "深夜 PUNCH 12",
    "parts": [
      {
        "inputTitle": "深夜 PUNCH",
        "matchedTitle": "深夜重拳",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/477207",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 7.3,
        "confidence": 135,
        "query": "深夜 PUNCH",
        "cacheKey": "import-metadata-v1:ae7208cda7a895254ac5",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "魔法少女与恶曾是敌人 12",
    "parts": [
      {
        "inputTitle": "魔法少女与恶曾是敌人",
        "matchedTitle": "魔法少女与邪恶曾经敌对。",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/465884",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 7.1,
        "confidence": 135,
        "query": "魔法少女与恶曾是敌人",
        "cacheKey": "import-metadata-v1:57959cb66f158b257228",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "败犬女主太多了 12",
    "parts": [
      {
        "inputTitle": "败犬女主太多了",
        "matchedTitle": "败犬女主太多了！",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/464376",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 8,
        "confidence": 135,
        "query": "败犬女主太多了",
        "cacheKey": "import-metadata-v1:14c4673156a6272b0c59",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "蓝色监狱 二季38 + 凪 剧场版",
    "parts": [
      {
        "inputTitle": "蓝色监狱",
        "matchedTitle": "蓝色监狱",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/341163",
        "platform": "TV",
        "totalEpisodes": 24,
        "rating": 6.3,
        "confidence": 133,
        "query": "蓝色监狱",
        "cacheKey": "import-metadata-v1:b6b2074488e59463e2b8",
        "hintSignature": "[]"
      },
      {
        "inputTitle": "凪 剧场版",
        "matchedTitle": "蓝色监狱",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/341163",
        "platform": "TV",
        "totalEpisodes": 24,
        "rating": 6.3,
        "confidence": 133,
        "query": "蓝色监狱 凪",
        "cacheKey": "import-metadata-v1:c15c153d45e7686caa3c",
        "hintSignature": "[\"蓝色监狱 凪\"]"
      }
    ]
  },
  {
    "raw": "dddd 恶魔的破坏 17",
    "parts": [
      {
        "inputTitle": "dddd 恶魔的破坏",
        "matchedTitle": "DDDD 恶魔的破坏",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/495562",
        "platform": "WEB",
        "totalEpisodes": 18,
        "rating": 7.6,
        "confidence": 130,
        "query": "dddd 恶魔的破坏",
        "cacheKey": "import-metadata-v1:ac01a57aaed091c74500",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "亚托莉 -我挚爱的时光 13",
    "parts": [
      {
        "inputTitle": "亚托莉 -我挚爱的时光",
        "matchedTitle": "ATRI -My Dear Moments-",
        "source": "anilist",
        "sourceUrl": "https://anilist.co/anime/154963",
        "platform": "TV",
        "totalEpisodes": 13,
        "rating": 7,
        "confidence": 127,
        "query": "ATRI -My Dear Moments-",
        "cacheKey": "import-metadata-v1:ffa7b4b8e0ba934d71b2",
        "hintSignature": "[\"ATRI -My Dear Moments-\",\"亚托莉 -我挚爱的时光-\"]"
      }
    ]
  },
  {
    "raw": "我独自升级 二季 25",
    "parts": [
      {
        "inputTitle": "我独自升级",
        "matchedTitle": "我独自升级",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/390353",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 6.5,
        "confidence": 135,
        "query": "我独自升级",
        "cacheKey": "import-metadata-v1:767ecaeb19412cf15a35",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "月刊少女野崎君 12",
    "parts": [
      {
        "inputTitle": "月刊少女野崎君",
        "matchedTitle": "月刊少女野崎君",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/100449",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 7.8,
        "confidence": 135,
        "query": "月刊少女野崎君",
        "cacheKey": "import-metadata-v1:32372a4a1266e257b03f",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "期待在地下城邂逅有错吗 五季  +  ova   75    +     外传12",
    "parts": [
      {
        "inputTitle": "期待在地下城邂逅有错吗",
        "matchedTitle": "在地下城寻求邂逅是否搞错了什么",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/116287",
        "platform": "TV",
        "totalEpisodes": 13,
        "rating": 6.8,
        "confidence": 135,
        "query": "期待在地下城邂逅有错吗",
        "cacheKey": "import-metadata-v1:ff7816da1d470212f8f9",
        "hintSignature": "[]"
      },
      {
        "inputTitle": "ova",
        "matchedTitle": "皇家国教骑士团 OVA",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/493",
        "platform": "OVA",
        "totalEpisodes": 10,
        "rating": 8.2,
        "confidence": 135,
        "query": "ova",
        "cacheKey": "import-metadata-v1:cbb32cea96aebd5602f8",
        "hintSignature": "[]"
      },
      {
        "inputTitle": "外传",
        "matchedTitle": "武林外传",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/66140",
        "platform": "TV",
        "totalEpisodes": 300,
        "rating": 4.9,
        "confidence": 77,
        "query": "外传",
        "cacheKey": "import-metadata-v1:50b09ddd2ae3f28475db",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "漩涡 4",
    "parts": [
      {
        "inputTitle": "漩涡",
        "matchedTitle": "漩涡",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/289854",
        "platform": "TV",
        "totalEpisodes": 4,
        "rating": 5.5,
        "confidence": 130,
        "query": "漩涡",
        "cacheKey": "import-metadata-v1:0fd32d7fdaf610fc2b7f",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "超超超超喜欢你的100个女朋友 2季 36",
    "parts": [
      {
        "inputTitle": "超超超超喜欢你的100个女朋友",
        "matchedTitle": "超超超超超喜欢你的100个女朋友",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/424379",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 7.3,
        "confidence": 85,
        "query": "超超超超喜欢你的100个女朋友",
        "cacheKey": "import-metadata-v1:8828c77a133ea5d54207",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "胆大党 2季 24",
    "parts": [
      {
        "inputTitle": "胆大党",
        "matchedTitle": "胆大党",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/467461",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 7.5,
        "confidence": 135,
        "query": "胆大党",
        "cacheKey": "import-metadata-v1:0490bb759e16f3ec8143",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "空之境界  全册四系列",
    "parts": [
      {
        "inputTitle": "空之境界 全册四系列",
        "matchedTitle": "剧场版 空之境界 第一章 俯瞰风景",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/233",
        "platform": "剧场版",
        "totalEpisodes": 1,
        "rating": 7.9,
        "confidence": 85,
        "query": "空之境界 全册四系列",
        "cacheKey": "import-metadata-v1:08b9b751ef78321aa9b3",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "蓦然回首",
    "parts": [
      {
        "inputTitle": "蓦然回首",
        "matchedTitle": "蓦然回首",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/480441",
        "platform": "剧场版",
        "totalEpisodes": 1,
        "rating": 7.8,
        "confidence": 135,
        "query": "蓦然回首",
        "cacheKey": "import-metadata-v1:ca1203ff7a99a87c3420",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "双城之战 二季 18",
    "parts": [
      {
        "inputTitle": "双城之战",
        "matchedTitle": "英雄联盟：双城之战",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/335036",
        "platform": "WEB",
        "totalEpisodes": 9,
        "rating": 8.4,
        "confidence": 132,
        "query": "双城之战",
        "cacheKey": "import-metadata-v1:6b1311661e3d9d3b0004",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "甘城光辉游乐园 14+SP",
    "parts": [
      {
        "inputTitle": "甘城光辉游乐园",
        "matchedTitle": "甘城光辉游乐园",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/93545",
        "platform": "TV",
        "totalEpisodes": 14,
        "rating": 7,
        "confidence": 135,
        "query": "甘城光辉游乐园",
        "cacheKey": "import-metadata-v1:879efbe64e4e98c12fa9",
        "hintSignature": "[]"
      },
      {
        "inputTitle": "SP",
        "matchedTitle": "战国无双SP 真田之章",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/89942",
        "platform": "TV",
        "totalEpisodes": 1,
        "rating": 5.4,
        "confidence": 127,
        "query": "SP",
        "cacheKey": "import-metadata-v1:153dbd0cad70ffb90151",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "和山田谈场lv999的恋爱 13",
    "parts": [
      {
        "inputTitle": "和山田谈场lv999的恋爱",
        "matchedTitle": "和山田谈场Lv999的恋爱",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/395684",
        "platform": "TV",
        "totalEpisodes": 13,
        "rating": 6.5,
        "confidence": 132,
        "query": "和山田谈场lv999的恋爱",
        "cacheKey": "import-metadata-v1:7c9ff514bb4d65716e7c",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "青之箱 25（かみだ!）",
    "parts": [
      {
        "inputTitle": "青之箱",
        "matchedTitle": "青之箱",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/460306",
        "platform": "TV",
        "totalEpisodes": 25,
        "rating": 6.8,
        "confidence": 135,
        "query": "青之箱",
        "cacheKey": "import-metadata-v1:94ea6772be1495b89516",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "药屋少女的呢喃 24（第二季wait）",
    "parts": [
      {
        "inputTitle": "药屋少女的呢喃",
        "matchedTitle": "药屋少女的呢喃",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/420628",
        "platform": "TV",
        "totalEpisodes": 24,
        "rating": 7.5,
        "confidence": 135,
        "query": "药屋少女的呢喃",
        "cacheKey": "import-metadata-v1:b594d275e85e9e787bb2",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "斩服少女 24（老神作了）",
    "parts": [
      {
        "inputTitle": "斩服少女",
        "matchedTitle": "斩服少女",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/72941",
        "platform": "TV",
        "totalEpisodes": 24,
        "rating": 8.1,
        "confidence": 135,
        "query": "斩服少女",
        "cacheKey": "import-metadata-v1:03d9d9cfd066773db6cb",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "岁月流逝饭菜依旧美味 12",
    "parts": [
      {
        "inputTitle": "岁月流逝饭菜依旧美味",
        "matchedTitle": "时光流逝，饭菜依旧美味",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/531159",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 7.7,
        "confidence": 135,
        "query": "岁月流逝饭菜依旧美味",
        "cacheKey": "import-metadata-v1:ce7a5025c65ea853429c",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "mono しょうじょ 12",
    "parts": [
      {
        "inputTitle": "mono しょうじょ",
        "matchedTitle": "mono女孩",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/485936",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 7.1,
        "confidence": 85,
        "query": "mono しょうじょ",
        "cacheKey": "import-metadata-v1:ff7cb9d7ad81d04860c7",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "想要成为影之实力者 2季 32",
    "parts": [
      {
        "inputTitle": "想要成为影之实力者",
        "matchedTitle": "想要成为影之实力者！",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/329114",
        "platform": "TV",
        "totalEpisodes": 20,
        "rating": 7.1,
        "confidence": 135,
        "query": "想要成为影之实力者",
        "cacheKey": "import-metadata-v1:872ec040fdb730111872",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "避难所",
    "parts": [
      {
        "inputTitle": "避难所",
        "matchedTitle": "避难所",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/195249",
        "platform": "其他",
        "totalEpisodes": 1,
        "rating": 7.5,
        "confidence": 129,
        "query": "避难所",
        "cacheKey": "import-metadata-v1:41bc089bbc6955d2e5f5",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "亚人 二季 26",
    "parts": [
      {
        "inputTitle": "亚人",
        "matchedTitle": "亚人",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/146093",
        "platform": "TV",
        "totalEpisodes": 13,
        "rating": 7.3,
        "confidence": 135,
        "query": "亚人",
        "cacheKey": "import-metadata-v1:f6a5b4b077f53fd07198",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "血界战线 二季 24",
    "parts": [
      {
        "inputTitle": "血界战线",
        "matchedTitle": "血界战线",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/105075",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 7.4,
        "confidence": 135,
        "query": "血界战线",
        "cacheKey": "import-metadata-v1:9c79d3cb3bfe2a10f6d4",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "花开伊吕波 26 + 剧场版-Home Sweet Home",
    "parts": [
      {
        "inputTitle": "花开伊吕波",
        "matchedTitle": "花开伊吕波",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/22759",
        "platform": "TV",
        "totalEpisodes": 26,
        "rating": 7.5,
        "confidence": 135,
        "query": "花开伊吕波",
        "cacheKey": "import-metadata-v1:039e5d92ba9f91deee51",
        "hintSignature": "[]"
      },
      {
        "inputTitle": "剧场版-Home Sweet Home",
        "matchedTitle": "剧场版 花开伊吕波 HOME SWEET HOME",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/49892",
        "platform": "剧场版",
        "totalEpisodes": 1,
        "rating": 7.6,
        "confidence": 135,
        "query": "剧场版-Home Sweet Home",
        "cacheKey": "import-metadata-v1:9b604981825a98eea21f",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "我們不可能成為戀人！絕對不行。（※似乎可行？） 12",
    "parts": [
      {
        "inputTitle": "我們不可能成為戀人！絕對不行。",
        "matchedTitle": "我们不可能成为恋人！绝对不行。 (※似乎可行？) 〜再次闪耀！〜",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/587454",
        "platform": "TV",
        "totalEpisodes": 5,
        "rating": 7.3,
        "confidence": 85,
        "query": "我們不可能成為戀人！絕對不行。",
        "cacheKey": "import-metadata-v1:5326d71b2cbcad765795",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "光死去的夏天 12",
    "parts": [
      {
        "inputTitle": "光死去的夏天",
        "matchedTitle": "光死去的夏天",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/496086",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 6.8,
        "confidence": 133,
        "query": "光死去的夏天",
        "cacheKey": "import-metadata-v1:f77931a2ddcbe54187b0",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "章鱼哔的原罪 6",
    "parts": [
      {
        "inputTitle": "章鱼哔的原罪",
        "matchedTitle": "章鱼哔的原罪",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/527620",
        "platform": "WEB",
        "totalEpisodes": 6,
        "rating": 6.8,
        "confidence": 132,
        "query": "章鱼哔的原罪",
        "cacheKey": "import-metadata-v1:e34120a52df4c968cd4c",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "末日后酒店 12",
    "parts": [
      {
        "inputTitle": "末日后酒店",
        "matchedTitle": "末日后酒店",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/509986",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 8.2,
        "confidence": 135,
        "query": "末日后酒店",
        "cacheKey": "import-metadata-v1:3f6b9f98d3fde22f5d05",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "沉默美女的秘密 13",
    "parts": [
      {
        "inputTitle": "沉默美女的秘密",
        "matchedTitle": "Silent Witch 沉默魔女的秘密",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/506677",
        "platform": "TV",
        "totalEpisodes": 13,
        "rating": 6.6,
        "confidence": 135,
        "query": "沉默魔女的秘密",
        "cacheKey": "import-metadata-v1:10774df4bfcb89b0e9fe",
        "hintSignature": "[\"沉默魔女的秘密\",\"Silent Witch\"]"
      }
    ]
  },
  {
    "raw": "魔女守护者 25",
    "parts": [
      {
        "inputTitle": "魔女守护者",
        "matchedTitle": "魔女与使魔",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/506672",
        "platform": "TV",
        "totalEpisodes": 25,
        "rating": 6.9,
        "confidence": 135,
        "query": "魔女守护者",
        "cacheKey": "import-metadata-v1:c12fbbd661caeea18311",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "薰香花朵凌然绽放 13",
    "parts": [
      {
        "inputTitle": "薰香花朵凌然绽放",
        "matchedTitle": "薰香花朵凛然绽放",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/513345",
        "platform": "TV",
        "totalEpisodes": 13,
        "rating": 6.9,
        "confidence": 135,
        "query": "薰香花朵凛然绽放",
        "cacheKey": "import-metadata-v1:b3a71f5767d32eb81b71",
        "hintSignature": "[\"薰香花朵凛然绽放\",\"薫る花は凛と咲く\"]"
      }
    ]
  },
  {
    "raw": "前桥魔女 12",
    "parts": [
      {
        "inputTitle": "前桥魔女",
        "matchedTitle": "前桥魔女",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/511207",
        "platform": "TV",
        "totalEpisodes": 12,
        "rating": 7.2,
        "confidence": 134,
        "query": "前桥魔女",
        "cacheKey": "import-metadata-v1:b9b0257cf64d202e8cfd",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "小城日常 13",
    "parts": [
      {
        "inputTitle": "小城日常",
        "matchedTitle": "小城日常",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/514358",
        "platform": "TV",
        "totalEpisodes": 13,
        "rating": 7.5,
        "confidence": 135,
        "query": "小城日常",
        "cacheKey": "import-metadata-v1:1fe2740e2c4151777df8",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "金牌得主 二季 22",
    "parts": [
      {
        "inputTitle": "金牌得主",
        "matchedTitle": "金牌得主",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/430699",
        "platform": "TV",
        "totalEpisodes": 13,
        "rating": 8,
        "confidence": 135,
        "query": "金牌得主",
        "cacheKey": "import-metadata-v1:d73278917286c5e01a22",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "你的颜色",
    "parts": [
      {
        "inputTitle": "你的颜色",
        "matchedTitle": "你的颜色",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/409576",
        "platform": "剧场版",
        "totalEpisodes": 1,
        "rating": 6.7,
        "confidence": 134,
        "query": "你的颜色",
        "cacheKey": "import-metadata-v1:ebf3aa98cfa46924b5f2",
        "hintSignature": "[]"
      }
    ]
  },
  {
    "raw": "lain 玲音13",
    "parts": [
      {
        "inputTitle": "lain 玲音",
        "matchedTitle": "玲音",
        "source": "bangumi",
        "sourceUrl": "https://bgm.tv/subject/2582",
        "platform": "TV",
        "totalEpisodes": 13,
        "rating": 7.8,
        "confidence": 85,
        "query": "lain 玲音",
        "cacheKey": "import-metadata-v1:cb8945c5b408f47eff36",
        "hintSignature": "[]"
      }
    ]
  }
];
