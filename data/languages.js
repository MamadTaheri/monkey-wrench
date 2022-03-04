const languages = [
  {
    id: 1001,
    label: "Afar",
    value: "aa",
  },
  {
    id: 1002,
    label: "Abkhazian",
    value: "ab",
  },
  {
    id: 1003,
    label: "Avestan",
    value: "ae",
  },
  {
    id: 1004,
    label: "Afrikaans",
    value: "af",
  },
  {
    id: 1005,
    label: "Akan",
    value: "ak",
  },
  {
    id: 1006,
    label: "Amharic",
    value: "am",
  },
  {
    id: 1007,
    label: "Aragonese",
    value: "an",
  },
  {
    id: 1008,
    label: "Arabic",
    value: "ar",
  },
  {
    id: 1009,
    label: "Assamese",
    value: "as",
  },
  {
    id: 1010,
    label: "Avaric",
    value: "av",
  },
  {
    id: 1011,
    label: "Aymara",
    value: "ay",
  },
  {
    id: 1012,
    label: "Azerbaijani",
    value: "az",
  },
  {
    id: 1013,
    label: "Bashkir",
    value: "ba",
  },
  {
    id: 1014,
    label: "Belarusian",
    value: "be",
  },
  {
    id: 1015,
    label: "Bulgarian",
    value: "bg",
  },
  {
    id: 1016,
    label: "Bihari languages",
    value: "bh",
  },
  {
    id: 1017,
    label: "Bislama",
    value: "bi",
  },
  {
    id: 1018,
    label: "Bambara",
    value: "bm",
  },
  {
    id: 1019,
    label: "Bengali",
    value: "bn",
  },
  {
    id: 1020,
    label: "Tibetan",
    value: "bo",
  },
  {
    id: 1021,
    label: "Breton",
    value: "br",
  },
  {
    id: 1022,
    label: "Bosnian",
    value: "bs",
  },
  {
    id: 1023,
    label: "Catalan",
    value: "ca",
  },
  {
    id: 1024,
    label: "Chechen",
    value: "ce",
  },
  {
    id: 1025,
    label: "Chamorro",
    value: "ch",
  },
  {
    id: 1026,
    label: "Corsican",
    value: "co",
  },
  {
    id: 1027,
    label: "Cree",
    value: "cr",
  },
  {
    id: 1028,
    label: "Czech",
    value: "cs",
  },
  {
    id: 1029,
    label: "Church Slavic",
    value: "cu",
  },
  {
    id: 1030,
    label: "Chuvash",
    value: "cv",
  },
  {
    id: 1031,
    label: "Welsh",
    value: "cy",
  },
  {
    id: 1032,
    label: "Danish",
    value: "da",
  },
  {
    id: 1033,
    label: "German",
    value: "de",
  },
  {
    id: 1034,
    label: "Divehi",
    value: "dv",
  },
  {
    id: 1035,
    label: "Dzongkha",
    value: "dz",
  },
  {
    id: 1036,
    label: "Ewe",
    value: "ee",
  },
  {
    id: 1037,
    label: "Greek, Modern (1453-)",
    value: "el",
  },
  {
    id: 1038,
    label: "English",
    value: "en",
  },
  {
    id: 1039,
    label: "Esperanto",
    value: "eo",
  },
  {
    id: 1040,
    label: "Spanish",
    value: "es",
  },
  {
    id: 1041,
    label: "Estonian",
    value: "et",
  },
  {
    id: 1042,
    label: "Basque",
    value: "eu",
  },
  {
    id: 1043,
    label: "Persian",
    value: "fa",
  },
  {
    id: 1044,
    label: "Fulah",
    value: "ff",
  },
  {
    id: 1045,
    label: "Finnish",
    value: "fi",
  },
  {
    id: 1046,
    label: "Fijian",
    value: "fj",
  },
  {
    id: 1047,
    label: "Faroese",
    value: "fo",
  },
  {
    id: 1048,
    label: "French",
    value: "fr",
  },
  {
    id: 1049,
    label: "Western Frisian",
    value: "fy",
  },
  {
    id: 1050,
    label: "Irish",
    value: "ga",
  },
  {
    id: 1051,
    label: "Gaelic",
    value: "gd",
  },
  {
    id: 1052,
    label: "Galician",
    value: "gl",
  },
  {
    id: 1053,
    label: "Guarani",
    value: "gn",
  },
  {
    id: 1054,
    label: "Gujarati",
    value: "gu",
  },
  {
    id: 1055,
    label: "Manx",
    value: "gv",
  },
  {
    id: 1056,
    label: "Hausa",
    value: "ha",
  },
  {
    id: 1057,
    label: "Hebrew",
    value: "he",
  },
  {
    id: 1058,
    label: "Hindi",
    value: "hi",
  },
  {
    id: 1059,
    label: "Hiri Motu",
    value: "ho",
  },
  {
    id: 1060,
    label: "Croatian",
    value: "hr",
  },
  {
    id: 1061,
    label: "Haitian",
    value: "ht",
  },
  {
    id: 1062,
    label: "Hungarian",
    value: "hu",
  },
  {
    id: 1063,
    label: "Armenian",
    value: "hy",
  },
  {
    id: 1064,
    label: "",
    value: "",
  },
  {
    id: 1065,
    label: "Herero",
    value: "hz",
  },
  {
    id: 1066,
    label: "Interlingua (International Auxiliary Language Association)",
    value: "ia",
  },
  {
    id: 1067,
    label: "Indonesian",
    value: "id",
  },
  {
    id: 1068,
    label: "Interlingue",
    value: "ie",
  },
  {
    id: 1069,
    label: "Igbo",
    value: "ig",
  },
  {
    id: 1070,
    label: "Sichuan Yi",
    value: "ii",
  },
  {
    id: 1071,
    label: "Inupiaq",
    value: "ik",
  },
  {
    id: 1072,
    label: "Ido",
    value: "io",
  },
  {
    id: 1073,
    label: "Icelandic",
    value: "is",
  },
  {
    id: 1074,
    label: "Italian",
    value: "it",
  },
  {
    id: 1075,
    label: "Inuktitut",
    value: "iu",
  },
  {
    id: 1076,
    label: "Japanese",
    value: "ja",
  },
  {
    id: 1077,
    label: "Javanese",
    value: "jv",
  },
  {
    id: 1078,
    label: "Georgian",
    value: "ka",
  },
  {
    id: 1079,
    label: "Kongo",
    value: "kg",
  },
  {
    id: 1080,
    label: "Kikuyu",
    value: "ki",
  },
  {
    id: 1081,
    label: "Kuanyama",
    value: "kj",
  },
  {
    id: 1082,
    label: "Kazakh",
    value: "kk",
  },
  {
    id: 1083,
    label: "Kalaallisut",
    value: "kl",
  },
  {
    id: 1084,
    label: "Khmer",
    value: "km",
  },
  {
    id: 1085,
    label: "Kannada",
    value: "kn",
  },
  {
    id: 1086,
    label: "Korean",
    value: "ko",
  },
  {
    id: 1087,
    label: "Kanuri",
    value: "kr",
  },
  {
    id: 1088,
    label: "Kashmiri",
    value: "ks",
  },
  {
    id: 1089,
    label: "Kurdish",
    value: "ku",
  },
  {
    id: 1090,
    label: "Komi",
    value: "kv",
  },
  {
    id: 1091,
    label: "Cornish",
    value: "kw",
  },
  {
    id: 1092,
    label: "Kirghiz",
    value: "ky",
  },
  {
    id: 1093,
    label: "Latin",
    value: "la",
  },
  {
    id: 1094,
    label: "Luxembourgish",
    value: "lb",
  },
  {
    id: 1095,
    label: "Ganda",
    value: "lg",
  },
  {
    id: 1096,
    label: "Limburgan",
    value: "li",
  },
  {
    id: 1097,
    label: "Lingala",
    value: "ln",
  },
  {
    id: 1098,
    label: "Lao",
    value: "lo",
  },
  {
    id: 1099,
    label: "Lithuanian",
    value: "lt",
  },
  {
    id: 1100,
    label: "Luba-Katanga",
    value: "lu",
  },
  {
    id: 1101,
    label: "Latvian",
    value: "lv",
  },
  {
    id: 1102,
    label: "Malagasy",
    value: "mg",
  },
  {
    id: 1103,
    label: "Marshallese",
    value: "mh",
  },
  {
    id: 1104,
    label: "Maori",
    value: "mi",
  },
  {
    id: 1105,
    label: "Macedonian",
    value: "mk",
  },
  {
    id: 1106,
    label: "Malayalam",
    value: "ml",
  },
  {
    id: 1107,
    label: "Mongolian",
    value: "mn",
  },
  {
    id: 1108,
    label: "Marathi",
    value: "mr",
  },
  {
    id: 1109,
    label: "Malay",
    value: "ms",
  },
  {
    id: 1110,
    label: "Maltese",
    value: "mt",
  },
  {
    id: 1111,
    label: "Burmese",
    value: "my",
  },
  {
    id: 1112,
    label: "Nauru",
    value: "na",
  },
  {
    id: 1113,
    label: "Bokml, Norwegian; Norwegian Bokml",
    value: "nb",
  },
  {
    id: 1114,
    label: "Ndebele, North; North Ndebele",
    value: "nd",
  },
  {
    id: 1115,
    label: "Nepali",
    value: "ne",
  },
  {
    id: 1116,
    label: "Ndonga",
    value: "ng",
  },
  {
    id: 1117,
    label: "Dutch",
    value: "nl",
  },
  {
    id: 1118,
    label: "Norwegian Nynorsk; Nynorsk, Norwegian",
    value: "nn",
  },
  {
    id: 1119,
    label: "Norwegian",
    value: "no",
  },
  {
    id: 1120,
    label: "Ndebele, South; South Ndebele",
    value: "nr",
  },
  {
    id: 1121,
    label: "Navajo",
    value: "nv",
  },
  {
    id: 1122,
    label: "Chichewa",
    value: "ny",
  },
  {
    id: 1123,
    label: "Occitan (post 151)",
    value: "oc",
  },
  {
    id: 1124,
    label: "Ojibwa",
    value: "oj",
  },
  {
    id: 1125,
    label: "Oromo",
    value: "om",
  },
  {
    id: 1126,
    label: "Oriya",
    value: "or",
  },
  {
    id: 1127,
    label: "Ossetian",
    value: "os",
  },
  {
    id: 1128,
    label: "Panjabi",
    value: "pa",
  },
  {
    id: 1129,
    label: "Pali",
    value: "pi",
  },
  {
    id: 1130,
    label: "Polish",
    value: "pl",
  },
  {
    id: 1131,
    label: "Pushto",
    value: "ps",
  },
  {
    id: 1132,
    label: "Portuguese",
    value: "pt",
  },
  {
    id: 1133,
    label: "Quechua",
    value: "qu",
  },
  {
    id: 1134,
    label: "Romansh",
    value: "rm",
  },
  {
    id: 1135,
    label: "Rundi",
    value: "rn",
  },
  {
    id: 1136,
    label: "Romanian",
    value: "ro",
  },
  {
    id: 1137,
    label: "Russian",
    value: "ru",
  },
  {
    id: 1138,
    label: "Kinyarwanda",
    value: "rw",
  },
  {
    id: 1139,
    label: "Sanskrit",
    value: "sa",
  },
  {
    id: 1140,
    label: "Sardinian",
    value: "sc",
  },
  {
    id: 1141,
    label: "Sindhi",
    value: "sd",
  },
  {
    id: 1142,
    label: "Northern Sami",
    value: "se",
  },
  {
    id: 1143,
    label: "Sango",
    value: "sg",
  },
  {
    id: 1144,
    label: "Sinhala",
    value: "si",
  },
  {
    id: 1145,
    label: "Slovak",
    value: "sk",
  },
  {
    id: 1146,
    label: "Slovenian",
    value: "sl",
  },
  {
    id: 1147,
    label: "Samoan",
    value: "sm",
  },
  {
    id: 1148,
    label: "Shona",
    value: "sn",
  },
  {
    id: 1149,
    label: "Somali",
    value: "so",
  },
  {
    id: 1150,
    label: "Albanian",
    value: "sq",
  },
  {
    id: 1151,
    label: "Serbian",
    value: "sr",
  },
  {
    id: 1152,
    label: "Swati",
    value: "ss",
  },
  {
    id: 1153,
    label: "Sotho, Southern",
    value: "st",
  },
  {
    id: 1154,
    label: "Sundanese",
    value: "su",
  },
  {
    id: 1155,
    label: "Swedish",
    value: "sv",
  },
  {
    id: 1156,
    label: "Swahili",
    value: "sw",
  },
  {
    id: 1157,
    label: "Tamil",
    value: "ta",
  },
  {
    id: 1158,
    label: "Telugu",
    value: "te",
  },
  {
    id: 1159,
    label: "Tajik",
    value: "tg",
  },
  {
    id: 1160,
    label: "Thai",
    value: "th",
  },
  {
    id: 1161,
    label: "Tigrinya",
    value: "ti",
  },
  {
    id: 1162,
    label: "Turkmen",
    value: "tk",
  },
  {
    id: 1163,
    label: "Tagalog",
    value: "tl",
  },
  {
    id: 1164,
    label: "Tswana",
    value: "tn",
  },
  {
    id: 1165,
    label: "Tonga (Tonga Islands)",
    value: "to",
  },
  {
    id: 1166,
    label: "Turkish",
    value: "tr",
  },
  {
    id: 1167,
    label: "Tsonga",
    value: "ts",
  },
  {
    id: 1168,
    label: "Tatar",
    value: "tt",
  },
  {
    id: 1169,
    label: "Twi",
    value: "tw",
  },
  {
    id: 1170,
    label: "Tahitian",
    value: "ty",
  },
  {
    id: 1171,
    label: "Uighur",
    value: "ug",
  },
  {
    id: 1172,
    label: "Ukrainian",
    value: "uk",
  },
  {
    id: 1173,
    label: "Urdu",
    value: "ur",
  },
  {
    id: 1174,
    label: "Uzbek",
    value: "uz",
  },
  {
    id: 1175,
    label: "Venda",
    value: "ve",
  },
  {
    id: 1176,
    label: "Vietnamese",
    value: "vi",
  },
  {
    id: 1177,
    label: "Volapk",
    value: "vo",
  },
  {
    id: 1178,
    label: "Walloon",
    value: "wa",
  },
  {
    id: 1179,
    label: "Wolof",
    value: "wo",
  },
  {
    id: 1180,
    label: "Xhosa",
    value: "xh",
  },
  {
    id: 1181,
    label: "Yiddish",
    value: "yi",
  },
  {
    id: 1182,
    label: "Yoruba",
    value: "yo",
  },
  {
    id: 1183,
    label: "Zhuang",
    value: "za",
  },
  {
    id: 1184,
    label: "Chinese",
    value: "zh",
  },
  {
    id: 1185,
    label: "Zulu",
    value: "zu",
  }
];

//   ES5 export
module.exports = { languages };

//   ES6 export
export { languages };
