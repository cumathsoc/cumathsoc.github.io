import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library'

export default defineEventHandler<Promise<{status: 'ok' | 'error'; url: string, message: string}>>(async (event) => {
    const config = useRuntimeConfig(event);
    const query = getQuery(event);

    const { studentID } = query;

    const clientEmail = config.clientEmail;
    const privateKey = config.privateKey;
    const sheetId = config.googleSheetId;

    const jwt = new JWT({
        email: clientEmail,
        key: privateKey,
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const doc = new GoogleSpreadsheet(sheetId, jwt);
    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0];
    const rows = await sheet.getRows();

    const ids = rows.map(row => row.get('Student No. / Carleton I.D.'));

    if (ids.includes(studentID)) {
        return {
            status: 'ok',
            message: 'Welcome',
            url: config.youtubePlaylist
        }
    } else {
        return {
            status: 'error',
            url: '',
            message: 'You are not authorised to view this content.',
        }
    }
});