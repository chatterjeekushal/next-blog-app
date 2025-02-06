
import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const UplordOnCloudinary = async (LocalFilePath: string) => {
    try {
        const response = await cloudinary.uploader.upload(LocalFilePath, {
            resource_type: "auto"
        });
        console.log("File uploaded on Cloudinary:", response.url);
        return response;
    } catch {
        // Remove the locally saved temporary file as the upload operation failed.
        fs.unlinkSync(LocalFilePath);
        return null;
    }
};
