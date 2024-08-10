import { IPhotoRanking } from "./IPhotoRanking";

export class MostLikedRanking implements IPhotoRanking {
    rankPhotos(photos: any[]): any[] {
        //Calculamos una lista ordenada de todas las fotos, seleccionadas con mayor like a menor like
        return photos.sort((a, b) => b.likes - a.likes);
    }
}

export class MostViewedRanking implements IPhotoRanking {
    rankPhotos(photos: any[]): any[] {
        //Calculamos una lista ordenada de todas las fotos, seleccionadas desde más vistas a menos vistas
        return photos.sort((a, b) => b.views - a.views);
    }
}
