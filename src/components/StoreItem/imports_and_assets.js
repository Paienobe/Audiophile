// earphone images
import earphoneImageMobile from '../../assets/category-earphones/mobile/image-yx1-earphones.jpg'
import earphoneImageTablet from '../../assets/category-earphones/tablet/image-yx1-earphones.jpg'
import earphoneImageDesktop from '../../assets/category-earphones/desktop/image-yx1-earphones.jpg'
// CATEGORY IMAGES
// headphone images
import headphoneImageOneMobile from '../../assets/category-headphones/mobile/image-xx59.jpg'
import headphoneImageOneTablet from '../../assets/category-headphones/tablet/image-xx59.jpg'
import headphoneImageOneDesktop from '../../assets/category-headphones/desktop/image-xx59.jpg'
import headphoneImageTwoMobile from '../../assets/category-headphones/mobile/image-xx99-mark-one.jpg'
import headphoneImageTwoTablet from '../../assets/category-headphones/tablet/image-xx99-mark-one.jpg'
import headphoneImageTwoDesktop from '../../assets/category-headphones/desktop/image-xx99-mark-one.jpg'
import headphoneImageThreeMobile from '../../assets/category-headphones/mobile/image-xx99-mark-two.jpg'
import headphoneImageThreeTablet from '../../assets/category-headphones/tablet/image-xx99-mark-two.jpg'
import headphoneImageThreeDesktop from '../../assets/category-headphones/desktop/image-xx99-mark-two.jpg'

// speaker images
import speakerImageOneMobile from '../../assets/category-speakers/mobile/image-zx7.jpg'
import speakerImageOneTablet from '../../assets/category-speakers/tablet/image-zx7.jpg'
import speakerImageOneDesktop from '../../assets/category-speakers/desktop/image-zx7.jpg'
import speakerImageTwoMobile from '../../assets/category-speakers/mobile/image-zx9.jpg'
import speakerImageTwoTablet from '../../assets/category-speakers/tablet/image-zx9.jpg'
import speakerImageTwoDesktop from '../../assets/category-speakers/desktop/image-zx9.jpg'
// END OR CATEGORY IMAGES

// REAL PRODUCT IMAGES

// headphones
import xx59HeadphonesMobile from '../../assets/product-xx59-headphones/mobile/image-product.jpg'
import xx59HeadphonesTablet from '../../assets/product-xx59-headphones/tablet/image-product.jpg'
import xx59HeadphonesDesktop from '../../assets/product-xx59-headphones/desktop/image-product.jpg'
import xx99M1Mobile from '../../assets/product-xx99-mark-one-headphones/mobile/image-product.jpg'
import xx99M1Tablet from '../../assets/product-xx99-mark-one-headphones/tablet/image-product.jpg'
import xx99M1Desktop from '../../assets/product-xx99-mark-one-headphones/desktop/image-product.jpg'
import xx99M2Mobile from '../../assets/product-xx99-mark-two-headphones/mobile/image-product.jpg'
import xx99M2Tablet from '../../assets/product-xx99-mark-two-headphones/tablet/image-product.jpg'
import xx99M2Desktop from '../../assets/product-xx99-mark-two-headphones/desktop/image-product.jpg'

// speakers
import zx7SpeakerMobile from '../../assets/product-zx7-speaker/mobile/image-product.jpg'
import zx7SpeakerTablet from '../../assets/product-zx7-speaker/tablet/image-product.jpg'
import zx7SpeakerDesktop from '../../assets/product-zx7-speaker/desktop/image-product.jpg'
import zx9SpeakerMobile from '../../assets/product-zx9-speaker/mobile/image-product.jpg'
import zx9SpeakerTablet from '../../assets/product-zx9-speaker/tablet/image-product.jpg'
import zx9SpeakerDesktop from '../../assets/product-zx9-speaker/desktop/image-product.jpg'

// earphones
import yx1EarphonesMobile from '../../assets/product-yx1-earphones/mobile/image-product.jpg'
import yx1EarphonesTablet from '../../assets/product-yx1-earphones/tablet/image-product.jpg'
import yx1EarphonesDesktop from '../../assets/product-yx1-earphones/desktop/image-product.jpg'

export const categoryImages = {
  yx1_earphones_pictures: [
    earphoneImageMobile,
    earphoneImageTablet,
    earphoneImageDesktop,
  ],
  xx59_headphones_pictures: [
    headphoneImageOneMobile,
    headphoneImageOneTablet,
    headphoneImageOneDesktop,
  ],
  xx99_mark_one_headphones_pictures: [
    headphoneImageTwoMobile,
    headphoneImageTwoTablet,
    headphoneImageTwoDesktop,
  ],
  xx99_mark_two_headphones_pictures: [
    headphoneImageThreeMobile,
    headphoneImageThreeTablet,
    headphoneImageThreeDesktop,
  ],
  zx7_speaker_pictures: [
    speakerImageOneMobile,
    speakerImageOneTablet,
    speakerImageOneDesktop,
  ],
  zx9_speaker_pictures: [
    speakerImageTwoMobile,
    speakerImageTwoTablet,
    speakerImageTwoDesktop,
  ],
}

export const actualProductImage = {
  yx1_earphones_pictures: [
    yx1EarphonesMobile,
    yx1EarphonesTablet,
    yx1EarphonesDesktop,
  ],
  xx59_headphones_pictures: [
    xx59HeadphonesMobile,
    xx59HeadphonesTablet,
    xx59HeadphonesDesktop,
  ],
  xx99_mark_one_headphones_pictures: [
    xx99M1Mobile,
    xx99M1Tablet,
    xx99M1Desktop,
  ],
  xx99_mark_two_headphones_pictures: [
    xx99M2Mobile,
    xx99M2Tablet,
    xx99M2Desktop,
  ],
  zx7_speaker_pictures: [zx7SpeakerMobile, zx7SpeakerTablet, zx7SpeakerDesktop],
  zx9_speaker_pictures: [zx9SpeakerMobile, zx9SpeakerTablet, zx7SpeakerDesktop],
}

/* The above objects hold images needed for each type of product. Each product has a key and the value of that key is an array that holds the required images. Theres 3 images in each array. One for mobile, tablet and desktop. Above there's a function gotten from global context to "getCorrectImageForScreenSize", this takes in 3 images as parameters and returns one depending on the width of the users screen size.
  
  To use these images provided, i call the function in src of an image tag and insert the images need from a specific key.
  */
