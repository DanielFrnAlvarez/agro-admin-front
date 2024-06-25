import { User, UserRole } from "../types/userTypes";

export const mockDataTeam: User[] = [
  {
    id: 1,
    name: "Jon Snow",
    email: "jonsnow@gmail.com",
    phone: "(665)121-5454",
    access: UserRole.ADMIN,
  },
  {
    id: 2,
    name: "Cersei Lannister",
    email: "cerseilannister@gmail.com",
    phone: "(421)314-2288",
    access: UserRole.BASIC,
  },
  {
    id: 3,
    name: "Jaime Lannister",
    email: "jaimelannister@gmail.com",
    phone: "(422)982-6739",
    access: UserRole.USER,
  },
  {
    id: 4,
    name: "Anya Stark",
    email: "anyastark@gmail.com",
    phone: "(921)425-6742",
    access: UserRole.ADMIN,
  },
  {
    id: 5,
    name: "Daenerys Targaryen",
    email: "daenerystargaryen@gmail.com",
    phone: "(421)445-1189",
    access: UserRole.USER,
  },
  {
    id: 6,
    name: "Ever Melisandre",
    email: "evermelisandre@gmail.com",
    phone: "(232)545-6483",
    access: UserRole.BASIC,
  },
  {
    id: 7,
    name: "Ferrara Clifford",
    email: "ferraraclifford@gmail.com",
    phone: "(543)124-0123",
    access: UserRole.USER,
  },
  {
    id: 8,
    name: "Rossini Frances",
    email: "rossinifrances@gmail.com",
    phone: "(222)444-5555",
    access: UserRole.USER,
  },
  {
    id: 9,
    name: "Harvey Roxie",
    email: "harveyroxie@gmail.com",
    phone: "(444)555-6239",
    access: UserRole.ADMIN,
  },
];
