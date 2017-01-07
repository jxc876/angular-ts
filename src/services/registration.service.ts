import { resource } from 'angular';

interface RegistrationResponse {
    message: string
}

interface IRegistrationService extends resource.IResource<RegistrationResponse> {
    message: string
}

export interface RegistrationResource extends resource.IResourceClass<IRegistrationService> {
}

export function registrationService($resource: resource.IResourceService){
    const URL: string = 'http://localhost:9292/api/register';
    const PARAM_DEFAULTS = {};
    const ACTIONS = {};
    const OPTIONS = {};
    const REGISTRATION_RESOURCE = $resource<IRegistrationService>(URL, PARAM_DEFAULTS, ACTIONS, OPTIONS)
    return REGISTRATION_RESOURCE;
}
