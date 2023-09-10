import { NextApiRequest, NextApiResponse } from 'next';

export default async function index(req: NextApiRequest, res: NextApiResponse) {
  try {

    res.json('responseData');
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'An error occurred while fetching data' });
  }
}
// import React from 'react'

// function index({params}: any) {
//   console.warn(params)
  
//   return (
//     <div>index</div>
//   )
// }

// export default index