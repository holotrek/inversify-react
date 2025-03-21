import { interfaces } from 'inversify';
/**
 * Resolves container or something from container (if you specify resolving function)
 */
export declare function useContainer(): interfaces.Container;
export declare function useContainer<T>(resolve: (container: interfaces.Container) => T): T;
/**
 * Resolves injection by id (once, at first render).
 */
export declare function useInjection<T>(serviceId: interfaces.ServiceIdentifier<T>): T;
export declare function useOptionalInjection<T, D>(serviceId: interfaces.ServiceIdentifier<T>, resolveDefault: (container: interfaces.Container) => D): T | D;
export declare function useOptionalInjection<T>(serviceId: interfaces.ServiceIdentifier<T>): T | undefined;
/**
 * uses container.getAll(), works like @multiInject()
 * https://github.com/inversify/InversifyJS/blob/master/wiki/container_api.md#containergetall
 * https://github.com/inversify/InversifyJS/blob/master/wiki/multi_injection.md
 */
export declare function useAllInjections<T>(serviceId: interfaces.ServiceIdentifier<T>): readonly T[];
/**
 * uses container.getNamed(serviceIdentifier, named)
 * https://github.com/inversify/InversifyJS/blob/master/wiki/container_api.md#containergetnamedtserviceidentifier-interfacesserviceidentifiert-named-string--number--symbol-t
 * https://github.com/inversify/InversifyJS/blob/master/wiki/named_bindings.md
 */
export declare function useNamedInjection<T>(serviceId: interfaces.ServiceIdentifier<T>, named: string | number | symbol): T;
/**
 * uses container.getTagged(serviceIdentifier, key, value)
 * https://github.com/inversify/InversifyJS/blob/master/wiki/container_api.md#containergettaggedtserviceidentifier-interfacesserviceidentifiert-key-string--number--symbol-value-unknown-t
 * https://github.com/inversify/InversifyJS/blob/master/wiki/tagged_bindings.md
 */
export declare function useTaggedInjection<T>(serviceId: interfaces.ServiceIdentifier<T>, key: string | number | symbol, value: unknown): T;
