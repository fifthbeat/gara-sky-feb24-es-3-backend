import { FastifyReply, FastifyRequest } from "fastify";

export async function authenticate(req: FastifyRequest, reply: FastifyReply) {
  const authHeader = req.headers["authorization"];

  console.log("authHeader", authHeader);

  if (!authHeader) {
    return reply.status(401).send({ error: "Authorization header is missing" });
  }

  const token = authHeader.split(" ")[1]; // Get the token from the header
  console.log("token", token);
  // Here you would typically verify the token
  // For example, using a library like jsonwebtoken
  // const decoded = jwt.verify(token, process.env.JWT_SECRET);

  // For demonstration, let's assume the token is valid if it's not empty
  if (!token) {
    return reply.status(401).send({ error: "Invalid token" });
  }

  // If you have user information in the token, you can attach it to the request
  // req.user = decoded;

  // Call next middleware or route handler
  return;
}
