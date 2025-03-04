const monsterless_regions = ["Arimathor", "Asgard", "Caer Fandry", "Drune", "Kurz", "Leinster", "Monmouth", "Murias", "Silverbrook", "Summer Festival", "Temple of Despothes", "Temple of Duach", "Temple of Elphame", "Temple of Enid", "Temple of Finvarra", "Temple of Mabon", "Usk", "Wen"]

const regions = {
   "Ascetos Desert": {
      "berserker": [2852, 3274],
      "champion": [11710, 12580],
      "evil bee": [6552, 14616],
      "evil minion": [11360, 14380],
      "fire wasp": [13855, 14484],
      "flame daemon": [1819, 2499],
      "hell snake": [5814, 10638],
      "hornet": [16000, undefined],
      "kilrog": [4572, 5634],
      "king cobra": [4320, 5184],
      "king kilrog": [6136, 11754],
      "protector": [11040, 14930],
      "servant of the mists": [13230, 19440],
      "warden": [66627, 77781],
      "wasp healer": [7800, 21975],
      "wyrm": [10494, 16956]
   },
   "Ascetos Deep Desert": {
      "berserker": [6091, 6520],
      "champion": [13440, 13560],
      "daemon king": [6120, 11880],
      "evil bee": [13194, undefined],
      "evil minion": [11090, 14640],
      "fire wasp": [10540, 11832],
      "flame daemon": [1887, 2584],
      "hell snake": [6354, 10782],
      "hornet": [18560, 18900],
      "kilrog": [5778, 5832],
      "king cobra": [5112, 5166],
      "king kilrog": [8424, 15012],
      "protector": [11980, 14690],
      "servant of the mists": [16560, undefined],
      "wasp healer": [23250, 24400],
      "wyrm": [10782, 17802]
   },
   "Bloodwood": {
      "banshee": [760, 920],
      "bounty hunter": [1088, 1584],
      "cobra": [810, 1746],
      "crypt keeper": [1326, undefined],
      "daemon": [1440, undefined],
      "dark faery": [330, 370],
      "hellhound": [741, 910],
      "howling terror": [741, 780],
      "imp king": [720, 820],
      "imp warrior": [540, 610],
      "lich": [676, 936],
      "medusa": [520, 1000],
      "ogre chief": [1400, undefined],
      "priestess": [810, 900],
      "shade": [472, undefined],
      "thief": [458, 650],
      "troll king": [1071, 1309],
      "warrior": [732, undefined],
      "wasp queen": [216, 288]
   },
   "Crystal Mountains": {
      "blightblood basilisk": [15660, 15870],
      "chilltooth basilisk": [15180, 16440],
      "flametongued basilisk": [13920, 16230],
      "rock troll": [8120, 8340],
      "rock Troll chieftan": [10200, 11680],
      "rock Troll healer": [9360, 10980],
      "rock Troll hunter": [9860, 11540],
      "rock Troll mage": [10400, 10460],
      "rock troll warrior": [9320, 9560],
      "shockscale basilisk": [14280, 14370],
      "vitriolic basilisk": [14820, 14850]
   },
   "Devon Forest": {
      "bounty hunter": [912, 1616],
      "cobra": [774, 1350],
      "dark faery": [330, undefined],
      "hell hound": [806, 910],
      "howling terror": [678, 793],
      "imp king": [760, undefined],
      "imp warrior": [520, 580],
      "ogre chief": [1340, 1640],
      "priestess": [720, 860],
      "seraph queen": [948, 1068],
      "seraph thaumaturgist": [416, 520],
      "seraph warrior": [624, 816],
      "thief": [650, undefined],
      "troll king": [1071, 1241],
      "warrior": [684, 798],
      "wasp queen": [264, 395],
      "wizard of light": [520, 640]
   },
   "Drear Valley": {
      "aegiscian": [4393, 12259],
      "avalonian": [13630, 17850],
      "avalonian wizard": [12607, 13917],
      "dolus acolyte": [972, 1710],
      "dolus thrall": [1368, 1548],
      "drudge cleric": [3014, 4246], 
      "kamirian druid": [8710, 10322],
      "kamirian invader": [9802, 11252],
      "saurilian necromancer": [28322, 30804],
      "saurilian warrior": [21045, 30362],
      "uplander drudge": [4136, 5478],
      "warden": [24624, 25839]
   },
   "East Havenwood": {
      "bat": [15, 25],
      "desert ratling": [40, 56],
      "flying rat": [25, 40],
      "pixie": [50, 80],
      "ratling": [24, undefined],
      "wood ratling": [32, 48],
      "zombie": [39, 65]
   },
   "Emerald Forest": {
      "blood fenris": [611, 728],
      "bounty hunter": [504, 564],
      "cleric": [370, 470],
      "cyclops": [740, 940],
      "dark faery": [320, 370],
      "faery queen": [370, 450],
      "gray fenris": [455, 546],
      "hell hound": [780, 819],
      "howling terror": [754, undefined],
      "menosz": [3465, undefined],
      "ogre": [308, 588],
      "ogre chief": [1440, 1600],
      "ogre mage": [546, 676],
      "paladin": [9162, 12276],
      "seraph": [368, 464],
      "seraph thaumaturgist": [448, 568],
      "seraph warrior": [648, 864],
      "thief": [504, undefined],
      "troll armsman": [297, 462],
      "troll elementalist": [480, 600],
      "troll king": [1071, 1309],
      "troll sorcerer": [492, 612],
      "troll warrior": [407, 572],
      "ugly ogre": [630, 868],
      "warrior": [576, 840],
      "warrior of light": [540, 560],
      "wasp queen": [216, 396],
      "wizard of light": [550, 560],
      "wood nymph": [290, 320]
   },
   "Fafnir's Swamp": {
      "blighted soul": [9210, undefined],
      "bog dragon": [25140, undefined],
      "bog elder dragon": [undefined, undefined],
      "bog hatchling": [12300, undefined],
      "cursed soul": [11940, undefined],
      "fiendish soul": [14505, undefined],
      "goo": [13700, undefined],
      "gunk": [14200, 15540],
      "infernal soul": [15285, 16500],
      "legendary bog dragon": [45590, 49590],
      "legendary mire dragon": [52050, undefined],
      "legendary moor dragon": [44790, undefined],
      "legendary swamp dragon": [undefined, undefined],
      "malevolent soul": [9165, 11460],
      "mire": [8300, 9940],
      "mire dragon": [31380, undefined],
      "mire elder dragon": [36720, undefined],
      "mire hatchling": [20190, 20370],
      "moor dragon": [26220, 26910],
      "moor elder dragon": [37770, 44190],
      "moor hatchling": [16290, 20370],
      "muck": [10260, 11420],
      "slime": [16120, 17640],
      "sludge": [18660, undefined],
      "swamp dragon": [25200, 27060],
      "swamp elder dragon": [35220, undefined],
      "swamp hatchling": [12060, 14790],
      "young bog dragon": [20790, 22500],
      "young mire dragon": [21240, 26670],
      "young moor dragon": [21090, 24360],
      "young swamp dragon": [23280, undefined]
   },
   "Fallows": {
      "feral": [7710, 13170],
      "hunter": [7770, 13410],
      "scavenger": [7590, 13440]
   },
   "Forest of Death": {
      "dark faery": [370, undefined],
      "devil": [1995, 2430],
      "lava serpent": [5040, undefined],
      "spitting cobra": [1278, 2772],
      "warden": [6930, 7854]
   },
   "Killing Fields": {
      "dark faery": [270, 290],
      "devil": [2715, 2775],
      "lava serpents": [2754, 4842],
      "spitting cobra": [2394, 2628],
      "warden": [6867, 8421]
   },
   "Konge": {
      "orc bandit": [26520, 29010],
      "orc magus": [27240, 29010],
      "orc scout": [26250, 28530],
      "orc thug": [24210, 26010],
      "orc warlord": [24960, 28920],
      "phantasm": [26400, 27270],
      "poltergeist": [24600, 28290],
      "revenant": [25560, 27150],
      "specter": [27030, 29280],
      "yurei": [25740, 28650]
   },
   "Leinster / Kurz Road": {
      "cleric": [380, 410],
      "cyclops": [740, undefined],
      "dark faery": [290, 340],
      "ghost": [256, 375],
      "imp king": [770, 820],
      "imp necromancer": [450, undefined],
      "imp slavemaster": [430, undefined],
      "imp thaumaturgist": [460, 520],
      "imp warrior": [520, 530],
      "lich": [undefined, undefined],
      "ogre": [undefined, undefined],
      "ogre chief": [1580, undefined],
      "ogre mage": [754, undefined],
      "shade": [488, undefined],
      "troll armsman": [308, undefined],
      "troll king": [1088, undefined],
      "troll sorcerer": [624, undefined],
      "ugly ogre": [756, undefined],
      "wasp queen": [288, undefined]
   },
   "North Havenwood": {
      "desert ratling": [40, 56],
      "faery": [144, 324],
      "flying rat": [25, 40],
      "ghoul": [78, 143],
      "pixie": [50, 80],
      "wolf": [77, 121],
      "skeleton": [50, 80]
   },
   "Northern Steppes": {
      "flame sprite": [6600, 7530],
      "gargoyle": [7632, 9072],
      "snow sprite": [6345, 7080],
      "sprite": [6720, 7470],
      "sprite matriarch": [7350, 7440],
      "storm sprite": [6045, 6795],
      "water sprite": [6405, 7140]
   },
   "South Havenwood": {
      "alpha wolf": [143, 187],
      "bounty hunter": [168, 384],
      "cyclops": [740, 900],
      "daemon ratling": [176, 240],
      "damned one": [260, undefined],
      "dark faerie": [300, 370],
      "damned one": [234,  undefined],
      "entombed one": [169, 182],
      "faery": [144, 228],
      "flame ratling": [128, 160],
      "gray fenris": [442, 520],
      "imp citizen": [260, 290],
      "imp guard": [320, 400],
      "imp slave": [130, 220],
      "ogre": [462, 560],
      "ogre child": [144, 252],
      "plague ratling": [144, 168],
      "screeching horror": [288, undefined],
      "storm bat": [192, undefined],
      "thief": [228, 432],
      "troll": [264, 319],
      "troll armsman": [297, 396],
      "undead necromancer": [104, undefined],
      "vampire bat": [120, 160],
      "warrior": [156, 480],
      "wasp warrior": [168, 204],
      "wood nymph": [280, 340],
      "wraith": [252, 384],
      "young fenris": [286, 390]
   },
   "The Badlands": {
      "bounty hunter": [880, 1152],
      "fury": [1130, 1340],
      "hell snake": [undefined, undefined],
      "kilrog": [5094, 6246],
      "king kilrog": [6282, 13140],
      "lava serpent": [3924, 4176],
      "warrior": [420, 444]
   },
   "The Barrens": {
      "berserker": [1305, 1675],
      "daemon king": [8640, 13284],
      "dark faery": [370, undefined],
      "earth elemental": [17220, undefined],
      "fire elemental": [18840, undefined],
      "kilrog": [4554, 5886],
      "paladin": [12744, 15660],
      "warden": [33000, 43350],
      "water elemental": [15840, 19560]
   },
   "The Downs": {
      "dark faery": [290, 320],
      "hell snake": [5850, 10368],
      "kilrog": [4734, 6156],
      "king cobra": [3906, 4050],
      "warden": [20979, 22869]
   },
   "The Wild Beyond": {
      "bounty hunter": [1600, 2574],
      "crypt keeper": [1027, 1313],
      "daemon": [1275, 1485],
      "dark faery": [280, undefined],
      "flame daemon": [2329, 2465],
      "fury": [1310, 1430],
      "medusa": [530, 810],
      "snow daemon": [2484, 2682],
      "thief": [660, undefined],
      "warden": [3060, 3315]
   },
   "Wandering Woods": {
      "bounty hunter": [1872, 2592],
      "dark faery": [350, 360],
      "devil": [1770, 3000],
      "flame daemon": [1802, 2346],
      "fury": [1070, 1400],
      "snow daemon": [1890, 2664],
      "spitting cobra": [1404, 3384],
      "thief": [501, 626],
      "warden": [4554, undefined]
   },
   "West Havenwood": {
      "alpha wolf": [143, 187],
      "arctic ratling": [96, 136],
      "bounty hunter": [192, 264],
      "cave ratling": [88, 112],
      "crypt bat": [56, 98],
      "entombed one": [156, 195],
      "faerie": [144, 288],
      "flame ratling": [112, 152],
      "imp slave": [160, 210],
      "lost sailor": [80, 130],
      "ogre child": [180, 252],
      "plague ratling": [144, 176],
      "rabid wolf": [110, 143],
      "thief": [180, 240],
      "undead necromancer": [143, undefined],
      "vampire bat": [160, undefined],
      "warrior": [144, 264],
      "wasp warrior": [192, 216],
      "wasp worker": [120, 168]
   },
   "Wexfordshire Valley": {
      "bounty hunter": [1890, 2700],
      "dark faery": [330, 360],
      "fury": [1020, 1490],
      "spitting cobra": [1908, 3618],
      "theif": [553, 636],
      "warden": [5148, 5238]
   },
   "Winter Wold": {
      "dark faery": [350, undefined],
      "kilrog": [6192, undefined],
      "king cobra": [5364, undefined],
      "paladin": [15012, undefined],
      "warden": [15480, undefined]
   },
   "Zender's Woods": {
      "bounty hunter": [1152, 2646],
      "daemon": [1290, 1530],
      "flame daemon": [1734, 2516],
      "fury": [1040, 1510],
      "seeker": [6460, undefined],
      "snow daemon": [2034, 2646],
      "thief": [636, undefined],
      "warden": [3195, 3285],
      "warrior": [3195, undefined]
   }
}
