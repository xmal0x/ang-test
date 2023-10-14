import {guid} from "@datorama/akita";

export type User = {
  id: string
  name: string
  active: boolean
}

export const createUser = (name: string, active: boolean): User => ({id: guid(), name, active})
