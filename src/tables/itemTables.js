/**
 * A JSON list of gems to be easily called by a gem-generator function.
 * Ideally the functions return value will be something like...
 *
 *
 *
 *
 * Created by kaylo on 4/19/2017.
 */

const armors = [
  'Padded',
  'Leather',
  'Leather',
  'Studded Leather',
  'Studded Leather',
  'Breastplate',
  'Breastplate',
  'Chain Shirt',
  'Half Plate',
  'Hide',
  'Hide',
  'Scale Mail',
  'Spiked Armor',
  'Ring Mail',
  'Chain Mail',
  'Chain Mail',
  'Splint',
  'Plate',
  'Shield',
  'Shield'
]



const toolsTable = [
  [
    'Artisan Tools: Alchemist’s Supplies',
    'Artisan Tools: Alchemist’s Supplies',
    'Artisan Tools: Brewer’s Supplies',
    'Artisan Tools: Calligrapher’s Supplies',
    'Artisan Tools: Carpenter’s Tools',
    'Artisan Tools: Cartographer’s Tools',
    'Artisan Tools: Cobbler’s Tools',
    'Artisan Tools: Cook’s Utensils',
    'Artisan Tools: Glassblower’s Tools',
    'Artisan Tools: Jeweler’s Tools',
    'Artisan Tools: Leatherworker’s Tools',
    'Artisan Tools: Mason’s Tools',
    'Artisan Tools: Painters’s Supplies',
    'Artisan Tools: Potter’s Tools',
    'Artisan Tools: Smith’s Tools',
    'Artisan Tools: Smith’s Tools',
    'Artisan Tools: Tinker’s Tools',
    'Artisan Tools: Tinker’s Tools',
    'Artisan Tools: Weaver’s Tools',
    'Artisan Tools: Woodcarver’s Tools',
  ],
  ['Disguise Kit'],
  ['Forgery Kit'],
  [
    'Gaming Set: Dice Set',
    'Gaming Set: Dragonchess Set',
    'Gaming Set: Playing Card Set',
    'Gaming Set: Three-Dragon Ante Set'
  ],
  ['Herbalism Kit'],
  [
    'Musical Instrument:Bagpipes',
    'Musical Instrument:Drum',
    'Musical Instrument:Dulcimer',
    'Musical Instrument:Flute',
    'Musical Instrument:Lute',
    'Musical Instrument:Lyre',
    'Musical Instrument:Horn',
    'Musical Instrument:Pan Flute',
    'Musical Instrument:Shawm',
    'Musical Instrument: Viol'
  ],
  ['Navigator’s Tools'],
  ['Poisoner’s Kit'],
  ['Thieves’ Tools'],
  [
    'Vehicle: Carriage',
    'Vehicle: Cart',
    'Vehicle: Wheelbarrow',
    'Vehicle: Chariot',
    'Vehicle: Sled',
    'Vehicle: Wagon',
    'Vehicle: Galley',
    'Vehicle: Keelboat',
    'Vehicle: Longship',
    'Vehicle: Rowboat',
    'Vehicle: Sailing Ship',
    'Vehicle: Warship'
  ]
]

