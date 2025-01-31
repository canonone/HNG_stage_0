# HNG Stage 0 Task - Public API

This project is a simple public API developed as part of the HNG Stage 0 task. It returns a JSON response containing a registered email address, the current datetime in ISO 8601 format, and the GitHub URL of the project's codebase.

---

## **Features**

- **Endpoint:** `GET /api/stage_0`
- **Response Format:** JSON
- **CORS Handling:** Enabled for all origins
- **Dynamic Datetime:** The `current_datetime` field is generated dynamically in ISO 8601 format (UTC).

---

## **Technologies Used**

- **Programming Language:** JavaScript
- **Framework:** Express.js
- **Middleware:** CORS (Cross-Origin Resource Sharing)
- **Version Control:** GitHub

---

## **API Documentation**

### **Endpoint**

- **URL:** `GET /api/stage_0`
- **Method:** `GET`

### **Response Format**

```json
{
  "email": "umohchristian001@gmail.com",
  "current_datetime": "2023-10-05T12:34:56.789Z",
  "github_url": "https://github.com/yourusername/your-repo"
}
```

## Getting Started

### Prerequisites

Ensure you have the following installed on your local machine:

- Node.js (v16 or later)
- npm (Node Package Manager)

### Installation and Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/canonone/HNG_stage_0
   ```
2. Navigate to the project directory:
   ```sh
   cd your-repo
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the server:
   ```sh
   npm start
   ```
5. The API will be running at:
   ```sh
   http://localhost:3000
   ```

## Deployment

The API is deployed and can be accessed at:

- **Live URL:** https://hng-stage-0-henna.vercel.app/

## Example Usage

You can test the API using Postman, Curl, or directly in your browser:

```sh
curl http://localhost:3000/api/stage_0
```

## Related Links

For more information on Node.js development, visit:

- [Hire Node.js Developers](https://hng.tech/hire/nodejs-developers)

## License

This project is open-source and available under the [MIT License](LICENSE).

---
