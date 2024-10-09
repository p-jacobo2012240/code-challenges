/**
 * 
Exercise 24:
Create a function to which we pass an array of file names
and it returns an array with those same files, but if there is a
duplicate it must be numbered with a (number of repetitions)
as operating systems do.

Examples:
renamingFiles(["name", "lastname", "name", "name"]);

Returns:
[ 'name', 'lastname', 'name(1)', 'name(2)' ] 

 */

const renamingFiles = (files) => {
    const INITIAL_INDEX = 0;

    const renamedFiles = files.map((file, idx) => {

        const filteredFiles = files
            .slice(INITIAL_INDEX, idx)  // [], [], [ 'name' ], [ 'name', 'name' ] applying sliced
            .filter((originalFile) => originalFile == file);  // [ 'name', 'name', 'name' ], [ 'lastname' ],  [ 'name', 'name', 'name' ] without slice per each iteration.
            
        if(filteredFiles.length == 0) {
            return file;
        }
        
        return `${file}(${filteredFiles.length})`;
    });

    return renamedFiles;
}

//test cases
console.log(renamingFiles(["name", "lastname", "name", "name"]));