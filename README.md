# Mailing Service

A lightweight Node.js REST API that sends emails using [Nodemailer](https://nodemailer.com/) and Gmail. It exposes a single HTTP endpoint that accepts a recipient email address and immediately delivers a message to it.

## Tech Stack

| Package | Purpose |
|---|---|
| [Express](https://expressjs.com/) | HTTP server / routing |
| [Nodemailer](https://nodemailer.com/) | Email delivery |
| [CORS](https://www.npmjs.com/package/cors) | Cross-Origin Resource Sharing middleware |

## Prerequisites

- Node.js v18 or later
- A Gmail account with a [Gmail App Password](https://support.google.com/accounts/answer/185833) (required when 2-Step Verification is enabled)

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Himalay-NRHS/mailing-service-gist.git
cd mailing-service-gist
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure your Gmail credentials

Open `index.js` and replace the placeholder values with your own Gmail address and App Password:

```js
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "your-email@gmail.com", // Your Gmail address
    pass: "your-app-password",    // Your Gmail App Password
  },
});
```

> **Security tip:** Avoid hard-coding credentials. Consider using environment variables (e.g. via `dotenv`) and adding a `.env` file to `.gitignore`.

### 4. Start the server

```bash
node index.js
```

The server starts on port **3000**:

```
Server running on port 3000
```

## API Reference

### Send an email

**POST** `/bookings`

Sends a test email to the specified recipient.

#### Request

| Field | Type | Required | Description |
|---|---|---|---|
| `email` | string | ✅ | Recipient email address |

```bash
curl -X POST http://localhost:3000/bookings \
  -H "Content-Type: application/json" \
  -d '{"email": "recipient@example.com"}'
```

#### Responses

| Status | Body | Description |
|---|---|---|
| `200 OK` | `Email sent successfully` | Email was delivered |
| `400 Bad Request` | `Email is required` | The `email` field was missing |
| `500 Internal Server Error` | `Failed to send email` | Nodemailer encountered an error |

## Project Structure

```
mailing-service-gist/
├── index.js        # Express server and email logic
├── package.json    # Project metadata and dependencies
└── README.md       # Project documentation
```
