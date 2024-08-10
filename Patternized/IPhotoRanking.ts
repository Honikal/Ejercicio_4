export interface IPhotoRanking {
    //Creamos una interfaz conectada con aggregation a la interfaz IPhotoApiAdapter
    //ésta se encargará de establecer los métodos o algoritmos de orden a cualquiera de las fotos
    rankPhotos(photos: any[]): any[];
}