# Upload Images With Node.js And Express To The Cloud Using Cloudinary

This project demonstrates how to upload images from a Node.js application using Express framework and store them in the cloud using Cloudinary.

## Prerequisites

Before running the project, make sure you have the following installed:

- Node.js
- Express
- Multer
- Cloudinary SDK

You'll also need to create an account on [Cloudinary](https://cloudinary.com/) to obtain API credentials.

## Installation

1. Clone this repository to your local machine:

```bash
git clone https://github.com/tuanhungdev1/Upload-images-Node.js-Express-Cloudinary.git
```

2. Navigate into the project directory:

```bash
cd upload-images-node-express-cloudinary
```

3. Install dependencies:

```bash
npm install
```

4. Create a `.env` file in the root directory of the project and add the following environment variables:

```
CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET=your_cloudinary_api_secret
```

Replace `your_cloudinary_cloud_name`, `your_cloudinary_api_key`, and `your_cloudinary_api_secret` with your actual Cloudinary credentials.

## Usage

1. Start the server:

```bash
npm start
```

2. Open your web browser and navigate to `http://localhost:8080`.

3. You should see a form where you can upload images.

4. Choose an image file and click the "Upload" button.

5. After the upload is successful, the server will respond with a "Done" message.

6. You can check your Cloudinary dashboard to see the uploaded images.

## Credits

This project is inspired by various tutorials and documentation from the following sources:

- [Express.js](https://expressjs.com/)
- [Multer](https://www.npmjs.com/package/multer)
- [Cloudinary](https://cloudinary.com/documentation)

Thank you!
