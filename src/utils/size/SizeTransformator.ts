export class SizeTransformator {
  protected totalSizeInBytes: number

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
