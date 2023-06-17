import truecallerjs from "truecallerjs";

async function searchTruecaller(query) {
  const search_data = {
    number: query,
    countryCode: "IN",
    installationId:
      process.env.TRUECALLER_IID,
  };

  const response = await truecallerjs.search(search_data);
  const result = response.json();
  return result.data[0];
}

export const truecal = searchTruecaller;