
# 🖼️ Convert Images to WebP 🎉

This project helps you convert images in your project folder to **WebP** format using [imagemin](https://github.com/imagemin/imagemin) and [imagemin-webp](https://github.com/imagemin/imagemin-webp).

**WebP** is an open-source image format developed by Google that offers better compression and performance for websites.  
Learn more: [https://developers.google.com/speed/webp](https://developers.google.com/speed/webp/)

---

## ⚙️ How It Works

### 1. 📦 Install Dependencies

Install the required packages using npm:

```bash
npm install imagemin imagemin-webp @types/imagemin @types/imagemin-webp
```

---

### 2. 🛠️ Create Script File

Create a file named `imagemin.mjs` in the root of your project and add the following code:

```js
import imagemin from "imagemin";
import imageminWebp from "imagemin-webp";

await imagemin(["public/assets/images/*.{jpg,png,jpeg}"], {
  destination: "public/assets/images/build",
  plugins: [
    imageminWebp({
      quality: 50,
    }),
  ],
});
```

---

### 3. 📜 Update `package.json` Scripts

In your `package.json`, add:

```json
"scripts": {
  "images": "node imagemin.mjs"
}
```

---

### 4. 🚀 Run the Script

```bash
npm run images
```

All images from `public/assets/images/` will be converted to WebP format and saved in:

📁 `public/assets/images/build`

---

## ✅ Result

- Converts all `.jpg`, `.jpeg`, and `.png` images to `.webp`
- Optimized images are stored in a separate `/build` folder
- Original images remain untouched

---

## 💡 Why WebP?

- Smaller file sizes for faster load times
- Better image quality at lower sizes
- Supported by most modern browsers

---

## 📝 Notes

- Make sure you are using Node.js 14 or higher.
- The output directory must exist or will be created automatically.

