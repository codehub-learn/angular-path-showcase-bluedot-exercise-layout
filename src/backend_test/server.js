// server.js
// Run with: node server.js
// No dependencies, no database, in-memory only

const http = require("http");
const { URL } = require("url");

let bugs = [];
let nextId = 1;

// Simple in-memory request tracker
function createRequestLog(req, url) {
  return {
    timestamp: new Date().toISOString(),
    method: req.method,
    path: url.pathname,
    fullUrl: url.toString(),
    headers: req.headers,
    query: Object.fromEntries(url.searchParams.entries()),
    body: null,
    params: null
  };
}

function send(res, status, data) {
  res.writeHead(status, { "Content-Type": "application/json" });
  res.end(JSON.stringify(data));
}

// Note: This parseBody validates specifically for Bug payloads
function parseBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";

    req.on("data", chunk => {
      body += chunk;
    });

    req.on("end", () => {
      try {
        req.rawBody = body; // store raw body for logging

        const data = body ? JSON.parse(body) : {};

        const priorities = [1, 2, 3];
        const reporters = ["QA", "PO", "DEV"];
        const statuses = ["Ready for testing", "Done", "Rejected"];

        const {
          title,
          description,
          priority,
          reporter,
          status,
          comments
        } = data;

        // Required fields
        if (!title || priority == null || !reporter) {
          return reject("Missing title, priority or reporter");
        }

        if (!priorities.includes(priority)) {
          return reject("Invalid priority");
        }

        if (!reporters.includes(reporter)) {
          return reject("Invalid reporter");
        }

        // Dynamic status validation
        if (reporter === "QA") {
          if (!status) {
            return reject("Status is required when reporter is QA");
          }
          if (!statuses.includes(status)) {
            return reject("Invalid status");
          }
        }

        if (status && !statuses.includes(status)) {
          return reject("Invalid status");
        }

        // Comments validation
        if (comments !== undefined) {
          if (!Array.isArray(comments)) {
            return reject("Comments must be an array");
          }
          if (!comments.every(c => typeof c === "string")) {
            return reject("Each comment must be a string");
          }
        }

        resolve({
          title,
          description,
          priority,
          reporter,
          status,
          comments
        });

      } catch {
        reject("Invalid JSON");
      }
    });
  });
}

const server = http.createServer(async (req, res) => {
  // ---- CORS HEADERS ----
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // handle preflight request
  if (req.method === "OPTIONS") {
    res.writeHead(204);
    return res.end();
  }

  const url = new URL(req.url, `http://${req.headers.host}`);
  const path = url.pathname;
  const method = req.method;

  // ---- REQUEST TRACKER ENTRY ----
  const logEntry = createRequestLog(req, url);
  console.log("Incoming request:", logEntry);

  // POST /login
  if (method === "POST" && path === "/login") {
    try {
      // Read body inline to avoid the Bug validation in parseBody
      const bodyStr = await new Promise((resolve, reject) => {
        let body = "";
        req.on("data", chunk => body += chunk);
        req.on("end", () => resolve(body));
        req.on("error", reject);
      });

      const body = JSON.parse(bodyStr);
      logEntry.body = body;

      // Validate credentials
      if (body.username === "user" && body.password === "pass123") {
        // Simple mock JWT format for showcase (Header.Payload.Signature)
        const mockJwt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXIifQ.showcase_mock_signature";
        console.log("Completed request:", logEntry);
        return send(res, 200, { token: mockJwt });
      } else {
        console.log("Failed request:", logEntry);
        return send(res, 401, { message: "Invalid credentials" });
      }
    } catch (error) {
      console.log("Failed request:", logEntry);
      return send(res, 400, { message: "Invalid JSON" });
    }
  }

  // GET /bugs
  if (method === "GET" && path === "/bugs") {
    logEntry.params = {};
    return send(res, 200, bugs);
  }

  // GET /bugs/:id
  if (method === "GET" && path.startsWith("/bugs/")) {
    const id = Number(path.split("/")[2]);
    logEntry.params = { id };

    const bug = bugs.find(b => b.id === id);
    return bug
      ? send(res, 200, bug)
      : send(res, 404, { message: "Bug not found" });
  }

  // POST /bugs
  if (method === "POST" && path === "/bugs") {
    try {
      const body = await parseBody(req);
      logEntry.body = body;

      const bug = { id: nextId++, dateUpdated: new Date(), ...body };
      bugs.push(bug);

      console.log("Completed request:", logEntry);
      return send(res, 201, bug);

    } catch (error) {
      logEntry.body = req.rawBody;
      console.log("Failed request:", logEntry);

      return send(res, 400, { message: error });
    }
  }

  // PUT /bugs/:id
  if (method === "PUT" && path.startsWith("/bugs/")) {
    try {
      const id = Number(path.split("/")[2]);
      logEntry.params = { id };

      const body = await parseBody(req);
      logEntry.body = body;

      const index = bugs.findIndex(b => b.id === id);
      if (index === -1) {
        return send(res, 404, { message: "Bug not found" });
      }

      bugs[index] = { id, dateUpdated: new Date(), ...body };

      console.log("Completed request:", logEntry);
      return send(res, 200, bugs[index]);

    } catch (error) {
      logEntry.body = req.rawBody;
      console.log("Failed request:", logEntry);

      return send(res, 400, { message: error });
    }
  }

  // DELETE /bugs/:id
  if (method === "DELETE" && path.startsWith("/bugs/")) {
    const id = Number(path.split("/")[2]);
    logEntry.params = { id };

    const index = bugs.findIndex(b => b.id === id);
    if (index === -1) {
      console.log("Failed request:", logEntry);
      return send(res, 404, { message: "Bug not found" });
    }

    bugs.splice(index, 1);

    console.log("Completed request:", logEntry);
    return send(res, 204, {});
  }

  console.log("Unknown endpoint request:", logEntry);
  send(res, 404, { message: "Endpoint not found" });
});

server.listen(3000, () => {
  console.log("Bug API running on http://localhost:3000");
});