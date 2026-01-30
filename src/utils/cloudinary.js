import { v2 as cloudinary } from "cloudinary"
import fs from "fs"

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, //dluj7wg9c
    api_key: process.env.CLOUDINARY_API_KEY,        
    api_secret: process.env.CLOUDINARY_API_SECRET // Click 'View API Keys' above to copy your API secret
});
console.log("Cloudinary ENV check:", {
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
})


const UploadOnCloudinary = async (localFilepath) => {
    try {
        if (!localFilepath) {
            console.log("File Not Find")
        }
        //upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localFilepath, {
            resource_type: "auto",
        })
        fs.unlinkSync(localFilepath)
        // upload the file successfully on cloudinary
        console.log("file is uploaded successfully on cloudinary", response.url);
        return response;
    } catch (error) {
        console.error("Cloudinary upload error:", error.message);

        if (localFilepath && fs.existsSync(localFilepath)) {
            fs.unlinkSync(localFilepath);
        }
        return null
    }   

}
export { UploadOnCloudinary }
