# Convert images folder to webp 🎉
### Webp is an open source image standard created and maintained by Google. You can learn a lot about WebP at: https://developers.google.com/speed/webp/

# How this project work :
# install
npm install imagemin imagemin-webp @types/imagemin @types/imagemin-webp 

# create file imagemin.mjs on project level and add 


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

# in json file add 
"scripts":{
"images": "node imagemin.mjs"
}

#  npm run images 

it will convert all the images folder to new folder called build containe all images in webp .


