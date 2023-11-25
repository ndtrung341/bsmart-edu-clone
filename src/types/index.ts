export type Mentor = {
   name: string,
   email: string,
   bio: string,
   avatarUrl: string
}

export enum Level {
   EASY = 1,
   NORMAL,
   HARD,
}

export type Course = {
   title: string,
   description: string,
   banner: string,
   category: string,
   level: Level | null,
   students: number,
   price: number,
   rating: number
}