/* taso.js */

const TASO = {
    "tekijät": ["Ropi Toivonen, Tobias Parviainen, Polina Pikova ja Veetu Miettinen"],
    "pelaajanAlkuHP": 20,
    "pelaajanMaksimiHP": 100,
    "pisterajaYhdelleHplle": 100,
    "pelinAloitushuoneenNro": 1,
    "pelinLoppuhuoneenNro": 13,
    "tekstit": {
        "pohjoinen":"Pohjoinen",
        "ita":"Itä",
        "etela":"Etelä",
        "lansi":"Länsi",
        "pisteotsikko":"Pisteet:",
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
                "hp": 10, 
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
            "avain": {
                "nimi": "",
                "numero": 1,
                "teksti": "",
                "vaikutus": "",
                "pisteet": 0,
                "hp": 0
            },
            "esine": null         
        },
        {
            "huoneNro": 3,
            "huoneteksti": "Löysit yhden pullon.",
            "huonehp": null,
            "pohjoinen": {"huoneeseen": 6, "avain": null},
            "ita":  null,
            "etela": null,
            "lansi":{"huoneeseen": 2, "avain": null},
            "vastustaja": null,
            "avain": null,
            "esine": {
                "nimi": "pullo",
                "teksti": "",
                "vaikutus": "Löysit yhden pullon.",
                "pisteet": 1,
                "hp": -5
            }},
            {
                "huoneNro": 4,
                "huoneteksti": "Ei pulloja, jatka etsimistä!",
                "huonehp": null,
                "pohjoinen":  null,
                "ita":{"huoneeseen": 8, "avain": null}, 
                "etela": {"huoneeseen": 2, "avain": null},
                "lansi": null,
                "vastustaja": null,
                "avain": {
                    "nimi": "taskulamppu",
                    "numero": 2,
                    "teksti": "Lattialla on taskulamppu, jolla voit valaista tietäsi",
                    "vaikutus": "Nyt voi mennä myös pimeisiin huoneisiin.",
                    "pisteet": 200,
                    "hp": 0
                },
                "esine": null
            },
            {
                "huoneNro": 5,
                "huoneteksti": "löysit kaksi pulloa.",
                "huonehp": {
                    "hp": 10, 
                    "tekstit": {
                        "vaikutus":"Huone on täynnä kultapölyä. Kullan näkeminen piristää kummasti.", 
                        "loppu": "Kultakin loppuu aikanaan"
                    }, 
                    "toistoLkm": 1
                },
                "pohjoinen": {"huoneeseen": 7, "avain": null,
                "ita": {"huoneeseen": 2, "avain":null,
                "etela": null},
                "lansi": {"huoneeseen": 11, "avain": 1},
                "vastustaja": null,
                "avain": null,
                "esine": null  
            }},
            {
                "huoneNro": 6,
                "huoneteksti": "Pyydät ohikulkijalta rahea he antavat niitä 2. ",
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
                    "teksti": "ohikulkija kävelee ja miettii omiaan...",
                    "voittoviesti": "Ohikulkija antoi sinulle 2 rahea.",
                    "tappioviesti": "kuolit",
                    "pisteet": 2,
                    "hp": 0,
                    "voittoraja": 0
                },
                "avain": null,
                "esine": {"nimi": "",
                    "teksti": "Huoneen keskellä on pullo. Etiketissä lukee \"palauttaa voimia\".",
                    "vaikutus": "",
                    "pisteet": 0,
                    "hp": 10
                }
            },
            {
                "huoneNro": 7,
                "huoneteksti": "puskasta kimaltelee tölkki ja keräät sen. Löysit yhden pullon.",
                "huonehp": null,
                "pohjoinen": null,
                "ita": null,
                "etela": {"huoneeseen": 5, "avain": null},
                "lansi": null,
                "vastustaja": null,
                "avain": null,
                "esine": null
            },
            
    {
        "huoneNro": 8,
        "huoneteksti": "kompastuit kahteen pulloon.", 
        "huonehp": {
            "hp": 10, 
            "tekstit": {
                "vaikutus": "", 
                "loppu": "kaikki voimat käytetty"
            }, 
            "toistoLkm": 2
        },
        "pohjoinen": {"huoneeseen": 9, "avain": null},
        "ita": {"huoneeseen": 6, "avain":null},
        "etela": null,
        "lansi": {"huoneeseen": 4, "avain": null},
        "vastustaja": null,
        "avain": null,
        "esine": null
    },
    {
        "huoneNro": 9,
        "huoneteksti": "Löydät itsesi alikulkutunnelista, ihailet grafiittia.",
        "huonehp": null,
        "pohjoinen": null,
        "ita": null,
        "etela":{"huoneeseen": 8, "avain": null},
        "lansi": {"huoneeseen": 10, "avain": null},
        "vastustaja": {
            "nimi": "S.U.M.O",
            "teksti": "S.U.M.O robotti odottaa vastustajaa.",
            "voittoviesti": "Voitit S.U.M.O:n! Onnea! Aarre odottaa lattialla.",
            "tappioviesti": "Hävisit ottelun. S.U.M.O on edelleen voittamaton.",
            "pisteet": 0,
            "hp": 90,
            "voittoraja": 0
        },
        "avain": null,
        "esine": {"nimi": "Legendaarinen aarre",
            "teksti": "Häikäisevä seuraavan sukupolven tekstiseikkailu odottaa ottajaansa.",
            "vaikutus": "Nyt heti pelaamaan uutta vielä julkaisematonta tekstiseikkailua!",
            "pisteet": 100,
            "hp": 100
        }},
        {
            "huoneNro": 10,
            "huoneteksti": "Olet päässyt pasilan kuninkaaseen, voit syödä aterian 7:llä rahella.", 
            "huonehp": {
                "hp": 10, 
                "tekstit": {
                    "vaikutus": "xxx", 
                    "loppu": "kaikki voimat käytetty"
                }, 
                "toistoLkm": 2
            },
            "pohjoinen": null,
            "ita":{"huoneeseen": 9, "avain": null},
            "etela": null,
            "lansi": null,
            "vastustaja": null,
            "avain": null,
            "esine": null
        },
        {
            "huoneNro": 11,
            "huoneteksti": "Olet nyt Alepan parkkipaikalla.", 
            "huonehp": {
                "hp": 10, 
                "tekstit": {
                    "vaikutus": "Olet ulkona. Tajusit ettei sinulla ole rahaa! Päätät lähteä pullojen etsintään ", 
                    "loppu": "kaikki voimat käytetty"
                }, 
                "toistoLkm": 2
            },
            "pohjoinen": {"huoneeseen": 12, "avain": null},
            "ita":{"huoneeseen": 5, "avain": null},
            "etela": {"huoneeseen": 13, "avain":null},
            "lansi": null,
            "vastustaja": null,
            "avain": null,
            "esine": null
        },
        {
            "huoneNro": 12,
            "huoneteksti": "Umpikuja...", 
            "huonehp": {
                "hp": 10, 
                "tekstit": {
                    "vaikutus": "Olet ulkona. Tajusit ettei sinulla ole rahaa! Päätät lähteä pullojen etsintään ", 
                    "loppu": "kaikki voimat käytetty"
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
            "huoneteksti": "Olet nyt Alepassa voit ostaa megaforcen yhdellä rahella.", 
            "huonehp": {
                "hp": 10, 
                "tekstit": {
                    "vaikutus": "Olet ulkona. Tajusit ettei sinulla ole rahaa! Päätät lähteä pullojen etsintään ", 
                    "loppu": "kaikki voimat käytetty"
                }, 
                "toistoLkm": 2
            },
            "pohjoinen": {"huoneeseen": 11, "avain": null},
            "ita": null,
            "etela": null,
            "lansi": null,
            "vastustaja": null,
            "avain": null,
            "esine": null
        }
        

       
    ]
};