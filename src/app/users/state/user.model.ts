import {guid} from "@datorama/akita";

export type User = {
  id: string
  name: string
  active: boolean
}

export const createUser = (name: string): User => ({id: guid(), name, active: false})
