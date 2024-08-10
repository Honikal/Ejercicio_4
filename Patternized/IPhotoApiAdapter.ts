export interface IPhotoApiAdapter {
    //Creamos la interfaz con la función común entre ambas API, recibiendo un query y los parámetros
    searchPhotos(query: string, params?: any): Promise<any[]>; 
}