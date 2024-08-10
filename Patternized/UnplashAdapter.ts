import { IPhotoApiAdapter } from './IPhotoApiAdapter'
import { createApi } form 'unsplash-js';

export class UnplashAdapter implements IPhotoApiAdapter {
    //Implementamos el adapter, éste en resumen usa o modifica los parámetros
    //de acuerdo al tipo de API que se use

    private static unplashApi = createApi({
        accessKey: 'YOUR_UNSPLASH_API_KEY'
    });

    public async searchPhotos(query: string, params?: any): Promise<any[]> {
        const defaultParams = {
            query: query,
            page: params?.page || 1,
            per_page: params?.per_page || 20,
            orientation: params?.orientation,
            color: params?.color,
            content_filter: params?.content_filter || 'low'
        };
        //En caso de no pasarse dichos parámetros, se toma los valores base

        const response = await UnplashAdapter.unplashApi.search.getPhotos(defaultParams);
        return response.data.hits.map((photo: any) => ({
            id: photo.id,
            description: photo.description || photo.alt_description,
            imageUrl: photo.urls.full,
            //source: 'Unsplash',
            likes: photo.likes,
            views: photo.views
        }));
    }

}
