// import React, { useState } from 'react';
// import axios from 'axios';

// const ImageUpload = () => {
//   const [image, setImage] = useState(null);
//   const [message, setMessage] = useState('');

//   const handleImageChange = (e) => {
//     setImage(e.target.files[0]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append('person_img', image);

//     try {
//       const response = await axios.post('http://localhost:5002/chart/creates', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//           Authorization: `Bearer 2dce55cfd5cf1570158b81e92297d1b209713`,
//           "User-Token": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJsbEBnbWFpbC5jb20iLCJpZCI6IjY3NmUzMTYzY2MyMzM3N2ViNjg0ZDNhOCIsImV4cCI6MTczNTg5NjQzM30.jKiFdR8h_gGguisZ1NaFFf9HdW0FCG1Jvq_c8aW2s2E',
//         },
//       });
//       setMessage('Image uploaded successfully!');
//     } catch (error) {
//       setMessage('Error uploading image.');
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input type="file" onChange={handleImageChange} />
//         <button type="submit">Upload Image</button>
//       </form>
//       {message && <p>{message}</p>}
//     </div>
//   );
// };

// export default ImageUpload;







// import React, { useState } from 'react';
// import axios from 'axios';

// const ImageUpload = () => {
//   const [image, setImage] = useState(null);
//   const [message, setMessage] = useState('');

//   const handleImageChange = (e) => {
//     setImage(e.target.files[0]); // Get the selected file
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!image) {
//       setMessage('Please select an image to upload.');
//       return;
//     }
  
//     const formData = new FormData();
//     formData.append("person_image",image)
//     formData.append('name', 'a');
//     formData.append('node_type', 'department');
//     formData.append('person', JSON.stringify({
//       name: 'a',
//       role: 'a',

//     }));

//     try {
//       const response = await axios.post('http://localhost:5002/chart/image', formData, {
//         headers: {
//           "Content-Type":'multipart/form-data',
//           'User-Token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJsbEBnbWFpbC5jb20iLCJpZCI6IjY3NmUzMTYzY2MyMzM3N2ViNjg0ZDNhOCIsImV4cCI6MTczNTkxMzU0MH0.XMFDrdGCSGSfL3R3tM3AtmArMe0YZrVUJs7jXG9yrLI",
//         },
//       });

//       console.log('Response:', response.data);
//       setMessage('Image uploaded successfully!');
//     } catch (error) {
//       console.error('Error uploading image:', error.response?.data || error.message);
//       setMessage('Error uploading image.');
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input type="file" onChange={handleImageChange} accept="image/*" />
//         <button type="submit">Upload Image</button>
//       </form>
//       {message && <p>{message}</p>}
//     </div>
//   );
// };

// export default ImageUpload;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const DisplayImage = ({ userId }) => {
//   const [imageUrl, setImageUrl] = useState("");
//   const [message, setMessage] = useState("");

//   useEffect(() => {
//     const fetchImage = async () => {
//       try {
//         // Fetch the response from the API
//         const response = await axios.get(`http://127.0.0.1:5001/chart/image/9a371bc4cd/a847322f65kishore.jpg`, {
//           headers: {
//             'Authorization':'Bearer 2dce55cfd5cf1570158b81e92297d1b209713',
//             'User-Token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJraXNob3JlQGdtYWlsLmNvbSIsImlkIjoiNjc3OGFmMGE1NDdlZjIxYWUyNjkxODljIiwiZXhwIjoxNzM2MTMzODQwfQ.jzQTjreQkmEXrNTL4D5GHLKqInktTo_o9krao7oEwAg',
//           },
//         });

//         console.log(response.data);
        
//         // Extract the image URL from the response
//         const personImage = response.data;
//         if (personImage) {
//           // Construct the full image URL (if necessary)
//           setImageUrl(personImage);
//         } else {
//           setMessage("Image not found.");
          
//         }
//       } catch (error) {
//         console.error("Error fetching image:", error.response?.data || error.message);
//         setMessage("Error loading image.");
//       }
//     };

//     // Trigger the fetch
//     fetchImage();
//   }, [userId]);

//   return (
//     <div>
//       {imageUrl ? (
//         <img src={imageUrl} alt="User Image" style={{ width: '300px', height: '300px' }} />
//       ) : (
//         <p>{message || "Loading image..."}</p>
//       )}
//     </div>
//   );
// };

// export default DisplayImage;








// import React, { useState } from 'react';
// import axios from 'axios';

// const ImageUpload = () => {
//   const [image, setImage] = useState(null);
//   const [message, setMessage] = useState('');

//   const handleImageChange = (e) => {
//     setImage(e.target.files[0]); // Get the selected file
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!image) {
//       setMessage('Please select an image to upload.');
//       return;
//     }
  
//     const formData = new FormData();
//     formData.append("person_image",image)
//     formData.append('name', 'a');
//     formData.append('node_type', 'department');
//     formData.append('person', JSON.stringify({
//       name: 'a',
//       role: 'a',

//     }));

//     try {
//       const response = await axios.post('http://localhost:5002/chart/image', formData, {
//         headers: {
//           "Content-Type":'multipart/form-data',
//           'User-Token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJraXNob3JlQGdtYWlsLmNvbSIsImlkIjoiNjc3OGFmMGE1NDdlZjIxYWUyNjkxODljIiwiZXhwIjoxNzM2MTMzODQwfQ.jzQTjreQkmEXrNTL4D5GHLKqInktTo_o9krao7oEwAg",
//         },
//       });

//       console.log('Response:', response.data);
//       setMessage('Image uploaded successfully!');
//     } catch (error) {
//       console.error('Error uploading image:', error.response?.data || error.message);
//       setMessage('Error uploading image.');
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input type="file" onChange={handleImageChange} accept="image/*" />
//         <button type="submit">Upload Image</button>
//       </form>
//       {message && <p>{message}</p>}
//     </div>
//   );
// };

// export default ImageUpload;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const DisplayImage = ({ userId }) => {
//   const [imageUrl, setImageUrl] = useState("");
//   const [message, setMessage] = useState("");

//   useEffect(() => {
//     const fetchImage = async () => {
//       try {
//         const response = await axios.get(`http://localhost:5002/chart/getimage/12938240/klizer-3.jpg.enc`);
//         console.log('====================================');
//         console.log(response.data.image_data);
//         console.log('====================================');
//         if (response) {
//           setImageUrl(response.data.image_data);
//         } else {
//           setMessage("Image not found.");
//         }
//       } catch (error) {
//         console.error("Error fetching image:", error.response?.data || error.message);
//         setMessage("Error loading image.");
//       }
//     };

//     fetchImage();
//   }, [userId]);

//   return (
//     <div>
//       {imageUrl ? (
//         <img src={imageUrl} alt="User profile" style={{ width: '300px', height: '300px' }} />
//       ) : (
//         <p>{message || "Loading image..."}</p>
//       )}
//     </div>
//   );
// };

// export default DisplayImage;



// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const DisplayImage = ({ userId }) => {
//   const [imageUrl, setImageUrl] = useState("");
//   const [message, setMessage] = useState("");

//   useEffect(() => {
//     const fetchImage = async () => {
//       try {
//         const response = await axios.get(
//           `http://127.0.0.1:5001/chart/gettingimage/12938240/klizer-3.jpg`
//         );

//         if (response.data.image_data) {
//           setImageUrl(response.data.image_data); // Set base64 image URL
//         } else {
//           setMessage("Image not found.");
//         }
//       } catch (error) {
//         console.error("Error fetching image:", error.response?.data || error.message);
//         setMessage("Error loading image.");
//       }
//     };

//     fetchImage();
//   }, [userId]);

//   return (
//     <div>
//       {imageUrl ? (
//         <img src={imageUrl} alt="User profile" style={{ width: "300px", height: "300px" }} />
//       ) : (
//         <p>{message || "Loading image..."}</p>
//       )}
//     </div>
//   );
// };

// export default DisplayImage;



import React, { useState, useEffect } from "react";
import axios from "axios";

const DisplayImage = ({ userId }) => {
  const [imageUrl, setImageUrl] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await axios.get(`https://org.klizer.co/chart/get/c0ae5a46b7`, {
          headers: {
            Authorization: "Bearer 2dce55cfd5cf1570158b81e92297d1b209713",
            "User-Token":
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJraXNob3JlQGdtYWlsLmNvbSIsImlkIjoiNjc3ZGY4YmY0NTc5NDZhMGJkZGJmYjBmIiwiZXhwIjoxNzM2MzExOTI3fQ.GgFffTDvjOnQ60PXzOGxShnbiyeg6u0qCsxB8gtrq2c",
          },
        });
        console.log('====================================');
        console.log(response.data?.data?.chart?.person?.img_url);
        console.log('====================================');

        if (response.data?.data?.chart?.person?.img_url) {
          setImageUrl(response.data.data.chart.person.img_url); // Set the image URL
        } else {
          setMessage("Image not found.");
        }
      } catch (error) {
        console.error("Error fetching image:", error.response?.data || error.message);
        setMessage("Error loading image.");
      }
    };

    fetchImage();
  }, [userId]);

  return (
    <div>
      {imageUrl ? (
        <img src={imageUrl} alt="User profile" style={{ width: "300px", height: "300px" }} />
      ) : (
        <p>{message || "Loading image..."}</p>
      )}
    </div>
  );
};

