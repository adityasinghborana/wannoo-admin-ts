import {
    
    UploadBackgroundImage
  } from '@/services/api_helper'
  import { useState } from 'react'
  import { getTourDetails } from '@/services/api_helper'
  import Cookies from 'js-cookie'
  
  import { toast } from 'react-toastify'
  export type Continent = {
    id: number
    name: string
  }
  export type Country = {
    CountryId: number
    name: string
  }
  
  export type City = {
    id: number
    CityName: string
    countryId: number
  }
  export interface TourDetail {
  countryId?: number;
  continent?: string;
  countryname?: string;
  cityid?: number;
  cityname?: string;
  tourName?: string;
  duration?: string;
  cityTourTypeId?: string;
  cityTourType?: string;
  vendoruid?: string;
  tourDescription?: string;
  tourInclusion?: string;
  tourShortDescription?: string;
  importantInformation?: string;
  itenararyDescription?: string;
  usefulInformation?: string;
  amount?: string;
  startTime?: string;
  googleMapUrl?: string;
  faqs?: { question: string; answer: string }[];
  image?: string; // For imagepath
  tourImages?:string[];
  imagePath?: string; // For imagepaths
}
  
  function Edittourcontroller () {
    const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

    
    
    const getUid = () => {
      return Cookies.get('uid') || ''
    }
   const getTourDetail = async (tourId: number): Promise<TourDetail | null> => {
    try {
      const res = await getTourDetails(tourId);
      if (res) {
        return res; // Return the tour details
      } else {
        toast.error('No tour details found');
        return null;
      }
    } catch (error) {
      toast.error(`Failed to fetch tour details: ${error || 'Unknown error'}`);
      return null;
    }
  };
  
   
  
    const handleUpload = async (files: File[]) => {
      if (files.length === 0) return
  
      const formData = new FormData()
      files.forEach(file => {
        formData.append('images', file)
      })
      // assuming single image
  
      try {
        const response = await UploadBackgroundImage(formData)
  
        if (response?.files[0]?.path) {
          toast.success('Image uploaded successfully')
          setSelectedImages(response.files.map((f: { path: string }) => f.path))
  
          console.log(
            'Uploaded Image Paths:',
            response.files.map((f: { path: string }) => f.path)
          )
          // You can use the path for preview or storing
        } else {
          toast.error('Failed to upload image')
        }
      } catch (error) {
        console.error('Upload Error:', error)
        toast.error('Upload failed')
      }
    }
  
    const handleImageSelect = async (file: File | null) => {
      if (!file) return
  
      try {
        const formData = new FormData()
        formData.append('images', file)
  
        const response = await UploadBackgroundImage(formData)
  
        if (response?.files[0].path) {
          setSelectedImage(response?.files[0].path)
          console.log(response?.files[0].path) // Save path returned by the server
          toast.success('Image uploaded successfully')
        } else {
          toast.error('Failed to upload image')
        }
      } catch (error) {
        toast.error('Upload error')
        console.error('Image upload error:', error)
      }
    }
    return {
      handleImageSelect,
      selectedImage,
      handleUpload,
      selectedImages,
      getUid,
      getTourDetail,
      setSelectedImage,
      setSelectedImages
     
    }
  }
  
  export default Edittourcontroller
  