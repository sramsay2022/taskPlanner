import { Id } from './taskTypes'

export interface TaskObject {
  id: Id
  name: string
  date: Date  
  urgent: Boolean
  notes: String
}

export interface UserObject {
  id: Id
  email: string
  name: string
}

