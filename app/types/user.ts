export interface User {
  id: number
  name: string
  age: number
  gender: 'Мужчина' | 'Женщина'
  city: string
  purpose: 'Отношения' | 'Дружба' | 'Общение'
  avatar: string
  description: string
  interests: string[]
  likedYou: boolean
}