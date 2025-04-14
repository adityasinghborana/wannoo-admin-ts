import { fetchCities, fetchContinent, fetchCountries, UploadBackgroundImage } from '@/services/api_helper'
import {   useState } from 'react'
import Cookies from 'js-cookie'


import { toast } from 'react-toastify'
export type Continent={
  id:number,
  name:string,

}
export type Country ={
  CountryId:number,
  name:string,

}

export type City ={
  id:number,
  CityName:string,
  countryId:number

}

function Addtourcontroller() {

  

     const [selectedImage, setSelectedImage] = useState('')
     const [selectedImages, setSelectedImages] = useState<string[]>([])
     const [continents, setContinents] = useState<Continent[]>([])
     const [countries, setCountries] = useState<Country[]>([])
     const [cities, setCities] = useState<City[]>([])
     const [uid, setUid] = useState<string>('')
  const getContinents = async ()=>{

    try {
      const res = await fetchContinent();
      setContinents(res)  
    } catch (error) {
      toast.error(`Failed to fetch continents: ${error || 'Unknown error'}`)
    }
  }

  const getUid=async()=>{

    const vendorId= await Cookies.get('uid')
    setUid(vendorId||'')
  }

  const getCountries = async (name:string)=>{

    try {
      const res = await fetchCountries(name);
      setCountries(res);
   console.log(res)
    } catch (error) {
      toast.error(`Failed to fetch continents: ${error || 'Unknown error'}`)
    }
  }
  const getCities = async (countryName:string)=>{

    try {
      const res = await fetchCities(countryName);


      setCities(res);
   console.log(res)
    } catch (error) {
      toast.error(`Failed to fetch continents: ${error || 'Unknown error'}`)
    }
  }

     const handleUpload = async (files: File[]) => {
      if (files.length === 0) return
  
      const formData = new FormData()
      files.forEach((file) => {
        formData.append('images', file)
      })
     // assuming single image
  
      try {
        const response = await UploadBackgroundImage(formData)
  
        if (response?.files[0]?.path) {
          toast.success('Image uploaded successfully')
          setSelectedImages(response.files.map((f: { path: string }) => f.path))
      
          console.log('Uploaded Image Paths:', response.files.map((f: { path: string }) => f.path))
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
  return{
    handleImageSelect,
    selectedImage,
    handleUpload,
    selectedImages,
    continents,
    getContinents,
    getCountries,
    countries,
    cities,
    getCities,
    getUid,
    uid
   
  }
}

export default Addtourcontroller

