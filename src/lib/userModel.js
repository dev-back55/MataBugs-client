import { generateRange } from './util';

import avatar from './avatar.png';
import avatar2 from './avatar2.png';
import avatar3 from './avatar3.png';
import avatar4 from './avatar4.png';

export const defaultUsers = [
  {
    id: 2,
    nickname: "thor",
    status: "oro",
    ranking: 130173,
    avatar: avatar,
  },
  {
    id: 5,
    nickname: "piolin",
    status: "bronce",
    ranking: 814893,
    avatar: avatar2,
  },
  {
    id: 8,
    nickname: "caperucita",
    status: "plata",
    ranking: 428894,
    avatar: avatar3,
  },
  {
    id: 21,
    nickname: "hai jabwbsp",
    status: "plata",
    ranking: 829806,
    avatar: avatar3,
  },
  {
    id: 19,
    nickname: "ñhm pcjpemc",
    status: "bronce",
    ranking: 868855,
    avatar: avatar4,
  },
]

export const listOfUsers = generateRange(0, 9).map(index => {
  return defaultUsers[index < 5 ? index : index % defaultUsers.length];
});