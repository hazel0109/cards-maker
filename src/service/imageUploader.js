class ImageUploader {
  static async upload(file) {
    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', 'rr38lfoe');
    const result = await fetch(
      'https://api.cloudinary.com/v1_1/dosiof8pi/image/upload',
      {
        method: 'POST',
        body: data,
      }
    );
    return await result.json();
  }
}

export default ImageUploader;
