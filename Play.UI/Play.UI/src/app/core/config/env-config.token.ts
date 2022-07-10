import { InjectionToken } from "@angular/core";
import { IEnvConfig } from "src/environments/environment.inteface";

export const ENV_CONFIG = new InjectionToken<IEnvConfig>('envConfig');