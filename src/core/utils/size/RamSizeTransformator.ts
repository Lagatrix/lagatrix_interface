export class RamSizeTransformator {
  private totalSizeInBytes: number

  constructor(totalSizeInBytes: number) {
    this.totalSizeInBytes = totalSizeInBytes
  }

  public getUseInPercentage(useInBytes: number): number {
    return Math.floor((useInBytes / this.totalSizeInBytes) * 100)
  }

  public static sizeWithStorageUnit(size: number): string {
    if (size < 1024) {
      return `${size} B`
    } else if (size < 1024 * 1024) {
      return `${(size / 1024).toFixed(2)} KB`
    } else if (size < 1024 * 1024 * 1024) {
      return `${(size / 1024 / 1024).toFixed(2)} MB`
    } else {
      return `${(size / 1024 / 1024 / 1024).toFixed(2)} GB`
    }
  }
}
