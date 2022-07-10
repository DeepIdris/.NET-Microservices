export interface IEnvConfig {
    endpoints: {
        catalogServiceUrl: string;
        inventoryServiceUrl: string;
        rabbitMqUrl: string;
    }
}

export interface Environment {
    production: boolean;
    config: IEnvConfig;
}