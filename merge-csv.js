const fs = require("fs");
const path = require("path");
const csv = require("csv-parser");
const fastCsv = require("fast-csv");

const inputFolder = path.join(__dirname, "files");
const outputFile = path.join(__dirname, "combined.csv");

async function mergeCsvFiles() {
  const files = fs.readdirSync(inputFolder).filter((file) => file.endsWith(".csv"));

  if (files.length === 0) {
    console.error("No CSV files found in the folder.");
    return;
  }

  let isHeaderWritten = false;

  const writeStream = fs.createWriteStream(outputFile);

  for (const file of files) {
    const filePath = path.join(inputFolder, file);

    const readStream = fs.createReadStream(filePath).pipe(csv());
    const rows = [];

    for await (const row of readStream) {
      rows.push(row);
    }

  await new Promise((resolve, reject) => {
    fastCsv
      .write(rows, { headers: !isHeaderWritten })
      .on("finish", () => {
        console.log(`${file} merged successfully!`);
        resolve();
      })
      .on("error", reject)
      .pipe(writeStream, { end: false });
  });

    isHeaderWritten = true; // Write headers only once
  }

  writeStream.end();
  console.log(`All CSV files have been merged into ${outputFile}`);
}

mergeCsvFiles().catch(console.error);
