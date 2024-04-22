export interface Partition {
  name: string
  type_format: string
  size_in_bytes: number
  use: string
  mount_points: string[]
}
