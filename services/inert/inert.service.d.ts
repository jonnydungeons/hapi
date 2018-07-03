import { HapiConfigInterface } from "../../hapi.module.config";
import { Server } from "hapi";
export declare class InertService {
    private server;
    private config;
    constructor(server: Server, config: HapiConfigInterface);
    OnInit(): void;
    register(): Promise<void>;
    registerInertPlugin(): Promise<void>;
}
