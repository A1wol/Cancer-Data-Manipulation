export class DataRow {
    radius = 0
    texture = 0
    perimeter = 0
    area = 0
    smoothness = 0
    compactness = 0
    concavity = 0
    concavePoints = 0
    symmetry = 0
    fractalDimension = 0
    decision = 0
    constructor(radius, texture, perimeter, area, smoothness, compactness, concavity, concavePoints, symmetry, decision) {
        this.radius = radius
        this.texture = texture
        this.perimeter = perimeter
        this.area = area
        this.smoothness = smoothness
        this.compactness = compactness
        this.concavity = concavity
        this.concavePoints = concavePoints
        this.symmetry = symmetry
        this.decision = decision
    }
}