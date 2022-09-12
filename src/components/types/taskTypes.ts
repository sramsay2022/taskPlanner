import { UserObject } from './objects'

export type Id = string

export type TaskDetailsObject = {
  id: Id
  name: string
  date: number
  
}

export type CreateUserObject = {
  email: string
}

export type UpdateTaskObject = {
  name: string
  date: number
  
}

export type CreateTaskObject = {
  name: string
  date: number
  
}
