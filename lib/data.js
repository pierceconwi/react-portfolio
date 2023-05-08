import fs from 'fs';
import path from 'path';

// Get filepath to data directory based on cwd ("Current Working Directory") and append the Data folder's name to the file path so it may be accessed later
const dataDir = path.join(process.cwd(), "data");

// Return names and IDs for all JSON objects in array, sorted by Name property
export async function getProjects() {
    // Get filepath to JSON file
    const filePath = path.join(dataDir, "projects.json");
    // Load JSON file components
    const jsonString = fs.readFileSync(filePath, 'utf8');
    // Convert string from file into JSON array object
    const jsonObj = JSON.parse(jsonString);
    return jsonObj.map(item => {
        return {
            id: item.id.toString(),
            name: item.name,
            description: item.description,
            screenshot: item.screenshot,
            livelink: item.livelink
        }
    });
}



// Return all IDs for all objects in JSON projects list
export default async function getAllProjectIds() {
    // Get filepath to JSON file
    const filePath = path.join(dataDir, "projects.json");
    // Load JSON file components
    const jsonString = fs.readFileSync(filePath, 'utf8');
    // Convert string from file into JSON array object
    const jsonObj = JSON.parse(jsonString);
    // Use map() on array to extract the ID properties into a new array of object values
    return jsonObj.map(item => {
        return {
            params: {
                id: item.id.toString()
            }
        }
    });
}