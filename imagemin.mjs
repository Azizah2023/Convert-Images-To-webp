import imagemin from "imagemin";
import imageminwebp from "imagemin-webp";

 await imagemin(["public/assets/images/*.{jpg,png,jpeg}"], {
  destination: "public/assets/images/build",
  plugins: [
    imageminwebp({
      quality: 50,
    }),
  ],
});



