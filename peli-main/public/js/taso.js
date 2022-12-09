/* taso.js */

const TASO = {
    "tekijät": ["Ropi Toivonen, Tobias Parviainen, Polina Pikova ja Veetu Miettinen"],
    "pelaajanAlkuHP": 100,
    "pelaajanMaksimiHP": 100,
    "pisterajaYhdelleHplle": 200,
    "pelinAloitushuoneenNro": 1,
    "pelinLoppuhuoneenNro": 13,
    "tekstit": {
        "pohjoinen":"Pohjoinen",
        "ita":"Itä",
        "etela":"Etelä",
        "lansi":"Länsi",
        "pisteotsikko":"Pullot:",
        "hpotsikko":"HP:",
        "uusiNappi":"Aloita uusi peli",
        "voitto": "Onnea olet läpäissyt pelin.",
        "tappio": "Kuolit nälkään! Yritä uudelleen.",
        "avainSelitys": "Sinulla on ",
        "kohtaaVastustaja": "Kohtaa",
        "otaResurssi": "Ota",
        "kohtalokasVirhe": "Ohjelmassa tapahtui kohtalokas virhe. Peli loppui."
    },

    "huoneet": [
        {
            "huoneNro": 1,
            "huoneteksti": "Heräät sängystäsi nälkäisenä. Puet vaatteet päällesi ja päätät lähteä ulos.", 
            "huonehp": {
                "hp": 100, 
                "tekstit": {
                    "vaikutus": "", 
                    "loppu": "kaikki voimat käytetty"
                }, 
                "toistoLkm": 2
            },
            "pohjoinen": {"huoneeseen": 2, "avain": null},
            "ita": null,
            "etela": null,
            "lansi": null,
            "vastustaja": null,
            "avain": null,
            "esine": null
        },
        {
            "huoneNro": 2,
            "huoneteksti": "Lähdet kävelemään ja tajuat että olet nälkäinen. Sinulla ei kuitenkaan ole rahea ruokaan. Etsi pulloja, yksi pullo on yksi rahe, tarvitset 8 rahea.",
            "huonehp": null,
            "pohjoinen": {"huoneeseen": 4, "avain": null},
            "ita": {"huoneeseen": 3, "avain": null},
            "etela": {"huoneeseen": 1, "avain": null},
            "lansi": {"huoneeseen": 5, "avain": null},
            "vastustaja": null,
            "avain": null,
            "esine": null         
        },
        {
            "huoneNro": 3,
            "huoneteksti": "kävelet kadulla",
            "huonehp": null,
            "pohjoinen": {"huoneeseen": 6, "avain": null},
            "ita":  null,
            "etela": null,
            "lansi":{"huoneeseen": 2, "avain": null},
            "vastustaja": null,
            "avain": null,
            "esine": {
                "nimi": "pullo",
                "teksti": "ja löysit yhden pullon",
                "vaikutus": "pullo kerätty",
                "pisteet": 1,
                "hp": 0,
            }
        },
            {
                "huoneNro": 4,
                "huoneteksti": "Ei pulloja, jatka etsimistä!",
                "huonehp": null,
                "pohjoinen":  null,
                "ita":{"huoneeseen": 8, "avain": null}, 
                "etela": {"huoneeseen": 2, "avain": null},
                "lansi": null,
                "vastustaja": null,
                "avain": null,
                "esine": null 
            },
            {
                "huoneNro": 5,
                "huoneteksti": "kävelet kadulla",
                "huonehp": {
                    "hp": 100, 
                    "tekstit": {
                        "vaikutus":"", 
                        "loppu": ""
                    }, 
                    "toistoLkm": 1
                },
                "pohjoinen": {"huoneeseen": 7, "avain": null},
                "ita": {"huoneeseen": 2, "avain":null},
                "etela": null,
                "lansi": {"huoneeseen": 11, "avain": null},
                "vastustaja": null,
                "avain": null,
                "esine": {
                    "nimi": "kaksi pulloa",
                    "teksti": "löysit pulloja",
                    "vaikutus": "Pullot kerätty",
                    "pisteet": 2,
                    "hp": 0
                    }
             
            },
            {
                "huoneNro": 6,
                "huoneteksti": "ohikulkija kävelee ja miettii omiaan... ",
                "huonehp": {
                    "hp": 0, 
                    "tekstit": {
                        "vaikutus":"", 
                        "loppu": ""
                    }, 
                    "toistoLkm": 10
                },
                "pohjoinen": null,
                "ita": null,
                "etela": {"huoneeseen": 3, "avain":null},
                "lansi": {"huoneeseen": 8, "avain": null},
                "vastustaja": {
                    "nimi": "ohikulkija",
                    "teksti": "Pyydät ohikulkijalta rahea he antavat niitä 2.",
                    "voittoviesti": "Ohikulkija antoi sinulle 2 rahea.",
                    "tappioviesti": "",
                    "pisteet": 2,
                    "hp": 0,
                    "voittoraja": 0
                },
                "avain": null,
                "esine": null
                
            },
            {
                "huoneNro": 7,
                "huoneteksti": "kävelet kadulla",
                "huonehp": null,
                "pohjoinen": null,
                "ita": null,
                "etela": {"huoneeseen": 5, "avain": null},
                "lansi": null,
                "vastustaja": null,
                "avain": null,
                "esine":  {
                    "nimi": "yksi pullon",
                    "teksti": "puskasta kimaltelee tölkki ja keräät sen. Löysit yhden pullon.",
                    "vaikutus": "Pullo kerätty",
                    "pisteet": 1,
                    "hp": 0
                    }
            },
            
    {
        "huoneNro": 8,
        "huoneteksti": "kävelet kadulla.", 
        "huonehp": null,
        "pohjoinen": {"huoneeseen": 9, "avain": null},
        "ita": {"huoneeseen": 6, "avain":null},
        "etela": null,
        "lansi": {"huoneeseen": 4, "avain": null},
        "vastustaja": null,
        "avain": null,
        "esine": {
        "nimi": "kaksi pulloa",
        "teksti": "kompastuit Kahteen pulloon",
        "vaikutus": "Pullot kerätty",
        "pisteet": 2,
        "hp": 0
        }

    },
    {
        "huoneNro": 9,
        "huoneteksti": "Löydät itsesi alikulkutunnelista, ihailet grafiittia.",
        "huonehp": null,
        "pohjoinen": null,
        "ita": null,
        "etela":{"huoneeseen": 8, "avain": null},
        "lansi": {"huoneeseen": 10, "avain": null},
        "vastustaja": null,
        "avain": null,
        "esine": null
    },
    {
        "huoneNro": 10,
        "huoneteksti": "Olet päässyt pasilan kuninkaaseen, voit syödä aterian 8:llä rahella.", 
        "huonehp": {
                "hp": 10, 
                "tekstit": {
                    "vaikutus": "", 
                    "loppu": ""
                }, 
                "toistoLkm": 2
            },
            "pohjoinen": null,
            "ita":{"huoneeseen": 9, "avain": null},
            "etela": null,
            "lansi": null,
            "vastustaja": null,
            "avain":{
                "nimi": "pääsy alepaan",
                "numero": 9,
                "teksti": "sait ruokamyrkytyksen, mene alepaan",
                "vaikutus": "voit nyt ostaa megaforcen alepasta",
                "pisteet": -7,
                "hp": -99},
            "esine": null,
                
        },
        {
            "huoneNro": 11,
            "huoneteksti": "Olet nyt Alepan parkkipaikalla, voit palauttaa pullot alepassa raheksi.", 
            "huonehp": {
                "hp": 10, 
                "tekstit": {
                    "vaikutus": "", 
                    "loppu": ""
                }, 
                "toistoLkm": 2
            },
            "pohjoinen": {"huoneeseen": 12, "avain": null},
            "ita":{"huoneeseen": 5, "avain": null},
            "etela": {"huoneeseen": 13, "avain":9},
            "lansi": null,
            "vastustaja": null,
            "avain": null,
            "esine": null
        },
        {
            "huoneNro": 12,
            "huoneteksti": "Umpikuja, ", 
            "huonehp": {
                "hp": 10, 
                "tekstit": {
                    "vaikutus": "täällä ei ole mitään...", 
                    "loppu": ""
                }, 
                "toistoLkm": 2
            },
            "pohjoinen": null,
            "ita": null,
            "etela":{"huoneeseen": 11, "avain": null},
            "lansi": null,
            "vastustaja": null,
            "avain": null,
            "esine": null
        },
        {
            "huoneNro": 13,
            "huoneteksti": "Olet nyt Alepassa ", 
            "huonehp": {
                "hp": 10, 
                "tekstit": {
                    "vaikutus": "", 
                    "loppu": ""
                }, 
                "toistoLkm": 2
            },
            "pohjoinen": null,
            "ita": null,
            "etela": null,
            "lansi": null,
            "vastustaja": null,
            "avain": null,
            "esine": {
                "nimi": "yksi megaforce",
                "teksti": "",
                "vaikutus": "Megaforce ostettu, parannuit ruokamyrkytyksestä",
                "pisteet": -1,
                "hp": 0
                }
        }
    ]
};