import type { Partition } from './Partition'

export interface Disk {
  name: string
  model: string
  size_in_bytes: number
  partitions: Partition[]
}
