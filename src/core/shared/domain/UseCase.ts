export interface UseCase {
  execute: (...params: any[]) => unknown
}
