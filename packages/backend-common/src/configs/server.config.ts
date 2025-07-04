
const serverConfig = {
    CLOUDINARY_CLOUD_NAME:process.env.CLOUDINARY_CLOUD_NAME,
    CLOUDINARY_API_KEY:process.env.CLOUDINARY_API_KEY,
    CLOUDINARY_API_SECRET:process.env.CLOUDINARY_API_SECRET,
    MIME_TYPES: process.env.MIME_TYPES ? process.env.MIME_TYPES.split(',') : ["image/jpeg", "image/png", "image/gif", "image/jpg", "video/mp4"],
    IMAGE_SIZE: process.env.IMAGE_SIZE ? parseInt(process.env.IMAGE_SIZE)*1024*1024 : 5 * 1024 * 1024, // Default to 5MB if not set
    VIDEO_SIZE: process.env.VIDEO_SIZE ? parseInt(process.env.VIDEO_SIZE)*1024*1024 : 100 * 1024 * 1024 // Default to 100MB if not set

}

export default serverConfig;