// This table represents [1d6: 1-4 Common Weapon, 5-6 Rare Weapon]
// followed by 1d20 common  or rare weapon table, with a 1/3 chance of generating alternate weapon names
const weaponsTable = [
  {commonWeapons: [
    // repeat on shortsword intentional to make full 1d20 table and increase presence of short swords.
    ['Club', 'Club', 'Club', 'Club', 'Bian (Club)', 'Tonfa (Club)'],
    ['Dagger', 'Dagger', 'Bishou (Dagger)', 'Tamo (Dagger)', 'Kozuka (Dagger)', 'Tanto  (Dagger)'],
    ['Greatclub', 'Greatclub', 'Tetsubo (Greatclub)'],
    ['Handaxe', 'Handaxe', 'Ono (Handaxe)'],
    ['Javelin', 'Javelin', 'Javelin', 'Javelin', 'Mau (Javelin)', 'Uchi-ne  (Javelin)'],
    ['Light Hammer'],
    ['Mace', 'Mace', 'Mace', 'Mace', 'Kanabo (Mace)', 'Chui (Mace)'],
    ['Quarterstaff', 'Quarterstaff', 'Quarterstaff', 'Quarterstaff', 'Gun-staff (Quarterstaff)', 'Bo-Staff (Quarterstaff)'],
    ['Sickle', 'Sickle', 'Kama (Sickle)'],
    ['Spear', 'Spear', 'Spear', 'Spear', 'Qiang (Spear)', 'Yari (Spear)'],
    ['Light Crossbow'],
    ['Dart', 'Dart', 'Shuriken (Dart)'],
    ['Shortbow', 'Shortbow', 'Hankyu (Shortbow)'],
    ['Sling'],
    ['Shortsword', 'Shortsword', 'Shuangdao (Shortsword)'],
    ['Shortsword', 'Shortsword', 'Shuangdao (Shortsword)'],
    ['Longsword', 'Longsword', 'Longsword', 'Longsword', 'Jian (Longsword)', 'Katana (Longsword)'],
    ['Halberd', 'Halberd', 'Halberd', 'Halberd','Ji (Halberd)', 'Kamayari (Halberd)'],
    ['Longbow', 'Longbow', 'Daikyu (Longbow)']
  ]},
  {rareWeapons: [
    ['Battleaxe', 'Battleaxe', 'Battleaxe', 'Battleaxe', 'Fu (Battleaxe)', 'Masakari (Battleaxe)'],
    ['Flail', 'Flail', 'Nunchaku (Flail)'],
    ['Glaive', 'Glaive', 'Glaive','Guandao (Glaive)', 'Bisento (Glaive)', 'Naginata (Glaive)'],
    ['Greataxe'],
    ['Greatsword', 'Greatsword', 'Greatsword', 'Greatsword', 'Changdao (Greatsword)', 'Nodachi (Greatsword)'],
    ['Lance', 'Lance', 'Umayari (Lance)'],
    ['Maul'],
    ['Morningstar'],
    ['Pike', 'Pike', 'Pike', 'Pike', 'Mao (Pike)', 'Nagaeyari (Pike)'],
    ['Rapier'],
    ['Scimitar', 'Scimitar', 'Scimitar', 'Scimitar', 'Liuyedao (Scimitar)', 'Wakizashi (Scimitar)'],
    ['Trident', 'Trident', 'Trident', 'Trident', 'Cha (Trident)', 'Magariyari (Trident)'],
    ['War Pick', 'War Pick', 'War Pick', 'War Pick', 'Fang (War Pick)', 'Kuwa (War Pick)'],
    ['Warhammer'],
    ['Whip'],
    ['Blowgun'],
    ['Hand Crossbow'],
    ['Net'],
    ['Arrow'],
    ['Bolt']
  ]}
]

const gemTable = [
  // GemClass 0
  [
    // Agate gemVariable
    ['Banded Agate', 'Eye Agate', 'Moss Agate'],
    ['Azurite'],
    ['Blue Quartz'],
    ['Hematite'],
    ['Lapis Lazuli'],
    ['Malachite'],
    ['Obsidian'],
    ['Rhodochrosite'],
    ['Tiger Eye Turquoise'],
    ['Irregular Freshwater Pearl']
  ],
// GemClass 1
  [
    // Must be more intuitive way to do probability weighting than extra entries...
    ['Bloodstone'],
    ['Bloodstone'],
    ['Carnelian'],
    ['Carnelian'],
    ['Chalcedony'],
    ['Chrysoprase'],
    ['Citirne'],
    ['Iolite'],
    ['Jasper'],
    ['Moonstone'],
    ['Moonstone'],
    ['Onyx'],
    ['Onyx'],
    ['Peridot'],
    ['Peridot'],
    ['Rock Crystal'],
    ['Sard'],
    ['Sardonyx'],
    ['Rose Quartz', 'Smokey Rose Quatz', 'Star Rose Quatz'],
    ['Zircon']
  ],
  // GemClass 2
  [
    ['Amber'],
    ['Amethyst'],
    ['Chrysoberyl'],
    ['Coral'],
    ['Red Garnet', 'Brown-Green Garnet'],
    ['Jade'],
    ['Jet'],
    ['White Pearl', 'White Pearl', 'Golden Pearl', 'Pink Pearl', 'Pink Pearl', 'Silver Pearl'],
    ['Red Spinel', 'Red-Brown Spinel', 'Deep Green Spinel'],
    ['Tourmaline']
  ],
  // GemClass 3
  [
    ['Alexandrite'],
    ['Aquamarine'],
    ['Violet Garnet'],
    ['Black Pearl'],
    ['Deep Blue Spinel'],
    ['Golden Yellow Topaz']
  ],
  // GemClass 4
  [
    ['Emerald'],
    ['White Opal', 'Black Opal', 'Fire Opal'],
    ['Blue Sapphire'],
    ['Fiery Yellow Corundum', 'Rich Purple Corundum'],
    ['Blue Star Sapphire', 'Black Star Sapphire'],
    ['Star Ruby']
  ],
  // GemClass 5
  [
    ['Alexandrite'],
    ['Clearest Bright Green Emerald'],
    ['Jacinth'],
    ['Jadeite']
  ]
]

const itemTables = {
  armors: armors,
  gemTable: gemTable,
  toolsTable: toolsTable,
  weaponsTable: weaponsTable
}

export default itemTables
