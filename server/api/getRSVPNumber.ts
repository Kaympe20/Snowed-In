export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig();

    const response: {records: [id: string]} = await (await fetch(`${config.airtableURL}`, {
        headers: {
            "Authorization": `Bearer ${config.airtableKey}`
        }
    })).json()

    return response.records.length;
})