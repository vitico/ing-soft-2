// Parameters:
// contentType: The content type of your file. 
//              its like application/pdf or application/msword or image/jpeg or
//              image/png and so on
// base64Data: Its your actual base64 data
// fileName: Its the file name of the file which will be downloaded. 

export function downloadBase64File(base64Data: string, fileName: string) {
    const linkSource = base64Data;
    const downloadLink = document.createElement("a");
    downloadLink.href = linkSource;
    downloadLink.download = fileName;
    downloadLink.click();
    console.log("linkSource", linkSource);
}