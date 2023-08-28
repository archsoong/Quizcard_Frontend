import excuteQuery from './db';

export async function getCards({ }) { 
    try {
        const results = await excuteQuery({
            query: 'SELECT id, title, content FROM cards',
        });

        console.log(results);
    } catch ( error ) {
        console.log( error );
    }

    return {results && results.map(result =>
        <tr key={result.id}>
            <td>{result.title}</td>
            <td>{result.content}</td>
        </tr>
    )}
}