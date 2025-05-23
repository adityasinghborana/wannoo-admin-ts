/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-const */

import axiosInstance from "./loader.interceptor"

export async function getAllUsers(){
    try {
        let res = await axiosInstance.get('/users')
        return res?.data
    } catch (error) {
        throw error
    }
}

export async function GetAllCardDetails(){
  try {
      let res = await axiosInstance.get('/dashboarddata')
      return res?.data
  } catch (error) {
      throw error
  }
}

export async function GetChartData(date:any, type:any) {
  try {
    let res = await axiosInstance.post(`/${type === 'bookings' ? 'dashboardchartbooking': type === 'users' ? 'dashboardchartusers' : 'dashboardchartvendors' }`, date)
      return res?.data
  } catch (error) {
      throw error
  }
}

export async function deleteUser(id:number) {
    try {
        let res = await axiosInstance.post('/deleteuser',id)
        return res?.data
    } catch (error) {
        throw error
    }   
}

export async function getAllTours() {
    try {
        let res = await axiosInstance.get('/tours')
        return res?.data
    } catch (error) {
        throw error
    }   
}

export async function getTourDetails(id:any) {
    try {
        let res = await axiosInstance.get(`/tourdetails?id=${id}`)
        return res?.data
    } catch (error) {
        throw error
    }   
}

export async function getAboutUsDetails() {
    try {
        let res = await axiosInstance.get(`/Aboutus`)
        return res?.data
    } catch (error) {
        throw error
    }   
}

export async function updateAboutUsDetails(data:any) {
    try {
        let res = await axiosInstance.post(`/updateaboutdata`, data)
        return res?.data
    } catch (error) {
        throw error
    }   
}

export async function getHomePageData() {
    try {
        let res = await axiosInstance.get(`/homepage`)
    
        return res?.data
    } catch (error) {
        throw error
    }   
}

export async function getBackgroundImage() {
    try {
        let res = await axiosInstance.get(`/library`)
        return res?.data
    } catch (error) {
        throw error
    }   
}
export async function deleteBackgroundImage(path: string) {
    try {
        const res = await axiosInstance.delete(`/deletelibraryimage`, {
            data: { url: path } // Assuming the API expects the ID in the request body
        });
        return res?.data;
    } catch (error) {
        throw error;
    }   
}


// export async function UploadTourImage(image:any) {
//     try {
//         let res = await axiosInstance.post(`/upload`,image)
//         return res?.data
//     } catch (error) {
//         throw error
//     }   
// }

export async function UploadBackgroundImage(image:any) {
    try {
        let res = await axiosInstance.post(`/upload`,image)
        return res?.data
    } catch (error) {
        console.log(error)
        throw error
    }   
}

export async function getRayanaAPi() {
    try {
        let res = await axiosInstance.get(`/apikey`)
        return res?.data
    } catch (error) {
        throw error
    }   
}

export async function UpdateRayanaAPi(newKey:any) {
    try {
        let res = await axiosInstance.put(`/updateapikey`,newKey)
        return res?.data
    } catch (error) {
        throw error
    }   
}

export async function GetStripeApi() {
    try {
        let res = await axiosInstance.get(`/stripekey`)
        return res?.data
    } catch (error) {
        throw error
    }   
}

export async function UpdateStripeApi(newKey:any) {
    try {
        let res = await axiosInstance.put(`/updatestripekey`,newKey)
        return res?.data
    } catch (error) {
        throw error
    }   
}

export async function getEmail() {
    try {
        let res = await axiosInstance.get(`/email`)
        return res?.data
    } catch (error) {
        throw error
    }   
}
export async function updateEmail(dataToPost:any) {
    try {
        let res = await axiosInstance.patch(`/update-email`,dataToPost)
        return res?.data
    } catch (error) {
        throw error
    }   
}

export async function getAllVendors() {
    try {
        let res = await axiosInstance.get(`/allvendors`)
        return res?.data.data
    } catch (error) {
        throw error
    }   
}

export async function SignUpVendor( data:any ) {
    try {
        let res = await axiosInstance.post(`/signupvendor`,data)
        return res?.data
    } catch (error) {
        throw error
    }   
}

export async function getVendorDetail( data:any ) {
    try {
        let res = await axiosInstance.post(`/vendor`,{uid:data})
        return res?.data
    } catch (error) {
        throw error
    }   
}

export async function GetAllCities() {
    try {
        let res = await axiosInstance.get(`/cities`)
        return res?.data
    } catch (error) {
        throw error
    }   
}

export async function GetAllTourTypes() {
    try {
        let res = await axiosInstance.get(`/tourtypes`)
        return res?.data
    } catch (error) {
        throw error
    }   
}

export async function AddTourTypes(data:any) {
    try {
        let res = await axiosInstance.post(`/addtourtypes`, data)
        return res?.data
    } catch (error) {
        throw error
    }   
}

