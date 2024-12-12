"use server";

export type ActionStateProps = { error?: string; success?: boolean } | null;

export async function createRouteAction(state: any, formData: FormData) {
  const baseUrl = "http://localhost:3000";
  const { sourceId, destinationId } = Object.fromEntries(formData);
  console.log(sourceId, destinationId);

  const directionsResponse = await fetch(
    `${baseUrl}/directions?originId=${sourceId}&destinationId=${destinationId}`
  );

  if (!directionsResponse.ok) {
    return { error: "Failed to get directions" };
  }

  const directionsData = await directionsResponse.json();
  const startAddress = directionsData.routes[0].legs[0].start_address;
  const endAddress = directionsData.routes[0].legs[0].end_address;

  const response = await fetch(`${baseUrl}/routes`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: `${startAddress} - ${endAddress}`,
      source_id: directionsData.request.origin.placeId.replace("place_id:", ""),
      destination_id: directionsData.request.destination.placeId.replace(
        "place_id:",
        ""
      ),
    }),
  });

  if (!response.ok) {
    return { error: "Failed to create route" };
  }

  return { success: true };
}
