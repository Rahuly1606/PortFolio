# Setting Up EmailJS for Your Contact Form

To make your contact form actually send emails to your Gmail account, follow these steps to set up EmailJS:

## 1. Create an EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/) and sign up for a free account
2. The free tier allows 200 emails per month, which should be sufficient for a personal portfolio

## 2. Create an Email Service

1. Once logged in, go to the "Email Services" tab
2. Click "Add New Service"
3. Select "Gmail" as your service provider
4. Follow the instructions to connect your Gmail account
5. Give your service a name (e.g., "portfolio_contact")
6. Note down the **Service ID** that's generated

## 3. Create an Email Template

1. Go to the "Email Templates" tab
2. Click "Create New Template"
3. Design your email template with the following variables:
   - `{{from_name}}` - The name of the person contacting you
   - `{{from_email}}` - The email address of the person contacting you
   - `{{message}}` - The message content
   - `{{to_name}}` - Your name (Rahul Kumar)
4. Set the subject line (e.g., "New Contact from Portfolio: {{from_name}}")
5. Save the template
6. Note down the **Template ID** that's generated

## 4. Get Your Public Key

1. Go to the "Account" tab
2. Find your **Public Key** in the API keys section

## 5. Update Your Code

Open `frontend/src/components/Footer.jsx` and replace the placeholder values with your actual EmailJS credentials:

```jsx
// Replace these with your actual EmailJS credentials
const serviceId = 'YOUR_EMAILJS_SERVICE_ID';  // e.g., 'portfolio_contact'
const templateId = 'YOUR_EMAILJS_TEMPLATE_ID'; // e.g., 'template_abc123'
const publicKey = 'YOUR_EMAILJS_PUBLIC_KEY';   // e.g., 'user_abc123'
```

## 6. Test Your Contact Form

After updating the credentials, test your contact form by:
1. Running your portfolio website locally
2. Filling out the contact form
3. Submitting the form
4. Checking your Gmail inbox for the received message

## Troubleshooting

If emails aren't being received:
1. Check the browser console for any errors
2. Verify your EmailJS credentials are correct
3. Make sure your Gmail account is properly connected to EmailJS
4. Check your spam folder
5. Verify you haven't exceeded the free tier limits (200 emails/month)

## Security Note

The public key is designed to be used in client-side code, but be aware that anyone with these credentials could potentially send emails through your account up to your monthly limit. For a personal portfolio, this is typically an acceptable risk, but for higher-security applications, you might want to implement a server-side solution. 