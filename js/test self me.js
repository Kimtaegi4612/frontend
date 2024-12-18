fs.readFile(file1, (err, data1) => {
    console.log(file1, data1);
    fs.readFile(file2, (err, data2) => {
        console.log(file2, data2);
        fs.readFile(file3, (err, data3) => {
            console.log(file3, data3);
        });
    });
});
