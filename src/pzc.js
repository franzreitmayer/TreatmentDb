function PZCodes() {
    return function () {

        /**
         * 
         * @returns all pz codes (Patientenzuweisungscodes) 
         */
        const _getAllPZCodes = () => {
            return _ALL_PZ_CODES;
        };

        /**
         * Filter as string value is always handled case insensitive, it matches eigther on
         * code level or on group level.
         * If a match is found on code level the corresponding code AND its according group
         * is added to the result set. If the filter matches on group level the group and all
         * codes of this group are added to the result.
         * If '*' is applied as filter, all groups and codes are returned.
         * @param {*} filter can eigth be a string or a number
         */
        const _getFilteredPZCodes = (filter) => {
            const FILTER_IGNORE_CASE = filter.toUpperCase();

            // handle filter '*'
            const ALL_CODES = JSON.parse(JSON.stringify(_getAllPZCodes()));
            
            if (filter === "*") return ALL_CODES;

            const MAPPED_CODES = ALL_CODES.map((group) => {
                // at first check for match on groupName
                if (group.groupName.toUpperCase().includes(FILTER_IGNORE_CASE)) {
                    return {...group};
                }

                // second check for matching at code level
                const MAPPED_CODES = group.elements.map((code) => {
                    if (code.name.toUpperCase().includes(FILTER_IGNORE_CASE)) {
                        return {...code};
                    }
                });

                const MATCHING_CODES = MAPPED_CODES.filter( (code) => {
                    if (code != undefined) return true; else return false;
                });

                if (MATCHING_CODES != undefined && MATCHING_CODES.length > 0) {
                    group.elements = MATCHING_CODES;
                    return group;
                } else {
                    return undefined;
                }
            });

            const FILTERED_CODES = MAPPED_CODES.filter( (group) => {
                if (group === undefined) {
                    return false;
                } else {
                    return true;
                }
            })
            return FILTERED_CODES;
        }

        const _ALL_PZ_CODES = [
            {
                "code": "13x",
                "groupName": "Reanimation",
                "elements": [
                    {
                        "code": "131",
                        "name": "Reanimation, laufend / intermittierend",
                        "hospitalization": {
                            "red": true,
                            "yellow": false,
                            "green": false
                        }
                    },
                    {
                        "code": "132",
                        "name": "Reanimation ROSC",
                        "hospitalization": {
                            "red": true,
                            "yellow": false,
                            "green": false
                        }
                    },
                    {
                        "code": "133",
                        "name": "Reanimation bei Trauma, laufend / intermittierend",
                        "hospitalization": {
                            "red": true,
                            "yellow": false,
                            "green": false
                        }
                    },
                    {
                        "code": "134",
                        "name": "Reanimation Hypothermie",
                        "hospitalization": {
                            "red": true,
                            "yellow": false,
                            "green": false
                        }
                    }
                ]
            },
            {
                "code": "14x",
                "groupName": "ECMO",
                "elements": [
                    {
                        "code": "140",
                        "name": "vvECMO Zuverlegung",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": false
                        }
                    },
                    {
                        "code": "141",
                        "name": "vvECMO Abholung",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": false
                        }
                    },
                    {
                        "code": "142",
                        "name": "vaECMO Zuverlegung",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": false
                        }
                    },
                    {
                        "code": "143",
                        "name": "vaECMO Abholung",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": false
                        }
                    },
                    {
                        "code": "144",
                        "name": "eCPR Zuverlegung",
                        "hospitalization": {
                            "red": true,
                            "yellow": false,
                            "green": false
                        }
                    },
                    {
                        "code": "145",
                        "name": "eCPR Abholung",
                        "hospitalization": {
                            "red": true,
                            "yellow": false,
                            "green": false
                        }
                    }
                ]
            },
            {
                "code": "2x",
                "groupName": "Verletzungen / Unfälle ▶ 21x Mehrfach",
                "elements": [
                    {
                        "code": "211",
                        "name": "Trauma Schockraum A mit SHT",
                        "hospitalization": {
                            "red": true,
                            "yellow": false,
                            "green": false
                        }
                    },
                    {
                        "code": "212",
                        "name": "Trauma Schockraum A ohne SHT",
                        "hospitalization": {
                            "red": true,
                            "yellow": false,
                            "green": false
                        }
                    },
                    {
                        "code": "213",
                        "name": "Trauma Schockraum B",
                        "hospitalization": {
                            "red": true,
                            "yellow": false,
                            "green": false
                        }
                    },
                    {
                        "code": "214",
                        "name": "Mehrfachverletzung sonstige",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": false
                        }
                    },
                    {
                        "code": "215",
                        "name": "Mehrfachverletzung mit Augen",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": false
                        }
                    },
                    {
                        "code": "219",
                        "name": "oberflächliche Verletzung (bel. Lokalisation)",
                        "hospitalization": {
                            "red": false,
                            "yellow": false,
                            "green": true
                        }
                    }
                ]
            },
            {
                "code": "2x",
                "groupName": "Verletzungen / Unfälle ▶ 22x Gesicht / Kopf",
                "elements": [
                    {
                        "code": "221",
                        "name": "SHT offen",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": false
                        }
                    },
                    {
                        "code": "222",
                        "name": "SHT geschlossen",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": true
                        }
                    },
                    {
                        "code": "223",
                        "name": "Gesichtsverletzung",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": true
                        }
                    },
                    {
                        "code": "224",
                        "name": "Kopfverletzung",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": true
                        }
                    },
                    {
                        "code": "225",
                        "name": "Augenverletzung",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": true
                        }
                    }
                ]
            },
            {
                "code": "2x",
                "groupName": "Verletzungen / Unfälle ▶ 23x Thorax",
                "elements": [
                    {
                        "code": "231",
                        "name": "Thorax penetrierend",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": false
                        }
                    },
                    {
                        "code": "232",
                        "name": "Thorax geschlossen / stumpf",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": true
                        }
                    },
                    {
                        "code": "233",
                        "name": "Pneumothorax (traumatisch)",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": false
                        }
                    }
                ]
            },
            {
                "code": "2x",
                "groupName": "Verletzungen / Unfälle ▶ 24x Abdomen",
                "elements": [
                    {
                        "code": "241",
                        "name": "Abdomen penetrierend",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": false
                        }
                    },
                    {
                        "code": "242",
                        "name": "Abdomen geschlossen / stumpf",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": true
                        }
                    },
                    {
                        "code": "243",
                        "name": "Akutes Abdomen (nicht traumatisch)",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": false
                        }
                    }
                ]
            },
            {
                "code": "2x",
                "groupName": "Verletzungen / Unfälle ▶ 25x Wirbelsäule",
                "elements": [
                    {
                        "code": "251",
                        "name": "Verl. der Wirbelsäule mit neurologischen Ausfällen",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": false
                        }
                    },
                    {
                        "code": "252",
                        "name": "Verl. der Wirbelsäule ohne neurologischen Ausfälle",
                        "hospitalization": {
                            "red": false,
                            "yellow": true,
                            "green": true
                        }
                    },
                    {
                        "code": "253",
                        "name": "Rückenschmerzen, akut mit neurolog. Symptomatik",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": false
                        }
                    },
                    {
                        "code": "254",
                        "name": "Rückenschmerzen, nicht traumatisch ohne neurologische Ausfälle",
                        "hospitalization": {
                            "red": false,
                            "yellow": true,
                            "green": true
                        }
                    },
                    {
                        "code": "255",
                        "name": "Lähmung / Querschnitt akut (nicht Stroke)",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": false
                        }
                    }
                ]
            },
            {
                "code": "2x",
                "groupName": "Verletzungen / Unfälle ▶ 26x Becken",
                "elements": [
                    {
                        "code": "261",
                        "name": "Becken offen",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": false
                        }
                    },
                    {
                        "code": "262",
                        "name": "Becken geschlossen",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": true
                        }
                    },
                    {
                        "code": "263",
                        "name": "Urogenitaltrauma (isoliert)",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": true
                        }
                    }
                ]
            },  
            {
                "code": "2x",
                "groupName": "Verletzungen / Unfälle ▶ 27x Extremitäten / Prellungen / Luxationen",
                "elements": [
                    {
                        "code": "271",
                        "name": "Fraktur Extremitäten offen",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": false
                        }
                    },
                    {
                        "code": "272",
                        "name": "Fraktur Extremitäten geschlossen",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": true
                        }
                    },
                    {
                        "code": "273",
                        "name": "Hüft - / Schenkelhalsfraktur",
                        "hospitalization": {
                            "red": false,
                            "yellow": true,
                            "green": true
                        }
                    },
                    {
                        "code": "274",
                        "name": "Verl. der Extremitäten mit Gefäß - / Nervenverl.",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": true
                        }
                    }
                ]
            },
            {
                "code": "2x",
                "groupName": "Verletzungen / Unfälle ▶ 27x Hand",
                "elements": [
                    {
                        "code": "275",
                        "name": "Handverletzung",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": true
                        }
                    },
                    {
                        "code": "276",
                        "name": "Finger Amputation",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": false
                        }
                    },
                    {
                        "code": "277",
                        "name": "Hand - / Extremitäten Amputation",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": false
                        }
                    }
                ]
            },
            {
                "code": "2x",
                "groupName": "Verletzungen / Unfälle ▶ 27x Extremitäten / Prellungen / Luxationen",
                "elements": [
                    {
                        "code": "279",
                        "name": "Sonstige Extremitätenverletzung",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": true
                        }
                    }
                ]
            },
            {
                "code": "2x",
                "groupName": "Verletzungen / Unfälle ▶ 28x Physikalisch / Chemisch",
                "elements": [
                    {
                        "code": "281",
                        "name": "Verbrennung / Verbrühung",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": true
                        }
                    },
                    {
                        "code": "282",
                        "name": "Verätzung",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": true
                        }
                    },
                    {
                        "code": "283",
                        "name": "Hochspannungstrauma (ab 1000 V ~)",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": false
                        }
                    },
                    {
                        "code": "284",
                        "name": "Barotrauma / Tauchunfall / Dekompressionskrankheit",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": true
                        }
                    },
                    {
                        "code": "285",
                        "name": "Strahlentrauma",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": true
                        }
                    },
                    {
                        "code": "286",
                        "name": "Hitzeerschöpfung / Hitzschlag",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": true
                        }
                    },
                    {
                        "code": "287",
                        "name": "Unterkühlung / Erfrierung",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": true
                        }
                    },
                    {
                        "code": "288",
                        "name": "(Beinahe - ) Ertrinken / Badeunfall",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": true
                        }
                    }
                ]
            },
            {
                "code": "2x",
                "groupName": "Verletzungen / Unfälle ▶ 29x Gefäß",
                "elements": [
                    {
                        "code": "291",
                        "name": "Aortenaneurysma",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": false
                        }
                    },
                    {
                        "code": "292",
                        "name": "Extremitätenischaemie (akut)",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": false
                        }
                    },
                    {
                        "code": "293",
                        "name": "Aorta ascendens Dissektion (bestätigt)",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": false
                        }
                    },
                    {
                        "code": "299",
                        "name": "Gefäßchirurgischer Notfall, sonstiger",
                        "hospitalization": {
                            "red": false,
                            "yellow": true,
                            "green": true
                        }
                    }
                ]
            },
            {
                "code": "3x",
                "groupName": "Erkrankungen ▶ 31x Atmung / Lunge",
                "elements": [
                    {
                        "code": "311",
                        "name": "Atemnot (unklar) / Atembeschwerden / ARI",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": true
                        }
                    },
                    {
                        "code": "312",
                        "name": "Obstruktion (Asthma / COPD)",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": true
                        }
                    },
                    {
                        "code": "313",
                        "name": "Hämoptoe / Hämoptysen",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": true
                        }
                    },
                    {
                        "code": "314",
                        "name": "(Bolus - ) Aspiration",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": true
                        }
                    },
                    {
                        "code": "315",
                        "name": "Bronchitis / Pneumonie",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": true
                        }
                    },
                    {
                        "code": "316",
                        "name": "Hyperventilation",
                        "hospitalization": {
                            "red": false,
                            "yellow": true,
                            "green": true
                        }
                    },
                    {
                        "code": "317",
                        "name": "Lungenödem (nicht kardial)",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": true
                        }
                    },
                    {
                        "code": "318",
                        "name": "Spontanpneumothorax",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": true
                        }
                    },
                    {
                        "code": "319",
                        "name": "Pneumologischer Notfall, sonstiger",
                        "hospitalization": {
                            "red": false,
                            "yellow": true,
                            "green": true
                        }
                    }
                ]
            },
            {
                "code": "3x",
                "groupName": "Erkrankungen ▶ 32x Innere (sonstige)",
                "elements": [
                    {
                        "code": "321",
                        "name": "Anaphylaxie / Unverträglichkeitsreaktion",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": true
                        }
                    },
                    {
                        "code": "322",
                        "name": "Synkope / Kollaps",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": true
                        }
                    },
                    {
                        "code": "323",
                        "name": "Hypotonie",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": true
                        }
                    },
                    {
                        "code": "324",
                        "name": "Thrombose",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": true
                        }
                    },
                    {
                        "code": "325",
                        "name": "unklares Fieber",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": true
                        }
                    },
                    {
                        "code": "326",
                        "name": "Exsikkose",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": true
                        }
                    },
                    {
                        "code": "329",
                        "name": "Internistischer Notfall, sonstiger",
                        "hospitalization": {
                            "red": false,
                            "yellow": true,
                            "green": true
                        }
                    }
                ]
            },
            {
                "code": "3x",
                "groupName": "Erkrankungen ▶ 33x Brustschmerz",
                "elements": [
                    {
                        "code": "331",
                        "name": "unklarer Brust - / Thoraxschmerz",
                        "hospitalization": {
                            "red": false,
                            "yellow": true,
                            "green": true
                        }
                    },
                    {
                        "code": "332",
                        "name": "\"STEMI / \"\"OMI\"\"\"",
                        "hospitalization": {
                            "red": true,
                            "yellow": false,
                            "green": false
                        }
                    },
                    {
                        "code": "333",
                        "name": "NSTEMI, instabile AP",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": true
                        }
                    }
                ]
            },
            {
                "code": "3x",
                "groupName": "Erkrankungen ▶ 34x Herz - Kreislauf",
                "elements": [
                    {
                        "code": "341",
                        "name": "Arrhythmie",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": true
                        }
                    },
                    {
                        "code": "342",
                        "name": "Bradykardie",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": true
                        }
                    },
                    {
                        "code": "343",
                        "name": "Tachykardie",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": true
                        }
                    },
                    {
                        "code": "344",
                        "name": "Elektrounfall (bis 1000 V~)",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": true
                        }
                    },
                    {
                        "code": "345",
                        "name": "Hypertensiver Notfall / Krise",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": true
                        }
                    },
                    {
                        "code": "346",
                        "name": "Kardiogener Schock",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": false
                        }
                    },
                    {
                        "code": "347",
                        "name": "Herzinsuffizienz",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": true
                        }
                    },
                    {
                        "code": "348",
                        "name": "Lungenembolie",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": true
                        }
                    },
                    {
                        "code": "349",
                        "name": "Kardiologischer Notfall, sonstiger",
                        "hospitalization": {
                            "red": false,
                            "yellow": true,
                            "green": true
                        }
                    }
                ]
            },
            {
                "code": "3x",
                "groupName": "Erkrankungen ▶ 35x Abdomen",
                "elements": [
                    {
                        "code": "351",
                        "name": "Obere GI-Blutung",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": true
                        }
                    },
                    {
                        "code": "352",
                        "name": "Untere GI-Blutung",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": true
                        }
                    },
                    {
                        "code": "353",
                        "name": "Bauchschmerzen",
                        "hospitalization": {
                            "red": false,
                            "yellow": true,
                            "green": true
                        }
                    },
                    {
                        "code": "354",
                        "name": "Gastroenteritis",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": true
                        }
                    },
                    {
                        "code": "359",
                        "name": "Gastroenterologischer Notfall, sonstiger",
                        "hospitalization": {
                            "red": false,
                            "yellow": true,
                            "green": true
                        }
                    }
                ]
            },
            {
                "code": "3x",
                "groupName": "Erkrankungen ▶ 36x Intoxikationen",
                "elements": [
                    {
                        "code": "360",
                        "name": "Intoxikation Rauchgas/Reizgas (nicht CO)",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": true
                        }
                    },
                    {
                        "code": "361",
                        "name": "Intoxikation Alkohol",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": true
                        }
                    },
                    {
                        "code": "362",
                        "name": "Intoxikation Drogen/Rauschgift",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": true
                        }
                    },
                    {
                        "code": "363",
                        "name": "sonstige Intoxikation",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": true
                        }
                    },
                    {
                        "code": "364",
                        "name": "Intoxikation Lebensmittel",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": true
                        }
                    },
                    {
                        "code": "365",
                        "name": "Intoxikation Medikamente",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": true
                        }
                    },
                    {
                        "code": "366",
                        "name": "Intoxikation Pflanzenschutzmittel",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": true
                        }
                    },
                    {
                        "code": "367",
                        "name": "Intoxikation tierische Gifte",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": true
                        }
                    },
                    {
                        "code": "368",
                        "name": "Intoxikation Giftpflanzen",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": true
                        }
                    },
                    {
                        "code": "369",
                        "name": "inhalative Intoxikation, sonstige",
                        "hospitalization": {
                            "red": false,
                            "yellow": true,
                            "green": true
                        }
                    },
                    {
                        "code": "370",
                        "name": "Kohlenmonoxid - Vergiftung",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": true
                        }
                    }
                ]
            },
            {
                "code": "3x",
                "groupName": "Erkrankungen ▶ 37x spezielle Infektionen",
                "elements": [
                    {
                        "code": "371",
                        "name": "Meningitis / Enzephalitis",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": true
                        }
                    },
                    {
                        "code": "372",
                        "name": "TBC",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": true
                        }
                    },
                    {
                        "code": "373",
                        "name": "Sepsis (Infekt qSOFA mind. 2)",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": false
                        }
                    },
                    {
                        "code": "374",
                        "name": "Septischer Schock",
                        "hospitalization": {
                            "red": true,
                            "yellow": false,
                            "green": false
                        }
                    },
                    {
                        "code": "375",
                        "name": "hochkontagiöse Erkrankung (Sonder-ISO)",
                        "hospitalization": {
                            "red": true,
                            "yellow": false,
                            "green": false
                        }
                    },
                    {
                        "code": "376",
                        "name": "Covid-19-SARS - CoV 2 (bestätigt)",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": false
                        }
                    },
                    {
                        "code": "377",
                        "name": "Covid-19-SARS - CoV 2 (nicht bestätigt)",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": true
                        }
                    },
                    {
                        "code": "378",
                        "name": "SARS-CoV 2 zur Quarantäne - aktuelle Infektionskrankheit zur Quarantän",
                        "hospitalization": {
                            "red": false,
                            "yellow": true,
                            "green": false
                        }
                    },
                    {
                        "code": "379",
                        "name": "Infektiologischer Notfall, sonstiger",
                        "hospitalization": {
                            "red": false,
                            "yellow": true,
                            "green": true
                        }
                    }
                ]
            },
            {
                "code": "3x",
                "groupName": "Erkrankungen ▶ 39x sonstige",
                "elements": [
                    {
                        "code": "391",
                        "name": "Akuter endokrinologischer Notfall",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": true
                        }
                    },
                    {
                        "code": "392",
                        "name": "Hyperglykämie",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": true
                        }
                    },
                    {
                        "code": "393",
                        "name": "Hypoglykämie",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": true
                        }
                    }
                ]
            },
            {
                "code": "4x",
                "groupName": "spezielle Erkrankung / Verletzung ▶ 41x Neurologisch",
                "elements": [
                    {
                        "code": "411",
                        "name": "anhaltender epileptischer Anfall",
                        "hospitalization": {
                            "red": true,
                            "yellow": false,
                            "green": false
                        }
                    },
                    {
                        "code": "412",
                        "name": "Epileptischer Anfall (stattgehabt)",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": true
                        }
                    },
                    {
                        "code": "413",
                        "name": "Kopf - / Gesichtsschmerz (bei SK 1 NC!)",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": true
                        }
                    },
                    {
                        "code": "414",
                        "name": "Vigilanzminderung / Koma (ohne Trauma)",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": true
                        }
                    },
                    {
                        "code": "415",
                        "name": "Schwindel",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": true
                        }
                    },
                    {
                        "code": "419",
                        "name": "Neurologischer Notfall, sonstiger",
                        "hospitalization": {
                            "red": false,
                            "yellow": true,
                            "green": true
                        }
                    }
                ]
            },
            {
                "code": "4x",
                "groupName": "spezielle Erkrankung / Verletzung ▶ 42x Neurologisch",
                "elements": [
                    {
                        "code": "421",
                        "name": "Schlaganfall / Blutung: < 24h oder unklar",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": false
                        }
                    },
                    {
                        "code": "423",
                        "name": "Schlaganfall / Blutung: > 24h",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": true
                        }
                    },
                    {
                        "code": "425",
                        "name": "diagnostizierter Cerebraler Gefäßverschluss zur Thrombektomie",
                        "hospitalization": {
                            "red": true,
                            "yellow": false,
                            "green": false
                        }
                    }
                ]
            },
            {
                "code": "4x",
                "groupName": "spezielle Erkrankung / Verletzung ▶ 43x Psychiatrie",
                "elements": [
                    {
                        "code": "431",
                        "name": "Suizid, angedroht",
                        "hospitalization": {
                            "red": false,
                            "yellow": true,
                            "green": false
                        }
                    },
                    {
                        "code": "432",
                        "name": "Einweisung, psychiatrische",
                        "hospitalization": {
                            "red": false,
                            "yellow": true,
                            "green": false
                        }
                    },
                    {
                        "code": "433",
                        "name": "Einweisung (nach LandesPsychKG)",
                        "hospitalization": {
                            "red": false,
                            "yellow": true,
                            "green": false
                        }
                    },
                    {
                        "code": "434",
                        "name": "Einweisung (nach LandesPsychKG) mit Fixierung",
                        "hospitalization": {
                            "red": false,
                            "yellow": true,
                            "green": false
                        }
                    },
                    {
                        "code": "435",
                        "name": "Akute Verwirrtheit / Delir",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": true
                        }
                    }
                ]
            },
            {
                "code": "51x",
                "groupName": "Pädiatrisch",
                "elements": [
                    {
                        "code": "511",
                        "name": "pädiatrisch - Atemnot",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": true
                        }
                    },
                    {
                        "code": "512",
                        "name": "schwerer Husten (Pseudokrupp)",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": true
                        }
                    },
                    {
                        "code": "513",
                        "name": "pädiatrisch - Fieberkrampf",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": true
                        }
                    },
                    {
                        "code": "519",
                        "name": "Pädiatrischer Notfall, sonstiger",
                        "hospitalization": {
                            "red": false,
                            "yellow": true,
                            "green": true
                        }
                    }
                ]
            },
            {
                "code": "52x ",
                "groupName": "Schwangerschaft / Geburtshilfe ▶ 52x präklinische Geburt",
                "elements": [
                    {
                        "code": "521",
                        "name": "< 16 SSW",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": false
                        }
                    },
                    {
                        "code": "522",
                        "name": "16+0 SSW bis 21+6 SSW",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": false
                        }
                    },
                    {
                        "code": "523",
                        "name": "22+0 SSW bis 28+6 SSW",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": false
                        }
                    },
                    {
                        "code": "524",
                        "name": "29+0 SSW bis 31+6 SSW",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": false
                        }
                    },
                    {
                        "code": "525",
                        "name": "32+0 SSW bis 35+6 SSW und jede Wachstumsstörung des Feten",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": false
                        }
                    },
                    {
                        "code": "526",
                        "name": "ab 36+0 SSW",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": false
                        }
                    },
                    {
                        "code": "527",
                        "name": "ab 36+0 SSW bei Diabetes",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": false
                        }
                    },
                    {
                        "code": "528",
                        "name": "Drillinge bis 32+6 SSW, alle über 3 Mehrlinge",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": false
                        }
                    },
                    {
                        "code": "529",
                        "name": "Drillinge ab 33+0 SSW",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": false
                        }
                    }
                ]
            },
            {
                "code": "53x",
                "groupName": "55x Schwangerschaft / Geburtshilfe ▶ 53x einsetzende Geburt",
                "elements": [
                    {
                        "code": "530",
                        "name": "akute fetale Gefährdung, Erstversorgung ggf. in ungeeigneter Klinik",
                        "hospitalization": {
                            "red": true,
                            "yellow": false,
                            "green": false
                        }
                    },
                    {
                        "code": "531",
                        "name": "< 16 SSW",
                        "hospitalization": {
                            "red": true,
                            "yellow": false,
                            "green": false
                        }
                    },
                    {
                        "code": "532",
                        "name": "16+0 SSW bis 21+6 SSW",
                        "hospitalization": {
                            "red": true,
                            "yellow": false,
                            "green": false
                        }
                    },
                    {
                        "code": "533",
                        "name": "22+0 SSW bis 28+6 SSW",
                        "hospitalization": {
                            "red": true,
                            "yellow": false,
                            "green": false
                        }
                    },
                    {
                        "code": "534",
                        "name": "29+0 SSW bis 31+6 SSW",
                        "hospitalization": {
                            "red": true,
                            "yellow": false,
                            "green": false
                        }
                    },
                    {
                        "code": "535",
                        "name": "32+0 SSW bis 35+6 SSW und jede Wachstumsstörung des Feten",
                        "hospitalization": {
                            "red": true,
                            "yellow": false,
                            "green": false
                        }
                    },
                    {
                        "code": "536",
                        "name": "ab 36+0 SSW",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": false
                        }
                    },
                    {
                        "code": "537",
                        "name": "ab 36+0 SSW bei Diabetes",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": false
                        }
                    },
                    {
                        "code": "538",
                        "name": "Drillinge bis 32+6 SSW, alle über 3 Mehrlinge",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": false
                        }
                    },
                    {
                        "code": "539",
                        "name": "Drillinge ab 33+0 SSW",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": false
                        }
                    }
                ]
            },
            {
                "code": "54x",
                "groupName": "Schwangerschaft / Geburtshilfe ▶ 54x Notfall in der Schwangerschaft",
                "elements": [
                    {
                        "code": "540",
                        "name": "akute fetale Gefährdung, Erstversorgung ggf. in ungeeigneter Klinik",
                        "hospitalization": {
                            "red": true,
                            "yellow": false,
                            "green": false
                        }
                    },
                    {
                        "code": "541",
                        "name": "< 16 SSW",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": false
                        }
                    },
                    {
                        "code": "542",
                        "name": "16+0 SSW bis 21+6 SSW",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": false
                        }
                    },
                    {
                        "code": "543",
                        "name": "22+0 SSW bis 28+6 SSW",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": false
                        }
                    },
                    {
                        "code": "544",
                        "name": "29+0 SSW bis 31+6 SSW",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": false
                        }
                    },
                    {
                        "code": "545",
                        "name": "32+0 SSW bis 35+6 SSW und jede Wachstumsstörung des Feten",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": false
                        }
                    },
                    {
                        "code": "546",
                        "name": "ab 36+0 SSW",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": false
                        }
                    },
                    {
                        "code": "547",
                        "name": "ab 36+0 SSW bei Diabetes",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": false
                        }
                    },
                    {
                        "code": "548",
                        "name": "Drillinge bis 32+6 SSW, alle über 3 Mehrlinge",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": false
                        }
                    },
                    {
                        "code": "549",
                        "name": "Drillinge ab 33+0 SSW",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": false
                        }
                    }
                ]
            },
            {
                "code": "55x",
                "groupName": "Schwangerschaft / Geburtshilfe ▶ 55x spezielle Erkrankungen / Verletzungen Gynäkologisch",
                "elements": [
                    {
                        "code": "551",
                        "name": "vaginale Blutung",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": true
                        }
                    },
                    {
                        "code": "552",
                        "name": "Unterbauchschmerzen",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": true
                        }
                    },
                    {
                        "code": "553",
                        "name": "Sexualdelikt",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": true
                        }
                    },
                    {
                        "code": "559",
                        "name": "Gynäkologischer Notfall, sonstiger",
                        "hospitalization": {
                            "red": false,
                            "yellow": true,
                            "green": true
                        }
                    }
                ]
            },
            {
                "code": "60x",
                "groupName": "Sonstige Einsätze und Transporte",
                "elements": [
                    {
                        "code": "601",
                        "name": "Transport zu definierten Leistungen",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": true
                        }
                    },
                    {
                        "code": "602",
                        "name": "Transport zu geplanter Dialyse",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": true
                        }
                    },
                    {
                        "code": "603",
                        "name": "Transport zu geplantem Herzkatheter",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": true
                        }
                    },
                    {
                        "code": "604",
                        "name": "Transport zu geplantem CT",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": true
                        }
                    },
                    {
                        "code": "605",
                        "name": "Transport zu geplantem MRT",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": true
                        }
                    }
                ]
            },
            {
                "code": "70x",
                "groupName": "Haut- und Geschlechtserkrankungen",
                "elements": [
                    {
                        "code": "701",
                        "name": "Haut - und Geschlechtskrankheiten",
                        "hospitalization": {
                            "red": false,
                            "yellow": true,
                            "green": true
                        }
                    }
                ]
            },
            {
                "code": "71x",
                "groupName": "Urologie",
                "elements": [
                    {
                        "code": "711",
                        "name": "Nieren - Harnleiterkolik",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": true
                        }
                    },
                    {
                        "code": "712",
                        "name": "Hodenschmerz",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": true
                        }
                    },
                    {
                        "code": "713",
                        "name": "Harnverhalt (akut)",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": true
                        }
                    },
                    {
                        "code": "714",
                        "name": "Hämaturie",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": true
                        }
                    },
                    {
                        "code": "715",
                        "name": "Katheterwechsel (transurethral)",
                        "hospitalization": {
                            "red": false,
                            "yellow": false,
                            "green": true
                        }
                    },
                    {
                        "code": "716",
                        "name": "Katheterwechsel (suprapubisch)",
                        "hospitalization": {
                            "red": false,
                            "yellow": false,
                            "green": true
                        }
                    },
                    {
                        "code": "717",
                        "name": "Katheterverlust / - verstopfung",
                        "hospitalization": {
                            "red": false,
                            "yellow": true,
                            "green": true
                        }
                    },
                    {
                        "code": "718",
                        "name": "Harnwegsinfekt",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": true
                        }
                    },
                    {
                        "code": "719",
                        "name": "Urologischer Notfall, sonstiger",
                        "hospitalization": {
                            "red": false,
                            "yellow": true,
                            "green": true
                        }
                    }
                ]
            },
            {
                "code": "72x",
                "groupName": "Augenheilkunde",
                "elements": [
                    {
                        "code": "721",
                        "name": "akute Augenerkrankung",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": true
                        }
                    },
                    {
                        "code": "729",
                        "name": "Augennotfall, sonstiger",
                        "hospitalization": {
                            "red": false,
                            "yellow": true,
                            "green": true
                        }
                    }
                ]
            },
            {
                "code": "73x",
                "groupName": "sonstige HNO Notfälle",
                "elements": [
                    {
                        "code": "731",
                        "name": "Nasenbluten (Epistaxis) unstillbar",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": true
                        }
                    },
                    {
                        "code": "732",
                        "name": "(nach) Blutung, HNO, akut",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": true
                        }
                    },
                    {
                        "code": "733",
                        "name": "Tracheostoma - Komplikation",
                        "hospitalization": {
                            "red": true,
                            "yellow": true,
                            "green": true
                        }
                    },
                    {
                        "code": "739",
                        "name": "HNO Notfall Sonstiger",
                        "hospitalization": {
                            "red": false,
                            "yellow": true,
                            "green": true
                        }
                    }
                ]
            },
            {
                "code": "74x",
                "groupName": " Mund - Kiefer - Gesicht",
                "elements": [
                    {
                        "code": "749",
                        "name": "Mund - Kiefer - Gesicht - Notfall, sonstiger",
                        "hospitalization": {
                            "red": false,
                            "yellow": true,
                            "green": true
                        }
                    }
                ]
            },
            {
                "code": "75x",
                "groupName": "Geriatrie",
                "elements": [
                    {
                        "code": "751",
                        "name": "Geriatrische Einweisung",
                        "hospitalization": {
                            "red": false,
                            "yellow": true,
                            "green": false
                        }
                    }
                ]
            },
            {
                "code": "77x",
                "groupName": "Notfallsituationen unbestimmt",
                "elements": [
                    {
                        "code": "779",
                        "name": "sonstige Notfallsituationen",
                        "hospitalization": {
                            "red": false,
                            "yellow": true,
                            "green": true
                        }
                    }
                ]
            },
            {
                "code": "80x",
                "groupName": "Allgemeinmedizin",
                "elements": [
                    {
                        "code": "801",
                        "name": "Schmerz / Schwellung Bewegungsapparat (nicht traumatisch)",
                        "hospitalization": {
                            "red": false,
                            "yellow": false,
                            "green": true
                        }
                    },
                    {
                        "code": "802",
                        "name": "Schwellung / Abszeß, sonstige Lokalisation",
                        "hospitalization": {
                            "red": false,
                            "yellow": false,
                            "green": true
                        }
                    },
                    {
                        "code": "809",
                        "name": "Allgemeinmedizin, sonstiger Notfall",
                        "hospitalization": {
                            "red": false,
                            "yellow": false,
                            "green": true
                        }
                    }
                ]
            }
        ];

        return {
            getAllPZCodes: _getAllPZCodes,
            getFilteredPZCodes: _getFilteredPZCodes
        }

    }()
}

export default PZCodes();