import axios from 'axios';
import { IPhotoApiAdapter } from './IPhotoApiAdapter'

export class PixBayApiAdapter implements IPhotoApiAdapter {
    //Implementamos el adapter, éste en resumen usa o modifica los parámetros
    //de acuerdo al tipo de API que se use

    private static pixBayApiKey = 'YOUR_PIXBAY_API_KEY';

    public async searchPhotos(query: string, params?: any): Promise<any[]> {
        const defaultParams = {
            key: PixBayApiAdapter.pixBayApiKey,
            q: query,
            lang: params?.lang || 'en',
            image_type: params?.image_type || 'all',
            category: params?.category,
            safesearch: params?.safesearch || true,
            order: params?.order || true,
            colors: params?.colors,
            page: params?.page || 1,
            per_page: params?.per_page || 20
        }
        //En caso de no pasarse dichos parámetros, se toma los valores base

        const response = await axios.get(`https://pixabay.com/api/`, { params: defaultParams })
        return response.data.hits.map((photo: any) => ({
            id: photo.id,
            description: photo.tags,
            imageUrl: photo.largeImageURL,
            likes: photo.likes,
            views: photo.views
        }));
    }

}
