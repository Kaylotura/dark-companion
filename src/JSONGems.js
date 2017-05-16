/**
 * A JSON list of gems to be easily called by a gem-generator function.
 * Ideally the functions return value will be something like...
 *
 * if (typeof JSONGems.[gemClass][gemPlace] == 'array') {
 *  return JSONGems[gemClass][gemPlace].[gemVariable]
 * }else {
 * return JSONGems.[gemClass].[gemPlace]
 *
 *
 * Created by kaylo on 4/19/2017.
 */

const JSONGems = [
  // GemClass 0
  [
    // Agate gemVariable
    ['Banded Agate',
      'Eye Agate',
      'Moss Agate'
    ],
    'Azurite',
    'Blue Quartz',
    'Hematite',
    'Lapis Lazuli',
    'Malachite',
    'Obsidian',
    'Rhodochrosite',
    'Tiger Eye Turquoise',
    'Irregular Freshwater Pearl'
  ],
// GemClass 1
  [
      // Must be more intuitive way to do probability weighting than extra entries...
    'Bloodstone',
    'Bloodstone',
    'Carnelian',
    'Carnelian',
    'Chalcedony',
    'Chrysoprase',
    'Citirne',
    'Iolite',
    'Jasper',
    'Moonstone',
    'Moonstone',
    'Onyx',
    'Onyx',
    'Peridot',
    'Peridot',
    'Rock Crystal',
    'Sard',
    'Sardonyx',
    // Rose Quartz is a variable gem
    [
      'Rose Quartz',
      'Smokey Rose Quatz',
      'Star Rose Quatz'
    ],
    'Zircon'
  ],
  // GemClass 3
  [
    'Amber',
    'Amethyst',
    'Chrysoberyl',
    'Coral',
    // Garnet is a variable gem
    [
      'Red Garnet',
      'Brown-Green Garnet'
    ],
    'Jade',
    'Jet',
    // Pearl is a variable gem
    [
      'White Pearl',
      'White Pearl',
      'Golden Pearl',
      'Pink Pearl',
      'Pink Pearl',
      'Silver Pearl'
    ],
    // Ruddy Spinel is a variable gem
    [
      'Red Spinel',
      'Red-Brown Spinel',
      'Deep Green Spinel'
    ],
    'Tourmaline'
  ],
  // GemClass 3
  [
    'Alexandrite',
    'Aquamarine',
    'Violet Garnet',
    'Black Pearl',
    'Deep Blue Spinel',
    'Golden Yellow Topaz'
  ],
  // GemClass 4
  [
    'Emerald',
    // Opal is a variable gem
    [
      'White Opal',
      'Black Opal',
      'Fire Opal'
    ],
    'Blue Sapphire',
    // Corundum is a variable gem
    [
      'Fiery Yellow Corundum',
      'Rich Purple Corundum'
    ],
     // Star Sapphire is a variable gem
    [
      'Blue Star Sapphire',
      'Black Star Sapphire'
    ],
    'Star Ruby'
  ],
  // GemClass 5
  [
    'Alexandrite',
    'Clearest Bright Green Emerald',
    'Jacinth',
    'Jadeite'
  ]
]

export default JSONGems
