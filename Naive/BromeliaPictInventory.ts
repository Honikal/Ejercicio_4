import { PixBayApi }  from './PixBayApi'
import { UnplashApi } from './UnplashApi'

export class BromeliaPictInventory {
    public static async getTop10Photos(query: string): Promise<any[]> {
        //Extraemos todas las fotos de ambas API
        const pixPhotos     = PixBayApi.searchPhotos(query);
        const unplashPhotos = UnplashApi.searchPhotos(query);

        //Introducimos todas las fotos dentro de un solo array
        const everyPhoto = [...pixPhotos, ...unplashPhotos];

        //Utilizamos la función de sort para ordenar las mejores fotos de ambos grupos en total
        const top10Photos = everyPhoto.sort((a, b) => {
            if (a.source === 'PixBay'){
                //Utilizamos acá dentro los métodos de orden interno que use PixBay para calificar sus fotos
            } else if (a.source === 'Unplash'){
                //Utilizamos acá dentro los métodos de orden interno que usa Unplash para calificar sus fotos
            }

            //Finalmente terminamos de acomodar cada uno de los valores con base al método de orden
        }).slice(0, 10);
    }

    /*
    public async selectPhotoIcons(req: Request, res: Response): void {
        try {

        }catch (error) {    
            res.status(500).json({ error: 'Internal Error Selecting Photos' });
            throw error;
        }
    }
    */

}