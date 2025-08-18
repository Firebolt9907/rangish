class ImageData {
    public jpgSrc = ""
    public webpSrc = ""
    public englishDescription = "No description provided"
    public hindiDescription = "No description provided"
    public date = ""
    public location = "No location provided"
    public type = ""

    constructor(jpgSrc: string, webpSrc: string, englishDescription: string, hindiDescription: string, date: string, location: string, type: string) {
        this.jpgSrc = jpgSrc
        this.webpSrc = webpSrc
        this.englishDescription = englishDescription
        this.hindiDescription = hindiDescription
        this.date = date
        this.location = location
        this.type = type
    }


}

export default ImageData