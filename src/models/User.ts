import { UserI } from '@/interface/model'
import { INVALID_NUMBER } from '@/constant'

class User implements UserI {
  CreatedAt: string;
  DeletedAt: string;
  ID: number;
  UpdatedAt: string;
  name: string;
  role: number;
  token: string;

  constructor (CreatedAt = '', DeletedAt = '', ID: number = INVALID_NUMBER, UpdatedAt = '',
    name = '', role: number = INVALID_NUMBER, token = '') {
    this.CreatedAt = CreatedAt
    this.DeletedAt = DeletedAt
    this.ID = ID
    this.UpdatedAt = UpdatedAt
    this.name = name
    this.role = role
    this.token = token
  }
}

export default User
