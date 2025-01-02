import { Client } from "@microsoft/microsoft-graph-client";
import { TokenCredentialAuthenticationProvider } from "@microsoft/microsoft-graph-client/authProviders/azureTokenCredentials";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { accessToken, bookingData } = req.body;

    const client = Client.init({
      authProvider: (done) => {
        done(null, accessToken);
      },
    });

    try {
      const response = await client.api("/solutions/bookingBusinesses/{businessId}/appointments")
        .post(bookingData);

      res.status(200).json(response);
    } catch (error) {
      res.status(500).json({ error: "Error creating booking", details: error });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
