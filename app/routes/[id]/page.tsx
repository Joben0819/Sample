import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        // Perform asynchronous operations here
        // For example, querying a database or calling an external API

        // Send a successful JSON response
        res.status(200).json({ message: 'Success' });
    } catch (error) {
        console.error('Error handling request:', error);

        // Handle internal server error and send response
        res.status(500).json({ error: 'Internal Server Error' });
    }
}