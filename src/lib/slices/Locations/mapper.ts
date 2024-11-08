
import {Client, isFilled, type Content, type SliceMapper} from '@prismicio/client';
import type {ComponentProps} from 'svelte';
import Locations from './index.svelte';
import type { LocationDocument } from '../../../prismicio-types';
type Context = {client: Client<Content.AllDocumentTypes>};
const mapper: SliceMapper<Content.LocationsSlice, ComponentProps<Locations>, Context> = async ({
    slice,
    context
}) => {
    const {client} = context;
const locations = (
    await Promise.all(
        slice.primary.locations.map(async (location) => {
            if (isFilled.contentRelationship(location.location)) {
                return await client.getByID(location.location.id);
            }
        })
    )
).filter((location): location is LocationDocument => location !== undefined);
return {
    slice,
    locations: locations
};
}    

export default mapper;