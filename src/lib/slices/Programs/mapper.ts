
import {Client, isFilled, type Content, type SliceMapper} from '@prismicio/client';
import type {ComponentProps} from 'svelte';
import Programs from './index.svelte';
import type { ProgramDocument } from '../../../prismicio-types';
type Context = {client: Client<Content.AllDocumentTypes>};
const mapper: SliceMapper<Content.ProgramsSlice, ComponentProps<Programs>, Context> = async ({
    slice,
    context
}) => {
    const {client} = context;
const programs = (
    await Promise.all(
        slice.primary.programs.map(async (program) => {
            if (isFilled.contentRelationship(program.program)) {
                return await client.getByID(program.program.id);
            }
        })
    )
).filter((program): program is ProgramDocument => program !== undefined);
return {
    slice,
    programs: programs
};
}    

export default mapper;