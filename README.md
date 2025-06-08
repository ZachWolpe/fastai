# FastAI :)

This is a website for FastAI consulting with an integrated contact form using EmailJS.

## Setup Instructions

1. **Install Dependencies**
   ```bash
   npm init -y
   npm install express dotenv
   ```

2. **EmailJS Configuration**
   - Go to [EmailJS Dashboard](https://dashboard.emailjs.com/sign-up)
   - Sign up or log in to your account
   - Note: Your Gmail service ID is already configured as `EMAILJS_SERVICE_ID`
   - Create an email template:
     - Click on "Email Templates" in the dashboard
     - Create a new template
     - Use variables: `{{from_email}}`, `{{subject}}`, and `{{message}}`
     - Save and copy the template ID

3. **Environment Setup**
   - Create a `.env` file in the project root:
     ```
     EMAILJS_TEMPLATE_ID=your_template_id_here
     ```
   - Replace `'YOUR_PUBLIC_KEY'` in `index.html` with your EmailJS public key
     (Find this in your EmailJS dashboard under "Account" → "API Keys")

4. **Running the Server**
   ```bash
   node server.js
   ```
   The website will be available at `http://localhost:3000`

## Testing the Contact Form

1. Open `http://localhost:3000` in your browser
2. Fill out the contact form:
   - Email
   - Subject
   - Message
3. Click "Initialize Consultation()"
4. You should receive a confirmation message if successful

## Troubleshooting

If you encounter issues:
1. Check that all environment variables are set correctly
2. Verify your EmailJS account is properly configured
3. Check the browser console for any error messages
4. Ensure your Gmail account is properly connected in EmailJS

## File Structure
```
├── index.html         # Main website
├── server.js         # Express server
├── .env             # Environment variables (create this)
└── README.md        # This file
```

## Security Notes
- Never commit your `.env` file to version control
- The public key is meant to be public and can safely be in client-side code
- Template ID is kept secure in environment variables 