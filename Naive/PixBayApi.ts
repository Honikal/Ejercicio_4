import axios from 'axios';

export class PixBayApi{
    //Extraemos la API KEY o la pasamos por acá
    private static pixBayApiKey = 'YOUR_PIXBAY_API_KEY';

    public static async searchPhotos(query: string): Promise<any> {
        //Hacemos un axios.get para hacer la llamada y obtener las fotos de acuerdo al término
        const response = await axios.get(`https://pixabay.com/api/?key=${this.pixBayApiKey}&q=${query}`);

        //Retornamos con un valor extra para indicar que proviene de API
        return response.data.hits.map((photo: any) => ({
            ...photo,           //Pasamos la foto y sus datos como tal
            source: 'PixBay'    //Pasamos un indicador para mostrar que viene de PixBay 
        }))
    }

}
