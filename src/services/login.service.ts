import { resource } from 'angular';
import { API_URL } from './config'

interface Login {
    username: string,
    token: string
}

interface ILoginService extends resource.IResource<Login> {
}

export interface LoginResource extends resource.IResourceClass<ILoginService> {
}

export function loginService($resource: resource.IResourceService){
    const URL: string = `${API_URL}/login`;
    const PARAM_DEFAULTS = {};
    const ACTIONS = {};
    const OPTIONS = {};
    const REGISTRATION_RESOURCE = $resource<ILoginService>(URL, PARAM_DEFAULTS, ACTIONS, OPTIONS)
    return REGISTRATION_RESOURCE;
}
