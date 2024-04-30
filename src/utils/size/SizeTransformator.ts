export class SizeTransformator {
  protected totalSizeInBytes: number
  protected useInBytes: number

  constructor(totalSizeInBytes: number, useInBytes: number) {
    this.totalSizeInBytes = totalSizeInBytes
    this.useInBytes = useInBytes
  }

  public getUseInPercentage(): number {
    return Math.floor((this.useInBytes / this.totalSizeInBytes) * 100)
  }

  public getSizeInPercentage(): string {
    const usePercentage = this.getUseInPercentage()
    let number = Math.round(usePercentage)

    if (number < 10) {
      number = 10
    }

    return `${number}%`;
  }

  public static sizeWithStorageUnit(size: number): string {
    if (size < 1024) {
      return `${size} B`
    } else if (size < 1024 * 1024) {
      return `${(size / 1024).toFixed(2)} KB`
    } else if (size < 1024 * 1024 * 1024) {
      return `${(size / 1024 / 1024).toFixed(2)} MB`
    } else if (size < 1024 * 1024 * 1024 * 1024) {
      return `${(size / 1024 / 1024 / 1024).toFixed(2)} GB`
    } else if (size < 1024 * 1024 * 1024 * 1024 * 1024) {
      return `${(size / 1024 / 1024 / 1024 / 1024).toFixed(2)} TB`
    } else if (size < 1024 * 1024 * 1024 * 1024 * 1024 * 1024) {
      return `${(size / 1024 / 1024 / 1024 / 1024 / 1024).toFixed(2)} PB`
    } else if (size < 1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024) {
      return `${(size / 1024 / 1024 / 1024 / 1024 / 1024 / 1024).toFixed(2)} EB`
    } else if (size < 1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024) {
      return `${(size / 1024 / 1024 / 1024 / 1024 / 1024 / 1024 / 1024).toFixed(2)} ZB`
    } else {
      return `${(size / 1024 / 1024 / 1024 / 1024 / 1024 / 1024 / 1024 / 1024).toFixed(2)} YB`
    }
  }
}
