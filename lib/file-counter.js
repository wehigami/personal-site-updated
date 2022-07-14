import fs from "fs";

let files = fs.readdirSync("../pages");
export function fileCounter() {
    return files;
}