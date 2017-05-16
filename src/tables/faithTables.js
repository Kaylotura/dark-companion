/**
 * Created by kaylo on 5/16/2017.
 */


const alignments = ['LG', 'NG', 'CG', 'LN', 'N', 'CN', 'LE', 'NE', 'CE']
const domains = [
// Could add in another object with Name, Spells, and Source? key-values.
  'Arcana',
  'Death',
  'Forge',
  'Grave',
  'Knowledge',
  'Life',
  'Light',
  'Nature',
  'Protection',
  'Tempest',
  'Trickery',
  'War'
]
const godsByAlignmentByDomain = {
// Could add in another object with Name, Link, and image? key-values.
  LG: {
    Arcana: 'Girru',
    Death: 'Shu',
    Forge: 'Moradin',
    Grave: 'Osiris',
    Knowledge: 'Tyr',
    Life: 'Ilmater',
    Light: 'Amaunator',
    Nature: 'Nobanion',
    Protection: 'Yondolla',
    Tempest: 'Bahamut',
    Trickery: 'Cyrrollalee',
    War: 'Torm'
  },
  NG: {
    Arcana: 'Mystra',
    Death: 'Naralis',
    Forge: 'Flandal',
    Grave: 'Segojan',
    Knowledge: 'Deneir',
    Life: 'Iallanis',
    Light: 'Lathander',
    Nature: 'Mielikki',
    Protection: 'Marthammor',
    Tempest: 'Isis',
    Trickery: 'Baravar',
    War: 'Enlil'
  },
  CG: {
    Arcana: 'Selune',
    Death: 'Eilistraee',
    Forge: 'Dugmaren',
    Grave: 'Nephthys',
    Knowledge: 'Angharradh',
    Life: 'Lliira',
    Light: 'Labelas',
    Nature: 'Lurue',
    Protection: 'Sune',
    Tempest: 'Stronmaus',
    Trickery: 'Tymora',
    War: 'Corellon'
  },
  LN: {
    Arcana: 'Azuth',
    Death: 'Jergal',
    Forge: 'Ptah',
    Grave: 'Kelemvor',
    Knowledge: 'Savras',
    Life: 'Helm',
    Light: 'Siamorphe',
    Nature: 'Ulutiu',
    Protection: 'Urogalan',
    Tempest: 'Marduk',
    Trickery: 'Hoar',
    War: 'Red Knight'
  },
  N: {
    Arcana: 'Thoth',
    Death: 'Herne',
    Forge: 'Gond',
    Grave: 'Dumathoin',
    Knowledge: 'Oghma',
    Life: 'Sheela',
    Light: 'Annam',
    Nature: 'Silvanus',
    Protection: 'Waukeen',
    Tempest: 'Kossuth',
    Trickery: 'Brandobaris',
    War: 'Ishtar'
  },
  CN: {
    Arcana: 'Kereska',
    Death: 'Ibrandul',
    Forge: 'Mystryl',
    Grave: 'Shevarash',
    Knowledge: 'Finder',
    Life: 'Eha',
    Light: 'Leira',
    Nature: 'Fenmarel',
    Protection: 'Uthgar',
    Tempest: 'Tempus',
    Trickery: 'Mask',
    War: 'Garagos'
  },
  LE: {
    Arcana: 'Tiamat',
    Death: 'Bhaal',
    Forge: 'Laduguer',
    Grave: 'Set',
    Knowledge: 'Asmodeus',
    Life: 'Loviatar',
    Light: 'Ilsensine',
    Nature: 'Sekolah',
    Protection: 'Kurtulmak',
    Tempest: 'Surtr',
    Trickery: 'Gargauth',
    War: 'Bane'
  },
  NE: {
    Arcana: 'Velsharoon',
    Death: 'Myrkul',
    Forge: 'Kalzareinad',
    Grave: 'Sebek',
    Knowledge: 'Memnor',
    Life: 'Kuraulyek',
    Light: 'The Faceless',
    Nature: 'Auril',
    Protection: 'Abbathor',
    Tempest: 'Karontor',
    Trickery: 'Shar',
    War: 'Ilneval'
  },
  CE: {
    Arcana: 'Sseth',
    Death: 'Cyric',
    Forge: 'Baphomet',
    Grave: 'Urdlen',
    Knowledge: 'Diirinka',
    Life: 'Blibdoolpoolp',
    Light: 'Tezca',
    Nature: 'Malar',
    Protection: 'Luthic',
    Tempest: 'Talos',
    Trickery: 'Lolth',
    War: 'Gruumsh'
  }
}
const faithTables =
  {
    alignments: alignments,
    domains: domains,
    godsByAlignmentByDomain: godsByAlignmentByDomain
  }

export default faithTables
