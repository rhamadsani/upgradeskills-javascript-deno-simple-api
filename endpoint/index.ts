
import {endpoint} from './enpoint.ts';

export const GetEmiten =  (type: string) => {

    return endpoint+'/GetEmiten?type='+type;
}