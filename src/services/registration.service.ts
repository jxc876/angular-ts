import { resource } from 'angular';
import { API_URL } from './config'

interface RegistrationResponse {
    message: string
}

interface IRegistrationService extends resource.IResource<RegistrationResponse> {
}

export interface RegistrationResource extends resource.IResourceClass<IRegistrationService> {
}

export function registrationService($resource: resource.IResourceService){
    const URL: string = `{API_URL}/register`;
    const PARAM_DEFAULTS = {};
    const ACTIONS = {};
    const OPTIONS = {};
    const REGISTRATION_RESOURCE = $resource<IRegistrationService>(URL, PARAM_DEFAULTS, ACTIONS, OPTIONS)
    return REGISTRATION_RESOURCE;
}
