const Nexmo = require('nexmo');

// Replace with your Nexmo API Key and API Secret
const apiKey = '8086931942792abee99eca9f6d1abcae-b39b20f7-7c63-4139-8d06-1fb42f1a1de5';
const apiSecret = 'your_api_secret';

// Initialize Nexmo client
const nexmo = new Nexmo({ apiKey, apiSecret });

// Replace with your Nexmo virtual number (Sender ID) and recipient's phone number
const from = '+254791060859'; // Nexmo virtual number
const to = '+254781982191';

// Message to send
const text = 'Check out our latest product catalog at example.com/products';

// Send SMS
// Add this before sending the SMS
nexmo.message.sendSms(from, to, text, (err, responseData) => {
    if (err) {
        console.error('Error sending SMS:', err);
    } else {
        console.log('Response Data:', responseData); // Log the entire responseData object
        if (responseData.messages[0].status === '0') {
            console.log('SMS sent successfully.');
        } else {
            console.error(`SMS failed with error: ${responseData.messages[0]['error-text']}`);
        }
    }
});


