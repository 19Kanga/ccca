import React from 'react'

import { A11y, Autoplay, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import images from '../../assets/ouagadougou.jpg'
import { NavLink } from 'react-router-dom';
import Annimated from '../../components/Annimated';
import { useParams } from 'react-router-dom'
// import BannerRepresentPays from '../../components/BannerRepresentPays'
// burkina
import image from '../../assets/1x/represent_burindi.jpg'
import burki2 from '../../assets/videos/burki2.jpg'
import burki3 from '../../assets/videos/burki3.jpg'
import burki4 from '../../assets/videos/burki4.jpg'

// Lybie
import Zouerate from '../../assets/videos/Zouerate.jpeg'
import Kaédi from '../../assets/videos/Kaédi.jpeg'
import Nouadhibou from '../../assets/videos/Nouadhibou.jpeg'
import Nouakchott from '../../assets/videos/Nouakchott.jpeg'

// Suaziland
import Lobamba from '../../assets/videos/Lobamba.webp'
import Siteki from '../../assets/videos/Siteki.jpeg'
import Manzini from '../../assets/videos/Manzini.jpeg'
import Mbabane from '../../assets/videos/Mbabane.jpeg'

// Namibie
import Rundu from '../../assets/videos/Rundu.jpeg'
import Swakopmund from '../../assets/videos/Swakopmund.jpeg'
import WalvisBay from '../../assets/videos/WalvisBay.jpeg'
import Windhoek from '../../assets/videos/Windhoek.jpg'


// Soudan
import Khartoum from '../../assets/videos/Khartoum.avif'
import ElObeid from '../../assets/videos/ElObeid.jpeg'
import PortSoudan from '../../assets/videos/PortSoudan.jpeg'
import Nyala from '../../assets/videos/Nyala.jpeg'

// Mauritanie
import Sebha from '../../assets/videos/Sebha.jpeg'
import Misrata from '../../assets/videos/Misrata.jpeg'
import Benghazi from '../../assets/videos/Benghazi.webp'
import Tripoli from '../../assets/videos/Tripoli.jpeg'

// Maroc
import Rabat from '../../assets/videos/Rabat.jpeg'
import Tanger from '../../assets/videos/Tanger.jpg'
import Casablanca from '../../assets/videos/Casablanca.jpeg'
import Marrakech from '../../assets/videos/Marrakech.jpeg'

// Ègypte
import Louxor from '../../assets/videos/Louxor.jpeg'
import Alexandrie from '../../assets/videos/Alexandrie.webp'
import Assouan from '../../assets/videos/Assouan.jpg'
import LeCaire from '../../assets/videos/LeCaire.jpeg'

// Ghana
import Takoradi from '../../assets/videos/Takoradi.jpeg'
import Accra from '../../assets/videos/Accra.jpg'
import Tamale from '../../assets/videos/Tamale.jpeg'
import Kumasi from '../../assets/videos/Kumasi.jpg'

// mozambique
import HassiMessaoud from '../../assets/videos/HassiMessaoud.jpg'
import Constantine from '../../assets/videos/Constantine.jpeg'
import Alger from '../../assets/videos/Alger.jpg'
import Oran from '../../assets/videos/Oran.jpg'

// mozambique
import Pemba from '../../assets/videos/Pemba.jpeg'
import Nampula from '../../assets/videos/Nampula.jpg'
import Beira from '../../assets/videos/Beira.jpg'
import Maputo from '../../assets/videos/Maputo.jpeg'

// République Centrafricaine
import Bossangoa from '../../assets/videos/Bossangoa.jpg'
import Bambari from '../../assets/videos/Bambari.jpeg'
import Bangui from '../../assets/videos/Bangui.jpg'
import Berbérati from '../../assets/videos/Berbérati.jpg'


// Maurice
import PortLouis from '../../assets/videos/PortLouis.jpeg'
import QuatreBornes from '../../assets/videos/QuatreBornes.jpg'
import Mahébourg from '../../assets/videos/Mahébourg.jpeg'
import Curepipe from '../../assets/videos/Curepipe.jpeg'

// Gambie
import Brikama from '../../assets/videos/Brikama.webp'
import Farafenni from '../../assets/videos/Farafenni.webp'
import Serrekunda from '../../assets/videos/Serrekunda.jpg'
import Banjul from '../../assets/videos/Banjul.jpg'

// Malawi
import Lilongwe from '../../assets/videos/Lilongwe.jpg'
import Mzuzu from '../../assets/videos/Mzuzu.jpeg'
import Blantyre from '../../assets/videos/Blantyre.jpeg'
import Zomba from '../../assets/videos/Zomba.jpeg'


// Guinée-Bissau
import Bissau from '../../assets/videos/Bissau.jpg'
import Bafatá from '../../assets/videos/Bafatá.jpeg'
import Gabú from '../../assets/videos/Gabú.jpeg'
import Bolama from '../../assets/videos/Bolama.jpg'

// Djibouti
import AliSabieh from '../../assets/videos/AliSabieh.jpeg'
import Obock from '../../assets/videos/Obock.jpeg'
import Djiboutiville from '../../assets/videos/Djiboutiville.jpeg'
import Tadjourah from '../../assets/videos/Tadjourah.jpg'

// Zambie
import Ndola from '../../assets/videos/Ndola.jpeg'
import Kitwe from '../../assets/videos/Kitwe.jpeg'
import Livingstone from '../../assets/videos/Livingstone.jpeg'
import Lusaka from '../../assets/videos/Lusaka.jpeg'

// Libéria
import Harper from '../../assets/videos/Harper.jpeg'
import Ganta from '../../assets/videos/Ganta.webp'
import Buchanan from '../../assets/videos/Buchanan.jpeg'
import Monrovia from '../../assets/videos/Monrovia.jpeg'

// Guinée
import Bamako from '../../assets/videos/bamako.jpeg'
import Ségou from '../../assets/videos/Ségou.jpg'
import Kayes from '../../assets/videos/Kayes.jpeg'
import Mopti from '../../assets/videos/Mopti.jpeg'

// Mali
import Conakry from '../../assets/videos/conakry.jpg'
import Kankan from '../../assets/videos/Kankan.jpeg'
import Boké from '../../assets/videos/Boké.jpeg'
import Labé from '../../assets/videos/Labé.jpeg'


// Cap-vert
import Praia from '../../assets/videos/Praia.jpg'
import Mindelo from '../../assets/videos/Mindelo.jpeg'
import Espargos from '../../assets/videos/Espargos.jpeg'
import SãoFilipe from '../../assets/videos/SãoFilipe.jpg'
// cmr
import cmr1 from '../../assets/videos/Douala.png'
import cmr2 from '../../assets/videos/yde.png'
import cmr3 from '../../assets/videos/Bafoussam.png'
import cmr4 from '../../assets/videos/bamenda.jpg'
// Angola
import Benguela from '../../assets/videos/Benguela.jpg'
import Soyo from '../../assets/videos/Soyo.jpeg'
import Lubango from '../../assets/videos/Lubango.jpeg'
import Luanda from '../../assets/videos/Luanda.jpeg'

// l'Ouganda
import Gulu from '../../assets/videos/Douala.png'
import Mbarara from '../../assets/videos/yde.png'
import Entebbe from '../../assets/videos/Bafoussam.png'
import Kampala from '../../assets/videos/bamenda.jpg'

// Kenya
import Mombasa from '../../assets/videos/Mombasa.jpeg'
import Eldoret from '../../assets/videos/Eldoret.jpeg'
import Nairobi from '../../assets/videos/Nairobi.jpeg'
import Kisumu from '../../assets/videos/Kisumu.jpeg'

// Guinée équatoriale
import Malabo from '../../assets/videos/Malabo.jpg'
import Ebebiyín from '../../assets/videos/Ebebiyín.jpg'
import Bata from '../../assets/videos/Bata.webp'
import Mongomo from '../../assets/videos/Mongomo.jpg'
// civ
import civ1 from '../../assets/videos/Abidjan.jpg'
import civ2 from '../../assets/videos/Bouake.jpg'
import civ3 from '../../assets/videos/Bouake.jpg'
import civ4 from '../../assets/videos/Yamoussoukro.jpg'
// nigeria
import nige1 from '../../assets/videos/Abidjan.jpg'
import nige2 from '../../assets/videos/Bouake.jpg'
import nige3 from '../../assets/videos/Bouake.jpg'
import nige4 from '../../assets/videos/Yamoussoukro.jpg'
//madagascar
import madag1 from '../../assets/videos/mad-antanavario.jpg'
import madag2 from '../../assets/videos/mad-toamasina-1.png'
import madag3 from '../../assets/videos/mad-Majunga.jpg'
import madag4 from '../../assets/videos/mad_Antsiranana.jpg'
//comore
import comore1 from '../../assets/videos/Grande_Comore.jpg'
import comore2 from '../../assets/videos/Moheli.jpg'
import comore3 from '../../assets/videos/Anjouan.jpg'
//Botswanna
import botswana1 from '../../assets/videos/Gaborone.jpg'
import botswana2 from '../../assets/videos/Francistown.jpg'
import botswana3 from '../../assets/videos/Maun.jpg'
//Leshoto
import lesotho1 from '../../assets/videos/Maseru.jpg'
import lesotho2 from '../../assets/videos/Francistown.jpg'
import lesotho3 from '../../assets/videos/Maun.jpg'

//canada
//colombie britanique
import colbrit1 from '../../assets/videos/vancouver.jpg'
import colbrit2 from '../../assets/videos/victoria.jpg'
import colbrit3 from '../../assets/videos/kelwona.jpg'
import colbrit4 from '../../assets/videos/prince_george.jpg'
//alberta
import albert1 from '../../assets/videos/calgary.jpg'
import albert2 from '../../assets/videos/edmonton.jpg'
import albert3 from '../../assets/videos/redd_deer.jpg'
import albert4 from '../../assets/videos/mc_murray.jpg'
//île duprince
import ileprince1 from '../../assets/videos/Charlottetown.jpg'
import ileprince2 from '../../assets/videos/Summerside.jpg'
import ileprince3 from '../../assets/videos/souris.jpg'
import ileprince4 from '../../assets/videos/Montague.jpg'
//Manitoba
import manito1 from '../../assets/videos/winnipeg.jpg'
import manito2 from '../../assets/videos/brandon.jpg'
import manito3 from '../../assets/videos/thompson.jpg'
import manito4 from '../../assets/videos/portage_prairie.jpg'
//Nouvelle Ecosse
import newecosse1 from '../../assets/videos/halifax.jpg'
import newecosse2 from '../../assets/videos/sydney.jpg'
import newecosse3 from '../../assets/videos/truro.jpg'
import newecosse4 from '../../assets/videos/Lunenburg.jpg'
//Quebec
import quebec1 from '../../assets/videos/Montreal.jpg'
import quebec2 from '../../assets/videos/quebec.jpg'
import quebec3 from '../../assets/videos/Sherbrooke.jpg'
import quebec4 from '../../assets/videos/Trois-Rivières.jpg'
//Saskatchewan
import saskat1 from '../../assets/videos/Saskatoon.jpg'
import saskat2 from '../../assets/videos/Regina.jpg'
import saskat3 from '../../assets/videos/PrinceAlbert.jpg'
import saskat4 from '../../assets/videos/Moose Jaw.jpg'
//terreneuve
import terreneuve1 from '../../assets/videos/st_johns.jpg'
import terreneuve2 from '../../assets/videos/Corner_Brook.jpg'
import terreneuve3 from '../../assets/videos/Labrador City.jpg'
import terreneuve4 from '../../assets/videos/Happy_Valley-Goose Bay.jpg'

// Burundi
import Gitega from '../../assets/videos/Gitega.jpeg'
import Rumonge from '../../assets/videos/Rumonge.jpeg'
import Bujumbura from '../../assets/videos/Bujumbura.jpeg'
import Ngozi from '../../assets/videos/Ngozi.jpg'


// congo
import Pointe from '../../assets/videos/Pointe.jpeg'
import Brazzaville from '../../assets/videos/Brazzaville.jpg'
import Owando from '../../assets/videos/Owando.jpeg'
import Dolisie from '../../assets/videos/Dolisie.jpeg'
import congorep from '../../assets/videos/congorep.png'
import logorep from'../../assets/videos/logorep.png'

// tchad
import Abéché from '../../assets/videos/Abéché.jpg'
import Sarh from '../../assets/videos/Sarh.jpeg'
import Moundou from '../../assets/videos/Moundou.jpeg'
import NDjaména from '../../assets/videos/NDjaména.jpg'


// Gabon
import Lambaréné from '../../assets/videos/Lambaréné.jpg'
import Franceville from '../../assets/videos/Franceville.jpg'
import PortGentil from '../../assets/videos/PortGentil.jpg'
import Libreville from '../../assets/videos/libreville.jpg'
import { useTranslation } from 'react-i18next';


// Sao Tomé-et-Principe
import Trindade from '../../assets/videos/Trindade.jpeg'
import SaoTomé from '../../assets/videos/SaoTomé.jpg'
import SantoAntónio from '../../assets/videos/SantoAntónio.jpg'
import Guadalupe from '../../assets/videos/Guadalupe.jpg'

export default function BureauxAfrique() {
    const { region,zone,nation } = useParams()
    const { t } = useTranslation();
  const data = [
    {
      nation: t('Afrique'),
      infoNation: [
        {
          titre: 'Afrique Centrale',
          pays: [
            {
              nom: t('Cameroun'),
              detail: {
                  profile: '',
                  responsable: '',
                  descrip: [
                      t('descrip1'),
                      t('descrip2')
                  ],
                  avantage: [{
                      descrip: [t('advdescript1')],
                      ville: [
                          {
                              image: cmr1,
                              nom: 'Douala',
                              descrip: t('DescripDla'),
                              link: ''
                          },
                          {
                              image: cmr2,
                              nom: 'Yaounde',
                              descrip: t('DescripYnde'),
                              link: ''
                          },
                          {
                              image: cmr3,
                              nom: 'Garoua',
                              descrip: t('DescripGra'),
                              link: ''
                          },
                          {
                              image: cmr4,
                              nom: 'Bamenda',
                              descrip: t('DescripBmda'),
                              link: ''
                          }
                      ]
                  }],
                  conclusion: t('ConcCmr')
              }
          },
          {
              nom: t('Angola'),
              detail: {
                  profile: '',
                  responsable: '',
                  descrip: [
                      t('descripAngola1'),
                      t('descripAngola2')
                  ],
                  avantage: [{
                      descrip: [t('advdescriptAngola1')],
                      ville: [
                          {
                              image: Luanda,
                              nom: 'Luanda',
                              descrip: t('DescripLuanda'),
                              link: ''
                          },
                          {
                              image: Lubango,
                              nom: 'Lubango',
                              descrip: t('DescripLubango'),
                              link: ''
                          },
                          {
                              image: Soyo,
                              nom: 'Soyo',
                              descrip: t('DescripSoyo'),
                              link: ''
                          },
                          {
                              image: Benguela,
                              nom: 'Benguela',
                              descrip: t('DescripBenguela'),
                              link: ''
                          }
                      ]
                  }],
                  conclusion: t('ConcAngola')
              }
          },
          {
              nom: t('Congo'),
              detail: {
                  profile: '',
                  responsable: '',
                  descrip: [
                      t('descripCongo1'),
                      t('descripCongo2')
                  ],
                  avantage: [{
                      descrip: [t('advdescriptCongo1')],
                      ville: [
                          {
                              image: Brazzaville,
                              nom: 'Brazzaville',
                              descrip: t('DescripBrazzaville'),
                              link: ''
                          },
                          {
                              image: Pointe,
                              nom: 'Pointe-Noire',
                              descrip: t('DescripPointeNoire'),
                              link: ''
                          },
                          {
                              image: Owando,
                              nom: 'Owando',
                              descrip: t('DescripOwando'),
                              link: ''
                          },
                          {
                              image: Dolisie,
                              nom: 'Dolisie',
                              descrip: t('DescripDolisie'),
                              link: ''
                          }
                      ]
                  }],
                  conclusion: t('ConcCongo')
              }
          },
          {
            nom: 'Tchad',
            detail: {
                profile: "",
                responsable: '',
                descrip: [
                    t('descripTchad1'),
                    t('descripTchad2')
                ],
                avantage: [{
                    descrip: [t('advantageTchad')],
                    ville: [
                        {
                            image: NDjaména,
                            nom: 'N\'Djaména',
                            descrip: t('DescripNDjamena'),
                            link: ''
                        },
                        {
                            image: Moundou,
                            nom: 'Moundou',
                            descrip: t('DescripMoundou'),
                            link: ''
                        },
                        {
                            image: Sarh,
                            nom: 'Sarh',
                            descrip: t('DescripSarh'),
                            link: ''
                        },
                        {
                            image: Abéché,
                            nom: 'Abéché',
                            descrip: t('DescripAbeche'),
                            link: ''
                        }
                    ]
                }],
                conclusion: t('ConcTchad')
            }
        },
        {
          nom: 'Gabon',
          detail: {
              profile: "",
              responsable: '',
              descrip: [
                  t('descripGabon1'),
                  t('descripGabon2')
              ],
              avantage: [{
                  descrip: [t('advantageGabon')],
                  ville: [
                      {
                          image: Libreville,
                          nom: 'Libreville',
                          descrip: t('DescripLibreville'),
                          link: ''
                      },
                      {
                          image: PortGentil,
                          nom: 'Port-Gentil',
                          descrip: t('DescripPortGentil'),
                          link: ''
                      },
                      {
                          image: Franceville,
                          nom: 'Franceville',
                          descrip: t('DescripFranceville'),
                          link: ''
                      },
                      {
                          image: Lambaréné,
                          nom: 'Lambaréné',
                          descrip: t('DescripLambarene'),
                          link: ''
                      }
                  ]
              }],
              conclusion: t('ConcGabon')
          }
      },
      {
        nom: 'Sao Tomé-et-Principe',
        detail: {
            profile: "",
            responsable: '',
            descrip: [
                t('descripSaoTome1'),
                t('descripSaoTome2')
            ],
            avantage: [{
                descrip: [t('advantageSaoTome')],
                ville: [
                    {
                        image: SaoTomé,
                        nom: 'Sao Tomé',
                        descrip: t('DescripSaoTome'),
                        link: ''
                    },
                    {
                        image: SantoAntónio,
                        nom: 'Santo António',
                        descrip: t('DescripSantoAntonio'),
                        link: ''
                    },
                    {
                        image: Guadalupe,
                        nom: 'Guadalupe',
                        descrip: t('DescripGuadalupe'),
                        link: ''
                    },
                    {
                        image: Trindade,
                        nom: 'Trindade',
                        descrip: t('DescripTrindade'),
                        link: ''
                    }
                ]
            }],
            conclusion: t('ConcSaoTome')
        }
    },
    {
        nom: 'Guinée équatoriale',
        detail: {
            profile: "",
            responsable: '',
            descrip: [
                t('descripGuineaEq1'),
                t('descripGuineaEq2')
            ],
            avantage: [{
                descrip: [t('advantageGuineaEq')],
                ville: [
                    {
                        image: Malabo,
                        nom: 'Malabo',
                        descrip: t('DescripMalabo'),
                        link: ''
                    },
                    {
                        image: Bata,
                        nom: 'Bata',
                        descrip: t('DescripBata'),
                        link: ''
                    },
                    {
                        image: Ebebiyín,
                        nom: 'Ebebiyín',
                        descrip: t('DescripEbebiyin'),
                        link: ''
                    },
                    {
                        image: Mongomo,
                        nom: 'Mongomo',
                        descrip: t('DescripMongomo'),
                        link: ''
                    }
                ]
            }],
            conclusion: t('ConcGuineaEq')
        }
    },
        {
          nom: 'République Centrafricaine',
          detail: {
              profile: "",
              responsable: '',
              descrip: [
                  t('descripCentralAfricanRepublic1'),
                  t('descripCentralAfricanRepublic2')
              ],
              avantage: [{
                  descrip: [t('advantageCentralAfricanRepublic')],
                  ville: [
                      {
                          image: Bangui,
                          nom: 'Bangui',
                          descrip: t('DescripBangui'),
                          link: ''
                      },
                      {
                          image: Berbérati,
                          nom: 'Berbérati',
                          descrip: t('DescripBerberati'),
                          link: ''
                      },
                      {
                          image: Bambari,
                          nom: 'Bambari',
                          descrip: t('DescripBambari'),
                          link: ''
                      },
                      {
                          image: Bossangoa,
                          nom: 'Bossangoa',
                          descrip: t('DescripBossangoa'),
                          link: ''
                      }
                  ]
              }],
              conclusion: t('ConcCentralAfricanRepublic')
          }
      }
          ]
        },
        {
          titre: 'Afrique de l\'Ouest',
          pays: [
            {
              nom: 'Nigeria',
              detail: {
                  profile: "",
                  responsable: '',
                  descrip: [
                      t('descripNigeria1'),
                      t('descripNigeria2')
                  ],
                  avantage: [{
                      descrip: [t('advantageNigeria')],
                      ville: [
                          {
                              image: nige1,
                              nom: 'Lagos',
                              descrip: t('DescripLagos'),
                              link: ''
                          },
                          {
                              image: nige2,
                              nom: 'Abuja',
                              descrip: t('DescripAbuja'),
                              link: ''
                          },
                          {
                              image: nige3,
                              nom: 'Port Harcourt',
                              descrip: t('DescripPortHarcourt'),
                              link: ''
                          },
                          {
                              image: nige4,
                              nom: 'Kano',
                              descrip: t('DescripKano'),
                              link: ''
                          }
                      ]
                  }],
                  conclusion: t('ConcNigeria')
              }
          },
          {
              nom: 'Burkina Faso',
              detail: {
                  profile: "",
                  responsable: '',
                  descrip: [
                      t('descripBurkinaFaso1'),
                      t('descripBurkinaFaso2')
                  ],
                  avantage: [{
                      descrip: [t('advantageBurkinaFaso')],
                      ville: [
                          {
                              image: images,
                              nom: 'Ouagadougou',
                              descrip: t('DescripOuagadougou'),
                              link: ''
                          },
                          {
                              image: burki2,
                              nom: 'Bobo-Dioulasso',
                              descrip: t('DescripBoboDioulasso'),
                              link: ''
                          },
                          {
                              image: burki3,
                              nom: 'Koudougou',
                              descrip: t('DescripKoudougou'),
                              link: ''
                          },
                          {
                              image: burki4,
                              nom: 'Banfora',
                              descrip: t('DescripBanfora'),
                              link: ''
                          }
                      ]
                  }],
                  conclusion: t('ConcBurkinaFaso')
              }
          },
          {
              nom: 'Cap-vert',
              detail: {
                  profile: "",
                  responsable: '',
                  descrip: [
                      t('descripCapeVerde1'),
                      t('descripCapeVerde2')
                  ],
                  avantage: [{
                      descrip: [t('advantageCapeVerde')],
                      ville: [
                          {
                              image: Praia,
                              nom: 'Praia',
                              descrip: t('DescripPraia'),
                              link: ''
                          },
                          {
                              image: Mindelo,
                              nom: 'Mindelo',
                              descrip: t('DescripMindelo'),
                              link: ''
                          },
                          {
                              image: Espargos,
                              nom: 'Espargos',
                              descrip: t('DescripEspargos'),
                              link: ''
                          },
                          {
                              image: SãoFilipe,
                              nom: 'São Filipe',
                              descrip: t('DescripSaoFilipe'),
                              link: ''
                          }
                      ]
                  }],
                  conclusion: t('ConcCapeVerde')
              }
          },
          {
              nom: "Côte d'Ivoire",
              detail: {
                  profile: "",
                  responsable: '',
                  descrip: [
                      t('descripCoteDIvoire1'),
                      t('descripCoteDIvoire2')
                  ],
                  avantage: [{
                      descrip: [t('advantageCoteDIvoire')],
                      ville: [
                          {
                              image: civ1,
                              nom: 'Abidjan',
                              descrip: t('DescripAbidjan'),
                              link: ''
                          },
                          {
                              image: civ2,
                              nom: 'Bouake',
                              descrip: t('DescripBouake'),
                              link: ''
                          },
                          {
                              image: civ3,
                              nom: 'San Pedro',
                              descrip: t('DescripSanPedro'),
                              link: ''
                          },
                          {
                              image: civ4,
                              nom: 'Yamoussoukro',
                              descrip: t('DescripYamoussoukro'),
                              link: ''
                          }
                      ]
                  }],
                  conclusion: t('ConcCoteDIvoire')
              }
          },
          {
            nom: 'Gambie',
            detail: {
                profile: '',
                responsable: '',
                descrip: [
                    t('descripGambia1'),
                    t('descripGambia2')
                ],
                avantage: [{
                    descrip: [t('advantageGambia')],
                    ville: [
                        {
                            image: Banjul,
                            nom: 'Banjul',
                            descrip: t('DescripBanjul'),
                            link: ''
                        },
                        {
                            image: Serrekunda,
                            nom: 'Serrekunda',
                            descrip: t('DescripSerrekunda'),
                            link: ''
                        },
                        {
                            image: Brikama,
                            nom: 'Brikama',
                            descrip: t('DescripBrikama'),
                            link: ''
                        },
                        {
                            image: Farafenni,
                            nom: 'Farafenni',
                            descrip: t('DescripFarafenni'),
                            link: ''
                        }
                    ]
                }],
                conclusion: t('ConcGambia')
            }
        },
        {
            nom: 'Ghana',
            detail: {
                profile: '',
                responsable: '',
                descrip: [
                    t('descripGhana1'),
                    t('descripGhana2')
                ],
                avantage: [{
                    descrip: [t('advantageGhana')],
                    ville: [
                        {
                            image: Accra,
                            nom: 'Accra',
                            descrip: t('DescripAccra'),
                            link: ''
                        },
                        {
                            image: Kumasi,
                            nom: 'Kumasi',
                            descrip: t('DescripKumasi'),
                            link: ''
                        },
                        {
                            image: Tamale,
                            nom: 'Tamale',
                            descrip: t('DescripTamale'),
                            link: ''
                        },
                        {
                            image: Takoradi,
                            nom: 'Takoradi',
                            descrip: t('DescripTakoradi'),
                            link: ''
                        }
                    ]
                }],
                conclusion: t('ConcGhana')
            }
        },
        {
            nom: 'Guinée',
            detail: {
                profile: '',
                responsable: '',
                descrip: [
                    t('descripGuinea1'),
                    t('descripGuinea2')
                ],
                avantage: [{
                    descrip: [t('advantageGuinea')],
                    ville: [
                        {
                            image: Conakry,
                            nom: 'Conakry',
                            descrip: t('DescripConakry'),
                            link: ''
                        },
                        {
                            image: Kankan,
                            nom: 'Kankan',
                            descrip: t('DescripKankan'),
                            link: ''
                        },
                        {
                            image: Boké,
                            nom: 'Boké',
                            descrip: t('DescripBoke'),
                            link: ''
                        },
                        {
                            image: Labé,
                            nom: 'Labé',
                            descrip: t('DescripLabe'),
                            link: ''
                        }
                    ]
                }],
                conclusion: t('ConcGuinea')
            }
        },
        {
            nom: 'Guinée-Bissau',
            detail: {
                profile: '',
                responsable: '',
                descrip: [
                    t('descripGuineaBissau1'),
                    t('descripGuineaBissau2')
                ],
                avantage: [{
                    descrip: [t('advantageGuineaBissau')],
                    ville: [
                        {
                            image: Bissau,
                            nom: 'Bissau',
                            descrip: t('DescripBissau'),
                            link: ''
                        },
                        {
                            image: Bafatá,
                            nom: 'Bafatá',
                            descrip: t('DescripBafata'),
                            link: ''
                        },
                        {
                            image: Gabú,
                            nom: 'Gabú',
                            descrip: t('DescripGabu'),
                            link: ''
                        },
                        {
                            image: Bolama,
                            nom: 'Bolama',
                            descrip: t('DescripBolama'),
                            link: ''
                        }
                    ]
                }],
                conclusion: t('ConcGuineaBissau')
            }
        },
        {
          nom: 'Libéria',
          detail: {
              profile: '',
              responsable: '',
              descrip: [
                  t('descripLiberia1'),
                  t('descripLiberia2')
              ],
              avantage: [{
                  descrip: [t('advantageLiberia')],
                  ville: [
                      {
                          image: Monrovia,
                          nom: 'Monrovia',
                          descrip: t('DescripMonrovia'),
                          link: ''
                      },
                      {
                          image: Buchanan,
                          nom: 'Buchanan',
                          descrip: t('DescripBuchanan'),
                          link: ''
                      },
                      {
                          image: Ganta,
                          nom: 'Ganta',
                          descrip: t('DescripGanta'),
                          link: ''
                      },
                      {
                          image: Harper,
                          nom: 'Harper',
                          descrip: t('DescripHarper'),
                          link: ''
                      }
                  ]
              }],
              conclusion: t('ConcLiberia')
          }
      },
      {
          nom: 'Mali',
          detail: {
              profile: '',
              responsable: '',
              descrip: [
                  t('descripMali1'),
                  t('descripMali2')
              ],
              avantage: [{
                  descrip: [t('advantageMali')],
                  ville: [
                      {
                          image: Bamako,
                          nom: 'Bamako',
                          descrip: t('DescripBamako'),
                          link: ''
                      },
                      {
                          image: Kayes,
                          nom: 'Kayes',
                          descrip: t('DescripKayes'),
                          link: ''
                      },
                      {
                          image: Ségou,
                          nom: 'Ségou',
                          descrip: t('DescripSegou'),
                          link: ''
                      },
                      {
                          image: Mopti,
                          nom: 'Mopti',
                          descrip: t('DescripMopti'),
                          link: ''
                      }
                  ]
              }],
              conclusion: t('ConcMali')
          }
      }
          ]
        },
        {
          titre: 'Afrique de L\'est',
          pays: [
            {
              nom: 'Burundi',
              detail: {
                  profile: image,
                  responsable: '',
                  descrip: [
                      t('descripBurundi1'),
                      t('descripBurundi2')
                  ],
                  avantage: [{
                      descrip: [t('advantageBurundi')],
                      ville: [
                          { image: Gitega, nom: 'Gitega', descrip: t('DescripGitega'), link: '' },
                          { image: Bujumbura, nom: 'Bujumbura', descrip: t('DescripBujumbura'), link: '' },
                          { image: Rumonge, nom: 'Rumonge', descrip: t('DescripRumonge'), link: '' },
                          { image: Ngozi, nom: 'Ngozi', descrip: t('DescripNgozi'), link: '' }
                      ]
                }],
                represent: [
                  {
                    titre: 'Elvis HATUNGIMANA',
                    descrip: {
                      libel: 'Titulaire d\'une Licence en Administration Économique et Sociale à l\'Université du Lac Tanganyika en 2013',
                      list: [
                      ]
                    }
                  },
                  {
                    titre: 'Expérience professionnelle :',
                    descrip: {
                      libel: "Fort d'une expérience diversifiée dans le domaine commercial, Elvis HATUNGIMANA a occupé plusieurs postes de responsabilité dans des secteurs variés, où il a démontré son expertise en gestion des relations clients, stratégie commerciale et développement des affaires.Son parcours comprend également des fonctions de gestion commerciale dans le secteur des télécommunications, du commerce général et du transport sur le lac TANGANYIKA. Ses principales responsabilités ont inclus:",
                      list: [
                      ]
                    }
                  },
                  {
                    titre: 'Compétences clés: :',
                    descrip: {
                      libel: "",
                      list: [
                        {
                          key:'Gestion de la relation client (CRM)',
                          descrip:'Expertise dans l\'optimisation des relations clients et le développement des solutions CRM adaptées aux besoins de l\'entreprise.'
                        },
                        {
                          key: 'Commerce International',
                          descrip: 'Passion pour le développement des échanges commerciaux internationaux, avec une forte capacité à identifier et exploiter de nouvelles opportunités de marché.'
                        },
                        {
                          key: 'Leadership et Management',
                          descrip: ': Compétences éprouvées dans la gestion d\'équipes et la conduite de projets de grande envergure.'
                        }
                      ]
                    }
                  }
                ],
                conclusion: t('ConcBurundi')
              }
          },
          {
              nom: 'Kenya',
              detail: {
                  profile: '',
                  responsable: '',
                  descrip: [
                      t('descripKenya1'),
                      t('descripKenya2')
                  ],
                  avantage: [{
                      descrip: [t('advantageKenya')],
                      ville: [
                          { image: Mombasa, nom: 'Mombasa', descrip: t('DescripMombasa'), link: '' },
                          { image: Nairobi, nom: 'Nairobi', descrip: t('DescripNairobi'), link: '' },
                          { image: Eldoret, nom: 'Eldoret', descrip: t('DescripEldoret'), link: '' },
                          { image: Kisumu, nom: 'Kisumu', descrip: t('DescripKisumu'), link: '' }
                      ]
                  }],
                  conclusion: t('ConcKenya')
              }
          },
          {
              nom: 'Djibouti',
              detail: {
                  profile: '',
                  responsable: '',
                  descrip: [
                      t('descripDjibouti1'),
                      t('descripDjibouti2')
                  ],
                  avantage: [{
                      descrip: [t('advantageDjibouti')],
                      ville: [
                          { image: AliSabieh, nom: 'Ali Sabieh', descrip: t('DescripAliSabieh'), link: '' },
                          { image: Djiboutiville, nom: 'Djibouti-ville', descrip: t('DescripDjiboutiVille'), link: '' },
                          { image: Obock, nom: 'Obock', descrip: t('DescripObock'), link: '' },
                          { image: Tadjourah, nom: 'Tadjourah', descrip: t('DescripTadjourah'), link: '' }
                      ]
                  }],
                  conclusion: t('ConcDjibouti')
              }
          },
          {
              nom: 'Malawi',
              detail: {
                  profile: '',
                  responsable: '',
                  descrip: [
                      t('descripMalawi1'),
                      t('descripMalawi2')
                  ],
                  avantage: [{
                      descrip: [t('advantageMalawi')],
                      ville: [
                          { image: Lilongwe, nom: 'Lilongwe', descrip: t('DescripLilongwe'), link: '' },
                          { image: Blantyre, nom: 'Blantyre', descrip: t('DescripBlantyre'), link: '' },
                          { image: Mzuzu, nom: 'Mzuzu', descrip: t('DescripMzuzu'), link: '' },
                          { image: Zomba, nom: 'Zomba', descrip: t('DescripZomba'), link: '' }
                      ]
                  }],
                  conclusion: t('ConcMalawi')
              }
          },
          {
            nom: 'Maurice',
            detail: {
                profile: '',
                responsable: '',
                descrip: [
                    t('descripMaurice1'),
                    t('descripMaurice2')
                ],
                avantage: [{
                    descrip: [t('advantageMaurice')],
                    ville: [
                        { image: PortLouis, nom: 'Port-Louis', descrip: t('DescripPortLouis'), link: '' },
                        { image: Curepipe, nom: 'Curepipe', descrip: t('DescripCurepipe'), link: '' },
                        { image: Mahébourg, nom: 'Mahébourg', descrip: t('DescripMahebourg'), link: '' },
                        { image: QuatreBornes, nom: 'Quatre Bornes', descrip: t('DescripQuatreBornes'), link: '' }
                    ]
                }],
                conclusion: t('ConcMaurice')
            }
        },
        {
            nom: 'Mozambique',
            detail: {
                profile: '',
                responsable: '',
                descrip: [
                    t('descripMozambique1'),
                    t('descripMozambique2')
                ],
                avantage: [{
                    descrip: [t('advantageMozambique')],
                    ville: [
                        { image: Maputo, nom: 'Maputo', descrip: t('MaputoDescription'), link: '' },
                        { image: Beira, nom: 'Beira', descrip: t('BeiraDescription'), link: '' },
                        { image: Nampula, nom: 'Nampula', descrip: t('NampulaDescription'), link: '' },
                        { image: Pemba, nom: 'Pemba', descrip: t('PembaDescription'), link: '' }
                    ]
                }],
                conclusion: t('conclusionMozambique')
            }
        },
        {
            nom: 'Rwanda',
            detail: {
                profile: '',
                responsable: '',
                descrip: [
                    t('descripRwanda1'),
                    t('descripRwanda2')
                ],
                avantage: [{
                    descrip: [t('advantageRwanda')],
                    ville: [
                        { image: civ1, nom: 'Kigali', descrip: t('KigaliDescription'), link: '' },
                        { image: civ2, nom: 'Butare', descrip: t('ButareDescription'), link: '' },
                        { image: civ3, nom: 'Gisenyi', descrip: t('GisenyiDescription'), link: '' },
                        { image: civ4, nom: 'Huye', descrip: t('HuyeDescription'), link: '' }
                    ]
                }],
                conclusion: t('conclusionRwanda')
            }
        },
        {
            nom: 'Ouganda',
            detail: {
                profile: '',
                responsable: '',
                descrip: [
                    t('descripOuganda1'),
                    t('descripOuganda2')
                ],
                avantage: [{
                    descrip: [t('advantageOuganda')],
                    ville: [
                        { image: Kampala, nom: 'Kampala', descrip: t('KampalaDescription'), link: '' },
                        { image: Entebbe, nom: 'Entebbe', descrip: t('EntebbeDescription'), link: '' },
                        { image: Mbarara, nom: 'Mbarara', descrip: t('MbararaDescription'), link: '' },
                        { image: Gulu, nom: 'Gulu', descrip: t('GuluDescription'), link: '' }
                    ]
                }],
                conclusion: t('conclusionOuganda')
            }
        },
        {
          nom: 'Zambie',
          detail: {
            profile: '',
            responsable: '',
            descrip: [
              t('descripZambie1'),
              t('descripZambie2')
            ],
            avantage: [{
              descrip: [t('advantageZambie')],
              ville: [
                {
                  image: Lusaka,
                  nom: 'Lusaka',
                  descrip: t('LusakaDescription'),
                  link: ''
                },
                {
                  image: Livingstone,
                  nom: 'Livingstone',
                  descrip: t('LivingstoneDescription'),
                  link: ''
                },
                {
                  image: Kitwe,
                  nom: 'Kitwe',
                  descrip: t('KitweDescription'),
                  link: ''
                },
                {
                  image: Ndola,
                  nom: 'Ndola',
                  descrip: t('NdolaDescription'),
                  link: ''
                }
              ]
            }],
            conclusion: t('conclusionZambie')
          }
        }
          ],
        },
        {
          titre: 'Afrique du Nord',
          pays: [
            {
              nom: 'Algérie',
              detail: {
                profile: '',
                responsable: '',
                descrip: [
                  t('descripAlgerie1'),
                  t('descripAlgerie2')
                ],
                avantage: [{
                  descrip: [t('advantageAlgerie')],
                  ville: [
                    {
                      image: Oran,
                      nom: 'Oran',
                      descrip: t('OranDescription'),
                      link: ''
                    },
                    {
                      image: Alger,
                      nom: 'Alger',
                      descrip: t('AlgerDescription'),
                      link: ''
                    },
                    {
                      image: Constantine,
                      nom: 'Constantine',
                      descrip: t('ConstantineDescription'),
                      link: ''
                    },
                    {
                      image: HassiMessaoud,
                      nom: 'Hassi Messaoud',
                      descrip: t('HassiMessaoudDescription'),
                      link: ''
                    }
                  ]
                }],
                conclusion: t('conclusionAlgerie')
              }
            },
            {
              nom: 'Égypte',
              detail: {
                profile: '',
                responsable: '',
                descrip: [
                  t('descripEgypte1'),
                  t('descripEgypte2')
                ],
                avantage: [{
                  descrip: [t('advantageEgypte')],
                  ville: [
                    {
                      image: LeCaire,
                      nom: 'Le Caire',
                      descrip: t('LeCaireDescription'),
                      link: ''
                    },
                    {
                      image: Assouan,
                      nom: 'Assouan',
                      descrip: t('AssouanDescription'),
                      link: ''
                    },
                    {
                      image: Alexandrie,
                      nom: 'Alexandrie',
                      descrip: t('AlexandrieDescription'),
                      link: ''
                    },
                    {
                      image: Louxor,
                      nom: 'Louxor',
                      descrip: t('LouxorDescription'),
                      link: ''
                    }
                  ]
                }],
                conclusion: t('conclusionEgypte')
              }
            },
            {
              nom: 'Libye',
              detail: {
                profile: '',
                responsable: '',
                descrip: [
                  t('descripLibye1'),
                  t('descripLibye2')
                ],
                avantage: [{
                  descrip: [t('advantageLibye')],
                  ville: [
                    {
                      image: Tripoli,
                      nom: 'Tripoli',
                      descrip: t('TripoliDescription'),
                      link: ''
                    },
                    {
                      image: Benghazi,
                      nom: 'Benghazi',
                      descrip: t('BenghaziDescription'),
                      link: ''
                    },
                    {
                      image: Misrata,
                      nom: 'Misrata',
                      descrip: t('MisrataDescription'),
                      link: ''
                    },
                    {
                      image: Sebha,
                      nom: 'Sebha',
                      descrip: t('SebhaDescription'),
                      link: ''
                    }
                  ]
                }],
                conclusion: t('conclusionLibye')
              }
            },
            {
              nom: 'Maroc',
              detail: {
                profile: '',
                responsable: '',
                descrip: [
                  t('descripMaroc1'),
                  t('descripMaroc2')
                ],
                avantage: [{
                  descrip: [t('advantageMaroc')],
                  ville: [
                    {
                      image: Rabat,
                      nom: 'Rabat',
                      descrip: t('RabatDescription'),
                      link: ''
                    },
                    {
                      image: Casablanca,
                      nom: 'Casablanca',
                      descrip: t('CasablancaDescription'),
                      link: ''
                    },
                    {
                      image: Tanger,
                      nom: 'Tanger',
                      descrip: t('TangerDescription'),
                      link: ''
                    },
                    {
                      image: Marrakech,
                      nom: 'Marrakech',
                      descrip: t('MarrakechDescription'),
                      link: ''
                    }
                  ]
                }],
                conclusion: t('conclusionMaroc')
              }
            },
            {
              nom: 'Mauritanie',
              detail: {
                profile: '',
                responsable: '',
                descrip: [
                  t('descripMauritanie1'),
                  t('descripMauritanie2')
                ],
                avantage: [{
                  descrip: [t('advantageMauritanie')],
                  ville: [
                    {
                      image: Nouakchott,
                      nom: 'Nouakchott',
                      descrip: t('NouakchottDescription'),
                      link: ''
                    },
                    {
                      image: Nouadhibou,
                      nom: 'Nouadhibou',
                      descrip: t('NouadhibouDescription'),
                      link: ''
                    },
                    {
                      image: Zouerate,
                      nom: 'Zouerate',
                      descrip: t('ZouerateDescription'),
                      link: ''
                    },
                    {
                      image: Kaédi,
                      nom: 'Kaédi',
                      descrip: t('KaediDescription'),
                      link: ''
                    }
                  ]
                }],
                conclusion: t('conclusionMauritanie')
              }
            },
            {
              nom: 'Soudan',
              detail: {
                profile: '',
                responsable: '',
                descrip: [
                  t('descripSoudan1'),
                  t('descripSoudan2')
                ],
                avantage: [{
                  descrip: [t('advantageSoudan')],
                  ville: [
                    {
                      image: Khartoum,
                      nom: 'Khartoum',
                      descrip: t('KhartoumDescription'),
                      link: ''
                    },
                    {
                      image: PortSoudan,
                      nom: 'Port-Soudan',
                      descrip: t('PortSoudanDescription'),
                      link: ''
                    },
                    {
                      image: ElObeid,
                      nom: 'El-Obeid',
                      descrip: t('ElObeidDescription'),
                      link: ''
                    },
                    {
                      image: Nyala,
                      nom: 'Nyala',
                      descrip: t('NyalaDescription'),
                      link: ''
                    }
                  ]
                }],
                conclusion: t('conclusionSoudan')
              }
            },
            
          ]
        },
        {
          titre: 'Afrique Australe',
          pays: [
            {
              nom: 'Botswana',
              detail: {
                profile: '',
                responsable: '',
                descrip: [
                  t('descripBotswana1'),
                  t('descripBotswana2')
                ],
                avantage: [{
                  descrip: [t('advantageBotswana')],
                  ville: [
                    {
                      image: botswana1,
                      nom: 'Gaborone',
                      descrip: t('GaboroneDescription'),
                      link: ''
                    },
                    {
                      image: botswana2,
                      nom: 'Francistown',
                      descrip: t('FrancistownDescription'),
                      link: ''
                    },
                    {
                      image: botswana3,
                      nom: 'Maun',
                      descrip: t('MaunDescription'),
                      link: ''
                    }
                  ]
                }],
                conclusion: t('conclusionBotswana')
              }
            },
            {
              nom: 'Lesotho',
              detail: {
                profile: '',
                responsable: '',
                descrip: [
                  t('descripLesotho1'),
                  t('descripLesotho2')
                ],
                avantage: [{
                  descrip: [t('advantageLesotho')],
                  ville: [
                    {
                      image: lesotho1,
                      nom: 'Maseru',
                      descrip: t('MaseruDescription'),
                      link: ''
                    },
                    {
                      image: lesotho2,
                      nom: 'Teyateyaneng',
                      descrip: t('TeyateyanengDescription'),
                      link: ''
                    },
                    {
                      image: lesotho3,
                      nom: 'Leribe',
                      descrip: t('LeribeDescription'),
                      link: ''
                    }
                  ]
                }],
                conclusion: t('conclusionLesotho')
              }
            },
            {
              nom: 'Namibie',
              detail: {
                profile: '',
                responsable: '',
                descrip: [
                  t('descripNamibie1'),
                  t('descripNamibie2')
                ],
                avantage: [{
                  descrip: [t('advantageNamibie')],
                  ville: [
                    {
                      image: Windhoek,
                      nom: 'Windhoek',
                      descrip: t('WindhoekDescription'),
                      link: ''
                    },
                    {
                      image: WalvisBay,
                      nom: 'Walvis Bay',
                      descrip: t('WalvisBayDescription'),
                      link: ''
                    },
                    {
                      image: Swakopmund,
                      nom: 'Swakopmund',
                      descrip: t('SwakopmundDescription'),
                      link: ''
                    },
                    {
                      image: Rundu,
                      nom: 'Rundu',
                      descrip: t('RunduDescription'),
                      link: ''
                    }
                  ]
                }],
                conclusion: t('conclusionNamibie')
              }
            },
            {
              nom: 'Suaziland',
              detail: {
                profile: '',
                responsable: '',
                descrip: [
                  t('descripSuaziland1'),
                  t('descripSuaziland2')
                ],
                avantage: [{
                  descrip: [t('advantageSuaziland')],
                  ville: [
                    {
                      image: Mbabane,
                      nom: 'Mbabane',
                      descrip: t('MbabaneDescription'),
                      link: ''
                    },
                    {
                      image: Manzini,
                      nom: 'Manzini',
                      descrip: t('ManziniDescription'),
                      link: ''
                    },
                    {
                      image: Siteki,
                      nom: 'Siteki',
                      descrip: t('SitekiDescription'),
                      link: ''
                    },
                    {
                      image: Lobamba,
                      nom: 'Lobamba',
                      descrip: t('LobambaDescription'),
                      link: ''
                    }
                  ]
                }],
                conclusion: t('conclusionSuaziland')
              }
            },
            {
              nom: 'Afrique du Sud',
              detail: {
                profile: '',
                responsable: '',
                descrip: [
                  t('descripAfriqueDuSud1'),
                  t('descripAfriqueDuSud2')
                ],
                avantage: [{
                  descrip: [t('advantageAfriqueDuSud')],
                  ville: [
                    {
                      image: images,
                      nom: 'Johannesburg',
                      descrip: t('JohannesburgDescription'),
                      link: ''
                    },
                    {
                      image: images,
                      nom: 'Durban',
                      descrip: t('DurbanDescription'),
                      link: ''
                    },
                    {
                      image: images,
                      nom: 'Cape Town',
                      descrip: t('CapeTownDescription'),
                      link: ''
                    },
                    {
                      image: images,
                      nom: 'Pretoria',
                      descrip: t('PretoriaDescription'),
                      link: ''
                    }
                  ]
                }],
                conclusion: t('conclusionAfriqueDuSud')
              }
            }
          ]
        },
        {
          titre: 'Océan Indien',
          pays: [
            {
              nom: 'Comore',
              detail: {
                profile: '',
                responsable: '',
                descrip: [
                  t('descripComore1'),
                  t('descripComore2')
                ],
                avantage: [{
                  descrip: [t('advantageComore')],
                  ville: [
                    {
                      image: comore1,
                      nom: 'Grande Comore (Ngazidja)',
                      descrip: t('GrandeComoreDescription'),
                      link: ''
                    },
                    {
                      image: comore2,
                      nom: 'Mohéli (Mwali)',
                      descrip: t('MoheliDescription'),
                      link: ''
                    },
                    {
                      image: comore3,
                      nom: 'Anjouan',
                      descrip: t('AnjouanDescription'),
                      link: ''
                    }
                  ]
                }],
                conclusion: t('conclusionComore')
              }
            },
            {
              nom: 'Madagascar',
              detail: {
                profile: '',
                responsable: '',
                descrip: [
                  t('descripMadagascar1'),
                  t('descripMadagascar2')
                ],
                avantage: [{
                  descrip: [t('advantageMadagascar')],
                  ville: [
                    {
                      image: madag1,
                      nom: 'Antananarivo',
                      descrip: t('AntananarivoDescription'),
                      link: ''
                    },
                    {
                      image: madag2,
                      nom: 'Toamasina',
                      descrip: t('ToamasinaDescription'),
                      link: ''
                    },
                    {
                      image: madag3,
                      nom: 'Mahajanga',
                      descrip: t('MahajangaDescription'),
                      link: ''
                    },
                    {
                      image: madag4,
                      nom: 'Antsiranana',
                      descrip: t('AntsirananaDescription'),
                      link: ''
                    }
                  ]
                }],
                conclusion: t('conclusionMadagascar')
              }
            }
          ]
        }
      ]
    },
    {
      nation: 'Canada',
      infoNation: [
        {
          titre: 'all',
          pays: [
            {
              nom: 'Colombie-Britannique',
              detail: {
                profile: '',
                responsable: '',
                descrip: [
                  t('descripColombieBritannique1'),
                  t('descripColombieBritannique2')
                ],
                avantage: [{
                  descrip: [t('advantageColombieBritannique')],
                  ville: [
                    {
                      image: colbrit1,
                      nom: 'Vancouver',
                      descrip: t('VancouverDescription'),
                      link: ''
                    },
                    {
                      image: colbrit2,
                      nom: 'Victoria',
                      descrip: t('VictoriaDescription'),
                      link: ''
                    },
                    {
                      image: colbrit3,
                      nom: 'Kelowna',
                      descrip: t('KelownaDescription'),
                      link: ''
                    },
                    {
                      image: colbrit4,
                      nom: 'Prince George',
                      descrip: t('PrinceGeorgeDescription'),
                      link: ''
                    }
                  ]
                }],
                conclusion: t('conclusionColombieBritannique')
              }
            },
            {
              nom: 'Alberta',
              detail: {
                profile: '',
                responsable: '',
                descrip: [
                  t('descripAlberta1'),
                  t('descripAlberta2')
                ],
                avantage: [{
                  descrip: [t('advantageAlberta')],
                  ville: [
                    {
                      image: albert1,
                      nom: 'Calgary',
                      descrip: t('CalgaryDescription'),
                      link: ''
                    },
                    {
                      image: albert2,
                      nom: 'Edmonton',
                      descrip: t('EdmontonDescription'),
                      link: ''
                    },
                    {
                      image: albert3,
                      nom: 'Red Deer',
                      descrip: t('RedDeerDescription'),
                      link: ''
                    },
                    {
                      image: albert4,
                      nom: 'Fort McMurray',
                      descrip: t('FortMcMurrayDescription'),
                      link: ''
                    }
                  ]
                }],
                conclusion: t('conclusionAlberta')
              }
            },
            {
              nom: 'Île-du-Prince-Édouard',
              detail: {
                profile: '',
                responsable: '',
                descrip: [
                  t('descripIleDuPrinceEdouard1'),
                  t('descripIleDuPrinceEdouard2')
                ],
                avantage: [{
                  descrip: [t('advantageIleDuPrinceEdouard')],
                  ville: [
                    {
                      image: ileprince1,
                      nom: 'Charlottetown',
                      descrip: t('CharlottetownDescription'),
                      link: ''
                    },
                    {
                      image: ileprince2,
                      nom: 'Summerside',
                      descrip: t('SummersideDescription'),
                      link: ''
                    },
                    {
                      image: ileprince3,
                      nom: 'Souris',
                      descrip: t('SourisDescription'),
                      link: ''
                    },
                    {
                      image: ileprince4,
                      nom: 'Montague',
                      descrip: t('MontagueDescription'),
                      link: ''
                    }
                  ]
                }],
                conclusion: t('conclusionIleDuPrinceEdouard')
              }
            },
            {
              nom: 'Manitoba',
              detail: {
                profile: '',
                responsable: '',
                descrip: [
                  t('descripManitoba1'),
                  t('descripManitoba2')
                ],
                avantage: [{
                  descrip: [t('advantageManitoba')],
                  ville: [
                    {
                      image: manito1,
                      nom: 'Winnipeg',
                      descrip: t('WinnipegDescription'),
                      link: ''
                    },
                    {
                      image: manito2,
                      nom: 'Brandon',
                      descrip: t('BrandonDescription'),
                      link: ''
                    },
                    {
                      image: manito3,
                      nom: 'Thompson',
                      descrip: t('ThompsonDescription'),
                      link: ''
                    },
                    {
                      image: manito4,
                      nom: 'Portage la Prairie',
                      descrip: t('PortageLaPrairieDescription'),
                      link: ''
                    }
                  ]
                }],
                conclusion: t('conclusionManitoba')
              }
            },
            {
              nom: t('nomNouvelleEcosse'),
              detail: {
                profile: '',
                responsable: '',
                descrip: [
                  t('descripNouvelleEcosse1'),
                  t('descripNouvelleEcosse2')
                ],
                avantage: [{
                  descrip: [t('advantageNouvelleEcosse')],
                  ville: [
                    {
                      image: newecosse1,
                      nom: 'Halifax',
                      descrip: t('HalifaxDescription'),
                      link: ''
                    },
                    {
                      image: newecosse2,
                      nom: 'Sydney',
                      descrip: t('SydneyDescription'),
                      link: ''
                    },
                    {
                      image: newecosse3,
                      nom: 'Truro',
                      descrip: t('TruroDescription'),
                      link: ''
                    },
                    {
                      image: newecosse4,
                      nom: 'Lunenburg',
                      descrip: t('LunenburgDescription'),
                      link: ''
                    }
                  ]
                }],
                conclusion: t('conclusionNouvelleEcosse')
              }
            },
            {
              nom: t('nomQuebec'),
              detail: {
                profile: '',
                responsable: '',
                descrip: [
                  t('descripQuebec1'),
                  t('descripQuebec2')
                ],
                avantage: [{
                  descrip: [t('advantageQuebec')],
                  ville: [
                    {
                      image: quebec1,
                      nom: 'Montréal',
                      descrip: t('MontrealDescription'),
                      link: ''
                    },
                    {
                      image: quebec2,
                      nom: 'Québec',
                      descrip: t('QuebecCityDescription'),
                      link: ''
                    },
                    {
                      image: quebec3,
                      nom: 'Sherbrooke',
                      descrip: t('SherbrookeDescription'),
                      link: ''
                    },
                    {
                      image: quebec4,
                      nom: 'Trois-Rivières',
                      descrip: t('TroisRivieresDescription'),
                      link: ''
                    }
                  ]
                }],
                conclusion: t('conclusionQuebec')
              }
            },
            {
              nom: t('nomSaskatchewan'),
              detail: {
                profile: '',
                responsable: '',
                descrip: [
                  t('descripSaskatchewan1'),
                  t('descripSaskatchewan2')
                ],
                avantage: [{
                  descrip: [t('advantageSaskatchewan')],
                  ville: [
                    {
                      image: saskat1,
                      nom: 'Saskatoon',
                      descrip: t('SaskatoonDescription'),
                      link: ''
                    },
                    {
                      image: saskat2,
                      nom: 'Regina',
                      descrip: t('ReginaDescription'),
                      link: ''
                    },
                    {
                      image: saskat3,
                      nom: 'Prince Albert',
                      descrip: t('PrinceAlbertDescription'),
                      link: ''
                    },
                    {
                      image: saskat4,
                      nom: 'Moose Jaw',
                      descrip: t('MooseJawDescription'),
                      link: ''
                    }
                  ]
                }],
                conclusion: t('conclusionSaskatchewan')
              }
            },
            {
              nom: t('nomTerreNeuveLabrador'),
              detail: {
                profile: '',
                responsable: '',
                descrip: [
                  t('descripTerreNeuveLabrador1'),
                  t('descripTerreNeuveLabrador2')
                ],
                avantage: [{
                  descrip: [t('advantageTerreNeuveLabrador')],
                  ville: [
                    {
                      image: terreneuve1,
                      nom: "St. John's",
                      descrip: t('StJohnsDescription'),
                      link: ''
                    },
                    {
                      image: terreneuve2,
                      nom: 'Corner Brook',
                      descrip: t('CornerBrookDescription'),
                      link: ''
                    },
                    {
                      image: terreneuve3,
                      nom: 'Labrador City',
                      descrip: t('LabradorCityDescription'),
                      link: ''
                    },
                    {
                      image: terreneuve4,
                      nom: 'Happy Valley-Goose Bay',
                      descrip: t('HappyValleyGooseBayDescription'),
                      link: ''
                    }
                  ]
                }],
                conclusion: t('conclusionTerreNeuveLabrador')
              }
            }
            
          ]
        },
      ]
    }
  ]
    const info = data?.find((x) => x.nation === t(nation))?.infoNation?.filter((x) => x.titre === t(zone))[0]?.pays.filter((y) => y.nom === t(region))
    // console.log(info)
    const SlideItems = ({x}) => {
        return (
            <NavLink className='w-full text-black'>
                <img src={x.image} className='w-full h-[190px]' alt='' />
                <div className='flex flex-col gap-2 p-4 px-2'>
                    <h1 className='text-center text-[1.1rem] text-primary font-bold'>{x.nom}</h1>
                    <p className='text-justify text-[.95rem] font-medium text-opacity-80'>{x.descrip}</p>
                </div>
            </NavLink>
            
        )
    }
    
    return (
      <div className='flex flex-col gap-5'>
        <h1 className='uppercase text-[1.6rem] max-md:text-[1.2rem] text-secondary font-bold'>Représentant de la CCCA-{region}</h1>
        <div className='max-md:flex max-md:flex-col gap-3'>
          {info[0]?.detail?.profile && <img className="float-left h-[300px]  max-2xl:h-[315px] max-xl:h-[330px] max-lg:h-[330px] object-cover object-top w-1/3 me-6 max-md:me-0 max-md:w-full" src={info[0]?.detail?.profile} alt="#" />}
          {info[0]?.detail?.represent?.map((x)=>
          <p className="flex flex-col gap-0 mb-4 last-of-type:mb-0">
              <span className='uppercase text-primary text-[1.1rem] font-bold'>{x?.titre}</span>
              <span className='text-[1.1rem]'>{x?.descrip?.libel}</span>
              <ul className='list-disc ps-5 flex flex-col gap-2'>
              {x?.descrip?.list?.map((y) =>
                <li className='text-[1.1rem]'><span className="text-secondary float-left me-3">{y?.key} :</span> {y?.descrip}</li>
                )}
              </ul>
          </p>
          )}
        </div>
        <div className='flex flex-col'>
          <h1 className='uppercase m-0 text-[1.6rem] max-md:text-[1.2rem] text-secondary font-bold'>Description du pays</h1>
        {(info[0]?.detail !== undefined && info[0]?.detail !== null) && <>
        <div className='text-[1.1rem] text-justify'>
                {info[0]?.detail?.descrip?.map((x)=>
                    <>
                    <p className='m-0'>{x}</p>
                    <br></br>
                    </>
                )}
        </div>
        {info[0]?.detail?.avantage?.length>0 &&
        <div>
            <h1 className='font-semibold text-center text-[1.6rem] mb-1'>Avantages</h1>
            <p className='text-[1.1rem]'>{info[0]?.detail?.avantage[0].descrip}</p>
                <div className='py-5'>
                    <div className='flex items-center gap-3'>
                        <Swiper
                            modules={[Scrollbar, A11y, Autoplay]}
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false,
                            }}
                            spaceBetween={15}
                            // slidesPerView={4}
                            breakpoints={{
                                300: {
                                    slidesPerView: 1
                                },
                                700: {
                                    slidesPerView: 2
                                },
                                1000: {
                                    slidesPerView: 3
                                }
                            }}
                        // effect='fade'
                        >
                            {info[0]?.detail?.avantage[0].ville?.map((y,index) =>
                                <SwiperSlide key={index} className=''>
                                    <SlideItems x={y} />
                                </SwiperSlide>
                            )}
                        </Swiper>
                    </div>
                </div>
                <span className='text-[1.1rem] text-justify'>{info[0]?.detail?.conclusion}</span>
        </div>
        }
        </>
        }
      </div>
      </div>
    )
}
