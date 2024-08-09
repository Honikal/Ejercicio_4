import { createApi } form 'unsplash-js';

export class UnplashApi {
    //Extraemos la información como la API KEY
    private static unsplashApi = createApi({
        accessKey: "YOUR_UNSPLASH_API_KEY"
    });

    public static async searchPhotos(query: string): Promise<any> {
        //Hacemos llamada a la librería o nuestro unsplashApi llamado, para poder extraer las fotos
        const response = await this.unsplashApi.search.getPhotos( { query } );

        return response.response.results.map((photo: any) => ({
            ...photo,           //Pasamos la foto y sus datos como tal
            source: 'Unplash'   //Pasamos un indicador para mostrar que viene de Unplash 
        }));
    }
}
