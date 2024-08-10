import { IPhotoApiAdapter } from "./IPhotoApiAdapter"
import { IPhotoRanking } from "./IPhotoRanking";
import { PixBayApiAdapter } from "./PixBayAdapter";
import { UnplashAdapter } from "./UnplashAdapter";


export class BromeliaPictInventory {
    private pixBayAdapter:   IPhotoApiAdapter;
    private unsplashAdapter: IPhotoApiAdapter;
    private rankingStrategy: IPhotoRanking;

    constructor(rankingStrategy: IPhotoRanking){
        this.pixBayAdapter = new PixBayApiAdapter();
        this.unsplashAdapter = new UnplashAdapter();
        this.rankingStrategy = rankingStrategy;
    }

    public async getTop10Photos(query: string, params?: any): Promise<any[]> {
        //Usamos el método de búsqueda con la idea de que sea igual en ambos casos        
        const pixPhotos = await this.pixBayAdapter.searchPhotos(query, params);
        const unsplashAdapter = await this.unsplashAdapter.searchPhotos(query, params);

        //Ordenamos todos los top 10 fotos con base al método de logaritmo implementado
        const fotos_cambiadas = this.rankPhotosResult(unsplashAdapter, pixPhotos).slice(0, 10);

        return fotos_cambiadas;
    }

    public rankPhotosResult(listaFotosUnplash, listaFotosPixBay) {
        listaFotosPixBay = this.rankingStrategy.rankPhotos(listaFotosPixBay);
        listaFotosUnplash = this.rankingStrategy.rankPhotos(listaFotosUnplash);

        return [...listaFotosPixBay, listaFotosUnplash]
    };

}