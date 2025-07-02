# Node.js CSV Merger

This Node.js project merges multiple CSV files from a specified folder into a single CSV file. The CSV files should have the same column names to be merged correctly.

## Prerequisites

- Node.js installed on your machine
- npm (Node Package Manager)

## Installation

1. Clone the repository or download the source code.
2. Navigate to the project directory.
3. Install the dependencies using npm:

```sh
npm install
```

## Usage

1. Create a `files` folder in the project root directory.
2. Place the CSV files you want to merge into the files folder.
3. Run the script to merge the CSV files:

```sh
node merge-csv.js
```

## Project Structure

```sh
nodejs-csv/
├── files/            # Folder containing the CSV files to be merged
├── combined.csv      # Output file for the merged CSV
├── merge-csv.js      # Script to merge CSV files
├── package.json      # Project configuration and dependencies
└── README.md         # Project documentation
``
```

## Dependencies

- [csv-parser](https://www.npmjs.com/package/csv-parser): A streaming CSV parser for Node.js.
- [fast-csv](https://www.npmjs.com/package/fast-csv): A library to parse and format CSVs.
- [fs](https://nodejs.org/api/fs.html): Node.js file system module.

## License

This project is licensed under the ISC License.

## Author

[Kurt Russelle Marmol](https://github.com/jkrmarmol)