export default DisplayImage;



// import React, { useRef } from 'react';
// import html2canvas from 'html2canvas';

// const HtmlToImage = () => {
//   const divRef = useRef(null); 

//   // Function to capture HTML as image
//   const captureImage = () => {
//     html2canvas(divRef.current) // Capture the div referenced by divRef
//       .then((canvas) => {
//         // /get 

//         // Convert canvas to image
//         const img = canvas.toDataURL('image/png');
        
//         // Create a download link and trigger it for downloading
//         const link = document.createElement('a');
//         link.href = img;
//         link.download = 'captured-image.png'; // File name for the image
//         link.click();
//       })
//       .catch((err) => {
//         console.error('Error capturing image:', err);
//       });
//   };


//   return (
//     <div>
//       <h1>Convert HTML to Image in React</h1>
      
//       {/* HTML content to be captured */}
//       <div 
//         ref={divRef} 
//         style={{ padding: '20px', backgroundColor: '#f0f0f0', borderRadius: '10px' }}
//       >
//         <img
//                         // src={node?.person?.img_url}
//                         src={"https://dckapmedia.zircly.com/klizer.zircly.com/avatar/787ba62a-a07f-4317-89fb-000b39f5e88f.jpg"}
//                         alt=""
//                         className="w-[40px] h-[40px] rounded-[50%] object-contain"
//                       />
//         <h2>This is the content to capture</h2>
//         <p>This content will be converted into an image when you click the button below.</p>
//         <button style={{ padding: '10px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px' }}>
//           Click Me
//         </button>
//       </div>

//       {/* Button to trigger the image capture */}
//       <button onClick={captureImage} style={{ marginTop: '20px', padding: '10px', backgroundColor: '#007BFF', color: 'white', border: 'none', borderRadius: '5px' }}>
//         Capture as Image
//       </button>
//     </div>
//   );
// };

// export default HtmlToImage;
