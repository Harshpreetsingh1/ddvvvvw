import { HttpLibrary, RequestContext, ResponseContext, ZstdCompressorCallback } from "./http";
export declare class IsomorphicFetchHttpLibrary implements HttpLibrary {
    debug: boolean;
    zstdCompressorCallback: ZstdCompressorCallback | undefined;
    enableRetry: boolean;
    maxRetries: number;
    backoffBase: number;
    backoffMultiplier: number;
    fetch: any;
    send(request: RequestContext): Promise<ResponseContext>;
    private executeRequest;
    private sleep;
    private shouldRetry;
    private calculateRetryInterval;
    private logRequest;
    private logResponse;
}
