import fs from "fs";

export async function safeDeleteFile(filePath?: string) {
    if (filePath) {
        try {
            await fs.promises.unlink(filePath);
        } catch (error) {
            // Log error but don't throw
            console.error("Failed to delete file:", error);
        }
    }
}