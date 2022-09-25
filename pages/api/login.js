// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const access_token = "MTQ0NjJkZmQ5OTM2NDE1ZTZjNGZmZjI3";
  res.setHeader(
    "set-cookie",
    `access_token=${access_token}; path=/; samesite=lax; httponly;`
  );

  res.status(200).json({
    access_token,
    token_type: "Bearer",
    expires_in: 3600,
    refresh_token: "IwOGYzYTlmM2YxOTQ5MGE3YmNmMDFkNTVk",
  });
}
