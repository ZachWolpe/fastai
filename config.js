// Load environment variables from .env file
require('dotenv').config();

// Export only the public configuration
const config = {
    emailjs: {
        serviceId: process.env.EMAILJS_SERVICE_ID,
        publicKey: process.env.EMAILJS_PUBLIC_KEY,
        templateId: process.env.EMAILJS_TEMPLATE_ID
    }
};

module.exports = config; 