export async function UpdateTourTypes(id: string, data: any) {
  try {
      let res = await axiosInstance.put(`/updatetourtypes/${id}`, data);
      return res?.data;
  } catch (error) {
      throw error;
  }
}

export async function DeleteTourTypes(id: string) {
  try {
      let res = await axiosInstance.delete(`/deletetourtypes/${id}`);
      return res?.data;
  } catch (error) {
      throw error;
  }
}

export async function AddCity(data:any) {
    try {
        let res = await axiosInstance.post(`/addcity`, data)
        return res?.data
    } catch (error) {
        throw error
    }   
}

export async function GetAllImages() {
    try {
        let res = await axiosInstance.get(`/library`)
        return res?.data
    } catch (error) {
        throw error
    }   
}

export async function UpdateHomePageData(data:any) {
    try {
        let res = await axiosInstance.patch(`/updatedata`,data)
        return res?.data
    } catch (error) {
        throw error
    }   
}
export async function UpdateContactUsPageData(data:any) {
    try {
        let res = await axiosInstance.patch(`/updatecontactusdata`,data)
        return res?.data
    } catch (error) {
        throw error
    }   
}

export async function getContactUsPageData() {
    try {
        let res = await axiosInstance.get(`/contactusdata`)
    
        return res?.data
    } catch (error) {
        throw error
    }   
}
export async function getForms() {
    try {
        let res = await axiosInstance.get(`/forms`)
    
        return res?.data
    } catch (error) {
        throw error
    }   
}

export async function AddTour(tourData:any) {
    try {
      const response = await axiosInstance.post('/addtour', tourData);
      console.log(response.data)
      return response.data;
    } catch (error) {
        console.log(error);
      throw error;
    }
  }
  export async function editTour(tourData:any) {
    try {
      const response = await axiosInstance.patch('/edittour', tourData);
      console.log(response.data)
      return response.data;
    } catch (error) {
        console.log(error);
      throw error;
    }
  }

export async function GetAllBookings() {
    try {
      const response = await axiosInstance.get('/allbookings');
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  export async function GetUserBookings(id:any) { 
    try {
      const response = await axiosInstance.post('/userbookings',id);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
  
  export async function GetEvents() { 
    try {
      const response = await axiosInstance.get('/events');
      return response.data;
    } catch (error) {
      throw error;
    }
  }
  
  export async function GetEventByID(Id:any) { 
    try {
      const response = await axiosInstance.post('/event', Id);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
  
  export async function GetEventTypes() { 
    try {
      const response = await axiosInstance.get('/eventtypes');
      return response.data;
    } catch (error) {
      throw error;
    }
  }
  
  export async function addEvent(dataToPost:any) { 
    try {
      const response = await axiosInstance.post('/addevent', dataToPost);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
  
  export async function GetBookingDetail(id:number) { 
    console.log(id);
    try {
      const response = await axiosInstance.post('/bookingdetail', { id });
      return response.data;
    } catch (error) {
      throw error;
    }
  }
  export async function CheckIsVendor(id:string) { 
    try {
      const response = await axiosInstance.post('/vendor', {uid:id});
      return response.data;
    } catch (error) {
      throw error;
    }
  }
   
  export async function GetCoupons() { 
    try {
      const response = await axiosInstance.get('/coupons');
      return response.data;
    } catch (error) {
      throw error;
    }
  }
  export async function createCoupons(data:any) { 
    try {
      const response = await axiosInstance.post('/createcoupons',data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
  export async function deleteCoupon(data:any) { 
    try {
      const response = await axiosInstance.delete('/deletecoupon',{data:
        {id:data}
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }
  
  export async function deleteTour(id:any) { 
    try {
      const response = await axiosInstance.delete(`/deletetour?id=${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  export async function getUserDetails(id:any) { 
    try {
      const response = await axiosInstance.get(`/checkuser?uid=${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  export async function updateUserDetails(data:any) { 
    try {
      const response = await axiosInstance.put(`/updateuser`, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  export async function updateVendorDetails(data:any) { 
    try {
      const response = await axiosInstance.put(`/updatevendor`, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  export async function updateAvailability(data:any) { 
    try {
      const response = await axiosInstance.patch(`/updateavailability`, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
 

 
  export async function fetchContinent() { 
    try {
      const response = await axiosInstance.get(`/continents`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
  export async function fetchCountries(data:any) { 
    try {
      const response = await axiosInstance.get(`/countries?name=${data}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
  
  export async function fetchCities(data:any) { 
    try {
      const response = await axiosInstance.get(`/cities?countryName=${data}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
  
  export async function createCountry(data:any) { 
    try {
      const response = await axiosInstance.post(`/createcountry`, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
 
  export async function createCity(data:any) { 
    try {
      const response = await axiosInstance.put(`/addcity`, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  export async function createBlog(data:any) { 
    try {
      const response = await axiosInstance.post(`/addblog`, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }