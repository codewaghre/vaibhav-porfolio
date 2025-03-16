export const downloadFile = (fileUrl, fileName) => {
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName; // Set the file name for the download
    document.body.appendChild(link);
    link.click(); // Trigger the download
    document.body.removeChild(link); // Clean up
};