var stopList = [
	"A.M.S.HOSPITAL",
	"A.V.CONSTRUCTION",
	"AAYURVEDA ASHRAMAM",
	"ADAMBAKKAM P.S",
	"ADI DRAVIDAR HOSTEL",
	"ADYAR GATE",
	"AGARAM",
	"AGARAM THEN",
	"AIRFORCE STATION",
	"ALAGESA NAGAR",
	"ALAMADHI",
	"ALAMADHI OLD",
	"ALAPAKKAM",
	"ALWAR THIRUNAGAR",
	"AMBATHUR ESTATE",
	"AMBEDKAR NAGAR",
	"AMMAN KULAM",
	"ANAKAPUTHUR",
	"ANANDA NAGAR",
	"ANDARKUPPAM",
	"ANDERSONPET",
	"ANGALAMMAN KOIL",
	"ANJATHAMMAN KOIL",
	"ANJUGAM SCHOOL",
	"ANNA NAGAR",
	"ANNA NAGAR CIRCLE",
	"ANNA NAGAR EAST",
	"ANNA NAGAR WEST",
	"ANNA POORNA HOTEL/DAMS RD",
	"ANNA ROAD P.O./DAMS ROAD",
	"ANNA SQUARE",
	"ANNA UNIVERSITY",
	"ANNAMBEDU",
	"ARANI",
	"ARASANKAZHANI",
	"ARIYALUR",
	"ARUMBAKKAM",
	"ASHOK LAYLAND",
	"ASHOK LEYLAND MARK.DIV",
	"AVADI",
	"AVADI CIRCLE",
	"AVADI MOSQUE",
	"AVVAI HOME",
	"AYANAMBAKKAM",
	"AYANAVARAM B.S",
	"AYAPAKKAM",
	"AYYAPPA NAGAR",
	"BALAJI NAGAR (BHARATH ENG",
	"BESANT NAGAR",
	"BHARATHI NAGAR(PERIYAR PA",
	"BOROSIL COMPANY",
	"BRINDAVAN COLONY",
	"BROADWAY",
	"BUILDERS INDUSTRY",
	"BURIAL GROUND",
	"BURMAH SHELL PETROL BUNK",
	"BUS BAY-17TH KM",
	"BUTT ROAD",
	"C.I.T.COLONY",
	"C.M.B.T",
	"C.R.P.F",
	"CAMP ROAD",
	"CEMENTRY (MANDAVELI",
	"CENTRAL",
	"CHEMBARAMBAKKAM",
	"CHEPAUK",
	"CHETTIMEDU",
	"CHIDAMBARAM STORES",
	"CHINMAYA NAGAR",
	"CHITHALAPAKKAM",
	"CHITLAPAKKAM",
	"CHITLAPAKKAM B.S",
	"CHITTUKADU",
	"CHOLA MANDAL",
	"CHOOLAI MILL",
	"CHOOLAI P.O",
	"CHURCH",
	"CIPET",
	"CLIVE BATTERY",
	"CONCORDE",
	"CONVENT",
	"CORBORUNDUM UNIVERSAL",
	"CORPN. PLAY GROUND",
	"CORPORATION SCHOOL/OFFICE",
	"CYCLE SHOP",
	"D.M.S",
	"D.P.I",
	"DASAMAHAN",
	"DASAPRAKASH",
	"DASARATHAPURAM",
	"DEFENCE COLONY",
	"DEFENCE QUARTERS",
	"DHARMAPRAKASH/PETROL BUNK",
	"DOVETON",
	"DRY CATTLLE FORM",
	"DUNLOP",
	"ECHANKUZHI",
	"EGMORE",
	"EGMORE NORTH R.S",
	"EKKATTUTHANGAL",
	"ELLAIAMMAN KOIL",
	"ENG.COLLEGE",
	"ENNORE",
	"ERNAVOOR GATE",
	"F.C.I OLD",
	"FIVE LAMPS",
	"FORD",
	"FORE SHORE ESTATE",
	"G.K.M.COLONY",
	"GANESH PURAM",
	"GEMINI P.H",
	"GOVARDANAGIRI",
	"GOVT. GIRLS H.SC",
	"GRAND LINE",
	"GUDUVANCHERY",
	"GUINDY R.S",
	"GUINDY TVK ESTATE",
	"GURUNANAK COLLEGE",
	"H.V.F.MAIN GATE",
	"HASTHINAPURAM",
	"HIGH COURT",
	"HINDY VIDYALAYA",
	"HOTEL ARUN",
	"I.C.F",
	"I.C.I",
	"I.O.C",
	"I.R.T. RD.JN",
	"ICF ANNEXE",
	"INDIRA NAGAR WATER TANK",
	"INJAMBAKKAM",
	"IRULAPALAYAM",
	"IRULAPALAYAM RD JN",
	"IRUMBULIYUR",
	"JAFFARKHAN PET",
	"JAMALAYA",
	"JAYENDIRA NAGAR",
	"JN OF III AND 1ST AVE",
	"JN. OF R.GARDEN & PEVR H",
	"JN.OF MAMBAKKAM & O.BAKKA",
	"JN.OF MANALI RD.CHINNA KO",
	"JN.OF RACE COURSE RD",
	"JN.OF.ARTERIAL RD WITH 40",
	"JN.OF.PALAVANTHANGAL &GST",
	"JN.OF.VLY-TBM RD&MVKM-K.K",
	"Jn.OF P.T.R Rd/KAMARAJ Rd",
	"KAKKAN BRIDGE",
	"KALLIKUPPAM",
	"KAMABAR ARANGAM",
	"KAMARAJAPURAM",
	"KANATHUR",
	"KANDANCHAVADI",
	"KANDIGAI",
	"KANNAGI NAGAR S.C.BOARD",
	"KANNAN THEATER",
	"KANNIAMMAN NAGAR",
	"KARANAI",
	"KARANODAI",
	"KARAPAKKAM",
	"KARASANGAL",
	"KARAYANCAHVADI",
	"KATTUR ROAD JN",
	"KAVANGARAI",
	"KAVARAIPALAYAM",
	"KAVIARASU KANNADASAN NAGA",
	"KEERAPAKKAM",
	"KELAMBAKKAM",
	"KELLEYS",
	"KILKATTALAI",
	"KILPAUK GARDEN",
	"KODUNGAIYUR O.T",
	"KODUNGAIYUR(PARVATHI NAGA",
	"KOILPATHAGAI RD.JN",
	"KOLAPAKKAM",
	"KOLAPPANCHERY",
	"KOLATHUR",
	"KOLATHUR/NEHRU RD JN",
	"KOLLAICHERI",
	"KONDAKKARAI",
	"KORATTUR",
	"KORUKKUPET",
	"KORUKKUPET R.S",
	"KOSAPALAYAM",
	"KOSAPUR RD. JN",
	"KOSAVAMPETTAI",
	"KOTHARI",
	"KOTTIVAKKAM",
	"KOTTUR NSK STATUE",
	"KOTTURPURAM",
	"KOTYAMEDU",
	"KOVALAM",
	"KOVILAMCHERRY VILLAGE",
	"KOYAMBEDU P.S",
	"KOYAMBEDU ROHINI THEATER",
	"KOYAMBEDU SCHOOL",
	"KUMARAN KUNDRAM",
	"KUMARAN NAGAR",
	"KUMUNANCHAVADI",
	"KUNDRATHUR B.S",
	"KUNDRATHUR MURUGAN TEMPLE",
	"KUTHAMBAKKAM",
	"LADY MCTM SCHOOL/MILLERS",
	"LUCAS TVS",
	"LUZ",
	"M.K.B.NAGAR",
	"M.K.B.NAGAR EAST",
	"M.M.C",
	"M.M.D.A.COLONY",
	"M.M.D.A.COLONY RD.JN",
	"MADAMBAKKAM KOIL",
	"MADHAVARAM",
	"MADHAVARAM MILLK COLONY",
	"MADHAVARAM POST BOX",
	"MADIPAKKAM B.S",
	"MADIPAKKAM RD. JN",
	"MADURAPAKKAM RD.JN",
	"MADURAVOYAL",
	"MAHALAKSHMI NAGAR",
	"MAHARANI",
	"MAHENDRA CITY(CHETTY PUNN",
	"MALLIGAI NAGAR AVE",
	"MALROSAPURAM",
	"MAMBAKKAM RDJN./VENKATAMA",
	"MAMBAKKAM TEMPLE",
	"MANALAI SEEKADU",
	"MANALI",
	"MANALI NEW TOWN",
	"MANALI RD JN",
	"MANAPAKKAM P.U.O",
	"MANAPAKKAM VILLAGE",
	"MANDAVELI",
	"MANGADU",
	"MANIMANGALAM",
	"MANIMANGALAM RD. JN",
	"MANIMANGALAM VILLAGE",
	"MARAIMALAI NAGAR",
	"MARAIMALAI NAGAR I.E",
	"MATERNITY HOSPITAL",
	"MATHUR M.M.D.A",
	"MATHUR RD. JN",
	"MEDAVAKKAM COLONY",
	"MEDAVAKKAM JN",
	"MELKOTTIYUR",
	"MELPAKKAM",
	"MENAMBEDU",
	"MEPPADU HOSPITAL",
	"MEPPUR",
	"MILLERS ROAD",
	"MINJUR",
	"MINJUR B.D.O",
	"MINJUR NEW TERMINUS",
	"MOGAIPAIR ROAD JN",
	"MOGALIVAKKAM / MARI AMMN",
	"MOOLAKADAI",
	"MOOTAKARAN CHAVADI",
	"MOOVARASANPET",
	"MOULIVAKKAM",
	"MUDICHUR VILLAGE",
	"MULLAI NAGAR",
	"MURUGAN KOIL / GIRUGAMBAK",
	"MUTHUMARIAMMAN KOIL",
	"MYLAPORE",
	"N.G.O.COLONY",
	"NADUVANKARAI",
	"NAGALKENI",
	"NALLUR",
	"NALLUR PUDU NAGAR",
	"NANDAMBAKKAM VILLAGE",
	"NANGANALLUR",
	"NAPALAYAM",
	"NARAYANAPURAM",
	"NATHAMUNI TALKIES",
	"NAVALUR",
	"NEDUGUNDRAM",
	"NEELANKARAI",
	"NEMAM",
	"NEMILICHERI",
	"NERKUNDRAM",
	"NOOTHANCHERI",
	"NOOTHANCHERI CROSS RD",
	"NUCLEUS COMPANY",
	"OKKIYAM THORAIPAKKAM SEC",
	"ORAGADAM",
	"ORAGADAM O.T",
	"OTTIAMBAKKAM",
	"P.OR & SONS",
	"P1.POLICE STATION",
	"PADAPPAI",
	"PADAVATTAMMAN SCHOOL",
	"PADIYANALLUR",
	"PADURMEDU",
	"PAKKAM",
	"PALAKKA COMPANY",
	"PALAVAKKAM",
	"PALAVASTHIC CHEMICALS",
	"PALLAVAN NAGAR",
	"PALLAVARAM",
	"PAMMADU KULAM RD.JN",
	"PAMMAL",
	"PAMMAL SANKAR NAGAR",
	"PANAIYUR",
	"PANJETTI",
	"PARIVAKKAM",
	"PARRYS",
	"PARUTHIPATTU RD. JN",
	"PATTABIRAM",
	"PATTAMANDIRI",
	"PATTUR",
	"PAVENTHER SALAI",
	"PAZAVANTHANGAL ROAD JN",
	"PAZHANTHANDALAM",
	"PERAMBUR B.S",
	"PERAMBUR MARKET",
	"PERAMBUR R.S",
	"PERIYA KOTTAMEDU",
	"PERIYAPALAYAM",
	"PERIYAPALAYAM RD JN",
	"PERIYAPANICHERI",
	"PERIYAR BRIDGE",
	"PERIYAR NAGAR",
	"PERUMALPATTU",
	"PERUMBAKKAM LIMIT",
	"PICTURE POST",
	"POLYTECHNIC",
	"PONDY BAZAAR",
	"PONMAR",
	"PONNIAMMAN KOIL RD. JN",
	"POOCHIATHIBEDU",
	"POOMBUHAR",
	"POONAMALLEE",
	"POONTHANDALAM",
	"PORUR",
	"POZHICHALUR",
	"PRITHIYANGARA DEVI TEMPLE",
	"PTC QUARTER / ESWARANTEMP",
	"PUDUPAKKAM",
	"PUDUR",
	"PUDUR HIGH SCHOOL",
	"PULIPAKKAM",
	"PUSHPA NAGAR",
	"PUSHPAGIRI RD. JN",
	"PUTHUCHATHIRAM",
	"PUZHITHIVAKKAM B.S",
	"Q.M ARTS (MEN",
	"Q.M.ARTS COLLEGE",
	"Q.M.C",
	"RAMAPURAM",
	"RAMAPURAM (L.N.P KOIL",
	"RAMASAMY NAGAR",
	"RED HILLS",
	"REGAL",
	"ROYAPURAM P.S",
	"S.H.B",
	"S.I.V.E.T",
	"S.R.P. COLONY",
	"SADANANDAPURAM",
	"SAIDAPET",
	"SAIDAPET WEST",
	"SANTHOME P.O",
	"SARMA NAGAR",
	"SATHANKUPPAM",
	"SATHIYAMOORTHY NAGAR",
	"SAYANI/AYNAVARAM",
	"SCREW FACTORY",
	"SECRETARIAT",
	"SECRETARIAT COLONY",
	"SEMILIVARAM",
	"SENNEERKUPPAM",
	"SENTHIL NAGAR",
	"SHANTHI/DAMS RD",
	"SHIVASHANMUGAPURAM",
	"SHOLAVARAM",
	"SIDCO",
	"SIDCO NAGAR",
	"SIKKARAYAPURAM",
	"SIRUCHERI",
	"SIRUKALATHUR",
	"SOMANGALAM",
	"SOMANGALAM RD /AMARAMBEDU",
	"SOMANGALAM RD JN/N.V.R.D",
	"SONALUR / PUDUR",
	"SRI RAM ENGG.COLLEGE",
	"SRI SANKARA HEALTH CENTRE",
	"SRINIVASA NAGAR",
	"SRINIVASA THEATER",
	"SRP TOOLS",
	"ST THOMAS MOUNT PO",
	"ST THOMAS MOUNT R.S",
	"STERLING RD./METROLOG. DE",
	"SUN THEATER",
	"SUNDARASOZHAPURAM",
	"SUNNAMBU KOLATHUR",
	"SURAPEDU",
	"T.B.INSTITUTE",
	"T.B.SANATORIUM",
	"T.N.C.F",
	"T.NAGAR",
	"T.V.K.NAGAR",
	"T.V.S",
	"T.V.T RLY GATE",
	"TAMARAIPAKKAM",
	"TAMARIND TREE",
	"TAMBARAM",
	"TAMBARAM EAST",
	"TAMBARAM TOWN LIMIT",
	"TARAMANI",
	"TAYLORS ROAD",
	"TEACHERS COLONY",
	"TELEGRAPH OFFICE",
	"THAILAPURAM",
	"THALAMBUR",
	"THAMBUCHETTY ST",
	"THANDALAM RD JN",
	"THANDARAI",
	"THANGAL",
	"THAZHANKUPPAM",
	"THEAGARAYA COLLEGE",
	"THEYAMPAKKAM",
	"THILLAI GANGA NAGR IIND M",
	"THIRUMANGALAM",
	"THIRUMUDIVAKKAM",
	"THIRUNEERMALAI",
	"THIRUNINDRAVOOR",
	"THIRUNINDRAVOOR RLY.STN",
	"THIRUSOOLAM NATIONAL AIRP",
	"THIRUVANMIYUR",
	"THIRUVERKADU",
	"THIRUVETRIYUR B.S",
	"THIRUVOTRIYUR TEMPLE",
	"THORAPPAKKAM P.T.C COLONY",
	"THORAPPAKKAM TEA SHOP",
	"THRUVOTRIYUR TEMPLE",
	"TOLLGATE",
	"TONDAIAYRPET",
	"TRIPLICANE",
	"TRUSTPURAM",
	"U.S.I.S",
	"UTHAMAR GANDHISALAI (CORP",
	"UTHANDI VILLAGE",
	"V. NAGAR",
	"V.HOUSE",
	"V.HOUSE P.S",
	"V.M.STREET",
	"VAANAGARAM",
	"VADAPALANI B.S",
	"VADAPALANI JN",
	"VADAPERUMBAKKAM",
	"VADHATTUR JN",
	"VALASARAVAKKAM",
	"VALLIYUR SCHOOL",
	"VALLUVARKOTTAM",
	"VANDALOOR ZOO",
	"VANUVAMBEDU",
	"VARADARAJA PURAM",
	"VARADHARAJA THEATER",
	"VAZHUTHALAMBEDU RD. JN",
	"VEENUS",
	"VEERABADRA NAGAR",
	"VEERAPURAM",
	"VEERAPURAM RD JN",
	"VELACHERY",
	"VELACHERY HOSPITAL",
	"VELANGADUPAKKAM",
	"VELAPPANCHAVADI",
	"VELLAIKAL",
	"VELLALA STREET",
	"VELLAVEDU",
	"VENGAL CROSS ROAD",
	"VENGAMBAKKAM RD JN",
	"VENGATAPURAM",
	"VEPPAMPATTU R.S",
	"VETERINARY HOSPITAL",
	"VETERINARY HOSPITAL/PRDCT",
	"VICHOOR",
	"VIDYODAYA",
	"VILINJAMBAKKAM AMMAN KOIL",
	"VILLIVAKKAM",
	"VINAYAGAPURAM",
	"VINAYAGAR KOIL",
	"VIRUGAMBAKKAM",
	"VYASARPADI",
	"WATER TANK",
	"WEELS INDIA RD.JN",
	"WESLEY H.S",
	"WOMEN'S POLYTECHNIC",
	"Y.M.I.A"
];