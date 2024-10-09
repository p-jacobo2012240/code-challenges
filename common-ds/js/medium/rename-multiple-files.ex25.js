/**
 * 
Exercise 24:
Create a function to which we pass an array of file names
and it returns an array with those same files, but if there is a
duplicate it must be numbered with a (number of repetitions)
as operating systems do.

Examples:
renameFiles(["firstname.jpg", "lastname.doc", "firstname.png", "firstname.png", "firstname.jpg", "firstname.jpg"]);

Returns:
[ 'firstname.jpg', 'lastname.doc', 'firstname.png', 'firstname(1).png


output:

[
  'firstname.jpg',
  'lastname.doc',
  'firstname.png',
  'firstname(1).png',
  'firstname(1).jpg',
  'firstname(2).jpg'
]
*
*/

const renameFiles = (files) => {
    const START_INDEX = 0;
    const FINAL_INDEX = 1;

    const renamedFiles = files.map((file, idx) => {

        const filteredFiles = files
            .slice(START_INDEX, idx)
            .filter((originalCurrentFile) => originalCurrentFile == file);
        
        if(filteredFiles.length == 0) {
            return file;
        }

        let splitedFile = file.split(".");
        return `${splitedFile[START_INDEX]}(${filteredFiles.length}).${splitedFile[FINAL_INDEX]}`;  
    });

    return renamedFiles;
}

console.log(renameFiles([
    "firstname.jpg", "lastname.doc", "firstname.png", 
    "firstname.png", "firstname.jpg", "firstname.jpg"
]));