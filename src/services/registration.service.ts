export function registrationService($resource){
    const URL: string = 'http://localhost:9292/api/register';
    const PARAM_DEFAULTS = {};
    const ACTIONS = {};
    const OPTIONS = {};

    const REGISTRATION_RESOURCE = $resource(URL, PARAM_DEFAULTS, ACTIONS, OPTIONS)
    return REGISTRATION_RESOURCE;
}
